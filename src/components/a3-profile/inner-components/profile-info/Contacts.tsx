import React from "react";
import style from "./ProfileInfo.module.scss";

type ContactsType = {
    contactTitle: string
    contactValue: string
}

export const Contacts = (props: ContactsType) => {
    return <div className={style.contactElement}>{props.contactTitle} : {props.contactValue}</div>
}
