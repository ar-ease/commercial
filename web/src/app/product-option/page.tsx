import CategoryPage, { CategoryShowcase } from "@/components/categoryShowcase";

export default function ProductOptionPage() {
  return (
    <div>
      <div className="z-10 lg:pt-20 grid grid-cols-1 md:grid-cols-2 gap-4 px-4 w-full max-w-7xl mx-auto">
        <CategoryPage />
        <CategoryPage />
      </div>{" "}
      {/* Your content here */}
    </div>
  );
}
