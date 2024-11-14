import Layout from "@components/Layout";
import Header from "@components/UI/Header";
import Footer from "@components/UI/Footer";
import Hero from "./index/hero";

function HomePage() {
  return (
    <>
      <Layout className="font-mono min-h-full flex flex-col">
        <Header className="z-30" />
        <Hero></Hero>
        <Footer />
      </Layout>
    </>
  );
}

export default HomePage;
