import { useForm } from "react-hook-form";
import "../CardChangePassword/CardChangePassword.scss";
import { useState } from "react";

const CardChangePassword = () => {
  const [values, setValues] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setValues(data);
    console.log(data);
  };
  return (
    <div className="card-change-password">
      <div className="title">
        <h5>Change Password</h5>
      </div>
      <div className="body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="group-input form-floating">
            <input
              id="passwordInput"
              className="form-control"
              placeholder="Password"
              type="password"
              {...register("password", { required: true })}
            />
            <label for="passwordInput">Current Password</label>
            {errors.password?.type === "required" && (
              <span className="err-msg">Password is required</span>
            )}
          </div>
          <div className="group-input form-floating">
            <input
              id="newpasswordInput"
              className="form-control"
              placeholder="New Password"
              type="password"
              {...register("newpassword", { required: true, minLength: 8 })}
            />
            <label for="newpasswordInput">New Password</label>
            {errors.newpassword?.type === "required" && (
              <span className="err-msg">Password is required</span>
            )}
            {errors.newpassword?.type === "minLength" && (
              <span className="err-msg">
                Password should be at least 8 characters
              </span>
            )}
          </div>
          <div className="group-input form-floating">
            <input
              id="confirmpasswordInput"
              className="form-control"
              placeholder="Confirm New Password"
              type="password"
              {...register("confirmpassword", { required: true })}
            />
            <label for="confirmpasswordInput">Confirm New Password</label>
            {errors.confirmpassword?.type === "required" && (
              <span className="err-msg">Password is required</span>
            )}
            {values.confirmpassword != values.password && (
              <span className="err-msg">Password do not match</span>
            )}
          </div>
          <div className="footer pt-3">
            <button className="btn-save-change">
              <p className="mb-0">SAVE CHANGES</p> 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardChangePassword;
