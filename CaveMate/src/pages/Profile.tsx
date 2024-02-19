import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import './Profile.css';
import Header from '../components/Header';
import { personCircle } from 'ionicons/icons';

const ProfilePage: React.FC = () => {
  return (
    <IonPage>
      <Header subtitle='Profile'></Header>
      <IonContent fullscreen>
      <div className="profile__header">
        <h1>Showing profile for <strong> John Doe </strong></h1>
        <IonIcon slot='end' icon={personCircle} style={{"font-size": "80px"}}></IonIcon>
      </div>
        <div className="profile__container">
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <IonList>
              <IonItem>
                <IonInput label="Nationality:" disabled={true} placeholder="Caribbean"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel>Favorite Color</IonLabel>
                <input type="color" name="favoriteColor" id="favoriteColor" />
              </IonItem>
              <IonItem>
                <IonSelect label="Faculty" placeholder="---">
                  <IonSelectOption value="CCA">Culture, Creative & Performing Arts</IonSelectOption>
                  <IonSelectOption value="H&E">Humanities and Education</IonSelectOption>
                  <IonSelectOption value="LAW">Law</IonSelectOption>
                  <IonSelectOption value="FMS">Medical Sciences</IonSelectOption>
                  <IonSelectOption value="FST">Science and Technology</IonSelectOption>
                  <IonSelectOption value="FSS">Social Sciences</IonSelectOption>
                  <IonSelectOption value="AOS">Sport</IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonSelect label="Primary Major" placeholder='---'>
                  <IonSelectOption value="CS">Computer Science</IonSelectOption>
                  <IonSelectOption value="BIO">Biology</IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonTextarea label="About you:" labelPlacement="floating"></IonTextarea>
              </IonItem>
              <IonItem>
                <IonInput label="Status: " labelPlacement="floating"></IonInput>
              </IonItem>
            </IonList>
            <div className="flexed">
              <IonButton>Update</IonButton>
              <IonButton color="danger">Reset</IonButton>
            </div>
          </form>
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <h2>Categorize yourself with tags!</h2>
            <p>Your tags: </p>
            <div id="tagsContainer"></div>
            <IonInput label="Add Tag" counter={true} maxlength={15} labelPlacement="floating">
            </IonInput>
            <IonButton expand='block'>Save Tags</IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ProfilePage;
