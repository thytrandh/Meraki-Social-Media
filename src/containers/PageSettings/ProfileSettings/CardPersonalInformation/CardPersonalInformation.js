import { useForm } from "react-hook-form";
import "../CardPersonalInformation/CardPersonalInformation.scss";

const CardPersonalInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="card-personal-information">
      <div className="title">
        <h5>Personal Information</h5>
      </div>
      <div className="body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="group-input form-floating">
            <textarea
              id="usernameInput"
              className="form-control"
              placeholder="Username"
              type="text"
              {...register("username", { required: true, minLength: 3 })}
            />
            <label for="usernameInput">Name</label>
            {errors.username?.type === "required" && (
              <span className="err-msg">Username is required</span>
            )}
            {errors.username?.type === "minLength" && (
              <span className="err-msg">
                Username should be at least 3 characters
              </span>
            )}
          </div>
          <div className="group-input form-floating">
            <textarea
              id="addressInput"
              className="form-control"
              placeholder="Address"
              type="text"
              {...register("address")}
            />
            <label for="addressInput">Address</label>
          </div>
          <div class="group-input form-floating">
            <select
              class="form-select"
              id="genderSelect"
              aria-label="Floating label select example"
              {...register("gender")}
            >
              <option selected>----</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <label for="genderSelect">Gender selects</label>
          </div>
          <div className="group-input form-floating">
            <textarea
              id="birthdayInput"
              className="form-control"
              placeholder="Birthday"
              type="date"
              {...register("birthday")}
            />
            <label for="birthdayInput">Birthday</label>
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

export default CardPersonalInformation;
