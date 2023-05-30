import GoogleLogin from "../Googlelogin/GoogleLogin";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { register,reset } from "../Auth/authSlice";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { errorMessage, successMessage, isError, isSuccess, isLoading } =
  useSelector((selector) => selector.auth);

useEffect(() => {
  if (isError) {
    toast.error(errorMessage);
  }

  if (isSuccess) {
    toast.success("Registration success");
    navigate("/signin");
  }

  return () => dispatch(reset());
}, [isError, isSuccess, errorMessage, successMessage, dispatch]);


  if (isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ThreeDots color="var(--maincolor)" height={100} width={100} />
      </div>
    );
  }

  return (
    <div className="loginpage">
          <div className="text-center mt-3 googleBtn">
            <GoogleLogin />
          </div>

    </div>
  );
};

export default Signup;
