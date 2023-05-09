import React from 'react';
import s from './Dialogs.module.css'

import Dialogs from "../Dialogs";
import { DialogsPagesType} from "../../../redux/store";
import {sendNewMessageTextAC} from "../../../redux/Dialogs_Page_reduser";

import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {compose, Dispatch} from "redux";

import WithAuthRedirect from "../../../HOC/withAuthRedirect";

type mapStateToPropsType = {
    dialogsPages: DialogsPagesType

}
type mapDispatchToPropsType = {
    sendMessage: (newMessageBody:string) => void
}
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        dialogsPages: state.dialogsPages,

    }
}
export type DialogsPropsType = mapDispatchToPropsType & mapStateToPropsType
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody:string) => {
            dispatch(sendNewMessageTextAC(newMessageBody))
        },

    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect
)(Dialogs)