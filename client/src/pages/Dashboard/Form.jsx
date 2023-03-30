import Alert from "../../components/Alert";

const Form = ({ title, children, handleSubmit, button, showAlert, submit }) => {
  return (
    <div className="mt-16 mb-10 flex  w-full justify-center lg:mb-0">
      <form
        className="w-10/12 rounded bg-white py-10 px-6 shadow-lg"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h3 className="text-3xl ">{title}</h3>
        {showAlert && (
          <div className="mt-5 flex w-full justify-center">
            <Alert info={true} />
          </div>
        )}
        {children}
        <div className="mt-14 flex w-full justify-end">
          <button
            className="rounded bg-green-500 py-2 px-10 font-semibold text-white hover:bg-green-700"
            disabled={submit}
          >
            {button}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
