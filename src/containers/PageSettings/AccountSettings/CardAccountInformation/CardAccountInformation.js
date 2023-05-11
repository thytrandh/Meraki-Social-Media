import { useForm } from "react-hook-form";
import "../CardAccountInformation/CardAccountInformation.scss";

const CardAccountInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="card-account-information">
      <div className="title">
        <h5>Account Information</h5>
      </div>
      <div className="body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex box-name">
            <div className="group-input form-floating mr-2">
              <textarea
                id="firstnameInput"
                className="form-control"
                placeholder="First Name"
                type="text"
                {...register("firstname")}
              />
              <label for="firstnameInput">First Name</label>
            </div>
            <div className="group-input form-floating">
              <textarea
                id="lastnameInput"
                className="form-control"
                placeholder="Last Name"
                type="text"
                {...register("lastname")}
              />
              <label for="lastnameInput">Last Name</label>
            </div>
          </div>
          <div className="group-input form-floating">
            <textarea
              id="emailInput"
              className="form-control"
              placeholder="Email Address"
              type="text"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  //   message: "invalid email address",
                },
              })}
            />
            <label for="emailInput">Email</label>
            {errors.email?.type === "required" && (
              <span className="err-msg">Email Address is required</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="err-msg">Invalid Email Address</span>
            )}
          </div>
          <div className="group-input form-floating">
            <textarea
              id="phonenumberInput"
              className="form-control"
              placeholder="Phone Number"
              type="number"
              {...register("phonenumber")}
            />
            <label for="phonenumberInput">Phone Number</label>
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

export default CardAccountInformation;
