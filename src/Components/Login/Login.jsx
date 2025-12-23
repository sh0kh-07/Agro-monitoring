import React, { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Alert } from "../../utils/Alert";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // 🔐 Локальные пользователи
  const users = [
    {
      username: "admin",
      password: "123456",
      role: "ADMIN",
      redirect: "/tuman/province",
    },
    {
      username: "boyovut",
      password: "123456",
      role: "SELLER",
      redirect: "/hudud",
    },
  ];

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (!user) {
        Alert("Login yoki parol noto‘g‘ri", "error");
        setLoading(false);
        return;
      }

      // ⬇️ сохраняем как будто токен
      localStorage.setItem("token", "FAKE_TOKEN_123");
      localStorage.setItem("role", user.role);

      Alert("Muvaffaqiyatli kirildi", "success");
      navigate(user.redirect);
      setLoading(false);
    }, 500); // имитация загрузки
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-gray-800 px-2">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Login</h1>
          <p className="mt-2 text-sm text-gray-300">
            Kirish uchun ma'lumotlarni kiriting
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm text-gray-200 mb-1">Login</label>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-white/20 text-white"
              crossOrigin={undefined}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-200 mb-1">Parol</label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                className="bg-white/20 text-white"
                crossOrigin={undefined}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </button>
            </div>
          </div>

          <Button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-white text-black font-bold py-3 rounded-xl"
          >
            {loading ? "Yuklanmoqda..." : "Kirish"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
