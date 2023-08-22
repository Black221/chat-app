

const InputSearch = ({ onChange, value }) => {
    return (
        <div>
            <input
                placeholder="Search"
                className="w-full p-1 px-2 rounded-xl border-2 border-gray-200"
                type="text"
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

export default InputSearch;