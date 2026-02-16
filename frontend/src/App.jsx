import { useEffect, useState } from "react";

export default function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetch("/api/message")
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
      .catch(() => setMsg("Backend not reachable"));
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h1>React Frontend</h1>
      <h2>{msg}</h2>
    </div>
  );
}
