import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductList from "@/components/ProductsList";

export default async function Home({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {

  const params = await searchParams;
  const category = params.category as string | undefined;
  const gender = params.gender as string | undefined;
  const type = params.type as string | undefined;

  return (
    <main>
      <Hero />
      <ProductList category={category} gender={gender} type={type} params="homepage" />
    </main>
  );
}
