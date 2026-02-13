import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ComingSoon from "./components/routes/ComingSoon";
import './App.css';

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
