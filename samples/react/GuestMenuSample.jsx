import React, { useMemo, useState } from "react";
import { guestCategories, guestProducts } from "../data/mockData";

export function GuestMenuSample() {
  const [activeCategory, setActiveCategory] = useState(guestCategories[0].id);

  const visibleProducts = useMemo(() => {
    return guestProducts.filter((product) => product.categoryId === activeCategory);
  }, [activeCategory]);

  return (
    <section style={styles.shell}>
      <header style={styles.header}>
        <div>
          <p style={styles.eyebrow}>Guest flow</p>
          <h2 style={styles.title}>Room service menu preview</h2>
        </div>
        <span style={styles.roomTag}>Room 804</span>
      </header>

      <div style={styles.categoryRow}>
        {guestCategories.map((category) => {
          const isActive = category.id === activeCategory;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              style={{
                ...styles.categoryButton,
                ...(isActive ? styles.categoryButtonActive : null),
              }}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div style={styles.productList}>
        {visibleProducts.map((product) => (
          <article key={product.id} style={styles.productCard}>
            <div style={styles.imagePlaceholder} />
            <div style={styles.productBody}>
              <div>
                <h3 style={styles.productTitle}>{product.name}</h3>
                <p style={styles.productDescription}>{product.description}</p>
              </div>
              <div style={styles.productFooter}>
                <strong>
                  {product.price.toFixed(2)} {product.currency}
                </strong>
                <button type="button" style={styles.primaryButton}>
                  Add
                </button>
              </div>
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
    background: "#f5f8fb",
    color: "#102131",
    maxWidth: 760,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    gap: 16,
    alignItems: "center",
  },
  eyebrow: {
    margin: 0,
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    color: "#6d7c8c",
  },
  title: {
    margin: "6px 0 0",
  },
  roomTag: {
    padding: "8px 12px",
    borderRadius: 999,
    background: "#dfe8ef",
    fontSize: 13,
  },
  categoryRow: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 18,
  },
  categoryButton: {
    border: "1px solid #d6e0e8",
    background: "#ffffff",
    borderRadius: 999,
    padding: "10px 14px",
    cursor: "pointer",
  },
  categoryButtonActive: {
    background: "#122f47",
    color: "#ffffff",
    borderColor: "#122f47",
  },
  productList: {
    display: "grid",
    gap: 14,
    marginTop: 18,
  },
  productCard: {
    display: "grid",
    gridTemplateColumns: "110px 1fr",
    gap: 16,
    padding: 14,
    borderRadius: 20,
    background: "#ffffff",
  },
  imagePlaceholder: {
    minHeight: 110,
    borderRadius: 18,
    background: "linear-gradient(135deg, #f0ba57, #f69250)",
  },
  productBody: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 10,
  },
  productTitle: {
    margin: 0,
  },
  productDescription: {
    margin: "8px 0 0",
    lineHeight: 1.6,
    color: "#5e7184",
  },
  productFooter: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    alignItems: "center",
  },
  primaryButton: {
    border: 0,
    borderRadius: 999,
    background: "#123451",
    color: "#ffffff",
    padding: "10px 16px",
    cursor: "pointer",
    fontWeight: 600,
  },
};

export default GuestMenuSample;

