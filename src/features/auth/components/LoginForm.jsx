import { useState } from "react";
import { validateLogin } from "../validations/authValidation";
import { useAuth } from "../hooks/useAuth";

const LoginForm = () => {
  const { login, loading, error } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [validationErrors, setValidationErrors] =
    useState({});

  const handleSubmit = async (e) => {
    console.log("Submit clicked");
    e.preventDefault();
    debugger;
    const errors =
      validateLogin(form);

    if (
      Object.keys(errors).length > 0
    ) {
      setValidationErrors(errors);
      return;
    }

    await login(form);
  };

  return (
    <form onSubmit={handleSubmit}>

      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      <div className="mb-3">
        <label>Email</label>

        <input
          type="email"
          className="form-control"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value
            })
          }
        />

        <small className="text-danger">
          {validationErrors.email}
        </small>
      </div>

      <div className="mb-3">
        <label>Password</label>

        <input
          type="password"
          className="form-control"
          value={form.password}
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value
            })
          }
        />

        <small className="text-danger">
          {validationErrors.password}
        </small>
      </div>

      <button
        className="btn btn-primary w-100"
        disabled={loading}
      >
        {loading
          ? "Signing In..."
          : "Sign In"}
      </button>
    </form>
  );
};

export default LoginForm;