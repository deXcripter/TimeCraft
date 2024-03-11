import { Logo } from "./Logo";

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

function SignupButton() {
  return <button className="homepage-signup">Start now</button>;
}

function LoginButton() {
  return <button className="homepage-login">Log in</button>;
}

export default Header;
