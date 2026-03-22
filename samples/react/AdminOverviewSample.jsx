import React from "react";
import { dashboardSummary } from "../data/mockData";

export function AdminOverviewSample() {
  return (
    <section style={styles.shell}>
      <header style={styles.header}>
        <div>
          <p style={styles.eyebrow}>Admin visibility</p>
          <h2 style={styles.title}>Management dashboard preview</h2>
        </div>
        <span style={styles.badge}>Sanitized sample</span>
      </header>

      <div style={styles.metricGrid}>
        <MetricCard label="Total revenue" value={dashboardSummary.totalRevenue} />
        <MetricCard label="Total orders" value={dashboardSummary.totalOrders} />
        <MetricCard label="Average basket" value={dashboardSummary.averageBasket} />
      </div>

      <div style={styles.lowerGrid}>
        <article style={styles.chartCard}>
          <h3 style={styles.sectionTitle}>Weekly trend</h3>
          <div style={styles.barRow}>
            {[32, 46, 44, 67, 74, 88, 72].map((height, index) => (
              <span key={index} style={{ ...styles.bar, height: `${height}%` }} />
            ))}
          </div>
          <div style={styles.axisRow}>
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
        </article>

        <article style={styles.listCard}>
          <h3 style={styles.sectionTitle}>Top hotels</h3>
          <div style={styles.list}>
            {dashboardSummary.topHotels.map((hotel) => (
              <div key={hotel.label} style={styles.listItem}>
                <span>{hotel.label}</span>
                <strong>{hotel.value}</strong>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function MetricCard({ label, value }) {
  return (
    <article style={styles.metricCard}>
      <span style={styles.metricLabel}>{label}</span>
      <strong style={styles.metricValue}>{value}</strong>
    </article>
  );
}

const styles = {
  shell: {
    padding: 24,
    borderRadius: 24,
    background: "#0b1a2a",
    color: "#edf4fb",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    marginBottom: 18,
  },
  eyebrow: {
    margin: 0,
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    color: "#22c1a1",
  },
  title: {
    margin: "6px 0 0",
  },
  badge: {
    padding: "8px 12px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.08)",
    color: "#9eb0c2",
    fontSize: 13,
  },
  metricGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 14,
  },
  metricCard: {
    padding: 18,
    borderRadius: 20,
    background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  metricLabel: {
    display: "block",
    color: "#9eb0c2",
    marginBottom: 10,
  },
  metricValue: {
    fontSize: 28,
  },
  lowerGrid: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: 14,
    marginTop: 14,
  },
  chartCard: {
    padding: 18,
    borderRadius: 20,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  listCard: {
    padding: 18,
    borderRadius: 20,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  sectionTitle: {
    margin: 0,
  },
  barRow: {
    height: 220,
    display: "grid",
    gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
    gap: 10,
    alignItems: "end",
    marginTop: 18,
  },
  bar: {
    display: "block",
    borderRadius: "18px 18px 6px 6px",
    background: "linear-gradient(180deg, #22c1a1, #5aa7ff)",
  },
  axisRow: {
    display: "grid",
    gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
    gap: 10,
    marginTop: 10,
    color: "#8ca0b3",
    fontSize: 12,
    textAlign: "center",
  },
  list: {
    display: "grid",
    gap: 12,
    marginTop: 18,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    padding: "12px 14px",
    borderRadius: 16,
    background: "rgba(5, 13, 20, 0.58)",
  },
};

export default AdminOverviewSample;
