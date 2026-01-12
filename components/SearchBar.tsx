"use client"

import { SearchManufacturer } from "@components"
import { useState } from "react"
const SearchBar = () => {
    const [manufacturer,setManufacturer]= useState<string | null>("");
    const handleSearch =()=>{}
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className="searchbar__items">
        <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
        
        /> 

      </div>
    </form>
  )
}

export default SearchBar
