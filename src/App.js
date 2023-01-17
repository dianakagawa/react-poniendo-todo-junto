import "./App.css";
import PersonCard from "./components/PersonCard";
// import BirthdayButton from "./components/BirthdayButton";

function App() {
  return (
    <div className="body">
      <div className="App">
        <PersonCard
          firstName="Jane"
          lastName="Doe"
          age={45}
          hairColor="Black"
        ></PersonCard>

        <PersonCard
          firstName="John"
          lastName="Smith"
          age={88}
          hairColor="Brown"
        />

        <PersonCard
          firstName="Millard"
          lastName="Fillmore"
          age={50}
          hairColor="Brown"
        />

        <PersonCard
          firstName="Maria"
          lastName="Smith"
          age={62}
          hairColor="Brown"
        />
      </div>
    </div>
  );
}

export default App;
