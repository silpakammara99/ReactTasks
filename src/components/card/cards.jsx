import "./cards.css";

const CustomCards = (prop) => {
  const {index, deleteCard}=prop;
  
    return (
    <div className="cards">
      <img src="https://th.bing.com/th/id/OIP.L_IBmQ5JmWqU-k1Ezm9DjgHaFj?w=248&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Phone" />
      <div className="subcards">
        <h1 style={{ fontSize: "20px" }}>
          vivo Y18i (Gem Green, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers |Without Charger
        </h1>
        <p>Price: 20000</p>
        <p> Ratings: *****</p>
        <button
          style={{ height: "30px", width: "70px" }}
          onClick={() => deleteCard(index)}
        >
          Delete
        </button>
      </div> 
    </div>
  );
};

export default CustomCards;