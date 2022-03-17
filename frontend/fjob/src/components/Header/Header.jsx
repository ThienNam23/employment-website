import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";
import "./style.css";

const Header = () => {
    return (
        <Navbar className="_header" variant="dark" fixed="top">
            <Navbar.Brand href="#home" className="_header-link">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                FJob
            </Navbar.Brand>
            <Container>
                <Nav className="me-auto">
                    <Nav.Link className="_header-link" href="#home">Việc IT</Nav.Link>
                    <Nav.Link className="_header-link" href="#features">Công ty</Nav.Link>
                    <Nav.Link className="_header-link" href="#pricing">{`Hồ sơ & CV`}</Nav.Link>
                </Nav>
                <Button size="sm" className="me-2" variant="outline-primary">Đăng nhập</Button>
                <Button size="sm" className="me-2" variant="success">Đăng ký</Button>
                <Button size="sm" variant="secondary">Đăng tuyển</Button>
            </Container>
        </Navbar>
    );
}

export default Header;