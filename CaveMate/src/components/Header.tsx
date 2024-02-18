import { IonButton, IonButtons, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";


interface HeaderProps {
    subtitle: string
}

const Header = ({ subtitle }: HeaderProps) => {

    return (
        <IonHeader>
            <IonToolbar>
            <IonTitle>CaveMate: {subtitle}</IonTitle>
            <IonButtons slot="end">
                <IonButton>Login / Sign up</IonButton>
            </IonButtons>
            </IonToolbar>
        </IonHeader>
    )
}

export default Header