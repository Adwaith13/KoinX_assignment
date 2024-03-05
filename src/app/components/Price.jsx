"use client";
import { useState, useEffect, Fragment } from "react";
import { fetchBitcoinPrice } from "../apis/fetchBitcoinPrice";
import Image from "next/image";
import BitcoinLogo from "../images/BTC.svg";
import styles from "../styles/price.module.css";
import Polygon from "../images/Polygon.svg";

export default function Price() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const payload = await fetchBitcoinPrice();
        setPrice(payload.bitcoin);
      } catch (error) {
        console.error(error);
      }
    };
    fetchApi();
  }, []);

  const formatNumberWithCommas = (number) => {
    return number?.toLocaleString("en-US");
  };

  const inrPrice = formatNumberWithCommas(price?.inr);
  const usdPrice = formatNumberWithCommas(price?.usd);

  const priceChangeUSD = price?.usd_24h_change;

  return (
    <>
      <div className={styles.head}>
        <Image src={BitcoinLogo} alt="Bitcoin-Logo"></Image>
        <h1 className={styles.heading}>Bitcoin</h1>
        <span className={styles.symbol}>BTC</span>
      </div>
      {price && (
        <>
          <div className={styles.usdPriceChangeContainer}>
            <p className={styles.usdPrice}>${usdPrice}</p>
            <p className={styles.pricechangeUSD}>
              <Image src={Polygon} alt="polygon"></Image>
              {priceChangeUSD.toFixed(2)}
            </p>
          </div>
          <p>₹{inrPrice}</p>
        </>
      )}
    </>
  );
}
