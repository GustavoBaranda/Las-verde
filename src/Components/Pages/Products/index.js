import React, { useEffect, useState } from "react";
import { productsCollection } from "../../../utils/firebase";
import { getDocs } from "firebase/firestore";
import ProductHeader from "./ProductHeader";
import Item from "./Item";

const ItemList = () => {
  const [productsList, setProductsList] = useState([]);
  const [popUpContent, setPopUpContent] = useState([]);
  const [popUpTogle, setPopUpTogle] = useState(false);
  const [styling, setStyling] = useState(null);

  const changeContent = (product) => {
    setPopUpContent([product]);
    setPopUpTogle(!popUpTogle);
    if (styling === null) {
      setStyling({
        position: "fixed",
      });
    } else {
      setStyling(null);
    }
    console.log(product);
  };

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
    <div className="products-Container" style={styling}>
      <ProductHeader />
      <div className="cards-products">
        {productsList.map((product) => {
          return (
            <Item
              product={product}
              key={product.id}
              popUpContent={popUpContent}
              changeContent={changeContent}
              popUpTogle={popUpTogle}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ItemList;
