"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Swiper() {
  let router = useRouter();
  let [state, setState] = useState(0);
  function myFunction() {
    if (state < 4) {
      setState(state + 1);
    } else {
      setState(0);
    }

    renderList();
  }
  // setInterval(myFunction, 5000);

  function renderSwiperImage(a, index) {
    return (
      <div className={state == index ? `` : "popup"} data-carousel-item>
        <div className="test">
          <div className="flex flex-row justify-between items-center min-w-[1140px] mb-[50px] ">
            <div className="text-white flex-col">
              <div className="text-[20px] font-normal">{a.title}</div>
              <div className="text-gray-400">{a.description}</div>
            </div>
            <div
              className="px-20 bg-[#44d62c] rounded-sm font-medium text-[14px] cursor-pointer content-center text-black py-[6px] font-bold"
              onClick={() => {
                router.push("/my-wallet");
              }}
            >
              {a.btnDescription}
            </div>
          </div>
        </div>

        <div className={state == index ? `popup show` : "popup"}>
          <Image
            src={a.bg}
            width={1903}
            height={200}
            className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-[32rem] bg-no-repeat z-0 duration-500 ease-out transition-all inset-0 bg-gray-900"
            alt="... flex flex-row items-end h-[100%]"
          />
        </div>
      </div>
    );
  }

  function renderList() {
    return swiperList.map((a, index) => {
      return <div key={index}>{renderSwiperImage(a, index)}</div>;
    });
  }

  var swiperList = [
    {
      bg: "https://media.gold.razer.com/goldweb/content/home/banners/6639f406f2396b4cd51b74ca/GE4TEMDYGUYDAX2IN5XGWYLJEBJXIYLSEBJGC2LMEBLDELRSEBIGQYLTMUQDCX2HNRXWEYLM.jpg",
      title: "Honkai: Star Rail V2.2 Phase 1 Nhận Ngay 5% Hoàn Tiền",
      description: "Và Nhận Robin Miễn Phí!",
      btnDescription: "Nạp Ngay",
    },
    {
      bg: "https://media.gold.razer.com/goldweb/content/home/banners/6626087e73619d25f24c8f0f/GE4TEMDYGUYDAX2IKAWUIZLTNN2G64C7I5CU4U2IJFHF6QKQKIZDAMRU.jpg",
      title: "Genshin Impact V4.6 Phase 1 Nhận Ngay 10% Hoàn Tiền",
      description: "ĐỪNG BỎ LỠ Arlecchino VÀ Lyney",
      btnDescription: "Nạp Ngay",
    },
    {
      bg: "https://media.gold.razer.com/goldweb/content/home/banners/65eebe5573598e607d619e8d/GE4TEMDYGUYDAX2QKVBEOTK7IE2Q====.jpg",
      title: "PUBGM A6 Endless Sand Promotion",
      description: "Nhận bonus UC khi nạp tiền bằng RAZER GOLD",
      btnDescription: "Nạp Ngay",
    },
    {
      bg: "https://media.gold.razer.com/goldweb/content/home/banners/6629b2e973619d25f24cf3d8/GE4TEMDYGUYDAX2SMF5GK4RAKNUWY5TFOIQE2YLZEBMW65JAK5UW4===.jpg",
      title: "ĐÁNH GIÁ MỘT ĐÔI ĐỒNG HÀNH THÂN THIỆN DU LỊCH",
      description: "Nhập cuộc với 1.500 Razer Silver",
      btnDescription: "TÌM HIỂU THÊM",
    },
    {
      bg: "https://media.gold.razer.com/goldweb/content/home/banners/6634ac1a73619d25f24e0924/GE4TEMDYGUYDAX2SMF5GK4RAKNUWY5TFOIQEY2LNNF2GKZBNKRUW2ZJAIRSWC3DTEAUE2YLZEAZDAMRUFFPXIZLBONSXE===.jpg",
      title: "EPIC SILVER REDEMPTION ƯU ĐÃI HÀNG NGÀY THỨ HAI",
      description: "Số lượng giải thưởng có hạn.",
      btnDescription: "Xem chi tiết tại đây.",
    },
  ];

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      <div className="relative overflow-hidden  md:h-[30rem] background z-[-1]">
        {renderList()}
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-10 rtl:space-x-reverse">
        <button
          type="button"
          className={state == 0 ? "button bg-green-500" : "button bg-gray-400"}
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className={state == 1 ? "button bg-green-500" : "button bg-gray-400"}
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className={state == 2 ? "button bg-green-500" : "button bg-gray-400"}
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          className={state == 3 ? "button bg-green-500" : "button bg-gray-400"}
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          className={state == 4 ? "button bg-green-500" : "button bg-gray-400"}
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
      </div>

      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={() => setState(state > 0 ? state - 1 : swiperList.length - 1)}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 da  rk:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={() => setState(state < swiperList.length - 1 ? state + 1 : 0)}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
