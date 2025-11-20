import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function HeroSection({
  handleSearch,
  valueInput,
  setValueInput,
}) {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-6 text-center max-w-4xl mx-auto">
      {/* Main Title */}
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
        Your own{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          blogging
        </span>{" "}
        platform.
      </h1>

      {/* Subtitle */}
      <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
        This is your space to think out loud, to share what matters, and to
        write without filters. Whether it’s one word or a thousand, your story
        starts right here.
      </p>

      {/* Search Bar */}
      <div className="mt-10 w-full max-w-md flex gap-2">
        <Input
          value={valueInput}
          onChange={(e) => {
            const value = e.target.value;
            setValueInput(value);
            handleSearch(value); // Gõ tới đâu lọc tới đó
          }}
          type="text"
          placeholder="Enter search title..."
          className="flex-1 h-12 text-base rounded-lg border focus:ring-2 focus:ring-indigo-500"
        />
        <Button
          onClick={() => handleSearch(valueInput)}
          className="h-12 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg"
        >
          <Search className="h-5 w-5 mr-2" />
          Search
        </Button>
      </div>
    </section>
  );
}
