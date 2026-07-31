import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [market, setMarket] = useState("LIVE");
  const [symbol, setSymbol] = useState("EUR/USD");
  const [timeframe, setTimeframe] = useState("5M");

  return (
    <>
      <Head>
        <title>Quotex Bot - AI Trading Dashboard</title>
        <meta
          name="description"
          content="AI-powered Live Market and OTC Trading Analysis Dashboard"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main style={styles.container}>
        {/* Header */}
        <header style={styles.header}>
          <div>
            <h1 style={styles.logo}>Quotex Bot</h1>
            <p style={styles.subtitle}>
              AI-Powered Trading Analysis Platform
            </p>
          </div>

          <div style={styles.status}>
            <span style={styles.statusDot}></span>
            System Online
          </div>
        </header>

        {/* Market Selection */}
        <section style={styles.marketSection}>
          <button
            onClick={() => setMarket("LIVE")}
            style={{
              ...styles.marketButton,
              ...(market === "LIVE" ? styles.activeButton : {}),
            }}
          >
            🌐 LIVE MARKET
          </button>

          <button
            onClick={() => setMarket("OTC")}
            style={{
              ...styles.marketButton,
              ...(market === "OTC" ? styles.activeButton : {}),
            }}
          >
            🟠 OTC MARKET
          </button>
        </section>

        {/* Controls */}
        <section style={styles.controls}>
          <div>
            <label style={styles.label}>Market Type</label>
            <div style={styles.selectBox}>{market} MARKET</div>
          </div>

          <div>
            <label style={styles.label}>Asset</label>
            <select
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              style={styles.select}
            >
              <option>EUR/USD</option>
              <option>GBP/USD</option>
              <option>USD/JPY</option>
              <option>BTC/USD</option>
              <option>ETH/USD</option>
            </select>
          </div>

          <div>
            <label style={styles.label}>Timeframe</label>
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              style={styles.select}
            >
              <option>1M</option>
              <option>2M</option>
              <option>5M</option>
              <option>15M</option>
              <option>30M</option>
              <option>1H</option>
            </select>
          </div>
        </section>

        {/* Dashboard */}
        <section style={styles.grid}>
          {/* Chart */}
          <div style={styles.chartCard}>
            <div style={styles.cardHeader}>
              <div>
                <h2 style={styles.cardTitle}>{symbol}</h2>
                <p style={styles.cardSubtitle}>
                  {market} Market • {timeframe}
                </p>
              </div>

              <span style={styles.liveBadge}>● LIVE</span>
            </div>

            <div style={styles.chartPlaceholder}>
              <div style={styles.chartText}>
                📊 Candlestick Chart
              </div>

              <p>
                Real-time market chart will be connected in the next phase.
              </p>
            </div>
          </div>

          {/* AI Analysis */}
          <div style={styles.analysisCard}>
            <h2 style={styles.cardTitle}>🤖 AI Market Analysis</h2>

            <div style={styles.analysisItem}>
              <span>Market Trend</span>
              <strong>BULLISH</strong>
            </div>

            <div style={styles.analysisItem}>
              <span>Market Condition</span>
              <strong>Trending</strong>
            </div>

            <div style={styles.analysisItem}>
              <span>RSI</span>
              <strong>62.40</strong>
            </div>

            <div style={styles.analysisItem}>
              <span>MACD</span>
              <strong>Positive</strong>
            </div>

            <div style={styles.analysisItem}>
              <span>Confidence</span>
              <strong>--%</strong>
            </div>
          </div>
        </section>

        {/* Signal Panel */}
        <section style={styles.signalCard}>
          <h2 style={styles.cardTitle}>🎯 Trading Signal</h2>

          <div style={styles.signalContent}>
            <div>
              <p style={styles.smallText}>CURRENT SIGNAL</p>
              <h1 style={styles.waitSignal}>WAIT</h1>
            </div>

            <div>
              <p style={styles.smallText}>CONFIDENCE</p>
              <h2>--%</h2>
            </div>

            <div>
              <p style={styles.smallText}>RECOMMENDED EXPIRY</p>
              <h2>--</h2>
            </div>
          </div>

          <p style={styles.warning}>
            ⚠️ This platform provides analytical signals only. No signal
            guarantees profit.
          </p>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          Quotex Bot © 2026 — AI Trading Analysis Platform
        </footer>
      </main>
    </>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0b0f19",
    color: "#ffffff",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
    borderBottom: "1px solid #252b3a",
    paddingBottom: "20px",
  },

  logo: {
    margin: 0,
    fontSize: "30px",
  },

  subtitle: {
    color: "#8b95a7",
    marginTop: "5px",
  },

  status: {
    background: "#121827",
    padding: "10px 15px",
    borderRadius: "8px",
    color: "#9ca7b8",
  },

  statusDot: {
    display: "inline-block",
    width: "8px",
    height: "8px",
    background: "#22c55e",
    borderRadius: "50%",
    marginRight: "8px",
  },

  marketSection: {
    display: "flex",
    gap: "12px",
    marginBottom: "25px",
  },

  marketButton: {
    padding: "13px 22px",
    borderRadius: "8px",
    border: "1px solid #30384a",
    background: "#151b29",
    color: "#ffffff",
    cursor: "pointer",
    fontWeight: "bold",
  },

  activeButton: {
    background: "#2563eb",
    borderColor: "#2563eb",
  },

  controls: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "15px",
    marginBottom: "25px",
  },

  label: {
    display: "block",
    color: "#8b95a7",
    marginBottom: "7px",
    fontSize: "13px",
  },

  select: {
    width: "100%",
    padding: "12px",
    background: "#151b29",
    color: "#ffffff",
    border: "1px solid #30384a",
    borderRadius: "7px",
  },

  selectBox: {
    padding: "12px",
    background: "#151b29",
    border: "1px solid #30384a",
    borderRadius: "7px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "20px",
  },

  chartCard: {
    background: "#111827",
    border: "1px solid #252b3a",
    borderRadius: "12px",
    padding: "20px",
    minHeight: "500px",
  },

  analysisCard: {
    background: "#111827",
    border: "1px solid #252b3a",
    borderRadius: "12px",
    padding: "20px",
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardTitle: {
    margin: 0,
  },

  cardSubtitle: {
    color: "#8b95a7",
    marginTop: "5px",
  },

  liveBadge: {
    color: "#22c55e",
    fontWeight: "bold",
  },

  chartPlaceholder: {
    height: "380px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#687386",
    border: "1px dashed #30384a",
    marginTop: "20px",
    borderRadius: "8px",
  },

  chartText: {
    fontSize: "24px",
    color: "#9ca7b8",
  },

  analysisItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "17px 0",
    borderBottom: "1px solid #252b3a",
    color: "#9ca7b8",
  },

  signalCard: {
    background: "#111827",
    border: "1px solid #252b3a",
    borderRadius: "12px",
    padding: "25px",
    marginTop: "20px",
  },

  signalContent: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginTop: "20px",
  },

  smallText: {
    color: "#687386",
    fontSize: "12px",
  },

  waitSignal: {
    color: "#f59e0b",
    fontSize: "35px",
  },

  warning: {
    color: "#f59e0b",
    background: "#1c1910",
    padding: "12px",
    borderRadius: "7px",
    marginTop: "25px",
  },

  footer: {
    textAlign: "center",
    color: "#687386",
    marginTop: "40px",
    paddingBottom: "20px",
  },
};
