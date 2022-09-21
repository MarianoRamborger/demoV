import {createContext, useContext, useReducer } from 'react'


const Ctx = createContext({})

export const CtxProvider = ({children}) => { 

    const initialState = {
        contextTest: "#E9EEF2"
    }

    const reducer = (state,action) => {
        switch(action.type) {
        
            case 'testContext': {
                return {
                    ...state,
                    contextTest: action.value
                }
            }

            default: {
                return {
                    ...state
                }
            }
        }
    }

    return(
        <Ctx.Provider value={(useReducer(reducer,initialState))}>
            {children}
        </Ctx.Provider>
    )

}

export const useCtxValue = () => useContext(Ctx)
