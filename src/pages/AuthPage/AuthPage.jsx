import { useParams } from "react-router-dom";
import LoginForm from "components/LoginForm/LoginForm";
import RegisterForm from "components/RegisterForm/RegisterForm";

function AuthPage() {
  const { id } = useParams()

  return (
    <div>
      <h1>AuthPage</h1>
      {id === "login" && <LoginForm />}
      {id === "register" && <RegisterForm/>}
    </div>
  )
}

export default AuthPage
