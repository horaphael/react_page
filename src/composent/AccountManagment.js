import React from 'react';

function AccountManagement() {
  const handleLogout = () => {
    console.log('Déconnexion de l\'utilisateur');
  };

  const handleDeleteAccount = () => {
    console.log('Suppression du compte de l\'utilisateur');
  };

  return (
    <div>
      <h2>Gestion du compte</h2>
      <button onClick={handleLogout}>Déconnexion</button>
      <button onClick={handleDeleteAccount}>Supprimer le compte</button>
    </div>
  );
}

export default AccountManagement;
