import { Outlet, useSearchParams } from "react-router-dom";
import SearchBox from "../../components/SearchBox/SearchBox";

const Jobs = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const skill = searchParams.get("skill");
    const position = searchParams.get("position");
    return (
        <div>
            {skill ? <h1>Job by skill {skill}</h1> : ''}
            {position ? <h1>Job by position {position}</h1> : ''}
            <div className="container" style={{ margin : "70px auto 20px", width : "min-content" }}>
                <SearchBox />
            </div>
            <Outlet />
            <div className="container debug-on mt-4">
                
            </div>
        </div>
    );
}

export default Jobs;