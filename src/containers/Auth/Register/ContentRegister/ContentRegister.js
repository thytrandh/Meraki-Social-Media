import { useContext } from "react";
import RegisterForm from "../RegisterForm/RegisterForm";
import VerifyForm from "../VerifyForm/VerifyForm";
import { StepVerifyContext } from "../Context/stepVerifyContext";

const ContentRegister = () => {
  const [nextPage, setNextPage] = useContext(StepVerifyContext);

  return (
    <div className="content">
      {nextPage ? <VerifyForm /> : <RegisterForm />}
    </div>
  );
};

export default ContentRegister;
