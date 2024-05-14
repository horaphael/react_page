import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDX3zb0oNXpspvFxiO4TcavOUB6MTzTwdo",
  authDomain: "webtest-308f8.firebaseapp.com",
  projectId: "webtest-308f8",
  storageBucket: "webtest-308f8.appspot.com",
  messagingSenderId: "483682915542",
  appId: "1:483682915542:web:YOUR_APP_ID"
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw new Error('Erreur lors de la connexion : ' + error.message);
  }
};

const signUp = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw new Error('Erreur lors de la création du compte : ' + error.message);
  }
};

export { auth, signIn, signUp};
