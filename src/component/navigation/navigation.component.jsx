import "./navigation.styles.css";

const Navigation = () => {
  return (
    <nav className="nav-container">
      <div className="nav-links-container">
        <div>snap</div>
        <div>Features &#11167;</div>
        <div>Company &#11167;</div>
        <div>Careers</div>
        <div>About</div>
      </div>
      <div className="nav-button-container">
        <button>Login</button>
        <button>Register</button>
      </div>
    </nav>
  );
};

export default Navigation;
