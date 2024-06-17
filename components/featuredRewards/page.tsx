import Image from "next/image";
import WhiteRightArrow from "../../public/right-arrow-white.svg";

export default function FeaturedRewards() {
  return <>{renderFeatureRewards()}</>;
}

function renderFeatureRewards() {
  var featuredDetails = [
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/silver/GATEWAY/512x512_Minecraft_2.jpg",
      gameDescription: "Minecraft (PC/Mac) - Java Edition",
      price: 90000,
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/silver/JZUW45DFNZSG6X3FKNUG64C7KYYV6VKTIQYTA===.jpg",
      gameDescription: "Nintendo eShop USD10 Voucher",
      price: 30000,
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/silver/INZHK3TDNB4XE33MNRPTCTLPNZ2GQ===.png",
      gameDescription: "Crunchyroll - 1 Month Subscription",
      price: 20000,
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/silver/LFQWY3DBEBGHKZDPEBKVGRBAGIQEOT2MIRPQ====.jpg",
      gameDescription: "Yalla Ludo USD2 Gold",
      price: 10000,
    },
  ];

  var titleList = [
    {
      title: "Featured Rewards",
      listDetail: featuredDetails,
    },
  ];
  return (
    <div className="bg-[#222] flex justify-center text-white pb-[20px]">
      <div className="flex flex-col">
        {titleList.map((a, index) => {
          return <div key={index}>{renderList(a)}</div>;
        })}
      </div>
    </div>
  );
}

function renderList(list) {
  const tempList = list.listDetail;
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-row justify-between items-center min-w-[1140px] mb-[10px]">
          {/* List title  */}
          <h2 className="text-[#ffb400] text-uppercase text-[1.2rem]">
            {list.title}
          </h2>
          {/* View all tab  */}
          <div className="flex flex-row items-center cursor-pointer">
            <div className="mr-2 hover:text-green-400">View All</div>
            <Image
              src={WhiteRightArrow}
              alt=""
              className="w-[12px] h-[12px]"
            ></Image>
          </div>
        </div>
        {/* Item list */}
      </div>
      <div className="flex justify-center">
        <div className="flex flex-row min-w-[1140px] mb-[10px]">
          {tempList.map((a, index) => {
            return <div key={index}>{renderListByTitle(a)}</div>;
          })}
        </div>
      </div>
    </>
  );
}

function renderListByTitle(data) {
  return (
    <div className="flex flex-col w-[175px] mx-2">
      <div className="relative inline-block overflow-hidden rounded border-[#30d5ff] border-[1px]  flex justify-center mb-[5px]">
        <Image
          src={data["image"]}
          width={175}
          height={175}
          alt=""
          className="hover:scale-110 duration-300 my-auto"
        ></Image>
        <div className="absolute bottom-0 left-0 w-[100%] py-[0.25rem] px-[0.5rem] z-[1] bg-[#111c]">
          <div className="flex flex-wrap justify-center">
            <Image
              src="https://media.gold.razer.com/goldweb/site/images/icons/coin_zsilver.svg"
              alt=""
              width={18}
              height={18}
            ></Image>
            <div className="text-[#bbb] text-[13px] ml-[5px]">{data.price}</div>
          </div>
        </div>
      </div>

      <div className="text-center text-[16px]">{data.gameDescription}</div>
    </div>
  );
}
