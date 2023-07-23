import Form from "../../Dashboard/Form";
import InputForm from "../../../components/InputForm";
import DetailCard from "../../../components/PatientCard/DetailCard";
import Checkbox from "../../../components/PatientCard/Checkbox";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { useTranslation } from "react-i18next";
import Chatbot from "../Chatbot";

const PatientProfile = () => {
  const [t] = useTranslation("global");

  const [actives, setActives] = useState([
    { title: "Uống 3 lít nước mỗi ngày", checked: true },
    { title: "Tập thể dục", checked: true },
    { title: "Uống thuốc đúng giờ", checked: true },
    { title: "Ngủ đủ giấc", checked: true },
    { title: "Không thức khuya", checked: true },
  ]);
  const [details, setDetails] = useState([
    { title: "120/80", dv: "mmHg" },
    { title: 80, dv: "bpm" },
    { title: 130, dv: "mmol/L" },
  ]);
  const [add, setAdd] = useState(false);

  const inputRef = useRef(null);

  const handleAdd = () => {
    if (inputRef.current.value) {
      setActives([
        ...actives,
        { title: inputRef.current.value, checked: true },
      ]);
    }
    setAdd(false);
  };

  const handleActives = (title) => {
    setActives((actives) => {
      const id = actives.findIndex((active) => active.title === title);
      actives[id].checked = !actives[id].checked;
      return [...actives];
    });
  };

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

  useEffect(() => {
    if (add) {
      inputRef.current.focus();
    }
  }, [add]);

  return (
    <div className="my-40 w-full">
      <Form
        title={`${t("body.profile.title")}`}
        handleSubmit={handleSubmit}
        button="Save"
        client={true}
      >
        <div className="mt-8 flex flex-col gap-12 lg:flex-row ">
          <InputForm
            type="firstName"
            name={`${t("body.profile.firstName")}`}
            value=""
          />
          <InputForm
            type="lastName"
            name={`${t("body.profile.lastName")}`}
            value=""
          />
        </div>
        <div className="mt-8 flex flex-col gap-12 lg:flex-row ">
          <InputForm type="age" name={`${t("body.profile.age")}`} value="" />
          <InputForm
            type="gender"
            name={`${t("body.profile.gender")}`}
            value=""
          />
        </div>
        <div className="mt-8">
          <InputForm
            type="address"
            name={`${t("body.profile.address")}`}
            value=""
          />
        </div>
        <div className=" mt-8">
          <label htmlFor="detail" className="mb-5 block">
            {`${t("body.profile.detail")}`}
          </label>
          <textarea
            name="detail"
            id="detail"
            className="w-full rounded border-[1px] border-slate-400 bg-[#f0f4f8] p-2 outline-blue-300"
          ></textarea>
        </div>
        <div>
          <h3 className="mt-16 text-3xl">{`${t(
            "body.medicalRecord.title"
          )}`}</h3>
        </div>
        <div className="mt-8">
          <InputForm
            type={`${t("body.medicalRecord.medHis")}`}
            name="Medical History"
            value=""
          />
        </div>
        <div className="mt-8 flex flex-col gap-12 lg:flex-row ">
          <InputForm
            type="bloodPressure"
            name={`${t("body.medicalRecord.bloodPress")}`}
            value=""
          />
          <InputForm
            type="heartRate"
            name={`${t("body.medicalRecord.heartRate")}`}
            value=""
          />
        </div>
        <div className="mt-8 flex flex-col gap-12 lg:flex-row ">
          <InputForm
            type="weight"
            name={`${t("body.medicalRecord.weight")}`}
            value=""
          />
          <InputForm
            type="height"
            name={`${t("body.medicalRecord.height")}`}
            value=""
          />
        </div>
        <div>
          <h3 className="mt-16 text-3xl">{`${t(
            "body.medicalDairy.title"
          )}`}</h3>
        </div>
        <div className="mx-10 mt-8 flex justify-between">
          {details.map((detail) => (
            <DetailCard title={detail.title} dv={detail.dv} />
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-6">
          <h2 className="m-5 text-xl font-bold">{`${t(
            "body.medicalDairy.note"
          )}`}</h2>
          {actives.map((active) => {
            return (
              <Checkbox
                title={active.title}
                checked={active.checked}
                key={active.title}
                handleActives={handleActives}
              />
            );
          })}
          {add && (
            <div className="relative">
              <input
                className="w-[500px] border-[#000] py-2 px-5"
                ref={inputRef}
              />
              <BsCheckLg
                className="absolute top-3 right-5 cursor-pointer"
                onClick={handleAdd}
              />
              <MdDeleteForever
                className="absolute top-3 right-12 cursor-pointer"
                onClick={() => setAdd(false)}
              />
            </div>
          )}
          <AiOutlinePlusCircle
            className="cursor-pointer text-2xl"
            title=""
            onClick={() => {
              setAdd(true);
            }}
          />
        </div>
        <div></div>
      </Form>
      <Chatbot />
    </div>
  );
};

export default PatientProfile;
