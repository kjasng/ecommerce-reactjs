import Layout from "@components/Layout";
import "./index.css";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/footer";

function App() {
  return (
    <>
      <Layout className="font-mono text-3xl min-h-screen relative">
        <Header className="z-10" />
        <div className="top-0 absolute flex justify-center w-full h-3/4 bg-no-repeat bg-conver bg-center bg-[url(https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/02-SLIDESHOW-1.jpeg)]"></div>
        {/* <div>Content</div>
        <Footer /> */}
      </Layout>
    </>
  );
}

export default App;
