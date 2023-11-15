import React, { useState } from "react";
import "./Style6.css";

function App() {
  
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  
  // defining data for username and passwords.
  const data = [
    {
      username: "chrb",
      password: "abc"
    },
    {
      username: "rishi",
      password: "def"
    },
    {
        username: "RVR",
        password: "def"
      }
  ];
// defining erros types
  const errors = {
    uname: "Invalid Username",
    pass: "Invalid Password"
  };

  // ON SUBMIT CLICK CHESTE IKKADIKI OSTADI 
  const handleSubmit = (event) => {
    
    event.preventDefault(); // no default FORM SUBMISSION IS PREVENTED. 

    var { uname, pass } = document.forms[0];

    //So, userData will contain the first element in the data array that satisfies the condition. If no matching user is found, userData will be undefined
    const userData = data.find((user) => user.username === uname.value);

    
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
//---> UNTIL THIS ON SUBMIT.
  
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  
  const WebForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" placeholder="please enter your usernme" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" placeholder="enter password" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value="LOGIN"/>
        </div>
      </form>
    </div>
  );

  return (
    <div className="main1">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : WebForm}
      </div>
    </div>
  );
}

export default App;
