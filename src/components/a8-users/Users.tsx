import React from 'react';
import style from './Users.module.scss'
import {UsersType} from "../../redux/users-reducer";
import {Paginator} from "../common/paginator/Paginator";
import {User} from "./inner-components/user/User";
import WithAuthRedirect from "../../HOC/WithAuthRedirect";


let Users: React.FC<any> = ({totalUsersCount, pageSize, followingInProgress, unFollow, follow, currentPage, onPageChanged, users, ...props}) => {

    return (
        <div className={style.container}>

            <div className={style.users}>
                {
                    users.map((u: UsersType) =>
                        <div className={style.line}>
                            <User user = {u}
                                  followingInProgress={followingInProgress}
                                  key={u.id}
                                  unFollow={unFollow}
                                  follow={follow}
                            />
                        </div>
                    )
                }
            </div>

            {/*<div>
                <Paginator
                    currentPage={currentPage}
                    pageSize={pageSize}
                    totalItemsCount={totalUsersCount}
                    onPageChanged={onPageChanged}
                />
            </div>*/}

        </div>
    )
}


export default WithAuthRedirect(Users)
