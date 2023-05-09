import * as React from 'react'
import s from './Header.module.css'
import Header from "./Header";
import {connect} from "react-redux";
import { DataAuthType, logout} from "../../redux/auth-reducer";
import {RouteComponentProps} from "react-router-dom";
import {AppRootStateType} from "../../redux/redux-store";

type PathParamsType = {
    userId: string
}
type mapStatePropsType = {
    auth: DataAuthType
}
type mapDispatchToPropsType = {

    logout:()=>void
}
type OwnPropsType = mapStatePropsType & mapDispatchToPropsType
type PropsAuthType = RouteComponentProps<PathParamsType> & OwnPropsType

class HeaderContainer extends React.Component<OwnPropsType> {

    render() {
        return <Header {...this.props}/>

    }
};
const mapStateToProps = (state: AppRootStateType) => ({
    auth: state.auth
})
export default connect(mapStateToProps, { logout})(HeaderContainer);