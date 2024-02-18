import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab4.css';
import Header from '../components/Header';

const ProfilePage: React.FC = () => {
  return (
    <IonPage>
      <Header subtitle='Profile'></Header>
      <IonContent fullscreen>
        
      </IonContent>
    </IonPage>
  );
};

export default ProfilePage;
