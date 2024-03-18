import { Insurance } from "@/lib/data/insurances";
import { formatCurrency } from "@/utils/currency";

import styles from "./styles.module.css";

type InsuranceItemProps = {
  insurance: Insurance;
};

export default function InsuranceItem({ insurance }: InsuranceItemProps) {
  const price = formatCurrency(insurance.price);

  return (
    <div className={styles.container}>
      <strong className={styles.title}>{insurance.name}</strong>
      <p className={styles.description}>{insurance.description}</p>
      <p className={styles.requirements}>
        Requirements:
        <br />
        {insurance.requirements}
      </p>
      <span className={styles.price}>{price}</span>
    </div>
  );
}
