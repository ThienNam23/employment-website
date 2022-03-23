import { Link } from "react-router-dom";
import { POSITIONS } from "./positions-mock";
import "./style.css";

const Positions = () => {
    return (
        <div className="_positions container p-4">
            <h3>Việc làm theo chức vụ</h3>
            <hr />
            <div className="_positions-table ps-5">
                {POSITIONS.map(position => {
                    const {id, name } = position;
                    return (
                        <Link key={id}
                            to={`/jobs?position=${id}`}
                            className="text">
                            {name}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Positions;