export default function Search({search, setSearch, handleSearch}) {
    return (
        <div className="w-full flex justify-around items-center mb-8 mt-2">
            <input 
                type="text"
                className="w-9/12 h-10 border border-solid border-1 border-black rounded-lg px-2 py-3 text-base outline-none bg-white placeholder:text-purple-500"
                placeholder="Enter City Name"
                name="search"
                value={search}
                onChange={(event)=> setSearch(event.target.value)}
            />
            <button
                className="border-none rounded-lg bg-black text-white text-base outline-none cursor-pointer px-3 py-2"
                onClick={handleSearch}>
                    Search Weather
            </button>
        </div>
    )
}