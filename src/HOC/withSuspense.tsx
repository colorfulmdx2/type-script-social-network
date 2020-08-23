import React from "react";

export const WithSuspense = (Component:any) => {
    return (props:any) => {
        <Component {...props}/>
    }
}