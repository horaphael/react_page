import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../firebase';

const MonCompte = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        navigate('/login');
      })
      .catch(error => {
        console.error('Erreur lors de la déconnexion : ', error);
      });
  };

  return (
    <div>
      <h1>Mon Compte</h1>
      <p>Bienvenue sur votre compte !</p>
      <button onClick={handleLogout}>Déconnexion</button>
      <Link to="/">Revenir à l'accueil</Link>
    </div>
  );
};

export default MonCompte;
