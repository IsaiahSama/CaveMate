import { IonButton, IonButtons, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import { Link } from "react-router-dom";


interface HeaderProps {
    subtitle: string
}

const Header = ({ subtitle }: HeaderProps) => {

    return (
        <IonHeader>
            <IonToolbar>
            <IonTitle>
                <Link to={"/"} style={{"color": "white", "textDecoration": "none"}}>
                    CaveMate: {subtitle}
                </Link>
                </IonTitle>
            <IonButtons slot="end">
                <IonButton>Login / Sign up</IonButton>
            </IonButtons>
            </IonToolbar>
        </IonHeader>
    )
}

export default Header