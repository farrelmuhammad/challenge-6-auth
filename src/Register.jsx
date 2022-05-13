import { useDispatch} from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoginGoogle} from "./Config/Redux/Actions/authAction";
import "./App.css";
import imageLogin from "./hero.png";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginGoogle = async () => {
    const data = await dispatch(LoginGoogle());
    if (data) navigate("/landingpage");
  };

  const handleRegisterEmail = () => {
    alert('Register Success');
    navigate('/');
};

  useEffect(() => {
    document.body.style.backgroundImage = `url('${imageLogin}')`;
    document.body.style.backgroundSize = "auto";
    document.body.style.backgroundRepeat = "no-repeat";
  }, []);

  return (
    <>
      <div className="container">
        <div className="login">
          <div className="logo"></div>
          <h1 className="welcome-title">Create new Account</h1>

          <div className="form-content">
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="button-login btn"
                onClick={handleRegisterEmail}
              >
                Sign Up
              </button>
            </form>
            <button
              className="button-login-google btn"
              onClick={handleLoginGoogle}
            >
              Login with Google
            </button>
          </div>
          <p className="text-left">
            Already have an account? <Link to={"/"}>Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
