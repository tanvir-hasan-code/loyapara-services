import CategoryGrid from "@/Components/CategoryGrid/CategoryGrid";
import EmergencyBar from "@/Components/EmergencyBar/EmergencyBar";
import Hero from "@/Components/Hero/Hero";
import Reviews from "@/Components/Reviews/Reviews";
import Steps from "@/Components/Steps/Steps";
// import ServiceCard from "@/Components/Service/ServiceCard";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Hero />
      <CategoryGrid />
      {/* <ServiceCard/> */}
      <EmergencyBar />
      <Steps />
      <Reviews/>
    </div>
  );
}
