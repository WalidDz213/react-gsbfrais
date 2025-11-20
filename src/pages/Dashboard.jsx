import { useAuth } from "../context/AuthContext";
import FraisTable from "../components/FraisTable";  

function Dashboard() {

    const { user } = useAuth();

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Tableau de board</h1>

            {user && (
                <p>Bienvenue <strong>{user.login}</strong> 👋</p>
            )}

            <FraisTable />  

        </div>
    );
}

export default Dashboard;
