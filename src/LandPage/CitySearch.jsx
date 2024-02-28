import { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Importing the React icon

const CitySearch = [
  'New York',
  'Los Angeles',
  'Chicago',
  'San Francisco',
  'Seattle',
  'Boston',
  'Houston',
  'Atlanta',
  'Miami',
  'Denver',
];

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSearch = () => {
    const results = CitySearch.filter(city =>
      city.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="search-bar">
      {!isExpanded && (
        <button onClick={handleToggleExpand}>
          <FaSearch /> Search
        </button>
      )}
      {isExpanded && (
        <div>
          <input
            type="text"
            placeholder="Enter a city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
          <button onClick={handleToggleExpand}>Close</button>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
