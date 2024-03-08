function Header() {
  return (
    <div className="header">
      <Logo />
      <span className="auth-control">
        <SignupButton />
        <LoginButton />
      </span>
    </div>
  );
}

function Logo() {
  return <div className="logo">TimeCraft.</div>;
}

function SignupButton() {
  return <button className="signup">Sign up</button>;
}

function LoginButton() {
  return <button className="login">Log in</button>;
}

export default Header;
