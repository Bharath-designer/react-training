import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'

import "../styles/ItemsTable.css"
import { ItemContext } from '../context/ItemsContext'
import { SearchContext } from '../context/SearchContext'
import useFilteredItems from '../hooks/useFilteredItems'

const ItemsTable = ({ data }) => {

    const { state, dispatch } = useContext(ItemContext)
    const { searchText } = useContext(SearchContext)

    const [sortBy, setSortBy] = useState(null)

    const deleteItem = useCallback((event) => {
        const itemIndex = event.target.dataset.deleteIndex
        
        if (itemIndex !== undefined) {
            dispatch({type:"REMOVE_ITEM", payload: itemIndex})
        }

    },[])

    const handleSort = (column) => {

        if (sortBy !== column) {
            setSortBy(column)
        } else {
            setSortBy(null)
        }
    }

    const filteredItems = useFilteredItems(state, searchText, sortBy)

    return (
        <table onClick={deleteItem} className='items-table'>
            <thead>
                <tr>
                    <th className={`${sortBy === 'name' ? 'active':''}`} onClick={()=> handleSort('name')}>
                        <div>Name<span></span></div>
                    </th>
                    <th className={`${sortBy === 'description' ? 'active':''}`} onClick={()=> handleSort('description')}>
                        <div>Description<span></span></div>
                    </th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {filteredItems.map((element, index) => {
                    return (
                        <tr key={index}>
                            <td>{element.name}</td>
                            <td>{element.description}</td>
                            <td><button data-delete-index={index}>delete</button></td>
                        </tr>
                    )
                })}
                <tr>

                </tr>
            </tbody>
        </table>
    )
}

export default ItemsTable
