
import { useState, useId } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "schemas/registerSchemas";

import LoginForm from "components/LoginForm/LoginForm";

import styles from "./registerForm.module.css"
import { NavLink } from "react-router-dom";

const RegisterForm = ({onSubmit}) => {
    const emailId = useId();
    const passwordId = useId();
    const nameId = useId();

    const [showPassword, setShowPassword] = useState(false);

    const [isRegisterForm, setIsRegisterForm] = useState(true);

    const handleSwitchForm = () => {
      setIsRegisterForm(!isRegisterForm);
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
      });

    const handleFormSubmit = (data) => {
        onSubmit(data);
    };

    return (
        <div>
            <div className={styles.switcher}>
                <NavLink to="/auth/login">
                    <button onClick={handleSwitchForm} disabled={!isRegisterForm}>Login</button>
                </NavLink>  
                <button onClick={handleSwitchForm} disabled={isRegisterForm} className={isRegisterForm ? styles.disabled : ''}>Register</button>
            </div>
            {isRegisterForm ? (
            <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.wrap}> 
                <div className={styles.container}>
                    <label className={styles.label} htmlFor={nameId} >
                        Name:
                    </label>
                    <input 
                        placeholder="Enter your name" 
                        className={styles.input} 
                        id={nameId}
                        {...register("name")}
                        name="name" 
                        required 
                    />
                    {errors.name && <p className={styles.error}>{errors.name.message}</p>}
                </div>
                <div className={styles.container}>
                    <label className={styles.label} htmlFor={emailId} >
                        Email:
                    </label>
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
                </div>
                <div className={styles.container}>
                    <label className={styles.label} htmlFor={passwordId} >
                        Password:
                    </label>
                    <div className={styles.passwordContainer}>
                        <input 
                            placeholder="Create a password"
                            className={styles.input} 
                            id={passwordId}
                            {...register("password")}
                            type={showPassword ? "text" : "password"}
                            name="password" 
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
                </div>
                <button className={styles.button} type="submit">Register</button>
            </form>) : (
          <LoginForm onSubmit={onSubmit} />
      )}
    </div>
    )
}

export default RegisterForm;

