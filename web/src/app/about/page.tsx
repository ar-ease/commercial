import { AccordionComponent } from "@/components/accordian-component";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">FAQ</h1>
        <p className="text-gray-600">Frequently Asked Questions</p>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
      </div>

      <div className="max-w-3xl mx-auto">
        <AccordionComponent />
      </div>
    </div>
  );
}
