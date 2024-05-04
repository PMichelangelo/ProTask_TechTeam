
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { signup, login } from "../../redux/auth/auth-operation";
import { selectAuthError, selectAuthLoading } from "../../redux/auth/auth-selectors";
import RegisterForm from "components/RegisterForm/RegisterForm";
import LoginForm from "components/LoginForm/LoginForm";
import styles from "./authPage.module.css";

const AuthPage = () => {
    const { id } = useParams();
    const authLoading = useSelector(selectAuthLoading);
    const authError = useSelector(selectAuthError);
    const dispatch = useDispatch();

    const handleSignup = data => {
        dispatch(signup(data));
    }

    const handleLogin = data => {
        dispatch(login(data));
    }

    return (
      <div className={styles.container}>
        <div className={styles.formContainer}>
            {id === "register" ? (
                <>
                    {authLoading && <div>Loading...</div>}
                    <RegisterForm onSubmit={handleSignup}/>
                    {authError && <div className={styles.error}>{authError}</div>}
                </>
            ) : (
                <>
                    {authLoading && <div>Loading...</div>}
                    <LoginForm onSubmit={handleLogin}/>
                    {authError && <div className={styles.error}>{authError}</div>}
                </>
            )}
        </div>
      </div>
    );
};

export default AuthPage;

