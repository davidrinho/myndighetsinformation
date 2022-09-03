





const SearchFilter = ({originalData, setDataFunc}) => {

    const filterDataOnSearch = (input) => {
        const filteredResult = originalData.filter(item => item.toLowerCase().includes(input.toLowerCase()));
        setDataFunc(filteredResult);
    }

    return (
        <div className="search_container">
            <input type="text" placeholder="Sök..." onChange={(e) => filterDataOnSearch(e.target.value)} />
        </div>
    )
}

export default SearchFilter;