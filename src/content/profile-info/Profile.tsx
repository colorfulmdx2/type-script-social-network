import React, {useState} from 'react';
import styleProfile from './Profile.module.css'
import Preloader from "../../components/common/Preloader/Preloader";
import userPhoto from '../../assets/images/user.png'
import ProfileReduxForm, {ProfileFormDataType} from "./profileDataForm";

type ProfilePropsType = {
    profile: any
    isOwner: boolean
    savePhoto: any
    saveProfile: (arg: any) => any
}

const Profile = (props: ProfilePropsType) => {

    let [editMod, setEditMod] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e: any) => {
        if (e.target.files) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit =  (formData: ProfileFormDataType) => {
         props.saveProfile(formData).then(() => {
             setEditMod(false)
         })

    }

    const goToEditMode = () => {
        setEditMod(true)
    }

    return (
        <div className={styleProfile.profile}>
            <img src={props.profile.photos.small || userPhoto}/>

            {//Change Avatar
                props.isOwner && <input type={"file"} onChange={mainPhotoSelected}/>
            }

            {//Profile Info
                !editMod && <div className={styleProfile.about}>
                    <div>
                        <h2>Name {props.profile.fullName}</h2>
                        <div>About me: {props.profile.aboutMe}</div>
                        <div>Looking for a job: {props.profile.lookingForAJob ? 'yes' : 'no'}</div>
                        <div>looking For A Job Description: {props.profile.lookingForAJobDescription || '-----'}</div>

                        <div>Contacts {Object.keys(props.profile.contacts).map((k: any) => {
                            return (
                                <Contacts key={k} contactTitle={k} contactValue={props.profile.contacts[k]}/>
                            )
                        })}</div>


                    </div>
                    {//Edit Mod Button
                        props.isOwner && <div>
                            <button onClick={goToEditMode}>EDIT</button>
                        </div>
                    }
                    {/*<p>Link: <a href='https://t.me/berezovskiyviktor'>Telegram</a></p>*/}
                </div>
            }

            {//Form Condition
                editMod && <ProfileReduxForm initialValues={props.profile}
                                             onSubmit={onSubmit}
                                             // profile={props.profile}
                />
            }

        </div>
    )
}

const Contacts = (props: any) => {
    return <div className={styleProfile.contactElement}>{props.contactTitle} : {props.contactValue}</div>
}

export default Profile