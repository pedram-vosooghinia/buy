import React, { useState, useEffect } from "react";

function Buy() {
  const [buy, setBuy] = useState("");
  const [percent, setPercent] = useState("");
  const [values, setValues] = useState(null);

  const [buy2, setBuy2] = useState("");
  const [sell2, setSell2] = useState("");
  const [values2, setValues2] = useState(null);

  useEffect(() => {
  
    if (buy && percent) {
      const inputNumber = parseFloat(buy);
      const percentNumber = parseFloat(percent);
      if (!isNaN(inputNumber) && !isNaN(percentNumber)) {
        const sell = (inputNumber * (1 + percentNumber / 100)).toFixed(1);
        const marketer = (sell * 0.07).toFixed(1);
        const justVN = (sell - inputNumber).toFixed(1);
        const pureWithoutMarketer = (justVN - marketer).toFixed(1);
        const result = {
          sell,
          marketer,
          justVN,
          pureWithoutMarketer,
        };
        setValues(result);
      } else {
        setValues(null);
      }
    } else {
      setValues(null);
    }

    if (buy2 && sell2) {
      const inputBuy = parseFloat(buy2);
      const inputSell = parseFloat(sell2);
      if (!isNaN(inputBuy) && !isNaN(inputSell)) {
        const percent2 = ((inputSell / inputBuy - 1) * 100).toFixed(1);
        const marketer2 = (inputSell * 0.07).toFixed(1);
        const justVN2 = (inputSell - inputBuy).toFixed(1);
        const pureWithoutMarketer2 = (justVN2 - marketer2).toFixed(1);
        const result2 = {
          percent2,
          marketer2,
          justVN2,
          pureWithoutMarketer2,
        };
        setValues2(result2);
      } else {
        setValues2(null);
      }
    } else {
      setValues2(null);
    }
  }, [buy, percent, buy2, sell2]);

  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div style={{ marginBottom: "50px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "right",
          }}
        >
          <label>قیمت خرید:</label>
          <input
            type="number"
            value={buy}
            onChange={(e) => setBuy(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "50",
            textAlign: "right",
          }}
        >
          <label>درصد:</label>
          <input
            type="number"
            value={percent}
            onChange={(e) => setPercent(e.target.value)}
          />
        </div>
        {values && (
          <>
            <p style={{ textAlign: "right" }}>قیمت فروش: {values.sell}</p>
            <p style={{ textAlign: "right" }}>سود ناخالص1: {values.justVN}</p>
            <p style={{ textAlign: "right" }}>سود مشتری: {values.marketer}</p>
            <p style={{ textAlign: "right" }}>
              سود ناخالص2: {values.pureWithoutMarketer}
            </p>
          </>
        )}
      </div>
      <div style={{ marginTop: "50px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "right",
          }}
        >
          <label>قیمت فروش:</label>
          <input
            type="number"
            value={sell2}
            onChange={(e) => setSell2(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "right",
          }}
        >
          <label>قیمت خرید:</label>
          <input
            type="number"
            value={buy2}
            onChange={(e) => setBuy2(e.target.value)}
          />
        </div>
        {values2 && (
          <>
            <p style={{ textAlign: "right" }}>درصد سود: {values2.percent2}</p>
            <p style={{ textAlign: "right" }}>سود ناخالص1: {values2.justVN2}</p>
            <p style={{ textAlign: "right" }}>سود مشتری: {values2.marketer2}</p>
            <p style={{ textAlign: "right" }}>
              سود ناخالص2: {values2.pureWithoutMarketer2}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Buy;
