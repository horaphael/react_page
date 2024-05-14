import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signUp } from '../firebase';
import '../Style/Style.css';
import login from '../assets/login.png';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      await signUp(email.value, password.value);
      navigate('/moncompte');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <img src={login} className="login" alt="login" />
      <h1 className="coInput" >Inscription</h1>
      <form onSubmit={handleSignUp}>
        <div>
          <label className="emailInput" htmlFor="email">Email:</label>
          <input className="emailInput" type="email" id="email" name="email" />
        </div>
        <div>
          <label className="passInput" htmlFor="password">Password:</label>
          <input className="passInput" type="password" id="password" name="password" />
        </div>
        <button className="connectInput" type="submit">S'inscrire</button>
      </form>
      <p className="sinscrirInput">Vous avez déjà un compte ? <Link to="/login">Connectez-vous ici</Link></p>
    </div>
  );
};

export default Signup;
