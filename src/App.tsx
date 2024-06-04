import React from "react";
import Home from "./pages/home";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { logout, isAuthenticated, loginWithPopup } = useAuth0();

  const handleClick = (type: string) => {
    console.log(type);
    if (type === "login") {
      loginWithPopup();
    } else {
      logout();
    }
  };

  return (
    <div>
      <Home />
      {isAuthenticated ? (
        <div>
          <button onClick={() => handleClick("logout")} className="loginButton">
            Logout
          </button>
        </div>
      ) : (
        <div>
          <button onClick={() => handleClick("login")} className="loginButton">
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
