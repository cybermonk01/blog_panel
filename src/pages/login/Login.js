import React, { useContext, useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebaseConfig";
import { auth } from "../../firebaseBlog";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
        // ...
      })
      .catch((error) => {
        setError(true);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      });
  };

  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen">
      <div className="container py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      />
                      <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                        We are The JIS Team
                      </h4>
                    </div>
                    <form onSubmit={handleLogin}>
                      <p className="mb-4">Please login to your account</p>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="text-center pt-1 mb-12 pb-1">
                        <button
                          className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          style={{
                            background: ` linear-gradient(
                              90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%
                              )`,
                          }}
                          type="submit"
                        >
                          Log in
                        </button>
                        <a className="text-gray-500" href="#!">
                          Forgot password?
                        </a>
                      </div>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        {/* <button
                          type="button"
                          className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Danger
                        </button> */}
                      </div>
                    </form>
                  </div>
                </div>
                <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0 py-10">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    class="w-full"
                    alt="Phone image"
                  />
                </div>
                {/* <div
                  className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                  style={{
                    backgroundImage: `linear-gradient(to right, "#ee7724", "#d8363a", "#dd3675", "#b44593")`,
                  }}
                >
                  <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                    <h4 className="text-xl font-semibold mb-6">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    // return (
    //   <section>
    //     <div className="colour"></div>
    //     <div className="colour"></div>
    //     <div className="colour"></div>
    //     <div className="box">
    //       <div className="square"></div>
    //       <div className="square"></div>
    //       <div className="square"></div>
    //       <div className="square"></div>
    //       <div className="square"></div>
    //       <div className="container">
    //         <div className="form">
    //           <h2>Super Admin Panel Login</h2>
    //           <form onSubmit={handleLogin}>
    //             <div className="input__box">
    //               <input
    //                 type="mail"
    //                 placeholder="Email"
    //                 onChange={(e) => setEmail(e.target.value)}
    //               />
    //             </div>
    //             <div className="input__box">
    //               <input
    //                 type="password"
    //                 placeholder="Password"
    //                 onChange={(e) => setPassword(e.target.value)}
    //               />
    //             </div>
    //             <div className="input__box">
    //               <input type="submit" value="Login" />
    //             </div>

    //             {error && <span> Wrong Email or PAssword!</span>}
    //             <p className="forget">
    //               Forgot Password? <a href="#">Click Here</a>
    //             </p>
    //             <p className="forget">
    //               Don't have an account? <a href="#">Sign Up</a>
    //             </p>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // <div classNameName="login">
    //   <h1> Super Admin Panel Login </h1>
    //   <form onSubmit={handleLogin}>
    //     <input
    //       type="email"
    //       placeholder="email"
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <input
    //       type="password"
    //       placeholder="password"
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button type="submit">Login</button>

    //     {error && <span> Wrong Email or PAssword!</span>}
    //   </form>
    // </div>
  );
};

export default Login;
