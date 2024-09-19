import React, { useContext } from 'react'

import FilterControls from './FilterControls'

import { ItemContext } from '../context/ItemsContext.jsx'
import ItemsTable from './ItemsTable.jsx'

import "../styles/ItemsManager.css"
import { SearchContextProvider } from '../context/SearchContext.jsx'

const ItemsManager = () => {

  return (
    <div className='items-container'>
      <div className="app-title">Items Manager</div>
      <SearchContextProvider>
        <div className="action-container">
          <FilterControls />
        </div>
        <div className="items-wrapper">
          <ItemsTable />
        </div>
      </SearchContextProvider>
    </div>
  )
}

export default ItemsManager
