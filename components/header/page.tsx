"use client";

import Image from "next/image";
import SearchIcon from "/public/search.svg";
import RiotpointIcon from "/public/riot-points.png";
import GlobalIcon from "/public/global.svg";
import Link from "next/link";
import { logOut, logIn } from "@/lib/features/auth-slices";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function Header({ logged }) {
  const dispatch = useDispatch();
  const router = useRouter();

  function returnLoggedButton(logged) {
    return logged ? (
      <Link
        href=""
        className="px-4 bg-gray-500 rounded-sm font-medium text-[12px] content-center text-white py-[6px] px-3"
        onClick={() => {
          dispatch(logOut());
          window.location.reload();
        }}
      >
        LOG OUT
      </Link>
    ) : (
      <Link
        href={"/login"}
        className="px-4 bg-[#44d62c] rounded-sm font-medium text-[12px] content-center text-black py-[6px] px-3 hover:cursor-pointer"
      >
        LOG IN
      </Link>
    );
  }

  return (
    <section
      id="header"
      className="justify-center flex bg-[#222] text-gray-200"
    >
      {/* Left navigation bar */}
      <div className="flex flex-row justify-between items-center min-w-[1140px] min-h-[50px] ">
        <div className="flex flex-row">
          <Image
            src={RiotpointIcon}
            alt=""
            className="size-[23px] cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          ></Image>

          <div className={"flex flex-row"}>
            <div
              className={logged ? "mx-4 cursor-pointer" : "hidden"}
              onClick={() => {
                router.push("/my-wallet");
              }}
            >
              My Wallet
            </div>
            <div className="mx-4">Partners</div>
            <div className="mx-4">Help</div>
          </div>
        </div>
        {/* Right navigation bar */}
        <div className="flex flex-row space-x-2">
          <Image
            src={SearchIcon}
            alt=""
            className="w-[18px] h-[18px] mt-[8px] mr-[20px]"
          ></Image>
          <div className="border-[1px] border-gray-500 rounded-sm  py-[6px] px-4 background-transparent flex flex-row space-x-1">
            <Image
              src={GlobalIcon}
              alt=""
              className="w-[16px] h-[16px] my-auto"
            ></Image>
            <div className="text-[13px] font-medium"> VN</div>
          </div>
          {returnLoggedButton(logged)}
        </div>
      </div>
    </section>
  );
}
