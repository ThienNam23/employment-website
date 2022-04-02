import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { EXPERIENCES, JOB_TYPES, LOCATIONS, POSITIONS } from "./checkbox-options-mock";
import "./style.css";

const SearchBox = ({ collapse = true }) => {

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
        <div className="d-flex justify-content-between " style={{ maxWidth : "64vw" }}>
            <div className="_searchbox-form-body ">
                <input type="text" className="form-control" placeholder="Tìm kiếm việc làm theo kỹ năng, chức vụ, công ty, ..." />
                <div>
                    <h5 className="my-3">Tìm kiếm nâng cao</h5>
                    <div className={`_searchbox-advanced ${collapse ? '_searchbox-advanced-collapse' : ''}`} >
                        <FormControl size="small"
                            color="success"
                            className="_searchbox-advanced-item">
                            <InputLabel>Địa điểm</InputLabel>
                            <Select
                                name="location"
                                value={filterValues.location}
                                label="Địa điểm"
                                onChange={handleChangeFilterValue}>
                                {LOCATIONS.map(item => {
                                    const { id, value, title } = item;
                                    return (
                                        <MenuItem value={value} key={id}>{title}</MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                        <FormControl size="small"
                            color="success"
                            className="_searchbox-advanced-item">
                            <InputLabel>Hình thức làm việc</InputLabel>
                            <Select
                                name="jobType"
                                value={filterValues.jobType}
                                label="Hình thức làm việc"
                                onChange={handleChangeFilterValue}>
                                {JOB_TYPES.map(item => {
                                    const { id, value, title } = item;
                                    return (
                                        <MenuItem value={value} key={id}>{title}</MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                        <FormControl size="small"
                            color="success"
                            className="_searchbox-advanced-item">
                            <InputLabel>Cấp bậc</InputLabel>
                            <Select
                                name="position"
                                value={filterValues.position}
                                label="Cấp bậc"
                                onChange={handleChangeFilterValue}>
                                {POSITIONS.map(item => {
                                    const { id, value, title } = item;
                                    return (
                                        <MenuItem value={value} key={id}>{title}</MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                        <FormControl size="small"
                            color="success"
                            className="_searchbox-advanced-item">
                            <InputLabel>Yêu cầu kinh nghiệm</InputLabel>
                            <Select
                                name="experience"
                                value={filterValues.experience}
                                label="Yêu cầu kinh nghiệm"
                                onChange={handleChangeFilterValue}>
                                {EXPERIENCES.map(item => {
                                    const { id, value, title } = item;
                                    return (
                                        <MenuItem value={value} key={id}>{title}</MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </div>
            <div>
                <button className="btn btn-success" type="submit">Tìm kiếm</button>
            </div>
        </div>
    );
}

export default SearchBox;