import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Highlights from "../components/Highlights";
import Reviews from "../components/Reviews";
import Agents from "../components/Agents";
import Footer from "../components/Footer";

function Home() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Features />
      <Highlights />
      <Reviews />
      <Agents />
      <Footer />
    </Layout>
  );
}

export default Home;