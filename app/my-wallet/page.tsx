"use client";

import Header from "@/components/header/page";
import MyWallet from "@/components/myWallet/page";
import { useAppSelector } from "@/lib/store";

export default function page() {
  const username: any = useAppSelector((state: any) => state.value.username);
  return (
    <>
      <MyWallet logged={username}></MyWallet>
    </>
  );
}