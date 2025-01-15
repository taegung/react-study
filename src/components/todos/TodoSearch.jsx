import React,{useState} from 'react'

const TodoSearch = ({ onSearch }) => {
    const [input, setInput] = useState('');
  
    const handleInputChange = (e) => {
      setInput(e.target.value);
    };
  
    const handleSearchClick = () => {
      onSearch(input); // 부모 컴포넌트에 검색어 전달
    };
  
    return (
      <div>
        <input
          className="w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded"
          type="text"
          id="search"
          value={input}
          onChange={handleInputChange}
        />
        <button
          className="px-6 py-3 text-xl text-red-200"
          type="button"
          onClick={handleSearchClick}
        >
          조회
        </button>
      </div>
    );
  };
  
  export default TodoSearch;
  