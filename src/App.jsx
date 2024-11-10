import Header from "@components/Header/Header";
import Layout from "@components/Layout";
import Footer from "@components/Footer/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Layout className="font-mono h-full flex flex-col">
        <Header className="z-10" />
        <div className="relative top-0 left-0 w-full h-[47.2rem] bg-center bg-no-repeat bg-cover bg-[url(https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/02-SLIDESHOW-1.jpeg)]"></div>
        <Footer />
      </Layout>
    </>
  );
}

export default App;
