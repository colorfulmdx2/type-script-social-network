import React, {useState} from 'react';
import styles from './Paginator.module.css'
import cn from 'classnames'

export type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    onPageChanged: (arg: number) => void
    currentPage: number
    portionSize?:number
}


export const Paginator = ({totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10}: PaginatorPropsType) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages: Array<number> = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}

            {pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map((p) => {
                return <span className={ cn({
                    [styles.selectedPage]: currentPage = 5

                }, styles.pageNumber)}
                   key={p}
                   onClick={(e) => {
                       onPageChanged(p)
                   }}>{p}</span>
            })}
            {portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
        </div>

    )
}
//     let pagesCount = Math.ceil(totalItemsCount / pageSize)
//
//     let pages: Array<number> = []
//
//     for (let i = 1; i <= pagesCount; i++) {
//         pages.push(i)
//     }
//
//     return (
//         <div>
//             {
//                 pages.map((p) => {
//                     let onPageChanged = (e: any) => {
//                         onPageChanged(p)
//                     }
//                     return (
//                         <span
//                             key={p}
//                             onClick={onPageChanged}
//                             className={currentPage === p ? styleUsers.selectedPage : ''}>{p}
//                             </span>
//                     )
//                 })
//             }
//         </div>
//     )
// }