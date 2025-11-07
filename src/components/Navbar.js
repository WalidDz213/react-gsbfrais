import React from 'react';
import { Link } from 'react-router-dom'; 

function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#333', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Link to="/" style={{ color: 'white', marginRight: '1rem' }}>Accueil</Link>
          <Link to="/dashboard" style={{ color: 'white' }}>Tableau de bord</Link>
        </div>
        <div>
          <Link to="/logout" style={{ color: 'white', marginRight: '1rem' }}>Déconnexion</Link>
          <Link to="/login" style={{ color: 'white' }}>Connexion</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
