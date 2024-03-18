import { getInsurances } from "@/lib/data/insurances";
import InsuranceItem from "./_components/InsuranceItem";
import styles from "./page.module.css";

export default async function Home() {
  const insurances = await getInsurances();

  return (
    <main className={styles.main}>
      <h1>Our insurances</h1>

      <div className={styles.insuranceList}>
        {insurances.map((insurance) => (
          <InsuranceItem key={insurance.id} insurance={insurance} />
        ))}
      </div>
    </main>
  );
}
