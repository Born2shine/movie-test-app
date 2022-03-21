import React from 'react'
import { useGlobalContext } from '../../provider/context'

const Search = () => {
    const {queryData, onInputChange, onKeyPressEnter } = useGlobalContext()
  return (
    <div className='search-wrapper'>
        <label>Search</label>
        <input 
        onChange={(e) => onInputChange(e)} value={queryData}
        onKeyPress={(e) => onKeyPressEnter(e)}
        className='search-input' 
        type="text"  />
    </div>
  )
}

export default Search