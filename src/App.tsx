import Layout from "./components/Layout";
import Brand from "./components/sections/Brand";
import { Hero } from "./components/sections/Hero";
import Numbers from "./components/sections/Numbers";

function App() {
  return (
    <Layout title="landing page">
      <Hero />
      <Numbers />
      <Brand />
    </Layout>
  );
}

export default App;
