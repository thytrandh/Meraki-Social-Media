import { useContext, useState } from "react";
import Logo from "../../../components/UI/Logo/Logo";
import "../AuthPage.scss";

import RegisterForm from "./RegisterForm/RegisterForm";
import VerifyForm from "./VerifyForm/VerifyForm";
import { StepVerifyContext } from "./Context/stepVerifyContext";
import ContentRegister from "./ContentRegister/ContentRegister";

const Register = () => {
  const [nextPage, setNextPage] = useState();

  return (
    <div className="auth-page">
      <div className="title">
        <p className="subject mb-0">Welcome to Meraki!</p>
        <p className="mb-0">Please Register for your account</p>
      </div>
      <StepVerifyContext.Provider value={[nextPage, setNextPage]}>
        <ContentRegister />
      </StepVerifyContext.Provider>
    </div>
  );
};

export default Register;
