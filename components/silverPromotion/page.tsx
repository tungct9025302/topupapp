"use client";

import { useRef } from "react";
import Image from "next/image";
import BlueRightArrow from "../../public/blue-right-arrow.svg";
import WhiteLeftArrow from "../../public/left-arrow-white.svg";
import WhiteRightArrow from "../../public/right-arrow-white.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function SilverPromotion() {
  const swiperRef = useRef<any>(null);
  var promotionDetails = [
    {
      order: 1,
      icon: "https://media.gold.razer.com/goldweb/content/promotions/silver/promotions-silver-may2024-redeem-win/GM4DA6BRG4YF6UTBPJSXEICTNFWHMZLSEBGWC6JALFXXKICXNFXA====.png",
      title: "ĐIỂM MỘT ĐÔI ĐỒNG HÀNH THÂN THIỆN DU LỊCH",
      description: "Nhập cuộc với 1.500 Razer Silver",
    },
    {
      order: 2,
      icon: "https://media.gold.razer.com/goldweb/content/promotions/silver/silver-may2024-mbmddeals/GM4DA6BRG4YF6UTBPJSXEICTNFWHMZLSEBGGS3LJORSWILKUNFWWKICEMVQWY4ZAFBGWC6JAGIYDENBJL52GKYLTMVZF6NI=.png",
      title: "EPIC SILVER REDEMPTION ƯU ĐÃI HÀNG NGÀY THỨ HAI",
      description: "Số lượng giải thưởng có hạn.",
    },
    {
      order: 3,
      icon: "https://media.gold.razer.com/goldweb/content/promotions/silver/a-gift-from-bake--2-500-razer-silver/GM4DA6BRG4YF6QSBJNCQ====.png",
      title: "QUÀ TẶNG TỪ BAKE: 2.500 RAZER SILVER",
      description:
        "Đăng ký với mã ‘RAZERSILVER’ để nhận món quà chào mừng của bạn! Nhấn vào đây để tìm hiểu thêm.",
    },
  ];

  return (
    <div className="flex flex-col bg-[#222] pb-8">
      <div className="flex justify-center">
        <div className="flex flex-row justify-between min-w-[1140px] mb-4">
          {/* List title  */}
          <h2 className="text-[#30d5ff] text-uppercase text-[1.2rem]">
            Razer Silver Promotions
          </h2>
          {/* View all tab  */}
          <div className="flex flex-row items-center cursor-pointer ">
            <div className="mr-2 cursor-pointer text-white hover:text-green-400">
              View All
            </div>

            <Image
              src={BlueRightArrow}
              alt=""
              className="w-[12px] h-[12px]"
            ></Image>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-white">
        <div className="flex flex-row justify-between items-center min-w-[1140px] mb-[10px]">
          <Image
            src={WhiteLeftArrow}
            alt=""
            className="h-5 w-5"
            onClick={() => {
              swiperRef.current.slidePrev();
            }}
          ></Image>

          <div className="w-[1064px]">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              navigation={true}
              slidesPerView={2}
              modules={[Navigation]}
              className="mySwiper"
            >
              {promotionDetails.map((data, index) => {
                return (
                  <SwiperSlide key={index}>
                    {renderPromotionTab(data)}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <Image
            src={WhiteRightArrow}
            alt=""
            className="h-5 w-5"
            onClick={() => {
              swiperRef.current.slideNext();
            }}
          ></Image>
        </div>
      </div>
    </div>
  );
}

function renderPromotionTab(data) {
  return (
    <div
      className={
        "flex flex-row items-center hover:text-[#30d5ff] rounded promotion-text silver-promotion-" +
        data.order
      }
    >
      <Image
        src={data.icon}
        alt=""
        width={190}
        height={90}
        className="size-[0.7]"
      ></Image>
      <div className="flex flex-col justify-center min-w-[200px]">
        <div className="text-[1rem] font-bold ">{data.title}</div>
        <div className="text-[0.8rem] text-white">{data.description}</div>
      </div>
    </div>
  );
}
