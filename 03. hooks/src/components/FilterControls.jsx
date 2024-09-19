import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import "../styles/FilterControls.css"
import { ItemContext } from '../context/ItemsContext'
import { SearchContext } from '../context/SearchContext'

const FilterControls = () => {

  const { dispatch } = useContext(ItemContext)

  const { searchText, setSearchText } = useContext(SearchContext)
  const [inputText, setInputText] = useState(searchText)
  const inputRef = useRef()

  const addItem = () => {
    const payload = {
      name: prompt("Enter name") || '',
      description: prompt("Enter description") || ''
    }

    dispatch({ type: 'ADD_ITEM', payload })

  }

  useEffect((e) => {
    const handler = setTimeout(() => {      
      setSearchText(inputText)
    }, 500);

    return () => {
      clearTimeout(handler)
    }
  },[inputText])


  useLayoutEffect(()=>{
    inputRef.current.focus()
  },[])

  return (
    <div className='filter-container'>
      <input ref={inputRef} placeholder='Search items' value={inputText} onChange={(e)=> setInputText(e.target.value)} type="text" />
      {inputText && <button onClick={() => setInputText('')}>Clear Search</button>}
      <button onClick={addItem}>Add Item</button>
    </div>
  )
}

export default FilterControls
