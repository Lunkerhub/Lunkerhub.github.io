const http=require('http'),fs=require('fs'),path=require('path'),crypto=require('crypto');
let nodemailer=null;try{nodemailer=require('nodemailer')}catch(e){}
const E=process.env,PORT=E.PORT||3000,PUB=path.join(__dirname,'public');
const LOG=path.join(__dirname,'acc.txt'),TIERS=path.join(__dirname,'tiers.json');
const ADMIN_LOGIN=E.ADMIN_LOGIN||'SecondSmp',ADMIN_PASS=E.ADMIN_PASS||'Admin';
const T=['HT1','LT1','HT2','LT2','HT3','LT3','HT4','LT4','HT5','LT5'];
const h=s=>crypto.createHash('sha256').update(String(s)).digest();
const same=(a,b)=>crypto.timingSafeEqual(h(a),h(b));
function log(action,info){fs.appendFileSync(LOG,`${new Date().toISOString()} | ${action} | ${info}\n`)}
// аккаунты восстанавливаются из acc.txt (строки REGISTER)
const users=new Set();
if(fs.existsSync(LOG))for(const l of fs.readFileSync(LOG,'utf8').split('\n')){const p=l.split(' | ');if(p[1]==='REGISTER')users.add(p[2].split(' ')[0])}
const codes=new Map(),sessions=new Map();
const mailer=nodemailer&&E.SMTP_HOST?nodemailer.createTransport({host:E.SMTP_HOST,port:+(E.SMTP_PORT||465),secure:(E.SMTP_PORT||465)==465,auth:{user:E.SMTP_USER,pass:E.SMTP_PASS}}):null;
let tiers={modes:['Vanilla','Sword','Axe','Mace','Pot','NethPot','Crystal','SMP','UHC','Elytra'],players:[]};
try{tiers=JSON.parse(fs.readFileSync(TIERS,'utf8'))}catch(e){}
function clean(b){
 if(!b||!Array.isArray(b.modes)||!Array.isArray(b.players))return null;
 const modes=[...new Set(b.modes.map(m=>String(m).trim().slice(0,16)).filter(m=>m&&m!=='Общий'))].slice(0,30);
 const players=b.players.slice(0,2000).map(p=>{const t={};for(const m of modes)if(p&&p.t&&T.includes(p.t[m]))t[m]=p.t[m];return{n:String(p&&p.n||'').trim(),t}}).filter(p=>/^[A-Za-z0-9_ .\-]{3,20}$/.test(p.n));
 return{modes,players};
}
function send(res,code,obj){res.writeHead(code,{'Content-Type':'application/json; charset=utf-8'});res.end(JSON.stringify(obj))}
function body(req){return new Promise(r=>{let s='';req.on('data',c=>{s+=c;if(s.length>2e5)req.destroy()});req.on('end',()=>{try{r(JSON.parse(s||'{}'))}catch(e){r({})}})})}
const sess=req=>sessions.get((req.headers.authorization||'').replace('Bearer ',''));
const mk=(role,extra)=>{const token=crypto.randomBytes(24).toString('hex');sessions.set(token,{role,...extra});return token};
http.createServer(async(req,res)=>{
 const ip=req.socket.remoteAddress,url=req.url.split('?')[0];
 if(url.startsWith('/api/')){
  const b=req.method==='POST'?await body(req):{},s=sess(req);
  if(url==='/api/tiers'&&req.method==='GET')return send(res,200,tiers);
  if(url==='/api/tiers'){
   if(!s||s.role!=='admin'){log('TIERS_DENIED',ip);return send(res,403,{error:'Нет доступа'})}
   const c=clean(b);if(!c)return send(res,400,{error:'Неверные данные'});
   tiers=c;fs.writeFileSync(TIERS,JSON.stringify(c));log('TIERS_UPDATE',`${s.login} players=${c.players.length} modes=${c.modes.length}`);return send(res,200,{ok:1});
  }
  if(url==='/api/me')return s?send(res,200,s):send(res,401,{});
  if(url==='/api/logout'){sessions.delete((req.headers.authorization||'').replace('Bearer ',''));if(s)log('LOGOUT',s.email||s.login);return send(res,200,{ok:1})}
  if(url==='/api/code'){
   const email=String(b.email||'').trim().toLowerCase();
   if(!/^[^\s@]{1,64}@[^\s@]{1,100}\.[^\s@]{2,}$/.test(email))return send(res,400,{error:'Введите настоящую почту'});
   const old=codes.get(email);if(old&&Date.now()-old.at<60000)return send(res,429,{error:'Код уже отправлен. Подождите минуту.'});
   const code=String(crypto.randomInt(100000,1000000));codes.set(email,{code,at:Date.now(),tries:0});
   try{
    if(mailer)await mailer.sendMail({from:E.SMTP_FROM||E.SMTP_USER,to:email,subject:'Код для входа на Second SMP',text:`Ваш код: ${code}\nОн действует 10 минут. Если это были не вы, просто проигнорируйте письмо.`});
    else console.log(`[DEV] SMTP не настроен. Код для ${email}: ${code}`);
    log('CODE_SENT',`${email} ${ip}`);return send(res,200,{ok:1});
   }catch(e){log('CODE_ERROR',`${email} ${e.message}`);return send(res,500,{error:'Не удалось отправить письмо'})}
  }
  if(url==='/api/verify'){
   const email=String(b.email||'').trim().toLowerCase(),c=codes.get(email);
   if(!c||Date.now()-c.at>6e5||c.tries>=5){log('VERIFY_FAIL',`${email} ${ip}`);return send(res,400,{error:'Код устарел. Запросите новый.'})}
   if(!same(c.code,b.code)){c.tries++;log('VERIFY_FAIL',`${email} ${ip}`);return send(res,400,{error:'Неверный код'})}
   codes.delete(email);
   if(!users.has(email)){users.add(email);log('REGISTER',`${email} ${ip}`)}
   log('LOGIN',`${email} ${ip}`);return send(res,200,{token:mk('user',{email}),role:'user',email});
  }
  if(url==='/api/admin'){
   if(same(b.login||'',ADMIN_LOGIN)&&same(b.password||'',ADMIN_PASS)){log('ADMIN_LOGIN',`${ADMIN_LOGIN} ${ip}`);return send(res,200,{token:mk('admin',{login:ADMIN_LOGIN}),role:'admin',login:ADMIN_LOGIN})}
   log('ADMIN_FAIL',`${String(b.login||'').slice(0,30)} ${ip}`);return send(res,401,{error:'Неверный логин или пароль'});
  }
  return send(res,404,{error:'Не найдено'});
 }
 const f=path.join(PUB,url==='/'?'index.html':path.normalize(url).replace(/^(\.\.[\/\\])+/,''));
 if(!f.startsWith(PUB)||!fs.existsSync(f)||fs.statSync(f).isDirectory()){res.writeHead(404);return res.end('Not found')}
 res.writeHead(200,{'Content-Type':f.endsWith('.html')?'text/html; charset=utf-8':'application/octet-stream'});fs.createReadStream(f).pipe(res);
}).listen(PORT,()=>console.log('Second SMP: http://localhost:'+PORT));
