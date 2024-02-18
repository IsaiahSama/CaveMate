import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import Header from '../components/Header';

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <Header subtitle="Home"></Header>
      <IonContent fullscreen>
        
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
