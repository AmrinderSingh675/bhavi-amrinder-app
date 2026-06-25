import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">

      <div
        className="card shadow p-4"
        style={{ width: "400px" }}
      >
        <h3 className="text-center mb-4">
          Login
        </h3>

        <LoginForm />
      </div>

    </div>
  );
};

export default LoginPage;