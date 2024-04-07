const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> 🤗 Far Away 👽 </h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your Trip? 💫</h3>
    </div>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {/* hier kommt das .map */}
      </ul>
    </div>
  );
}

function Item() {
  return (
    <li>
      <span> {/* Hier kommt das style */}
        
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list & you have already packed X (X%)</em>
    </footer>
  );
}

export default App;
