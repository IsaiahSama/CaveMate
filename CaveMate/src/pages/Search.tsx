import { IonButton, IonContent, IonInput, IonItem, IonList, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import Header from '../components/Header';

const SearchPage: React.FC = () => {
  return (
    <IonPage>
      <Header subtitle="Search"></Header>
      <IonContent fullscreen>
       <p>Ready to apply some filters? These filters will take effect when you return to the Home page!</p>
       <p>Filter by:</p>
       <IonList>
        <IonItem>
          <IonInput label="Name" labelPlacement="floating"></IonInput>
        </IonItem>
        <IonItem>
          <IonSelect label="Major" placeholder="all" multiple={true}>
            <IonSelectOption value="CS">Computer Science</IonSelectOption>
            <IonSelectOption value="SE">Software Engineering</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonSelect label="Faculty" placeholder="all" multiple={true}>
            <IonSelectOption value="FST">Science and Technology</IonSelectOption>
            <IonSelectOption value="FSS">Social Sciences</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonInput label="Tags" placeholder="Enter a list of tags separated by ,"></IonInput>
        </IonItem>
        <IonItem>
          <IonSelect label="Nationality" placeholder="all" multiple={true}>
            <IonSelectOption value="cavehillian">Cavehillian</IonSelectOption>
          </IonSelect>
        </IonItem>
       </IonList>
       <IonButton expand="block">Apply</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SearchPage;
