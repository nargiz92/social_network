import React from 'react';
import s from './Dialogs.module.css'

import Dialogs from "../Dialogs";
import { DialogsPagesType} from "../../../redux/store";
import {addNewMessageTextAC, updatedNewMessageAC} from "../../../redux/Dialogs_Page_reduser";

import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    dialogsPages: DialogsPagesType
}
type mapDispatchToPropsType = {
    addMessage: () => void
    onChangeText: (body: string) => void
}
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        dialogsPages: state.dialogsPages
    }
}
export type DialogsPropsType = mapDispatchToPropsType & mapStateToPropsType
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addNewMessageTextAC())
        },
        onChangeText: (body: string) => {
            dispatch(updatedNewMessageAC(body))
        }

    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;