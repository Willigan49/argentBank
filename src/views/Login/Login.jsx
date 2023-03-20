import LoginForm from "../../components/LoginForm";

export default function Login() {
  return (
    <div className="main bg-dark h-full">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <LoginForm />
      </section>
    </div>
  );
}
