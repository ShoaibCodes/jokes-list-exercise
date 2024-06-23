import "./App.css";
import Joke from "./Joke";

function App() {
  let jokes = [
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "What do you call a fish wearing a crown? Shellfish.",
    "What do you call a pile of cats? A meowtain.",
  ];

  return (
    <div className="App">
      <h1 className="title">Jokes</h1>
      {jokes.map((joke, index) => (
        <Joke key={index} joke={joke} />
      ))}
    </div>
  );
}

export default App;
