import SearchBox from "../../components/SearchBox/SearchBox";
import Jobs from "../../components/Job/Jobs";
import Companies from "../../components/Company/Companies";

const Home = () => {
    return (
        <>
            <SearchBox />
            <div>
                <h3 className="m-3">Việc làm mới nhất</h3>
                <Jobs />
                <h3 className="m-3">Nhà tuyển dụng nổi bật</h3>
                <Companies />
            </div>
        </>
    );
}

export default Home;