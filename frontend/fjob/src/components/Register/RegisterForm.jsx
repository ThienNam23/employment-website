import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { notify } from "../../service/toast";
import "./style.css";

const RegisterForm = () => {
    const [values, setValues] = useState({
        username: '',
        password: '',
        email: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        // event.preventDefault();
    };

    const navigate = useNavigate();

    const register = () => {
        notify('Đăng ký thành công', 'success', 1500, () => {
            navigate('/login');
        });
        console.log(values);
    }

    return (
        <div className="_register-form text-center mx-auto px-5 py-2">
            <h3 className="mt-2">Đăng ký</h3>
            <form action="" method="post">
                <FormControl variant="standard" className="_register-form-field">
                    <InputLabel htmlFor="username">Tên đăng nhập</InputLabel>
                    <Input
                        id="username"
                        type="text"
                        value={values.username}
                        onChange={handleChange('username')}
                    />
                </FormControl>
                <FormControl variant="standard" className="_register-form-field">
                    <InputLabel htmlFor="password">Mật khẩu</InputLabel>
                    <Input
                        id="password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl variant="standard" className="_register-form-field">
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                        id="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange('email')}
                    />
                </FormControl>
                <button type="button"
                    style={{ "width": "80%", "borderRadius": "25px" }}
                    className="btn btn-primary fw-bold"
                    onClick={register}>Đăng ký</button>
            </form>
            <div className="text-center my-3">
                Đã có tài khoản? <Link to={"/login"}>Đăng nhập ngay</Link>
            </div>
        </div>
    );
}

export default RegisterForm;