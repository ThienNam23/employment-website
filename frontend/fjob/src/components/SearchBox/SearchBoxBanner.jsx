import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { SLIDES } from "./slide-data";
import SearchBox from "./SearchBox";
import "./style.css";

const SearchBoxBanner = () => {

    const [filterValues, setFilterValues] = useState({
        location: '',
        jobType: '',
        position: '',
        experience: ''
    });

    const handleChangeFilterValue = (event) => {
        setFilterValues({ ...filterValues, [event.target.name]: event.target.value });
    };

    return (
        <div className="row _searchbox">
            <div className="col" style={{ padding: "20px 10px 0 100px" }}>
                <h2>Tìm kiếm công việc yêu thích của bạn</h2>
                <SearchBox collapse={false} />
            </div>
            <Carousel style={{ height: "350px" }} className="col-5" interval={3000}
                controls={false} indicators={false}>
                {SLIDES.map((slide) => {
                    const { id, img } = slide;
                    return (
                        <Carousel.Item key={id}>
                            <img
                                className="d-block w-100"
                                src={img}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    );
}

export default SearchBoxBanner;