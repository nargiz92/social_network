import * as React from 'react'
import s from 'src/components/Header/Header.module.scss'
import Header from "./Header";
import {connect} from "react-redux";
import {DataAuthType, logout} from "../../redux/auth-reducer";
import {RouteComponentProps} from "react-router-dom";
import {AppRootStateType} from "../../redux/redux-store";

type PathParamsType = {
    userId: string
}
type mapStatePropsType = {
    auth: DataAuthType
}
type mapDispatchToPropsType = {

    logout: () => void
}
type OwnPropsType = mapStatePropsType & mapDispatchToPropsType
type PropsAuthType = RouteComponentProps<PathParamsType> & OwnPropsType

class HeaderContainer extends React.Component<OwnPropsType> {

    render() {
        const {logout, auth} = this.props;
        return <Header logout={logout} isAuth={auth.isAuth} login={auth.login}/>

    }
};
const mapStateToProps = (state: AppRootStateType) => ({
    auth: state.auth
})
export default connect(mapStateToProps, {logout})(HeaderContainer);