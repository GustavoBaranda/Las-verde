import React from "react";
import { Link } from "react-router-dom";
import Item from "../Item";
import { productsCollection } from "../../utils/firebase";
import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const ItemList = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const query = getDocs(productsCollection);

    query
      .then((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });

        setProductsList(products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container-products">
      <div className="headline-products">
        <h1>Nuestros productos</h1>
        <p>
          ¿Interesado en conocer nuestros productos? Te los presentamos a
          continuación! Sí quieres comprar puedes contactarnos por correo
          electrónico o Whatsapp!
        </p>
        <Link to="/contacts">
          <button className="btn-basic">CONTACTANOS</button>
        </Link>
      </div>
      <div className="cards-products">
        {productsList.map((product) => {
          return <Item product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
