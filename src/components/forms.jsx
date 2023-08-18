import React, { useState } from "react";

function Form(props) {
  const [signedIn, setSignedIn] = useState(false);

  function refresh() {
    setSignedIn(true); 
    window.location.reload();
  }

  return (
    <form className="form">
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <div className="checkbox-container">
        <input type="checkbox" id="check" name="check" />
        <label for="check">Remember for 30 days</label>
      </div>
      <div className="fpc">
        <a href="#" className="fp">forgot password?</a>
      </div>
      <button type="button" onClick={refresh}>
        Sign Up
      </button>
      <div>
        <h3 className="checked">Do you have an account? <a href="#" className="checked1">sign up for free</a></h3>
      </div>
    </form>
  );
}

export default Form;
