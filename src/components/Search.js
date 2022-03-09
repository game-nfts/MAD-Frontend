import React from 'react'
import { ReactComponent as SearchIcon } from '../assets/search.svg';

function Search({ query, onSearch }) {
  return (
    <div className="relative h-11">
      <SearchIcon className="absolute left-0 top-0 mr-7 mt-2" />
      <input
        className="bg-transparent font-commuter h-full pr-5 font-lato text-xl px-8 focus:outline-none text-gray-50 border-0 border-b w-full"
        type="search"
        name="search"
        value={query}
        placeholder="Search parcel or estate"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  )
}

export default Search