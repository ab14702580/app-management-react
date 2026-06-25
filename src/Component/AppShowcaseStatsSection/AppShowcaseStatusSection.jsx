import HeroImg from "../../../B12-A08-Hero-Apps/assets/hero.png";

const AppShowcaseStatusSection = () => {
    return (
        <div className="mt-16 md:mt-20">
            <img
                className="mx-auto w-full max-w-5xl px-4"
                src={HeroImg}
                alt="image here"
            />

            <div className="bg-[linear-gradient(90deg,#6d28d9,#8b5cf6)] py-14 md:py-20 lg:py-24 px-4">
                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center text-shadow-md text-shadow-black/40">
                    Trusted by Millions, Built for You
                </h1>
                <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 mt-10 md:mt-14">
                    <div className="text-white text-center font-normal">
                        <p className="mb-4 text-sm md:text-base text-[#ffffffd7]">
                            Total Downloads
                        </p>
                        <h1 className="mb-4 font-bold text-4xl sm:text-5xl lg:text-7xl">
                            29.6M
                        </h1>
                        <p className="text-sm md:text-base font-normal text-[#ffffffd7]">
                            21% more than last month
                        </p>
                    </div>
                    <div className="text-white text-center font-normal">
                        <p className="mb-4 text-sm md:text-base text-[#ffffffd7]">
                            Total Reviews
                        </p>
                        <h1 className="mb-4 font-bold text-4xl sm:text-5xl lg:text-7xl">
                            906K
                        </h1>
                        <p className="text-sm md:text-base font-normal text-[#ffffffd7]">
                            46% more than last month
                        </p>
                    </div>

                    <div className="text-white text-center font-normal">
                        <p className="mb-4 text-sm md:text-base text-[#ffffffd7] ">
                            Active Apps
                        </p>

                        <h1 className="mb-4 font-bold text-4xl sm:text-5xl lg:text-7xl">
                            132+
                        </h1>

                        <p className="text-sm md:text-base font-normal text-[#ffffffd7]">
                            31 more will Launch
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AppShowcaseStatusSection;