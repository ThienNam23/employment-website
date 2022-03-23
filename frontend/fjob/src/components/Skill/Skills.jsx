import { Link } from "react-router-dom";
import { SKILLS } from "./skills-mock";
import "./style.css";

const Skills = () => {
    return (
        <div className="_skills container p-4">
            <h3>Việc làm theo kỹ năng</h3>
            <hr />
            <div className="_skills-table ps-5">
                {SKILLS.map(skill => {
                    const {id, name } = skill;
                    const code = name.toLowerCase().replace(/ /g, "-");
                    return (
                        <Link key={id}
                            to={`/jobs?skill=${code}`}
                            className="text">
                            {name}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Skills;