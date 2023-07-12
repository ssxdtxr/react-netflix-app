import React from 'react';
import {Layout} from "../../components/layout/Layout";
import s from "./Signup.module.scss"
import back from "../../assets/images/back.jpg"
import {FormInput} from "../../components/UI/FormInput/Input";
import {useForm} from "react-hook-form";

interface IFormState {
    name: string,
    email: string,
    password: string,
    repeatPassword: string
}
export const Signup = () => {
    const {register, formState: {isValid, errors, }, handleSubmit} = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onSubmit',
        reValidateMode: "onChange"
    })

    const loginHandler: SubmitHandler<IFormState> = (data) => {
        alert(JSON.stringify(data))
    }

    return (
        <Layout>
            <div className={s.signup}>
                <div className={s.back}>
                    <img src={back} alt="background"/>
                </div>
                <div className={s.content}>
                    <div className={s.main}>
                        <h1>Бесконечное количесвто фильмов, TV ШОУ, и многого дрогого</h1>
                        <h4>Смотри что хочешь и когда хочешь.</h4>
                        <h6>Готовы к просмотру? Регистрируйся, если хочешь получить незабываемые эмоции</h6>
                    </div>
                    <form className={s.form}>
                        <FormInput name={'email'} placeholder={'Введите Email'} register={register}/>
                        <FormInput name={'password'} placeholder={'Придумайте пароль'} register={register}/>
                        <button>Зарегаться</button>
                    </form>
                    <button>Войти в акк</button>
                </div>
            </div>
        </Layout>
    );
};

