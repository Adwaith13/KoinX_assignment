"use client";
// TradingViewWidget.jsx
import React, { useEffect, useRef, memo, useState } from "react";
import styles from "../styles/chart.module.css";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
          {
            "autosize": true,
            "symbol": "BITSTAMP:BTCUSD",
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": "light",
            "style": "2",
            "locale": "en",
            "enable_publishing": false,
            "save_image": false,
            "calendar": false,
            "hide_volume": true,
            "support_host": "https://www.tradingview.com"
          }`;

    // Check if the TradingView script has already been added
    const existingScript = document.querySelector(
      'script[src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"]'
    );

    if (!existingScript) {
      container.current.appendChild(script);
    }
  }, []);

  return <div className={styles.widgetContainer} ref={container}>
    
  </div>;
}

export default memo(TradingViewWidget);
