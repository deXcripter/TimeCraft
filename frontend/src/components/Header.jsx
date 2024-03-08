function Header() {
  return (
    <div className="homepage-header">
      <Logo />
      <span className="auth-control">
        <SignupButton />
        <LoginButton />
      </span>
    </div>
  );
}

function Logo() {
  return <div className="homepage-logo">TimeCraft.</div>;
}

function SignupButton() {
  return <button className="homepage-signup">Sign up</button>;
}

function LoginButton() {
  return <button className="homepage-login">Log in</button>;
}

export default Header;
