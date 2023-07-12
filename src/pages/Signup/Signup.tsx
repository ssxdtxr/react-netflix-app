import React from 'react';
import {Layout} from "../../components/layout/Layout";
import s from "./Signup.module.scss"
// @ts-ignore
import back from "../../assets/images/back.jpg"
import {FormInput} from "../../components/UI/FormInput/Input";
import {SubmitHandler, useForm} from "react-hook-form";
import {ValidationError} from "../../components/UI/ValidationError/ValidationError";
import {firebaseAuth} from "../../utils/firebase-config";
import {createUserWithEmailAndPassword, onAuthStateChanged} from '@firebase/auth';
import {useNavigate} from "react-router-dom";

export interface IFormState {
    email: string,
    password: string,
}

export const Signup = () => {
    const navigate = useNavigate()
    const {register, formState: {isValid, errors, submitCount}, handleSubmit} = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange',
        reValidateMode: "onChange"
    })

    const signUpHandler: SubmitHandler<IFormState> = async (data) => {
        try {
            const {email, password} = data
            await createUserWithEmailAndPassword(firebaseAuth, email, password)
        } catch (err) {
            console.log(err)
        }
    }

    onAuthStateChanged(firebaseAuth, (currentsUser) => {
        if (currentsUser) navigate('/')
    })

    return (
        <Layout>
            <div className={s.signup}>
                <div className={s.content}>
                    <div className={s.main}>
                        <h1>Бесконечное количесвто фильмов, TV ШОУ, и многого дрогого</h1>
                        <h4>Смотри что хочешь и когда хочешь.</h4>
                        <h6>Готовы к просмотру? Регистрируйся, если хочешь получить незабываемые эмоции</h6>
                    </div>
                    <form className={s.form} onSubmit={handleSubmit(signUpHandler)}>
                        <FormInput name={'email'} placeholder={'Введите Email'} register={register} rules={{
                            required: {
                                value: true,
                                message: 'Обязательное поле'
                            },
                            pattern: {
                                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                message: 'Не верная форма email',
                            },
                        }}/>
                        {
                            errors?.email && <ValidationError error={errors?.email?.message as string}/>
                        }
                        <FormInput name={'password'} placeholder={'Придумайте пароль'} register={register} rules={{
                            required: {
                                value: true,
                                message: 'Обязательное поле'
                            },
                            minLength: {
                                value: 6,
                                message: 'Минимальное число символов - 6'
                            }
                        }}/>
                        {
                            errors?.password && <ValidationError error={errors?.password?.message as string}/>
                        }
                        <button className={s.btn} disabled={!isValid}>CREATE ACCOUNT</button>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

