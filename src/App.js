import "./styles.css";
import Card from "../src/components/Card";
import contacts from "./contacts";

export default function App() {
  return (
    <div className="App">
      <h1 className="heading">My Contacts</h1>
      <Card
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
      />
    </div>
  );
}
