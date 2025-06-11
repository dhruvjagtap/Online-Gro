import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="w-full flex items-center gap-2 border-2 border-[#5a189a] rounded-lg px-2 py-1 bg-[#ffffff]">
      <Search className="h-5 w-5 text-[#5a189a]" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full outline-none bg-transparent text-[#5a189a]"
      />
    </div>
  );
}
