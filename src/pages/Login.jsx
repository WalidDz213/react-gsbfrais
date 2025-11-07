import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {

  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(loginValue, passwordValue);

    if (success) {
      navigate('/dashboard');
    } else {
      alert("Identifiants incorrects ❌");
    }
  };

  return (
    <div className="login-page">     {/* ✅ Ajout ici */}
      <div className="login-container">
        <h1>Connexion</h1>

        <form onSubmit={handleSubmit} className="login-form">
          <label>Email :</label>
          <input 
            type="text" 
            value={loginValue} 
            onChange={(e) => setLoginValue(e.target.value)} 
          />

          <label>Mot de passe :</label>
          <input 
            type="password" 
            value={passwordValue} 
            onChange={(e) => setPasswordValue(e.target.value)} 
          />

          <button type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
