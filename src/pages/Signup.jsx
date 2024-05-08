import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignupUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <label>Email</label>
      <input
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password</label>
      <input
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => SignupUser()}>Register</button>
    </div>
  );
};

export default Signup;
