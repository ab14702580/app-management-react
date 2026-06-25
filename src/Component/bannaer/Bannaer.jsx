import AppShowcaseStatusSection from "../AppShowcaseStatsSection/AppShowcaseStatusSection";
import TradingAppSection from "../TradingAppSection/TradingAppSection";
import Googleplay from "../../../B12-A08-Hero-Apps/assets/google-play.png";
import Appstore from "../../../B12-A08-Hero-Apps/assets/app-store.png";

export default function Bannaer() {
    return (
        <>
            <div className="mt-16 md:mt-24 lg:mt-28 px-4">
                <div className="max-w-225 text-center mx-auto">
                    <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-150 leading-tight md:leading-22.5 mx-auto">
                        We Build{" "}
                        <span className="inline-block bg-[linear-gradient(90deg,#8b5cf6,#6d28d9)] bg-clip-text text-transparent">
                            Productive
                        </span>{" "}
                        Apps
                    </h1>

                    <p className="text-[#627382] mt-5 leading-relaxed md:leading-[1.9] tracking-normal md:tracking-wider max-w-3xl mx-auto">
                        At HERO.IO, we craft innovative apps designed to make everyday life
                        simpler, smarter, and more exciting. Our goal is to turn your ideas
                        into digital experiences that truly make an impact.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center mt-8 md:mt-10 gap-4 md:gap-6 lg:gap-10 items-center">
                    <a
                        href="https://play.google.com/store/apps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <button className="w-full sm:w-auto py-3 px-6 md:px-10 border-2 border-[#64748323] rounded-xl capitalize font-semibold flex items-center justify-center gap-2.5 cursor-pointer">
                            <img
                                className="w-7 md:w-8"
                                src={Googleplay}
                                alt="Google Play"
                            />
                            Google Play
                        </button>
                    </a>

                    <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <button className="w-full sm:w-auto py-3 px-6 md:px-10 border-2 border-[#64748323] rounded-xl capitalize font-semibold flex items-center justify-center gap-2.5 cursor-pointer">
                            <img
                                className="w-7 md:w-8"
                                src={Appstore}
                                alt="App Store"
                            />
                            App Store
                        </button>
                    </a>
                </div>
            </div>
            {/* Trust Metrics & App Showcase Section */}
            <AppShowcaseStatusSection></AppShowcaseStatusSection>
            <TradingAppSection></TradingAppSection>
        </>
    );
}