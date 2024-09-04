import axios from "axios";
import { useState, useEffect } from "react";

const ServerData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }); 

  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
      {products.map((each) => (
        <div key={each.id}  style={{  display: "flex",flexDirection: "column",alignItems: "center",border: "2px solid black",width: "25%",margin: "10px",padding: "10px",}}>
          <img src={each.thumbnail} style={{ width: "100px", height: "100px" }}/>
          <h1>{each.title}</h1>
          <p>{each.description}</p>
          <h5>${each.price}</h5>
        </div>
      ))}
    </div>
  );
};

export default ServerData;
