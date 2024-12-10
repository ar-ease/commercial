import CategoryPage, { CategoryShowcase } from "@/components/categoryShowcase";

export default function ProductOptionPage() {
  return (
    <div>
      <h1>Product Options</h1>
      <div className="flex">
        <CategoryPage />
        <CategoryPage />
      </div>{" "}
      {/* Your content here */}
    </div>
  );
}
