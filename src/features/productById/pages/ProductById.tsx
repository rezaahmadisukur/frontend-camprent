import { cache } from "react";
import { getProductById } from "../api/getProductById";
import ProductDetailPageInner from "../components/ProductDetailPageInner";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const placeholderImageUrl =
  "https://images.unsplash.com/photo-1632088679704-6692a94ada2c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

type Props = {
  params: Promise<{ slug: string }>;
};

const cachedGetProductById = cache(async (productId: string) => {
  return await getProductById({ id: productId });
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const productId = slug.split("-").pop() ?? "";

  const product = await cachedGetProductById(productId);
  return {
    title: product.name ?? "Product Detail",
    description: product.description ?? "Product Description",
    openGraph: {
      title: product.name ?? "Product Detail",
      description: product.description ?? "Product Description",
      images: [product.imageUrl ?? placeholderImageUrl]
    }
  };
}

const ProductByIdPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  console.log(slug);
  const productId = slug.split("-").pop() ?? "";

  const product = await cachedGetProductById(productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="py-20">
      <ProductDetailPageInner
        id={product.id}
        name={product.name}
        price={product.price}
        imageUrl={product.imageUrl ?? placeholderImageUrl}
        description={product.description ?? "No description available"}
        category={product.category}
      />
    </div>
  );
};

export default ProductByIdPage;
