import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
    return (
        <div className="relative mb-4">
            <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
                className="text-sm pl-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Search products, brands and more..."
            />
        </div>
    );
};

export default SearchBar;
