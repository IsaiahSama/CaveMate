import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { closeOutline, heart, personCircle, removeCircleOutline, sendOutline } from "ionicons/icons";
import "./Chat.css"

const ChatPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className="flexed">
            <IonIcon icon={personCircle} className="profile_icon"></IonIcon>
            <IonTitle><strong>John Doe</strong></IonTitle>
          </div>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon slot="icon-only" icon={heart}></IonIcon>
            </IonButton>
            <IonButton>
              <IonIcon slot="icon-only" icon={removeCircleOutline}></IonIcon>
            </IonButton>
            <IonButton>
              <IonIcon slot="icon-only" icon={closeOutline}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="messages">
          <div className="message">
            <div className="sender">Jame Dane</div>
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, animi? Ipsam, quisquam alias? Suscipit esse, iure ea cum, optio eligendi perferendis nostrum veniam quidem voluptatem, laborum error aliquid qui voluptates.
            </div>
          </div>
          <div className="message sender_message">
            <div className="sender">John Doe</div>
            <div className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequuntur eos vitae officiis minima expedita odio laboriosam impedit optio, sequi itaque iure illum nihil molestias quisquam. Natus aliquid sapiente adipisci. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat rerum iste reprehenderit, itaque voluptas est vitae modi aperiam possimus voluptatum dicta quidem nesciunt magni laudantium distinctio! Vitae dicta nihil provident?
            </div>
          </div>
          <div className="message">
            <div className="sender">Jame Dane</div>
            <div className="content">
              No.
            </div>
          </div>
          <div className="message sender_message">
            <div className="sender">John Doe</div>
            <div className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos veniam deserunt facilis, delectus eligendi ipsum ipsa excepturi voluptate adipisci vero eveniet voluptates. Sapiente, facere explicabo! Totam molestias laboriosam autem quasi!
            </div>
          </div>
        </div>

        <div className="inputContainer">
          <IonInput label="Send a message" labelPlacement="floating"></IonInput>
          <IonButton slot='end'>
            <IonIcon icon={sendOutline}></IonIcon>
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default ChatPage;