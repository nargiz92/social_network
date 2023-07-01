import React from 'react';
import s from './FormControl.module.css'
import {WrappedFieldInputProps, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";

type FormControlType = {
    meta: WrappedFieldMetaProps
    input: WrappedFieldInputProps
}

const FormControl: React.FC<FormControlType> =({input, meta, ...props})=>{
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>{props.children}</div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
}
export const Textarea = (props:WrappedFieldProps) => {
    const {input, meta, ...restProps}=props
    const hasError = meta.touched && meta.error
    return (
       <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
    );
};

export const Input = (props:WrappedFieldProps) => {
    const {input, meta, ...restProps}=props
    const hasError = meta.touched && meta.error
    return (
        <FormControl {...props}><input {...input} {...restProps} /></FormControl>
    );
};
