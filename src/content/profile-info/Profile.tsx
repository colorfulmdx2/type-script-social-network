import React from 'react';
import styleProfile from './Profile.module.css'


const Profile = () => {
    return (
        <div className={styleProfile.profile}>
            <img className={styleProfile.img} src="https://user-life.com/uploads/posts/2018-08/1535608847_kak-udalit-avatarku-ubrat-postavit-sdelat-zagruzit-dobavit-foto-vkontakte-dlya-telegramma-skaypa-vayber-diskorda.jpg" alt=""/>
            <div className={styleProfile.about}>
                <h2>Viktor Berezovskyi</h2>
                <p>Date of birth 26.02.1996</p>
                <p>City: Valetta</p>
                <p>Education: it-kamasutra</p>
                <p>Link: <a href='https://t.me/berezovskiyviktor'>Telegram</a></p>
            </div>
        </div>
    )
}

export default Profile