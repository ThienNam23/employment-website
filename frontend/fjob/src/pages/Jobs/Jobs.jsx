import { Outlet, useSearchParams } from "react-router-dom";

const Jobs = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const skill = searchParams.get("skill");
    const position = searchParams.get("position");
    console.log(searchParams);
    return (
        <div>
            {skill ? <h1>Job by skill {skill}</h1> : ''}
            {position ? <h1>Job by position {position}</h1> : ''}
            <div>Jobs page, job search bar here</div>
            <Outlet />
        </div>
    );
}

export default Jobs;