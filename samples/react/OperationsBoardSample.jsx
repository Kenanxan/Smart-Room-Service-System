import React from "react";
import { taskColumns } from "../data/mockData";

const columnAccent = {
  pending: "#f4b942",
  preparing: "#5aa7ff",
  ready: "#22c1a1",
};

export function OperationsBoardSample() {
  return (
    <section style={styles.shell}>
      <header style={styles.header}>
        <div>
          <p style={styles.eyebrow}>Operations</p>
          <h2 style={styles.title}>Supplier task board preview</h2>
        </div>
        <span style={styles.badge}>Mock workflow only</span>
      </header>

      <div style={styles.grid}>
        {taskColumns.map((column) => (
          <article key={column.id} style={styles.column}>
            <div style={styles.columnHeader}>
              <span
                style={{
                  ...styles.dot,
                  background: columnAccent[column.id] || "#9eb0c2",
                }}
              />
              <h3 style={styles.columnTitle}>{column.title}</h3>
            </div>

            <div style={styles.cardList}>
              {column.items.map((item) => (
                <div key={item.id} style={styles.taskCard}>
                  <strong style={styles.taskTitle}>Order #{item.id}</strong>
                  <p style={styles.taskSummary}>{item.summary}</p>
                  <small style={styles.taskEta}>{item.eta}</small>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const styles = {
  shell: {
    padding: 24,
    borderRadius: 24,
    background: "#081728",
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
    color: "#f4b942",
  },
  title: {
    margin: "6px 0 0",
  },
  badge: {
    borderRadius: 999,
    padding: "8px 12px",
    background: "rgba(255,255,255,0.08)",
    color: "#9eb0c2",
    fontSize: 13,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 14,
  },
  column: {
    borderRadius: 20,
    padding: 14,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  columnHeader: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 999,
  },
  columnTitle: {
    margin: 0,
  },
  cardList: {
    display: "grid",
    gap: 12,
  },
  taskCard: {
    borderRadius: 18,
    padding: 14,
    background: "rgba(5, 13, 20, 0.58)",
  },
  taskTitle: {
    display: "block",
    marginBottom: 6,
  },
  taskSummary: {
    margin: 0,
    lineHeight: 1.6,
    color: "#b5c3d0",
  },
  taskEta: {
    display: "block",
    marginTop: 8,
    color: "#8ca0b3",
  },
};

export default OperationsBoardSample;

