import { Chip, Stack } from "@mui/material";
import { Card } from "react-bootstrap";
import { JOBS } from "./data";
import { LocationOnOutlined, PaidOutlined, FavoriteBorderOutlined } from "@mui/icons-material";
import "./style.css";

const Jobs = () => {

    return (
        <div className="container _jobs">
            {JOBS.map(job => {
                const { id, name, companyName, companyLogo, city, salary, timeCreate, skills } = job;
                return (
                    <Card className="_job-card" key={id}>
                        <div className="d-flex">
                            <Card.Img className="_job-card-img" variant="top" src={companyLogo} />
                            <div className="my-auto">
                                <Card.Title className="_job-card-title">{name}</Card.Title>
                                <Card.Text>{companyName}</Card.Text>
                            </div>
                            <FavoriteBorderOutlined fontSize="small" className="mt-2 me-2" onClick={() => console.log()} />

                        </div>
                        <Card.Body className="_job-card-body">
                            <Card.Text>
                                <span>
                                    <LocationOnOutlined fontSize="small" /> {city}
                                </span>
                                <span className="ms-3 text-danger">
                                    <PaidOutlined fontSize="small" /> ${salary}
                                </span>
                            </Card.Text>
                            <Stack direction="row" spacing={1} className="fw-bold mt-2 _job-card-skills">
                                {skills.map(skill => {
                                    const { id, name } = skill;
                                    return (
                                        <Chip key={id} label={name} onClick={() => console.log({ name })}
                                            color="success" variant="outlined" size="small" />
                                    );
                                })}
                            </Stack>
                            <Card.Text className="text-primary _job-card-time">{timeCreate}</Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}
        </div >
    );
}

export default Jobs;