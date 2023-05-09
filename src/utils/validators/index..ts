import React from "react";
export const required=(value:any)=>{
if(value)return undefined
    return "Field is required!"
}

export const maxLenghtCreator=(maxLength:number)=>(value:any)=>{
if(value.length>maxLength) return `Max value is ${maxLength} symbols`
    return undefined;
}