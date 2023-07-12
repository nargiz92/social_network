import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControl/FormControl";
import {required} from "../../utils/validators/index.";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../redux/redux-store";
import s from './../../common/./FormsControl/FormControl.module.css'
import container from '../../common/style/Container.module.scss'
type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit,error}) => {
    return <div>
        <div className={`${s.container}`}>


    <form onSubmit={handleSubmit}>
        <div>
            <Field placeholder={'Email'} name={'email'}
                   validate={[required]} component={Input}/>
        </div>
        <div>
            <Field placeholder={'Password'} name={'password'}
                   validate={[required]}
                   type={'password'} component={Input}/>
        </div>
        <div>
            <Field component={Input}
                   name='rememberMe' type={'checkbox'}/>remember me
        </div>
        {
            error && <div className={s.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <button>login</button>
        </div>

    </form>
</div>
    </div>
}
const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

const Login = (props: LoginOwnPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

}
type MapStateToPropsType = {
    isAuth: boolean

}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
type LoginOwnPropsType = MapStateToPropsType & MapDispatchToPropsType
export default connect(mapStateToProps, {login})(Login)