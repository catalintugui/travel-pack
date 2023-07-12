import { useState } from "react";

function Logo() {
  return <h1>Travel pack 🧳</h1>;
}

function Form({ items, setItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    handleAddItem(newItem);
    setDescription("");
    setQuantity(1);
  }

  // e.target.value always returns a string

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>something will be here</h3>

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Add item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
        <button>❌</button>
      </span>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      You have X items on your list and you packed X%
    </footer>
  );
}

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="app">
      <Logo />
      <Form items={items} setItems={setItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

export default App;
