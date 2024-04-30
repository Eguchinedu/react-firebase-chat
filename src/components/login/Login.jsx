import React, { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../lib/upload";

function Login() {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });
  const [loadingSignUp, setLoadingSignUp] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoadingSignUp(true);
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const imgUrl = await upload(avatar.file);
      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: [],
      });
      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });

      toast.success("Account created successfully");
      setLoadingSignUp(false);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoadingSignUp(false);
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
      setLoadingLogin(true);
  const formData = new FormData(e.target);

  const { email, password } = Object.fromEntries(formData);

    try {

      const res = await signInWithEmailAndPassword(auth, email, password)
      toast.success(`Welcome ${email}`);
      setLoadingLogin(false);
    } catch (error) {
      console.log(error);
    }finally {
      setLoadingLogin(false)
    }
  };
  return (
    <div className="login">
      <div className="item">
        <h2>Welcome Back,</h2>
        <p>Sign in.</p>
        <form action="" onSubmit={handleLogin}>
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button disabled={loadingLogin || loadingSignUp}>
            {loadingLogin ? (
              <i
                class="bx bx-loader-alt bx-spin bx-rotate-90"
                style={{ fontSize: "20px" }}
              ></i>
            ) : (
              <>Login</>
            )}
          </button>
        </form>
      </div>
      <div className="hr"></div>
      <div className="item">
        <h2>Create an Account</h2>
        <form action="" onSubmit={handleRegister}>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            Upload an image
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input type="text" placeholder="Username" name="username" />
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />

          <button disabled={loadingSignUp || loadingLogin}>
            {loadingSignUp ? (
              <i
                class="bx bx-loader-alt bx-spin bx-rotate-90"
                style={{ fontSize: "20px" }}
              ></i>
            ) : (
              <>Sign Up</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
