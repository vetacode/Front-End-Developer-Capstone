export function LoginButton(props) {
  return (
    <button className='btn' onClick={props.onLogin} aria-label='login'>
      Login
    </button>
  );
}

export function LogoutButton(props) {
  return (
    <button className='btn' onClick={props.onLogout} aria-label='logout'>
      Logout
    </button>
  );
}
