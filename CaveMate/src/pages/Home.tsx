import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import Header from '../components/Header';
import Cards from '../components/Cards';

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <Header subtitle="Home"></Header>
      <IonContent fullscreen>
        <Cards />
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
