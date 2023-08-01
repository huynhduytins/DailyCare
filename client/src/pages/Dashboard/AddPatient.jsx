import InputForm from "../../components/InputForm";
import { useAppContext } from "../../context/appContext";
import { useEffect, useState } from "react";
import Form from "./Form";
import AccountPatient from "../../components/AccountPatient";
import WaitingComponent from "../../components/WaitingComponent";

const AddPatient = () => {
  const [submit, setSubmit] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const {
    showAlert,
    alertText,
    displayAlert,
    addPatient,
    patientAccount,
    getWaitingList,
    changeParams,
    changePage,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {
      name: formData.get("name") ?? "",
      email: formData.get("email") ?? "",
      age: formData.get("age") ?? "",
      gender: formData.get("gender") ?? "",
      detail: formData.get("detail") ?? "",
    };
    if (!obj.name || !obj.email || !obj.age || !obj.gender) {
      displayAlert();
      return;
    }
    addPatient(obj);
    setSubmit(true);
  };

  useEffect(() => {
    if (alertText === "Thêm bệnh nhân thành công") {
      setTimeout(() => setOpenModal(true), 1000);
    }
  }, [alertText]);

  useEffect(() => {
    changePage(1);
    changeParams({
      search: "",
      levelDis: "Tất cả",
      gender: "Tất cả",
      sort: "a-z",
    });
    getWaitingList();
  }, []);

  return (
    <>
      <div className="mb-9">
        <Form
          title="Thêm Bệnh Nhân"
          handleSubmit={handleSubmit}
          button="Submit"
          showAlert={showAlert}
          submit={submit}
        >
          <div className="mt-8 flex flex-col gap-12 lg:flex-row ">
            <InputForm
              type="name"
              name="Tên"
              value=""
              submit={submit}
              setSubmit={setSubmit}
            />
            <InputForm
              type="email"
              name="Email"
              value=""
              submit={submit}
              setSubmit={setSubmit}
            />
          </div>
          <hr className="mt-10" />
          <div className="mt-8 flex flex-col gap-12 lg:flex-row ">
            <InputForm
              type="age"
              name="Tuổi"
              value=""
              submit={submit}
              setSubmit={setSubmit}
            />
            <InputForm
              type="gender"
              name="Giới tính"
              value=""
              submit={submit}
              setSubmit={setSubmit}
            />
          </div>
          <hr className="mt-10" />
          <div className=" mt-8">
            <label htmlFor="detail" className="mb-5 block">
              Chi tiết về sức khỏe bệnh nhân
            </label>
            <textarea
              name="detail"
              id="detail"
              className="w-full rounded border-[1px] border-slate-400 bg-[#f0f4f8] p-2 outline-blue-300"
            ></textarea>
          </div>
        </Form>
      </div>
      {openModal && (
        <AccountPatient
          patientAccount={patientAccount}
          setOpenModal={setOpenModal}
        />
      )}
      <WaitingComponent />
    </>
  );
};

export default AddPatient;
