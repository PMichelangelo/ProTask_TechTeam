
import { useState, useId } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "schemas/registerSchemas";

import LoginForm from "components/LoginForm/LoginForm";

import styles from "./registerForm.module.css"
import { NavLink, useLocation } from "react-router-dom";


const RegisterForm = ({onSubmit}) => {
    const { pathname } = useLocation();
    const isRegisterForm = pathname === "/auth/register"

    const emailId = useId();
    const passwordId = useId();
    const nameId = useId();

    const { register, handleSubmit, formState: { errors }, trigger } = useForm({
        resolver: yupResolver(registerSchema)
      });

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

      const submitForm = async (data) => {
        await trigger();
        onSubmit(data);
      };

      return (
        <div className={styles.wrap}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper} noValidate>
            <div className={styles.contentWrapper}>
              <div className={styles.switcher}>
                <button className={styles.button} disabled={isRegisterForm}>Registration</button>
                <NavLink to="/auth/login">
                  <button className={styles.button} disabled={!isRegisterForm}>Log In</button>
                </NavLink>
              </div>
              <div className={styles.inputContainer}>
                <input
                  placeholder="Enter your name"
                  className={styles.input}
                  id={nameId}
                  {...register("name")}
                  name="name"
                  required
                />
                {errors.name && <p className={styles.error}>{errors.name.message}</p>}
                <input
                  placeholder="Enter your email"
                  className={styles.input}
                  id={emailId}
                  {...register("email")}
                  type="email"
                  name="email"
                  required
                />
                {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                <div className={styles.passwordContainer}>
                  <input
                    placeholder="Create a password"
                    className={styles.passwordInput}
                    id={passwordId}
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                  />
                    <div className={styles.showPasswordButtonWrap}>
                        <div
                        className={styles.showPasswordButton}
                        onClick={togglePasswordVisibility}
                        >
                            <svg className={styles.logoIconOuter} width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.75 7C0.75 7 3.75 1 9 1C14.25 1 17.25 7 17.25 7C17.25 7 14.25 13 9 13C3.75 13 0.75 7 0.75 7Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                <svg className={styles.logoIconInner} width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 5.25C4.24264 5.25 5.25 4.24264 5.25 3C5.25 1.75736 4.24264 0.75 3 0.75C1.75736 0.75 0.75 1.75736 0.75 3C0.75 4.24264 1.75736 5.25 3 5.25Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </svg>
                            </div>
                    </div>
                </div>
                {errors.password && <p className={styles.error}>{errors.password.message}</p>}
                <button className={styles.registerButton} type="submit">Register Now</button>
              </div>
            </div>
          </form>
        </div>
      );
    }

export default RegisterForm;

