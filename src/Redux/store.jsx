import {configureStore, createSlice} from '@reduxjs/toolkit'

const initialState = {
    coins: [],
    prices: {},
}

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState,
    reducers: {
        setPortfolio(state, action) {
            return action.payload
        },
        addCoin(state, action){
            state.coins.push(action.payload)
        },
        updateCoin(state, action) {
            const {id, changes} = action.payload
            const idx = state.coins.findIndex(c => c.id === id)
            if(idx >= 0) state.coins[idx] = {...state.coins[idx], ...changes}
        },
        removeCoin(state, action) {
            dtste.coins = state.coins.filter(c => c.id !== action.payload)
        },
        setPrice(state, action){
            state.prices = {...state.prices, ...action.payload}
        }
    }
})

export const {setPortfolio, addCoin, updateCoin, removeCoin, setPrice} = portfolioSlice.actions

const store = configureStore({
    reducer: {
        portfolioSlice: portfolioSlice
    }
})



export default store