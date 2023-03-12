import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsPagesType, PostsType} from "../../redux/store";
import {DialogsPropsType} from "./Message/DialogsContainer";



const Dialogs = (props: DialogsPropsType) => {


    let dialogsElement = props.dialogsPages.dialogs.map(d => <DialogItem key= {d.id} id={d.id} name={d.name}/>)
    let messageElement = props.dialogsPages.messages.map(m => <Message key={m.id} message={m.message}/>)


    const addMessage = () => {
        props.addMessage()
    }
    const onChangeText = (event:ChangeEvent<HTMLTextAreaElement>) => {
           let body = event.target.value
           props.onChangeText(body)

    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <div>
                    <div>
                        <textarea onChange={onChangeText}
                                   placeholder={'enter your message'}
                                   value={props.dialogsPages.newTextForMessage}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add message</button>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Dialogs;