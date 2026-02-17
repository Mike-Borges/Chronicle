import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-image-circle"></div>
        <h1 className="login-title">Be Close Again!</h1>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email/Username</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password..."
            />
          </div>

          <div className="button-group">
            <button type="button" className="btn-register">
              Register
            </button>
            <button type="submit" className="btn-signin">
              Sign-In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
