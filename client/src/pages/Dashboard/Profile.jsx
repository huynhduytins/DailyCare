import InputForm from "../../components/InputForm";
import { useAppContext } from "../../context/appContext";
import { useEffect, useState } from "react";
import Form from "./Form";

const Profile = () => {
  const [submit, setSubmit] = useState(true);

  const {
    updateUser,
    showAlert,
    displayAlert,
    infoUser,
    changeParams,
    changePage,
  } = useAppContext();

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

  useEffect(() => {
    changePage(1);
    changeParams({ search: "", levelDis: "all", gender: "all", sort: "a-z" });
  }, []);

  return (
    <Form
      title="Profile"
      handleSubmit={handleSubmit}
      button="Save"
      showAlert={showAlert}
      submit={submit}
    >
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
      <div className="mt-16 flex flex-col gap-12 md:flex-row">
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
    </Form>
  );
};

export default Profile;
