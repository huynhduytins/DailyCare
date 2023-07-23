import Form from "../Dashboard/Form";
import InputForm from "../../components/InputForm";

const PatientProfile = () => {
  const [t] = useTranslation("global");

  const handleSubmit = () => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {
      firstName: formData.get("firstName") ?? "",
      lastName: formData.get("lastName") ?? "",
      age: formData.get("age") ?? "",
      gender: formData.get("gender") ?? "",
      address: formData.get("address") ?? "",
      detail: formData.get("detail") ?? "",
    };
    console.log(obj);
  };

  return (
    <div className="mt-0 w-2/3">
      <Form
        title={`${t("body.profile.title")}`}
        handleSubmit={handleSubmit}
        button="Submit"
      >
        <div className="mt-8 flex flex-col gap-12 lg:flex-row ">
          <InputForm type="firstName" name="First Name" value="" />
          <InputForm type="lastName" name="Last Name" value="" />
        </div>
        <div className="mt-8 flex flex-col gap-12 lg:flex-row ">
          <InputForm type="age" name="Age" value="" />
          <InputForm type="gender" name="Gender" value="" />
        </div>
        <div className="mt-8">
          <InputForm type="address" name="Address" value="" />
        </div>
        <div className=" mt-8">
          <label htmlFor="detail" className="mb-5 block">
            Detail about the patient's health
          </label>
          <textarea
            name="detail"
            id="detail"
            className="w-full rounded border-[1px] border-slate-400 bg-[#f0f4f8] p-2 outline-blue-300"
          ></textarea>
        </div>
      </Form>
    </div>
  );
};

export default PatientProfile;
