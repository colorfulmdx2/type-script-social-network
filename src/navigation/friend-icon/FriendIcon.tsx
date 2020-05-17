import React from 'react';
import styleFriendIcon from './FriendIcon.module.css'




const FriendIcon = (props: any) => {

    return (

                    <div className={styleFriendIcon.icon}>
                        <div className={styleFriendIcon.iconImage}></div>
                        <div className={styleFriendIcon.iconName}>{props.name}</div>
                    </div>

    )
}

export default FriendIcon;