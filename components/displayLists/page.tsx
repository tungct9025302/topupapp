"use client";
import RightArrow from "../../public/right-arrow.svg";
import Image from "next/image";
import GoldPromotion from "../goldPromotion/page";

export default function DisplayList() {
  var newlyGameDetails = [
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/pubg-mobile-uc-code/attachment/GUYTE6BVGEZF6UCVIJDU2VKDINXWIZLT.png",
      gameDescription: "PUBG Mobile UC Code",
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/tsx-by-astronize/attachment/GUYTE6BVGEZF6VCTLA======.png",
      gameDescription: "TSX by Astronize",
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/hsr/attachment/GUYTE6BVGEZF6SDPNZVWC2JAKN2GC4RAKJQWS3A=.jpg",
      gameDescription: "Honkai: Star Rail",
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/genshin-impact/attachment/512x512GenshinImpact.png",
      gameDescription: "Genshin Impact",
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/winjoy/attachment/LNLUGXK7KRUHK3LCNZQWS3C7FA2TCMTYGUYTEKI=.png",
      gameDescription: "Winjoy Online",
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/war-planet-online/attachment/KRUHK3LCNZQWS3CJNVQWOZJVGEZHQNJRGI======.png",
      gameDescription: "War Planet Online",
    },
  ];

  var popularGames = [
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/yalla-live/attachment/GUYTE6BVGEZF6WLBNRWGCICMNF3GK===.jpg",
      gameDescription: "Yalla Live",
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/amazon-us/attachment/GUYTE6BVGEZF6QLNMF5G63Q=.jpg",
      gameDescription: "Amazon (US)",
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/apple-card-us/attachment/GUYTE6BVGEZF6QLQOBWGKICHNFTHIICDMFZGI===.jpg",
      gameDescription: "Apple Card (US)",
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/nintendo-eshop/attachment/GUYTE6BVGEZF6TTJNZ2GK3TEN4======.jpg",
      gameDescription: "Nintendo eShop",
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/tango/attachment/GUYTE6BVGEZF6VDBNZTW6ICMNF3GKX2S.jpg",
      gameDescription: "Tango",
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/google-play-gift-cards-us/attachment/GooglePlayGiftCards_US_294x166.jpg",
      gameDescription: "Google Play Gift Cards (US)",
    },
  ];

  var gamePinsDetails = [
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/pubgm/attachment/KBKUER2NL42TCMTYGUYTE===.png",
      gameDescription: "PUBG MOBILE",
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/bigo-live---bigo-tech-global/attachment/GUYTE6BVGEZF6QTJM5XV6TDJOZSQ====.jpg",
      gameDescription: "Bigo Live",
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/black-desert-online-sea/attachment/512x512_BlackDesert.jpg",
      gameDescription: "Black Desert Online (SEA)",
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/playstation-store-mena/attachment/GUYTE6BVGEZF6UDMMF4VG5DBORUW63S7KN2G64TF.jpg",
      gameDescription: "PlayStation®Store (USA)",
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/blizzard-balance-blizzard-battlenet/attachment/Blizzard_512x512.png",
      gameDescription: "BATTLE.NET CARD",
    },
    {
      image:
        "https://media.gold.razer.com/goldweb/content/catalogs/gold/razer-gold-pin/attachment/RazerGold_Pin_512x512_BlackBG.png",
      gameDescription: "Razer Gold PIN (VN)",
    },
  ];

  var titleList = [
    {
      title: "NEWLY-ADDED",
      listDetail: newlyGameDetails,
    },
    {
      title: "POPULAR",
      listDetail: popularGames,
    },
    {
      title: "GAME PINS",
      listDetail: gamePinsDetails,
    },
  ];

  return (
    <div className="flex flex-col py-5 bg-[#111] text-gray-200">
      {titleList.map((a, index) => {
        return <div key={index}>{renderGameList(a)}</div>;
      })}

      <GoldPromotion></GoldPromotion>
    </div>
  );
}

function renderGameList(list) {
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
              src={RightArrow}
              alt=""
              className="w-[12px] h-[12px]"
            ></Image>
          </div>
        </div>
        {/* Item list */}
      </div>
      <div className="flex justify-center">
        <div className="flex flex-row justify-between min-w-[1140px] mb-[10px]">
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
    <div className="flex flex-col">
      <div className="inline-block overflow-hidden rounded border-[#ffb400] border-[1px] w-[175px] h-[175px] flex justify-center mb-[5px]">
        <Image
          src={data["image"]}
          width={175}
          height={175}
          alt=""
          className="hover:scale-110 duration-300 my-auto"
        ></Image>
      </div>

      <div className="text-center text-[13px]">{data.gameDescription}</div>
    </div>
  );
}
