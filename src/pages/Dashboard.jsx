import { useAuth } from "../context/AuthContext";

function Dashboard() {

  const { user } = useAuth(); 

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Tableau de board</h1>

      {user && (
        <p>Bienvenue <strong>{user.login}</strong> 👋</p>
      )}
    </div>
  );
}

export default Dashboard;
