import {createContext, useContext, useReducer } from 'react'

const Ctx = createContext({})

export const CtxProvider = ({children}) => { 

    const initialState = {

        userSelected : false,
        selectedPosition: {
          lng: -123.236380,
          lat: 49.255866 
        },
        loadingData: true,
        weatherData : {}
        
    }

    const reducer = (state,action) => {
        switch(action.type) {   
          case 'setSelectedPosition' : {
            return {
              ...state,
              userSelected: true,
              selectedPosition: {
                lng: action.lng,
                lat: action.lat
              }
            }
          }

          case "setLoadingData": {
            return {
              ...state,
              loadingData: action.value
            }
          }

          case "setWeatherData": {
            return {
              ...state,
              weatherData: action.data
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
