import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
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
      <ToastContainer style={{ marginTop : "60px" }}/>
    </main>
  );
}

export default App;
