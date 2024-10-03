import { useState } from "react";

function Login() {
  const [status, changeStatus] = useState(1);
  return (
    <div>
      {status ? <h1>Login</h1> : <h1>Register</h1>}
      <button onClick={() => changeStatus((prev) => !prev)}>
        Not registred yet?
      </button>
    </div>
  );
}

export default Login;
