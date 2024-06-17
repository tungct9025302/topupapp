"use client";
import DisplayList from "@/components/displayLists/page";
import Header from "@/components/header/page";
import Swiper from "@/components/swiper/page";
import SilverBanner from "@/components/silverBanner/page";
import FeaturedRewards from "@/components/featuredRewards/page";
import SilverPromotion from "@/components/silverPromotion/page";
import Contact from "@/components/contact/page";
import Footer from "@/components/footer/page";
import { useAppSelector } from "@/lib/store";

export default function HomePage() {
  const username: any = useAppSelector((state: any) => state.value.username);

  return (
    <>
      <Header logged={username}></Header>
      <Swiper></Swiper>
      <DisplayList></DisplayList>
      <SilverBanner></SilverBanner>
      <FeaturedRewards></FeaturedRewards>
      <SilverPromotion></SilverPromotion>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
