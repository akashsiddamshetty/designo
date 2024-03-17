import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeInfo from "@/components/HomeInfo";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <HomeInfo />
      </main>
      <Footer />
    </>
  );
}
