import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FeaturedListings from "./components/FeaturedListings";
import Choose from "./components/Choose";
import SimpleBack from "./components/SimpleBack";
import PopularList from "./components/PopularList";
import CountStock from "./components/CountStock";

export default function Home() {
  return (
    <main>
      <Hero/>
      <FeaturedListings/>
      <Choose/>
      <SimpleBack/>
      <PopularList/>
      <CountStock/>
    </main>
  );
}
