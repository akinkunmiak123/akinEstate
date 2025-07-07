// utils/CompareContext.js
import React, { createContext, useState, useContext } from 'react'

const CompareContext = createContext()

export const CompareProvider = ({ children }) => {
  const [compareList, setCompareList] = useState([])

  const addToCompare = (property) => {
    setCompareList((prev) => {
      if (prev.find((item) => item.id === property.id)) return prev
      return [...prev, property].slice(0, 3) // limit to 3 properties
    })
  }

  const removeFromCompare = (id) => {
    setCompareList((prev) => prev.filter((item) => item.id !== id))
  }

  const clearCompare = () => setCompareList([])

  return (
    <CompareContext.Provider
      value={{ compareList, addToCompare, removeFromCompare, clearCompare }}
    >
      {children}
    </CompareContext.Provider>
  )
}

export const useCompare = () => useContext(CompareContext)
