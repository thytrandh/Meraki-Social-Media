import { useForm } from "react-hook-form";
import "../CardPersonalInformation/CardPersonalInformation.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../../redux/slice/Account/accountSlice";
import { useEffect } from "react";

const CardPersonalInformation = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();



  const initialValues = {
    username: `${currentUser?.username}`,
    address: `${currentUser?.address}`,
    gender: `${currentUser?.gender}`,
    birthday: `${currentUser?.birthday}`
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
  });
  const onSubmit = (data) => {
    console.log(data);

    const { username, address, gender } = data;

    const id = currentUser?.id;

    dispatch(
      updateUser({
        id,
        // username,
        address,
        gender,
        // birthday
      })
    );
  };

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
              {...register("username")}
            />
            <label for="usernameInput">Username</label>
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
