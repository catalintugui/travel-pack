export default function Stats({ items }) {
  if (!items.length) {
    return <p className="stats">To start add some items to your list</p>;
  }
  const itemsLength = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const percentageItems = Math.round((packedItems / itemsLength) * 100);

  return (
    <footer className="stats">
      <em>
        {percentageItems === 100
          ? "Everything is ready and packed up 🚀"
          : `You have ${
              items.length
            } items on your list and you packed ${packedItems} (${
              items.length ? percentageItems : 0
            }%)`}
      </em>
    </footer>
  );
}
