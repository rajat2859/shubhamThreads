import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ComingSoon from "./components/routes/ComingSoon";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <ComingSoon />
      <Footer />
    </div>
  );
};

export default App;
