import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signIn } from '../firebase';
import '../Style/Style.css';
import login from '../assets/login.png';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await signIn.currentUser;
        if (user) {
          localStorage.setItem('userLoggedIn', 'true');
          navigate('/moncompte');
        } else {
          localStorage.removeItem('userLoggedIn');
          setLoading(false);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'utilisateur connecté :', error);
        setLoading(false);
      }
    };

    checkUser();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      await signIn(email.value, password.value);
      navigate('/moncompte');
    } catch (error) {
      alert(error.message);
    }
  };

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div>
      <img src={login} className="login" alt="login" />
      <h1 className="coInput" >Connexion</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label className="emailInput" htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className="emailInput" />
        </div>
        <div>
          <br></br>
          <label className="passInput" htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" className="passInput" />
        </div>
        <br></br>
        <button className="connectInput" type="submit">Se connecter</button>
      </form>
      <Link to="/" className="accInput" >Revenir à l'accueil</Link>
      <span> | </span>
      <p className="sinscrirInput">Vous n'avez pas de compte ? <Link to="/signup" >S'inscrire</Link></p>
    </div>
  );  
};

export default Login;
