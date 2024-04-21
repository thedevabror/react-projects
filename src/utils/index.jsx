import { Search } from "./svgs";

export const Input = () => {
  return (
    <label
      class="relative bg-white min-w-sm max-w-2xl flex items-center justify-center border py-[4px] px-[4px] rounded-2xl gap-2 focus-within:border-gray-300"
      for="search-bar"
    >
      <input
        id="search-bar"
        placeholder="your keyword here"
        class="px-2 py-1 w-full rounded-md flex-1 outline-none bg-white"
      />
      <button class="w-full md:w-auto px-6 py-3 bg-primary  text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
        <div class="relative">
          <div class="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
            <Search />
          </div>

          <div class="flex items-center transition-all opacity-1 valid: bg-primary">
            <span class="text-sm font-semibold whitespace-nowrap truncate">
              Search
            </span>
          </div>
        </div>
      </button>
    </label>
  );
};
