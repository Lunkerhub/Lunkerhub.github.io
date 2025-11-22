import AuthScreen from '../AuthScreen';

export default function AuthScreenExample() {
  return (
    <AuthScreen 
      onLogin={(username, password) => {
        console.log('Login:', username, password);
      }}
    />
  );
}
