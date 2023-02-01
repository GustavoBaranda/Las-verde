import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <strong>{product.title}</strong>
      <p>{product.ingredients}</p>
      <Link to={`product/${product.id}`}>
        <button className="btn-basic">Ver detalle</button>
      </Link>
    </div>
  );
};

export default Item;
