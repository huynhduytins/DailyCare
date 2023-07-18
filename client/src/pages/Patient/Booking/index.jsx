const Booking = () => {
  return (
    <div className="m-auto my-20 flex h-screen w-11/12 items-center justify-around rounded-[40px] bg-[#f5f5fc] bg-[url('../../../../src/assets/mobile-background.png')] bg-center bg-no-repeat tracking-wide">
      <form className="flex h-fit w-fit basis-1/4 flex-col gap-10 rounded-3xl bg-white py-10 px-8">
        <h2 className="text-center text-2xl font-bold text-[#1F2278]">
          Đặt lịch khám
        </h2>
        <select
          name="department"
          id="department"
          className="rounded-lg border-2 border-blue-200 py-4 px-6 outline-none"
        >
          <option value="ophthalmology">Ophthalmology</option>
          <option value="odontology">Odontology</option>
          <option value="general">General</option>
        </select>
        <input
          type="name"
          id="name"
          name="name"
          placeholder="Your Name"
          className="rounded-lg border-2 border-blue-200 py-4 px-6 outline-none"
        />
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone Number"
          className="rounded-lg border-2 border-blue-200 py-4 px-6 outline-none"
        />
        <input
          type="date"
          className="rounded-lg border-2 border-blue-200 py-4 px-6 outline-none"
        />
        <button className="button-client m-auto w-2/3 bg-[#f7813c]">
          Appointment Now
        </button>
      </form>
      <div className="relative h-fit">
        <img src="../../../../src/assets/mobile.png" alt="" />
        <img
          className="absolute bottom-4 right-0 h-[530px] w-[310px] animate-left-right-fast"
          src="../../../../src/assets/woman.png"
          alt=""
        />
        <img
          src="../../../../src/assets/message.png"
          alt=""
          className="absolute top-0 right-0 animate-updown-fast"
        />
        <img
          src="../../../../src/assets/position.png"
          alt=""
          className="absolute top-1/3 left-10 animate-updown-slow"
        />
        <img
          src="../../../../src/assets/checked.png"
          alt=""
          className="absolute top-14 left-0 animate-updown-fast"
        />
        <img
          src="../../../../src/assets/setting.png"
          alt=""
          className="absolute top-2/3 right-1/3 animate-updown-fast"
        />
      </div>
    </div>
  );
};

export default Booking;
