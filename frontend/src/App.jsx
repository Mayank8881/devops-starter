import { useEffect, useState } from "react";
const API = import.meta.env.VITE_BACKEND_URL;

export default function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetch(`${API}/api/message`)
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h1>React Frontend</h1>
      <h2>{msg}</h2>
    </div>
  );
}
