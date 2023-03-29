import * as React from 'react'
import s from './Header.module.css'
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {DataAuthType, setAuthUserData} from "../../redux/auth-reducer";
import {ProfilyType} from "../../redux/Profile_Page_reduser";
import {RouteComponentProps} from "react-router-dom";

type PathParamsType = {
    userId: string
}
type mapStatePropsType = {
    auth: null|DataAuthType
}
type mapDispatchToPropsType = {
    setAuthUserData:(data: DataAuthType)=>void
}
type OwnPropsType = mapStatePropsType & mapDispatchToPropsType
type PropsAuthType = RouteComponentProps<PathParamsType> & OwnPropsType

class HeaderContainer extends React.Component<PropsAuthType> {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })

            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header {...this.props}/>

    }
};
const mapStateToProps = (state: DataAuthType) => {
    isAuth:state.isAuth
    login:state.login
}
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);