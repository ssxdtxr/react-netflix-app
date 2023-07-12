import React from 'react';
import {Layout} from "../../components/layout/Layout";
import s from "./Login.module.scss"
// @ts-ignore
import back from "../../assets/images/back.jpg"
import {FormInput} from "../../components/UI/FormInput/Input";
import {SubmitHandler, useForm} from "react-hook-form";
import {ValidationError} from "../../components/UI/ValidationError/ValidationError";
import {firebaseAuth} from "../../utils/firebase-config";
import {onAuthStateChanged} from '@firebase/auth';
import {useNavigate} from "react-router-dom";
import {IFormState} from "../Signup/Signup";
import { signInWithEmailAndPassword } from 'firebase/auth';


export const Login = () => {
    const navigate = useNavigate()
    const {register, formState: {isValid, errors, submitCount}, handleSubmit} = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange',
        reValidateMode: "onChange"
    })

    const loginHandler: SubmitHandler<IFormState> = async (data) => {
        try {
            const {email, password} = data
            await signInWithEmailAndPassword(firebaseAuth, email, password)
        } catch (err) {
            // console.log(err)
        }
    }

    onAuthStateChanged(firebaseAuth, (currentsUser) => {
        if (currentsUser) navigate('/')
    })

    return (
        <Layout>
            <div className={s.login}>
                <div className={s.content}>
                    <form className={s.form} onSubmit={handleSubmit(loginHandler)}>
                        <h1>Login</h1>
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
                        <button className={s.btn} disabled={!isValid}>Log In</button>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

