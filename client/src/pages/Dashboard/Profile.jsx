import InputForm from "../../components/InputForm";
import Alert from "../../components/Alert";
import { useAppContext } from "../../context/appContext";
import { useState } from "react";

const Profile = () => {
  const [submit, setSubmit] = useState(true);

  const { updateUser, showAlert, displayAlert, infoUser } = useAppContext();
  console.log(infoUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {
      firstName: formData.get("firstName") ?? "",
      lastName: formData.get("lastName") ?? "",
      specialist: formData.get("specialist") ?? "",
      degree: formData.get("degree") ?? "",
      address: formData.get("address") ?? "",
      phone: formData.get("phone") ?? "",
      age: formData.get("age") ?? "",
    };
    if (
      !obj.firstName ||
      !obj.lastName ||
      !obj.specialist ||
      !obj.degree ||
      !obj.address ||
      !obj.phone ||
      !obj.age
    ) {
      displayAlert();
      return;
    }
    updateUser(obj);
    setSubmit(true);
  };

  return (
    <div className="mt-16 mb-10 flex  w-full justify-center lg:mb-0">
      <form
        className="shadow-[0 4px 6px -1px rgba(0, 0, 0, 0.1)] relative w-10/12 rounded bg-white py-10 px-6"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h3 className="text-3xl ">Profile</h3>
        {showAlert && (
          <div className="mt-5 flex w-full justify-center">
            <Alert info={true} />
          </div>
        )}
        <div className="mt-12 flex flex-col gap-12 lg:flex-row ">
          <InputForm
            type="firstName"
            name="First Name"
            value={infoUser?.firstName ?? ""}
            submit={submit}
            setSubmit={setSubmit}
          />
          <InputForm
            type="lastName"
            name="Last Name"
            value={infoUser?.lastName ?? ""}
            submit={submit}
            setSubmit={setSubmit}
          />
        </div>
        <hr className="mt-10" />
        <div className="mt-16 flex flex-col gap-12 lg:flex-row ">
          <InputForm
            type="specialist"
            name="Specialist"
            value={infoUser?.specialist ?? ""}
            submit={submit}
            setSubmit={setSubmit}
          />
          <InputForm
            type="degree"
            name="Degree"
            value={infoUser?.degree ?? ""}
            submit={submit}
            setSubmit={setSubmit}
          />
        </div>
        <hr className="mt-10" />
        <div className="row mt-16 flex flex-col gap-12 md:flex-row">
          <InputForm
            type="address"
            name="Address"
            value={infoUser?.address ?? ""}
            submit={submit}
            setSubmit={setSubmit}
          />
          <div className="flex w-full gap-10">
            <InputForm
              type="phone"
              name="Phone Number"
              value={infoUser?.phone ?? ""}
              submit={submit}
              setSubmit={setSubmit}
            />
            <InputForm
              type="age"
              name="Age"
              value={infoUser?.age ?? ""}
              submit={submit}
              setSubmit={setSubmit}
            />
          </div>
        </div>
        <div className="mt-14 flex w-full justify-end">
          <button
            className="rounded bg-green-500 py-2 px-10 font-semibold text-white hover:bg-green-700"
            disabled={submit}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
