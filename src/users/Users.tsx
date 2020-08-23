import React from 'react';
import styleUsers from './Users.module.css'
import {UsersType} from "../redux/users-reducer";
import {Paginator} from "../components/common/paginator/Paginator";
import {User} from "./User";


let Users: React.FC<any> = ({totalUsersCount, pageSize, followingInProgress, unFollow, follow, currentPage, onPageChanged, users, ...props}) => {

    return (
        <div className={styleUsers.users}>
            <div>
                <Paginator
                    currentPage={currentPage}
                    pageSize={pageSize}
                    totalItemsCount={totalUsersCount}
                    onPageChanged={onPageChanged}
                />
            </div>

            <div>
                {
                    users.map((u: UsersType) =>
                        <User user = {u}
                              followingInProgress={followingInProgress}
                              key={u.id}
                              unFollow={unFollow}
                              follow={follow}
                        />
                    )
                }
            </div>
        </div>
    )
}


export default Users
