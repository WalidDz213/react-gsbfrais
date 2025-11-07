import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {

  const { user, logoutUser } = useAuth();   // ✅ le bon nom
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();     // ✅ remet user à null
    navigate("/");    // ✅ retour accueil
  };

  return (
    <nav style={{ padding: '1rem', backgroundColor: '#333', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>

        <div>
          <Link to="/" style={{ marginRight: '1rem', color: 'white', textDecoration: 'none' }}>
            Accueil
          </Link>

          {user && (
            <Link to="/dashboard" style={{ marginRight: '1rem', color: 'white', textDecoration: 'none' }}>
              Tableau de bord
            </Link>
          )}
        </div>

        <div>
          {user ? (
            <button 
              onClick={handleLogout} 
              style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
            >
              Déconnexion
            </button>
          ) : (
            <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
              Connexion
            </Link>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
