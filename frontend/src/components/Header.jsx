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
  return (
    <div className="homepage-logo">
      <img src="./src/assets/saly.svg" />
      <p className="homepage-logo-text">TimeCraft.</p>
    </div>
  );
}

function SignupButton() {
  return <button className="homepage-signup">Start now</button>;
}

function LoginButton() {
  return <button className="homepage-login">Log in</button>;
}

export default Header;
