import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock, Loader2 } from "lucide-react";
import "./login.css";
import gerb from "../../Images/uzb.png"

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fakeUser = {
    username: "admin1",
    password: "1234",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (
        username === fakeUser.username &&
        password === fakeUser.password
      ) {
        navigate("/hudud");
      } else {
        setError("Foydalanuvchi nomi yoki parol noto‘g‘ri");
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="light-bg">
      <div className="light-card">
        {/* Header */}
        <div className="light-header">
          <div className="gerb-placeholder">
            <img src={gerb} alt="" />
          </div>
          <h1>
            Qishloq xo‘jaligi boshqaruv
            <br />
            axborot tizimi
          </h1>
          <span className="portal-sub">
            Davlat axborot resursi
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="light-form">
          <label>
            Foydalanuvchi nomi
            <div className="input-wrap">
              <User size={18} />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </label>

          <label>
            Parol
            <div className="input-wrap">
              <Lock size={18} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </label>

          {error && (
            <div className="light-error">
              {error}
            </div>
          )}

          <button className="light-btn" disabled={loading}>
            {loading ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Tizimga kirish"
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="light-footer">
          <span>© 2025</span>
          <span>🇺🇿</span>
        </div>
      </div>
    </div>
  );
}
