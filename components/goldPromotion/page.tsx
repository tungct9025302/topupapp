"use client";

import { useRef } from "react";
import Image from "next/image";
import RightArrow from "../../public/right-arrow.svg";
import WhiteLeftArrow from "../../public/left-arrow-white.svg";
import WhiteRightArrow from "../../public/right-arrow-white.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Promotion1Icon from "../../public/promotion1icon.png";
import Promotion2Icon from "../../public/promotion2icon.png";
import Promotion3Icon from "../../public/promotion3icon.png";
import Promotion4Icon from "../../public/promotion4icon.png";

export default function GoldBanner() {
  const swiperRef = useRef<any>(null);
  var promotionDetails = [
    {
      order: 1,
      icon: Promotion1Icon,
      title: "Honkai: Star Rail V2.1 Phase 2 Nhận Ngay 10% Hoàn Tiền",
      description: "Và Nhận Aventurine Miễn Phí!",
    },
    {
      order: 2,
      icon: Promotion2Icon,
      title: "PUBG Mobile A6 x Spy Family",
      description: "Nhận ngay trang phục mới Anya",
    },
    {
      order: 3,
      icon: Promotion4Icon,
      title: "PUBG Mobile A6 Endless Sand",
      description: "Nhận bonus UC khi nạp tiền bằng RAZER GOLD",
    },
    {
      order: 4,
      icon: Promotion3Icon,
      title: "Genshin Impact V4.6 Phase 1 Nhận Ngay 10% Hoàn Tiền",
      description: "ĐỪNG BỎ LỠ Arlecchino VÀ Lyney!",
    },
  ];

  return (
    <div className="flex flex-col pt-5">
      <div className="flex justify-center">
        <div className="flex flex-row justify-between min-w-[1140px] mb-4">
          {/* List title  */}
          <h2 className="text-[#ffb400] text-uppercase text-[1.2rem]">
            Razer Gold Promotions
          </h2>
          {/* View all tab  */}
          <div className="flex flex-row items-center cursor-pointer ">
            <div className="mr-2 cursor-pointer hover:text-green-400">
              View All
            </div>

            <Image
              src={RightArrow}
              alt=""
              className="w-[12px] h-[12px]"
            ></Image>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
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
        "flex flex-row hover:text-[#4aff44] rounded promotion-text gold-promotion-" +
        data.order
      }
    >
      <Image
        src={data.icon}
        alt=""
        width={200}
        height={114}
        className=""
      ></Image>
      <div className="flex flex-col justify-center">
        <div className="text-[1rem] font-bold ">{data.title}</div>
        <div className="text-[0.8rem] text-white">{data.description}</div>
      </div>
    </div>
  );
}
