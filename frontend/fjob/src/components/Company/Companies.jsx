import { Avatar } from "@mui/material";
import { Button, Card } from "react-bootstrap";
import { COMPANY } from "./data";
import "./style.css";
import { FormatQuoteOutlined, LocationOnOutlined, StarBorderPurple500Outlined } from "@mui/icons-material";

const Companies = () => {
    return (
        <div className="container _companies">
            {COMPANY.map((company) => {
                const { id, name, slogan, logo, cover, address, rating } = company;
                return (
                    <Card className="_company-card" key={id}>
                        <div className="_company-card-img">
                            <Card.Img variant="top" src={cover} alt={name} />
                            <Avatar className="_company-card-logo" variant="rounded" src={logo} alt={name} />
                        </div>
                        <Card.Body className="_company-card-body">
                            <Card.Title className="_company-card-name">{name.length > 40 ? name.substring(0, 40) + "..." : name}</Card.Title>
                            <Card.Text className="_company-card-slogan mb-2">
                                <FormatQuoteOutlined fontSize="large" />
                                <span className="mt-1 ms-2">{slogan.length > 70 ? slogan.substring(0, 70) + "..." : slogan}</span>
                            </Card.Text>
                            <Card.Text>
                                <span>
                                    <LocationOnOutlined fontSize="small" /> {address}
                                </span>
                            </Card.Text>
                            <Card.Text>
                                <span>
                                    <StarBorderPurple500Outlined fontSize="small" /> {rating}
                                </span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    );
}

export default Companies;