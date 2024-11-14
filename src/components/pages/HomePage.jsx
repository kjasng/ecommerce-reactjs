import Layout from "@components/Layout";
import Header from "@components/UI/Header";
import Footer from "@components/UI/Footer";
import Hero from "./index/hero";

function HomePage() {
  return (
    <>
      <Layout className="font-mono min-h-full flex flex-col">
        <Header className="z-30" />
        <div className="flex justify-center items-center top-0 left-0 w-screen h-[47.2rem] bg-center bg-no-repeat bg-cover bg-[url(https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/02-SLIDESHOW-1.jpeg)]">
          <Hero />
        </div>

        <Footer />
      </Layout>
    </>
  );
}

export default HomePage;
