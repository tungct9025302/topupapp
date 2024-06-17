import Image from "next/image";
import RightArrowWhite from "../../public/right-arrow-white.svg";

export default function SilverBanner() {
  return <>{renderSilverBanner()}</>;
}

function renderSilverBanner() {
  return (
    <div className="banner w-[100%]  min-h-[200px] h-[fit-content] bg-center flex justify-center items-center text-gray-300">
      <div className="flex flex-row justify-between min-w-[1140px] ">
        <div className="flex flex-col">
          <div className="mb-2 text-[1.4rem] text-[#30d5ff]">
            The Loyalty Rewards Program for Gamers
          </div>
          <div className="flex flex-row items-center h-[26px]">
            <div className="mr-1 text-[14px] hover:text-[#4aff44]">
              About Razer Silver
            </div>
            <Image
              src={RightArrowWhite}
              alt=""
              width={10}
              height={10}
              className="mt-[2px]"
            ></Image>
          </div>
        </div>
        <div className="w-[500px] flex justify-center">
          <Image
            src={
              "https://media.gold.razer.com/goldweb/site/images/logo/logo-razer-silver.png"
            }
            width={200}
            height={150}
            alt=""
          ></Image>
        </div>
      </div>
    </div>
  );
}
