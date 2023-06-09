const Home = () => {
  return (
    <main className="mt-10">
      <div className="mr-auto ml-auto flex w-3/4 items-center">
        <div className="basis-3/5">
          <h5 className="mt-10 w-[245px] bg-[url('../../../../../src/assets/bg-text.png')] text-sm font-semibold text-[#565ACF] md:w-[345px] md:text-xl ">
            We Provide All Health Care Solution
          </h5>
          <h2 className="my-9 w-fit text-3xl font-bold tracking-wide text-[#1F2278] md:text-5xl">
            Protect Your Health And Take Care To Of Your Health
          </h2>
          <button className="button-client bg-[#F17732] hover:bg-[#f7813c]">
            Read More
          </button>
        </div>
        <div className="basis-2/5 animate-updown-slow">
          <img src="../../../../src/assets/hero.png" alt="" />
        </div>
      </div>
      <img
        src="../../../../../src/assets/triangle.png"
        alt=""
        className="absolute bottom-80 left-20 -z-10 animate-updown-fast"
      />
      <img
        src="../../../../../src/assets/round.png"
        alt=""
        className="absolute top-80 left-52 -z-10 animate-updown-fast"
      />
      <img
        src="../../../../../src/assets/square.png"
        alt=""
        className="absolute top-72 left-[53%] -z-10 animate-updown-fast"
      />
      <img
        src="../../../../../src/assets/plus.png"
        alt=""
        className="absolute bottom-52 left-[45%] -z-10 animate-updown-fast"
      />
      <img
        src="../../../../../src/assets/wave.png"
        alt=""
        className="absolute bottom-60 left-[82%] -z-10 animate-left-right"
      />
    </main>
  );
};

export default Home;
