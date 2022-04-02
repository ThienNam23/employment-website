import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { notify } from "../../service/toast";
import "./style.css";

const LoginForm = () => {
    const [values, setValues] = useState({
        username: '',
        password: '',
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

    const login = () => {
        if (values.username === 'admin' && values.password === 'admin') {
            notify('Đăng nhập thành công', 'success');
        } else {
            notify('Sai thông tin đăng nhập', 'error');
        }
    }
    
    return (
        <div className="_login-form text-center mx-auto px-5 py-2">
            <h3 className="mt-2">Đăng nhập</h3>
            <form action="" method="post">
                <FormControl variant="standard" className="_login-form-field">
                    <InputLabel htmlFor="username">Tên đăng nhập</InputLabel>
                    <Input
                        id="username"
                        type="text"
                        value={values.username}
                        onChange={handleChange('username')}
                    />
                </FormControl>
                <FormControl variant="standard" className="_login-form-field">
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
                <div className="text-start mb-4">
                    <Link to={"/forgot-password"}>Quên mật khẩu?</Link>
                </div>
                <button type="button" 
                style={{ "width": "80%", "borderRadius": "25px" }} 
                className="btn btn-primary fw-bold"
                onClick={login}>Đăng nhập</button>
            </form>
            <div className="text-center my-3">
                Chưa có tài khoản? <Link to={"/register"}>Đăng ký ngay</Link>
            </div>
        </div>
    );
}

export default LoginForm;