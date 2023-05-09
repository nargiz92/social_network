import React from 'react';
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../redux/redux-store";
import {connect} from "react-redux";


export type mapStatePropsTypeForRedirect = {
    isAuth: boolean
}
let mapStateToPropsForRedirect = (state: AppRootStateType): mapStatePropsTypeForRedirect => ({
    isAuth: state.auth.isAuth
})

function WithAuthRedirect<T>(Component: React.ComponentType<T>) {
    function RedirectComponent(props: mapStatePropsTypeForRedirect) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T}/>
    }

    let ConnectedAuthRedirectComponentHOC = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponentHOC
};

export default WithAuthRedirect;