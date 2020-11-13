import React, {ChangeEvent, useRef, useState} from "react";
import style from './Avatar.module.scss'
import userPhoto from "../../../../../assets/images/user.png";
import {ModalWithChildren} from "../../../../Modal/Modal";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../../redux/redux-store";

export const Avatar = (props: any) => {

    const inRef = useRef<HTMLInputElement>(null)

    const [file, setFile] = useState<any>();
    const [file64, setFile64] = useState<any>();

    const userId = useSelector<AppStateType, any >(state => state.profileState.profile?.userId)

    const [showDetailsInput, setShowInputDetails] = useState<any>(false)
    const [enableAvatarInput, setEnableAvatarInput] = useState<any>(false)


    const handleSavePhoto = () => {
        props.onChangeHandler(file)
    }

    const onChangePhotoHandler = async (e: ChangeEvent<HTMLInputElement>) => {

        const reader = new FileReader();
        reader.onloadend = () => {
            setFile64(reader.result);
        };
        const newFile = e.target.files && e.target.files[0];
        if (newFile) {
            setFile(newFile);
            reader.readAsDataURL(newFile);
        }
        setShowInputDetails(true)


    };

    const returnFileSize = (n: number) => {
        if (n < 1024) {
            return n + 'bytes';
        } else if (n > 1024 && n < 1048576) {
            return (n / 1024).toFixed(2) + 'kb';
        } else if (n > 1048576) {
            return (n / 1048576).toFixed(2) + 'mb';
        }
    };


    const showSettingsModal = () => {
        setEnableAvatarInput(true)
    }


    return (
        <div className={style.avatar}>

            <div className={style.photo}>
                <img src={props.photo || userPhoto}/>
            </div>

            {
                (userId === 8850) && <button className={style.editButton} onClick={showSettingsModal}>Edit</button>
            }

            <div className={style.input}>
                {
                    <input
                        ref={inRef}
                        type={'file'}
                        style={{display: 'none'}}
                        onChange={onChangePhotoHandler}
                    />
                }
            </div>


            <ModalWithChildren enable={enableAvatarInput}
                               onCancel={() => setEnableAvatarInput(false)}>
                <div className={style.modalProfileContainer}>

                    <div className={style.title}>Upload new photo</div>

                    <div className={style.description}>Please upload a real photo of yourself so your friends can
                        recognize you.
                        We support JPG, GIF or PNG files.
                    </div>

                    <div className={style.choosePicture}>
                        {
                            !file
                                ? <button className={style.selectButton}
                                          onClick={() => inRef && inRef.current && inRef.current.click()}>Select</button>
                                : null
                        }
                    </div>

                    {
                        showDetailsInput &&
                        <div className={style.inputDetails}>
                            <img src={file64}/>
                        </div>
                    }

                    {
                        file && <button className={style.saveButton} onClick={handleSavePhoto}>Save</button>
                    }

                   {/* <div className={style.reminder}>If you have any problems with your upload, try using a smaller picture.</div>*/}

                    {
                        file && <div className={style.size}>{file && returnFileSize(file.size)}</div>
                    }
                </div>

            </ModalWithChildren>


        </div>
    )
}

