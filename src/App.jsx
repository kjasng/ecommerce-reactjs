import Layout from "@components/Layout";
import "./index.css";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/footer";

function App() {
  return (
    <>
      <Layout className="font-mono text-3xl w-full min-h-screen bg-no-repeat bg-cover bg-center bg-[url(https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/02-SLIDESHOW-1.jpeg)]">
        <Header />
        {/* <div>Content</div>
        <Footer /> */}
      </Layout>
    </>
  );
}

export default App;
