import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import Header from '../components/Header';
import Contact from '../components/Contact';

const MatchesPage: React.FC = () => {
  return (
    <IonPage>
      <Header subtitle="Matches"></Header>
      <IonContent fullscreen>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
      </IonContent>
    </IonPage>
  );
};

export default MatchesPage;
