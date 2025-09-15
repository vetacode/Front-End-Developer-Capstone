function LogInOutButton(props) {
  function LoginButton() {
    return (
      <button className='btn' onClick={props.onLogin}>
        Login
      </button>
    );
  }

  function LogoutButton() {
    return (
      <button className='btn' onClick={props.onLogout}>
        Logout
      </button>
    );
  }

  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <LogoutButton />;
  } else {
    return <LoginButton />;
  }
}
export default LogInOutButton;
