import './Login.css';
const Login = () => {
    return (
      <div style={{ textAlign: 'center', paddingTop: 100 }}>
  <form className="login-form">
    {/* Email input */}
    <div className="form-outline mb-4" style={{ paddingBottom: 20 }}>
      <label className="form-label" htmlFor="form2Example1">Email </label>
      <input type="email" id="form2Example1" className="form-control" />
    </div>

    {/* Password input */}
    <div className="form-outline mb-4" style={{ paddingLeft: 0 }}>
      <label className="form-label" htmlFor="form2Example2">Password</label>
      <input type="password" id="form2Example2" className="form-control" />
    </div>

    {/* 2 column grid layout for inline styling */}
    <div className="row mb-4">
      <div className="col d-flex justify-content-center">
        {/* Checkbox */}
        <div className="form-check">
          <input className="form-check-input" type="checkbox"  id="form2Example31" defaultChecked />
          <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
        </div>
      </div>
      <div className="col">
        {/* Simple link */}
        <a href="#!">Forgot password?</a>
      </div>
    </div>

    {/* Submit button with gradient and animation */}
    <button className="login-button">
      <div className="gradient-overlay"></div>
      <span>Login</span>
    </button>

    {/* Register buttons */}
    <div className="text-center">
      <p>Not a member? <a href="#!">Register</a></p>
    </div>
  </form>
</div>

    )
}
export default Login;