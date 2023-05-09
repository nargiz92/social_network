import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./Message/DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControl/FormControl";
import {maxLenghtCreator, required} from "../../utils/validators/index.";

type FormDataType = {
    newMessageBody:string
}

const Dialogs = (props: DialogsPropsType) => {


    let dialogsElement = props.dialogsPages.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    let messageElement = props.dialogsPages.messages.map(m => <Message key={m.id} message={m.message}/>)

    let addNewMessage = (values: FormDataType) => {
        props.sendMessage(values.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
};
const maxLength50=maxLenghtCreator(50)
export const AddMessageForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required,maxLength50]}
                       name={'newMessageBody'} placeholder={'enter your message'}/>

            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)
export default Dialogs;