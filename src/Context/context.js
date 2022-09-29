import {createContext, useContext, useReducer } from 'react'
import { SelectedDataMode } from '../lib/enums/selectedData'

const Ctx = createContext({})

export const CtxProvider = ({children}) => { 

    const initialState = {

        userSelected : false,
        selectedPosition: {
          lng: -123.236380,
          lat: 49.255866 
        },
        loadingData: true,
        errorCode: null,
        weatherData : {
          currentData: [],
          dailyData: [],
          hourlyDataByDay: [],
        },
        selectedDataMode: SelectedDataMode.Weekly,
        selectedDataDay: 0
                
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
              loadingData: action.value,
              selectedDataDay: 0,
              errorCode: null
            }
          }

          case "setWeatherData": {
            return {
              ...state,
              weatherData: action.data
            }
          }

          case "setSelectedDataMode": {
            return {
              ...state,
              selectedDataMode: action.value
            }
          }

          case "setSelectedDataDay": {
            return {
              ...state,
              selectedDataDay: action.value
            }
          }

          case "setErrorCode" : {
            return {
              ...state,
              errorCode : action.value,
              loadingData: false
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
