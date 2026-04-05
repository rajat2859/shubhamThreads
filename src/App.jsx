import Navbar from "./components/routes/Navbar";
import Footer from "./components/routes/Footer";
import Banner from "./components/routes/Banner";
import ComingSoon from "./components/routes/ComingSoon";
import Collections from "./components/routes/Collections";
import NewCollections from "./components/routes/NewCollections";
import Testimonials from "./components/routes/Testimonials";

import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Collections />
      <NewCollections />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
