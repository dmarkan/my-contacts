import "./styles.css";
import Card from "../src/components/Card";
import contacts from "./contacts";
import Avatar from "./components/Avatar";

function createCard(contact) {
  return (
  <Card
  key={contact.id}
  name={contact.name}
  img={contact.imgUrl}
  tel={contact.phone}
  email={contact.email}
  />
  );
}

export default function App() {
  return (
    <div className="App">
      <h1 className="heading">My Contacts</h1>
      <Avatar
      img="https://i.ibb.co/k8wN1k7/MIL-0637-removebg-preview-1.png"
      />
      {contacts.map(createCard)}
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgUrl}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgUrl}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgUrl}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}
