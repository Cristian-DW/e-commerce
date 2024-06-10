import { products } from "@/utils/products";
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import { trucateText } from "@/utils/trucateText";
import ProductCards from "./components/products/ProductCards";

/**
 * The Home component that serves as the main page of the e-commerce application.
 * It includes a banner and a grid of product cards.
 * @returns The JSX for the home page.
 */
export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {products.map((product: any) => {
            return <ProductCards key={product.id} data={product} />;
          })}
        </div>
      </Container>
    </div>
  );
}
