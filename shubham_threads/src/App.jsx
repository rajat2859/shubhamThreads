import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "100px", textAlign: "center" }}>
        <h1>The site is working!</h1>
      </main>
      <Footer />
    </div>
  );
};

export default App;
