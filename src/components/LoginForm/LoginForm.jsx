import { useState, useId } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/loginSchemas";

import RegisterForm from "components/RegisterForm/RegisterForm";

import styles from "./loginForm.module.css";
import { NavLink } from "react-router-dom";

const LoginForm = ({ onSubmit }) => {
  const emailId = useId();
  const passwordId = useId();

  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleSwitchForm = () => {
    setIsLoginForm(!isLoginForm);
  }
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <div className={styles.wrap}>
        {isLoginForm ? (
          <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.formWrapper}>
            <div className={styles.contentWrapper}>
              <div className={styles.switcher}>
                <NavLink to="/auth/register">
                    <button className={styles.button} onClick={handleSwitchForm} disabled={!isLoginForm}>Registration</button>
                </NavLink>
                <button className={styles.button} onClick={handleSwitchForm} disabled={isLoginForm}>Log in</button>
              </div>
            <div className={styles.inputContainer}>
                <input
                    placeholder="Enter your email"
                    className={styles.input}
                    id={emailId}
                    {...register("email")}
                    type="email"
                    required
                />
                {errors.email && <p className={styles.error}>{errors.email.message}</p>}

                <div className={styles.passwordContainer}>
                    <input
                        placeholder="Confirm your password"
                        className={styles.input}
                        id={passwordId}
                        {...register("password")}
                        type={showPassword ? "text" : "password"}
                        required
                    />
                    <button 
                        type="button" 
                        onClick={() => setShowPassword(!showPassword)}
                        className={styles.showPasswordButton}
                    >
                        {showPassword} 0
                    </button>
                </div>  
                {errors.password && <p className={styles.error}>{errors.password.message}</p>}
              <button className={styles.button} type="submit">
                Log In Now
              </button>
              </div>
            </div>
          </form>) : (
          <RegisterForm onSubmit={onSubmit} />
      )}
      </div>
  );
};

export default LoginForm;

