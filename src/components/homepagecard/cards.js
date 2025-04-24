import { Button } from "@mui/material";

export function ProductCard() {
  return (
    <div className="w-full p-2.5 bg-white rounded-4xl">
      <img
        className="w-full rounded-4xl"
        src="https://canadian.agency/wp-content/uploads/2024/04/NativeBase-75.png"
      />
      <div>
        <h1 className="text-sm font-bold p-1.5 md:text-xl">Python</h1>

        <p className="flex items-center text-[18px] p-1.5 text-justify">Python is a high-level, general-purpose programming language known for its readability and versatility.</p>

        <div className="flex items-center w-full justify-end p-1.5">
          <Button className="bg-blue-600! text-white! font-bold! p-2! text-sm! md:text-xl">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
