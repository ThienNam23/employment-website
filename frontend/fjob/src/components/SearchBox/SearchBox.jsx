import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { SLIDES } from "./slide-data";
import "./style.css";

const SearchBox = () => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [city, setCity] = useState('');

    const hangleCity = (event) => {
        setCity(event.target.value);
    };

    return (
        <div className="row _searchbox">
            <div className="col" style={{ padding: "20px 10px 0 100px" }}>
                <h2>Tìm kiếm công việc yêu thích của bạn</h2>
                <form className="form-group d-flex justify-content-between ">
                    <div className="_searchbox-form-body ">
                        <input type="text" className="form-control" placeholder="Tìm kiếm theo kỹ năng, chức vụ, công ty, ..."/>
                        <div>
                            <h5 className="my-3">Tìm kiếm nâng cao</h5>
                            <div className="_searchbox-advance " >
                                <FormControl size="small"
                                    color="success"
                                    className="_searchbox-advance-item">
                                    <InputLabel>Địa điểm</InputLabel>
                                    <Select
                                        value={city}
                                        label="Địa điểm"
                                        onChange={hangleCity}
                                    >
                                        <MenuItem value="">--</MenuItem>
                                        <MenuItem value={10}>Hà Nội</MenuItem>
                                        <MenuItem value={20}>Đà Nẵng</MenuItem>
                                        <MenuItem value={30}>Tp. Hồ Chí Minh</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl size="small"
                                    color="success"
                                    className="_searchbox-advance-item">
                                    <InputLabel>Hình thức làm việc</InputLabel>
                                    <Select
                                        value={age}
                                        label="Hình thức làm việc"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="">--</MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl size="small"
                                    color="success"
                                    className="_searchbox-advance-item">
                                    <InputLabel>Chức vụ</InputLabel>
                                    <Select
                                        value={age}
                                        label="Chức vụ"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="">--</MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl size="small"
                                    color="success"
                                    className="_searchbox-advance-item">
                                    <InputLabel>Yêu cầu kinh nghiệm</InputLabel>
                                    <Select
                                        value={age}
                                        label="Yêu cầu kinh nghiệm"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="">--</MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>

                        </div>
                    </div>
                    <div>
                        <button className="btn btn-success" type="submit">Tìm kiếm</button>
                    </div>
                </form>

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

export default SearchBox;