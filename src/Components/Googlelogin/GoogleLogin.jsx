import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { googleLogin } from "../Auth/authSlice";
import { toast } from "react-hot-toast";

function GoogleLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const loadGoogleSignIn = () => {
      const handleCredentialResponse = (response) => {
        if (response.error) {
          // Handle the error scenario
          console.error("Google Sign-In error:", response.error);
          toast.error("Google Sign-In failed!");
          return;
        }

        const { credential } = response;
        
        if (!credential) {
          // Handle the scenario where the user is not registered with the OAuth client
          toast.error("User not registered with OAuth client!");
          return;
        }

        dispatch(googleLogin(response));

        navigate("/");
        toast.success("Logged in successfully!");
      };

      window.google.accounts.id.initialize({
        client_id: "665128314143-79l5vkl5gnbt30tvh1bin19f00h44d52.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        {
          theme: "dark",
          size: "large",
          width: 240,
        }
      );

      window.google.accounts.id.prompt();
    };

    if (window.google && window.google.accounts && window.google.accounts.id) {
      // Google Sign-In library is already loaded
      loadGoogleSignIn();
    } else {
      // Load Google Sign-In library dynamically
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.onload = loadGoogleSignIn;
      document.body.appendChild(script);
    }
  }, [dispatch, navigate]);

  return <div id="buttonDiv"></div>;
}

export default GoogleLogin;
