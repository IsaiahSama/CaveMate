import { IonIcon } from "@ionic/react";
import { checkmarkOutline, closeOutline, duplicate, person, personCircle, swapVertical } from "ionicons/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css"

const Card = () => {
    const [isFront, setIsFront] = useState<Boolean>(true)

    const getFront = () => {
        return (
            <div className="card__card_front">
                <div className="card__card_header">
                    <p>Faculty</p>
                    <IonIcon icon={swapVertical} className="card__card_swap" onClick={() => setIsFront(false)}></IonIcon>
                </div>
                <div className="card__card_front_main">
                    <IonIcon icon={closeOutline} className="card__card_action_button"></IonIcon>
                    <div className="card__card_front_profile">
                        <IonIcon icon={personCircle} className="card__card_front_profile_img"></IonIcon>
                        <strong>John Doe</strong>
                        <p>Cavehillian</p>
                    </div>
                    <IonIcon icon={checkmarkOutline} className="card__card_action_button"></IonIcon>
                </div>
                <div className="card__card_front_tags">
                    <span>Smart</span>
                    <span>Stressed</span>
                    <span>Nerd</span>
                </div>
            </div>
        )
    }

    const getBack = () => {
        return (
            <div className="card__card_back">
                <div className="card__card_header">
                    <p><strong>John Doe</strong></p>
                    <IonIcon icon={personCircle} className="card__card_back_profile_img"></IonIcon>
                    <IonIcon icon={swapVertical} className="card__card_swap" onClick={() => setIsFront(true)}></IonIcon>
                </div>
                <div className="card__card_back_bio">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, nam quasi placeat modi repudiandae quia distinctio animi facere nesciunt cum voluptate libero quae, accusantium quam perspiciatis. Amet repellat obcaecati nemo.
                    </p>
                </div>
                <div className="aside">
                    <Link to={""}><small>See more</small></Link>
                </div>
                <div className="card__card_back_mutuals">
                    <span>Mutuals: </span>
                    <IonIcon icon={person}></IonIcon>
                    <IonIcon icon={person}></IonIcon>
                    <IonIcon icon={person}></IonIcon>
                    <IonIcon icon={person}></IonIcon>
                    <IonIcon icon={duplicate}></IonIcon>
                </div>
            </div>
        )
    }

    return (
        <div className="card">
            {isFront ? getFront() : getBack()}
        </div>
    )
}

export default Card;