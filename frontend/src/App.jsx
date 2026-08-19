import { useEffect, useState } from "react";

function App() {
  const [health, setHealth] = useState("loading...");

  useEffect(() => {
    fetch("http://localhost:3000/api/health")
      .then((res) => res.json())
      .then((data) => setHealth(JSON.stringify(data)))
      .catch((err) => setHealth("Error: " + err.message));
  }, []);

  return (
    <div>
      <h1>Health check</h1>
      <p>{health}</p>
    </div>
  );
}

export default App;