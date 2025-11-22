import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { SiTelegram } from "react-icons/si";

interface AuthScreenProps {
  onLogin: (username: string, password: string) => void;
}

export default function AuthScreen({ onLogin }: AuthScreenProps) {
  const [mode, setMode] = useState<"select" | "login" | "register">("select");
  const [code, setCode] = useState("");
  const [credentials, setCredentials] = useState<{ username: string; password: string } | null>(null);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });

  const handleRegisterWithCode = () => {
    const generatedUsername = `user_${Math.random().toString(36).substr(2, 9)}`;
    const generatedPassword = Math.random().toString(36).substr(2, 12);
    setCredentials({ username: generatedUsername, password: generatedPassword });
  };

  const handleLoginSubmit = () => {
    onLogin(loginForm.username, loginForm.password);
  };

  if (mode === "select") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl font-semibold">Добро пожаловать</CardTitle>
            <CardDescription>Выберите способ входа в систему</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              data-testid="button-register"
              className="w-full h-12"
              onClick={() => setMode("register")}
            >
              <SiTelegram className="w-5 h-5 mr-2" />
              Регистрация через Telegram
            </Button>
            <Button
              data-testid="button-login"
              variant="outline"
              className="w-full h-12"
              onClick={() => setMode("login")}
            >
              Вход с логином и паролем
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Для регистрации используйте Telegram бота @YourBot
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (mode === "register") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Регистрация</CardTitle>
            <CardDescription>Введите код из Telegram бота</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {!credentials ? (
              <>
                <div className="space-y-2">
                  <Label htmlFor="code">Код регистрации</Label>
                  <Input
                    id="code"
                    data-testid="input-code"
                    type="text"
                    placeholder="148888"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="text-2xl font-mono tracking-widest text-center"
                    maxLength={6}
                  />
                </div>
                <Button
                  data-testid="button-submit-code"
                  className="w-full h-12"
                  onClick={handleRegisterWithCode}
                  disabled={code.length !== 6}
                >
                  Подтвердить код
                </Button>
                <Button
                  data-testid="button-back"
                  variant="ghost"
                  className="w-full"
                  onClick={() => setMode("select")}
                >
                  Назад
                </Button>
              </>
            ) : (
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-md space-y-3">
                  <div>
                    <Label className="text-xs uppercase tracking-wide text-muted-foreground">Логин</Label>
                    <p className="font-mono text-sm mt-1" data-testid="text-username">{credentials.username}</p>
                  </div>
                  <div>
                    <Label className="text-xs uppercase tracking-wide text-muted-foreground">Пароль</Label>
                    <p className="font-mono text-sm mt-1" data-testid="text-password">{credentials.password}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Сохраните эти данные. Они также отправлены вам в Telegram.
                </p>
                <Button
                  data-testid="button-continue"
                  className="w-full h-12"
                  onClick={() => onLogin(credentials.username, credentials.password)}
                >
                  Продолжить
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Вход</CardTitle>
          <CardDescription>Введите свои учетные данные</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Логин</Label>
            <Input
              id="username"
              data-testid="input-username"
              type="text"
              value={loginForm.username}
              onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Пароль</Label>
            <Input
              id="password"
              data-testid="input-password"
              type="password"
              value={loginForm.password}
              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
            />
          </div>
          <Button
            data-testid="button-login-submit"
            className="w-full h-12"
            onClick={handleLoginSubmit}
          >
            Войти
          </Button>
          <Button
            data-testid="button-back-login"
            variant="ghost"
            className="w-full"
            onClick={() => setMode("select")}
          >
            Назад
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
