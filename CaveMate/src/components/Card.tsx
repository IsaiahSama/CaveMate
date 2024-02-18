import { IonIcon } from "@ionic/react";
import { checkmarkOutline, closeOutline, duplicate, person, personCircle, swapVertical } from "ionicons/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = () => {
    const [isFront, setIsFront] = useState<Boolean>(true)

    const getFront = () => {
        return (
            <div className="card__card_front">
                <div className="card__card_header">
                    <p>Faculty</p>
                    <IonIcon icon={swapVertical}></IonIcon>
                </div>
                <div className="card__card_front_main">
                    <IonIcon icon={closeOutline}></IonIcon>
                    <div className="card__card_front_profile">
                        <IonIcon icon={personCircle}></IonIcon>
                        <strong>John Doe</strong>
                        <p>Cavehillian</p>
                    </div>
                    <IonIcon icon={checkmarkOutline}></IonIcon>
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
                    <IonIcon icon={personCircle}></IonIcon>
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

    return getBack();

    // return isFront ? getFront() : getBack()
}

export default Card;