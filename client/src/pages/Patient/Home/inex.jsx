import ButtonClient from "../../../components/ButtonClient";

const Home = () => {
  return (
    <main>
      <div className="mr-auto ml-auto flex w-3/4 items-center">
        <div className="basis-3/5">
          <h5 className="mt-10 mb-3 text-xl font-semibold text-[#565ACF]">
            We Provide All Health Care Solution
          </h5>
          <h2 className="mt-9 text-5xl font-bold tracking-wide text-[#1F2278]">
            Protect Your Health And Take Care To Of Your Health
          </h2>
          <ButtonClient>Read More</ButtonClient>
        </div>
        <div className="basis-2/5">
          <img src="../../../../src/assets/hero.png" alt="" />
        </div>
      </div>
    </main>
  );
};

export default Home;
