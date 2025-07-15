import { Card } from "@/components/ui/card";

function HelloWorldDisplay() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="p-8 bg-white shadow-lg border-0 rounded-xl">
        <h1 className="text-4xl font-bold text-pink-500 text-center">
          Hello World
        </h1>
      </Card>
    </div>
  );
}

export default HelloWorldDisplay;