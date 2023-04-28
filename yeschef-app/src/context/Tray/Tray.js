import { createContext, useContext } from 'react'

const initialValue = {}

const Tray = createContext(initialValue)

export const useTrayDishes = () => useContext(Tray)

export default Tray
