import React, { useState } from "react";
import { login } from "../services/api";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });

  const handleLogin = () => {
    login(data).then(res => {
      alert("Login success");
    }).catch(() => alert("Login failed"));
  };

  return (
    <div>
      <input
        placeholder="Email"
        onChange={e => setData({ ...data, email: e.target.value })}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={e => setData({ ...data, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
