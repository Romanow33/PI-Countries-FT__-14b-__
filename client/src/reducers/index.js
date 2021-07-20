import {FIND_COUNTRY, FIND_REGION, GET_COUNTRIES, GET_COUNTRY_DETAIL, ALL_COUNTRIES, SET_COUNTRIES_AZ, SET_COUNTRIES_ZA, SET_COUNTRIES_BY_INHABITANS_ASC, SET_COUNTRIES_BY_INHABITANS_DESC, GET_BY_TOURISM} from '../Actions/index';

const initialState = {
    allCountries:[],   
    countries: [],
    countryDetail:{},
    countrySearched:[{}],
  }
  
  export default function reducer (state = initialState, action) {
    switch (action.type) {
      case GET_COUNTRIES:
        return{
          ...state,
          countries: action.payload.content
        }
      case GET_COUNTRY_DETAIL:
        return{
          ...state,
          countryDetail: action.payload
        }
      case FIND_COUNTRY:
        return{
          ...state,
          countrySearched: action.payload
        }
      case ALL_COUNTRIES:
        return{
          ...state,
          allCountries: action.payload
        }  
      case FIND_REGION:
        return{
          ...state,
          /* countrySearched: state.allCountries.filter((country)=>{
            return country.continent.some((el)=> el.continent === action.continent)}) */ 
          countrySearched: state.allCountries && state.allCountries.filter(country =>country.continent === action.continent) 
          }
      case SET_COUNTRIES_AZ:
        return{
          ...state,
          countrySearched: state.countrySearched.slice().sort(function(a,b){
                          if(a.name < b.name) return -1
                          if(b.name < a.name) return 1 
                          return 0})
          }
      case SET_COUNTRIES_ZA:
        return{
          ...state,
          countrySearched: state.countrySearched.slice().sort(function(a,b){
                          if(a.name < b.name) return -1
                          if(b.name < a.name) return 1 
                          return 0
                          // return (a.name - b.name)
                        }).reverse()         
        } 
      case SET_COUNTRIES_BY_INHABITANS_ASC:
        return{
          ...state,
          countrySearched: state.countrySearched.slice().sort(function(a,b){
                        return a.population - b.population
          })
          }
      case SET_COUNTRIES_BY_INHABITANS_DESC:
          return{
          ...state,
          countrySearched: state.countrySearched.slice().sort(function(a,b){
            return a.population - b.population
          }).reverse()
          }    
      case GET_BY_TOURISM:
          return{
          ...state,
          countrySearched: state.allCountries.filter((country)=>{
                          return country.activities.some((el)=> el.name === action.activities)})
          }  
    default:
      return state;
    }
  }