import React from "react";

const page = () => {
  const walletData = [
    {
      id: 1,
      name: "Louis Vuitton Wallet",
      price: 1300,
      description: "Luxury leather wallet with monogram pattern.",
      image: "/lv Wallet.png",
    },
    {
      id: 2,
      name: "Gucci Wallet",
      price: 950,
      description: "Stylish wallet with GG pattern and leather finish.",
      image: "/gw.png",
    },
    {
      id: 3,
      name: "Prada Wallet",
      price: 2500,
      description: "Elegant wallet with sleek design and RFID protection.",
      image: "/pw.png",
    },
    {
      id: 4,
      name: "Tom Ford Wallet",
      price: 450,
      description: "Premium leather wallet with a minimalist design.",
      image: "/tf.png",
    },
    {
      id: 5,
      name: "Hermes Wallet",
      price: 2500,
      description:
        "Luxury wallet crafted from high-quality leather with iconic H logo.",
      image: "/h.png",
    },
    {
      id: 6,
      name: "BOSS Wallet",
      price: 650,
      description: "Simple and refined wallet made from durable leather.",
      image: "/b.png",
    },
    {
      id: 7,
      name: "Fossil Wallet",
      price: 100,
      description: "Affordable leather wallet with multiple card slots.",
      image: "/fw.png",
    },
    {
      id: 8,
      name: "Michael Kors Wallet",
      price: 100,
      description: "Michael Kors Men’s Wallet.",
      image: "/mk.png",
    },
    {
      id: 9,
      name: "Coach Wallet",
      price: 100,
      description: "Classic leather wallet with timeless design.",
      image: "/c.jpg",
    },
  ];

  return (
    <div>
      <div className="wallets">
        {walletData.map((wallet) => (
          <div key={wallet.id} className="wallet-card">
            <img src={wallet.image} alt={wallet.name} />
            <h3>{wallet.name}</h3>
            <p>{wallet.description}</p>
            <div>${wallet.price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
