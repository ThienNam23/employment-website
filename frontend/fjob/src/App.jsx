import Companies from "./components/Company/Companies";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Jobs from "./components/Job/Jobs";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  return (
    <main>
      <Header />
      <div>
        <SearchBox />
        <div>
          <h3 className="m-3">Việc làm mới nhất</h3>
          <Jobs />
          <h3 className="m-3">Nhà tuyển dụng nổi bật</h3>
          <Companies />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
