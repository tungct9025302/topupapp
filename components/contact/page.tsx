import Image from "next/image";

export default function Contact() {
  var shopList = [
    "Shop",
    "Razer Gold",
    "Razer Silver Rewards",
    "RazerStores",
    "RazerCafe",
    "Store Locator",
    "Purchase Programs",
    "Education",
    "Exclusives",
    "RazerStore Rewards",
    "Newsletter",
  ];

  var exploreList = [
    "Explore",
    "Technology",
    "Chroma RGB",
    "Concepts",
    "Esports",
    "Collabs",
  ];

  var supportList = [
    "Support",
    "Get Help",
    "Registration & Warranty",
    "Online Store",
    "RazerCare",
    "Manage Razer ID",
    "Support Videos",
    "Recycling Program",
    "Accessibility Statement",
  ];

  var companyList = [
    "Company",
    "About Us",
    "Careers",
    "Newsroom",
    "zVentures",
    "Contact Us",
  ];

  var socialIcons = [
    "Follow us",
    "https://media.gold.razer.com/goldweb/site/images/icons/social-media-icon-facebook-grey.svg",
    "https://media.gold.razer.com/goldweb/site/images/icons/social-media-icon-instagram-grey.svg",
    "https://media.gold.razer.com/goldweb/site/images/icons/social-media-icon-twitter-grey.svg?ver=20230905",
    "https://media.gold.razer.com/goldweb/site/images/icons/social-media-icon-youtube-grey.svg",
    "https://media.gold.razer.com/goldweb/site/images/icons/social-media-icon-tiktok-grey.svg",
    "https://media.gold.razer.com/goldweb/site/images/icons/social-media-icon-twitch-grey.svg",
    "https://media.gold.razer.com/goldweb/site/images/icons/social-media-icon-discord-grey.svg",
  ];

  var contactList = [shopList, exploreList, supportList, companyList];

  return (
    <div className="flex flex-col bg-[#222] pb-5">
      <div className="flex justify-center">
        <div className="flex flex-row justify-between min-w-[1140px] mb-[10px]">
          <div className="flex flex-row ">
            {contactList.map((a, index) => {
              return (
                <div key={index} className="flex flex-col pr-10">
                  {renderList(a)}
                </div>
              );
            })}

            <div className="flex flex-col ml-12">
              {socialIcons.map((a, index) => {
                return <div key={index}>{renderSocialIcons(a, index)}</div>;
              })}
            </div>
          </div>
          <div className="text-[#44d62c] text-[16px] ">
            FOR GAMERS. BY GAMERS.™
          </div>
        </div>
      </div>
    </div>
  );
}

function renderList(listData) {
  return listData.map((a, index) => {
    return (
      <div key={index} className="py-2">
        <div
          className={
            index == 0 ? "text-white text-[13px]" : "text-gray-400 text-[12px]"
          }
        >
          {a}
        </div>
      </div>
    );
  });
}

function renderSocialIcons(listData, order) {
  return (
    <div className="py-2">
      {order == 0 ? (
        <div className="text-white text-[13px]">{listData}</div>
      ) : (
        <Image src={listData} width={28} height={28} alt=""></Image>
      )}
    </div>
  );
}
