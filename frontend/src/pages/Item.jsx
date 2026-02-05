import { Link } from "react-router-dom";

const Item = ({ items, index }) => {
  const item = items[index];

  return (
    <div>
      {item ? <Link to={"/items/" + item.id}>{item.name}</Link> : "Loading..."}
    </div>
  );
};

export default Item;
