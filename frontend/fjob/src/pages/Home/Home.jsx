import Jobs from "../../components/Job/Jobs";
import Companies from "../../components/Company/Companies";
import SearchBoxBanner from "../../components/SearchBox/SearchBoxBanner";

const Home = () => {
    return (
        <div style={{ marginTop: "-55px"}}>
            <SearchBoxBanner />
            <div>
                <h3 className="m-3">Việc làm mới nhất</h3>
                <Jobs />
                <h3 className="m-3">Nhà tuyển dụng nổi bật</h3>
                <Companies />
            </div>
        </div>
    );
}

export default Home;