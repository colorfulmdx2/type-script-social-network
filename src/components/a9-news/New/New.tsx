import s from "./New.module.css";
import React from "react";



export type NewPropsType = {
    title: string
    urlToImage: any
    description: string
    publishedAt:string

}

export let New = (props: NewPropsType) => {

    //const date = parseISO(props.publishedAt).toString().slice(0, 24)

    return <div className={s.newsContainer}>
        <div className={s.newsTitle}><h3>{props.title}</h3></div>
        <div className={s.content}>
            <img src={props.urlToImage} alt=""/>
            <div   className={s.description}><h5>{props.description}</h5></div>
        </div>
        <div className={s.date}>{props.publishedAt}</div>



    </div>
}