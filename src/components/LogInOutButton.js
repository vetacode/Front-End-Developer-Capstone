export function LoginButton(props) {
  return (
    <button className='btn' onClick={props.onLogin}>
      Login
    </button>
  );
}

export function LogoutButton(props) {
  return (
    <button className='btn' onClick={props.onLogout}>
      Logout
    </button>
  );
}
