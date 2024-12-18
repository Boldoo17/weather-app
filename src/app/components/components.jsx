import { SearchIcon } from "../search";

export function Searchinput({ search, onChangeText, onPressEnter }) {
  return (
    <div className="ml-20 flex px-4 py-3 rounded-md overflow-hidden max-w-md mx-auto font-[sans-serif]">
      <SearchIcon />;
      <input
        type="text"
        placeholder="Search City..."
        className="border-none outline-none p-2 w-64 rounded-lg text-black"
        value={search}
        onChange={onChangeText}
        onKeyDown={onPressEnter}
      />
    </div>
  );
}
export function Circle({ size, top, left }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}px`,
        left: `${left}px`,
      }}
      className="border rounded-full border-[#ffffff] border-opacity-[8%] absolute z-20"
    ></div>
  );
}
