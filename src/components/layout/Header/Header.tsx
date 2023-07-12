import React from 'react';
import s from "./Header.module.scss"
// @ts-ignore
import logo from "../../../assets/images/logo.png"
import {useNavigate} from "react-router-dom";

export const Header = ({login}: any) => {
    const navigate = useNavigate()
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img width={200} height={70} src={logo} alt="logo"/>
            </div>
            <button onClick={() => navigate(login ? "/login" : "/signup")}>{login ? "Log In" : "Sign In"}</button>
        </header>
    );
};

