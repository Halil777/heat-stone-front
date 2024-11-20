import React, { useState } from "react";
import "./StoneRadiators.css";

type RadiatorModel = {
  id: string;
  image: string;
  model: string;
  price: number;
  description: string;
};

const StoneRadiators: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("Базовые модели");

  const models: RadiatorModel[] = [
    {
      id: "1",
      image: "/images/37.jpg",
      model: "P-350R",
      price: 5000,
      description: "Базовая модель 1",
    },
    {
      id: "2",
      image: "/images/48.jpg",
      model: "D-500V",
      price: 7000,
      description: "Базовая модель 2",
    },
    {
      id: "3",
      image: "/images/Mask Group.jpg",
      model: "D-700V",
      price: 9000,
      description: "Базовая модель 3",
    },
  ];

  return (
    <div className="stone-radiators">
      <h1>Каменные радиаторы</h1>
      <div className="tabs">
        {["Базовые модели", "Арт модели", "Терморегуляторы"].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${selectedTab === tab ? "active" : ""}`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="model-list">
        {selectedTab === "Базовые модели" && (
          <div className="model-cards">
            {models.map((model) => (
              <div className="model-card" key={model.id}>
                <img
                  src={model.image}
                  alt={model.model}
                  className="model-image"
                />
                <div className="model-info">
                  <p className="model-name">Модель: {model.model}</p>
                  <p className="model-price">Цена за шт: {model.price} ₽</p>
                  <button className="details-button">Подробнее</button>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* You can add conditions for the other tabs here */}
      </div>
    </div>
  );
};

export default StoneRadiators;
