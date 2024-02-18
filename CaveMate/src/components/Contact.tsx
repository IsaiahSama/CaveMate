import React from "react";
import { heart, personCircle, removeCircle } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import "./Contact.css"


const Contact = () => {
    return (
        <div className="contact__container">
            <div className="contact__profile_image">
                <IonIcon icon={personCircle} className="contact__profile_icon"></IonIcon>
            </div>
            <div className="spacer"></div>
            <div className="contact__info">
                <h2>John Doe</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error ab fugiat autem est asperiores, doloremque, fuga cumque natus ex eaque ducimus deleniti repellat porro dolor voluptatum a nam sint optio!</p>
            </div>
            <div className="contact__icons">
                <IonIcon icon={heart} className="contact__icon"></IonIcon>
                <IonIcon icon={removeCircle} className="contact__icon"></IonIcon>
            </div>
        </div>
    )
}

export default Contact;