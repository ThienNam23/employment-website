import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <main>
      <Header />
      <div style={{ marginTop: "55px" }}>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default App;
