import React from 'react';
import Preloader from "../common/preloader/Preloader";


export function withSuspunse<T>(Component: React.ComponentType<T>) {


        return (props:any)=>{
            return <React.Suspense fallback={<Preloader/>}>
                <Component {...props as T}/>
            </React.Suspense>
        }



};

export default withSuspunse;