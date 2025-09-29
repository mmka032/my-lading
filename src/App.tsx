import Layout from "./components/Layout";
import AboutUs from "./components/sections/AboutUs";
import Brand from "./components/sections/Brand";
import { Hero } from "./components/sections/Hero";
import Numbers from "./components/sections/Numbers";
import { Services } from "./components/sections/Services";
import Contact from "./components/sections/ContactForm";

function App() {
  return (
    <Layout title="landing page">
      <Hero />
      <Numbers />
      <Brand />
      <Services />
      <AboutUs />
      <Contact />
    </Layout>
  );
}

export default App;
