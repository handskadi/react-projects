function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to yout packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numItemsPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numItemsPacked / numItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You got everything! Ready to go ✈</em>
      ) : (
        <em>
          👜 You have {numItems} items on your list, and you alredy packed{" "}
          {numItemsPacked} ({percentage}%)
        </em>
      )}
    </footer>
  );
}

export default Stats;
