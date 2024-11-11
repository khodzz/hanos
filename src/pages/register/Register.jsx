import React from 'react'
import "./Register.scss"
import { useForm } from 'react-hook-form';
import { registerUser } from '../../Store/reducers/user/user';
import { useDispatch } from 'react-redux';

const Register = () => {

    const dispatch = useDispatch()

    const submitForm = (data)=> {
        const {confirmPassword, ...other} = data
        
        dispatch(registerUser(other))
        
    }

    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm({mode:"onBlur"})

    return (
        <section className='register'>
            <div className="container">
                <form className="register__form" onSubmit={handleSubmit(submitForm)} >
                    <h1 className='register__title'>Регистрация</h1>
                    <input {...register('email')} placeholder='Эл.почта' type="email"/>
                    <input {...register('name')} placeholder='Имя' type="text"/>
                    <input {...register('age')} placeholder='Ваш возраст' type="number"/>
                    <button type="button" className='register__btn' >Сгенерировать пароль</button>

                    <div className='register__block'>
                        <input {...register('password')} placeholder='Придумайте пароль' type={ 'password'}/>
                    </div>
                    <div className='register__block'>
                        <input {...register('confirmPasswodr')}  placeholder='Повторите пароль' type='password'/>
                    </div>
                    <button type="submit">Зарегистрироваться</button>
                </form>
            </div>
        </section>
    );
};

export default Register;