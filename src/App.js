function Logo() {
  return <h1>Travel pack 🧳</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>something will be here</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">list</div>;
}

function Stats() {
  return <footer>You have X items on your list and you packed X%</footer>;
}

function App() {
  return (
    <div className="App">
      <Logo />
    </div>
  );
}

export default App;
