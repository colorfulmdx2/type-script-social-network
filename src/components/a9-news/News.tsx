import React from 'react';
import {New} from "./New/New";
import style from './News.module.scss'


let News = (props: any) => {
    return (
        <div className={style.container}>
            {props.news.map((n: any) =>
                <New
                    key={n.id}
                    title={n.title}
                    urlToImage={n.urlToImage}
                    description={n.description}
                    publishedAt={n.publishedAt}
                />
            )}
        </div>
    )

}


export default News