import SignUpForm from "../../components/SignUp/SignUpForm"
import LoginForm from "../../components/LoginForm/Login"
import { useState } from "react"
import styles from './AuthPage.module.css';
export default function AuthPage({setUser}) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <main className={styles.AuthPage}>
      <div>
        <h1>Auth Page</h1>
        <button
          onClick={() => {
            setShowLogin(!showLogin);
          }}
        >
          {showLogin ? 'Sign Up' : 'Login'}
        </button>
      </div>
      {showLogin ? <LoginForm setUser={setUser}/> : <SignUpForm setUser={setUser}/>}
    </main>
  );
}