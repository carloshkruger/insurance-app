export type Insurance = {
  id: number;
  name: string;
  description: string;
  requirements: string;
  price: number;
};

export async function getInsurances(): Promise<Insurance[]> {
  const result = await fetch(`${process.env.API_URL}/insurances`);
  const insurances = await result.json();
  return insurances;
}