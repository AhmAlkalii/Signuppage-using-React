import React from "react";
import Form from "./forms";
function Sign(props) {
  return (
    <div class="container">
      <div class="image">
      <img src={props.img} alt="My image" className="image" />
      </div>
      <div className="text">
        <div className="content">  
          <h1>Sign Up For Tickets!</h1>
          <p className="ps">Welcome to the Eithad Stadium home of the champions <br />
          Sign up for more Infomation
          </p>
        </div>
        <div className="sign-in-inline">
          <a href="#" className="tx"><i className="bx bxl-google"></i> Sign in with Google</a>
          <a href="#" className="tx"><i class='bx bxl-instagram' ></i> Sign in with Instagram</a>
        </div>
        <div className="sign-in">
          <a href="#" className="tx"><i className="bx bxl-twitter"></i> Sign in with Twitter</a>
          <a href="#" className="tx"><i class='bx bxl-facebook-circle' ></i> Sign in with Facebook</a>
        </div>

        <div className="line-with-or">
          <div className="line"></div>
            <span>or</span>
          <div className="line"></div>
        </div>

        <div>
          <Form />
        </div>
      </div>

    </div>
  );
}

export default Sign;
