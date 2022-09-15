import { SEARCH_BY_NAME, SEARCH_BY_REGION, SET_COUNTRIES } from 'store/actions';

export default function reducer(state, action) {
  let filtered = [];
  switch (action.type) {
    case SEARCH_BY_NAME:
      let searchName = action.payload.name;
      filtered = !searchName
        ? state.countries
        : state.countries.filter(({ name }) =>
            name.common.toLowerCase().startsWith(searchName)
          );
      return {
        ...state,
        searchName,
        filtered,
      };
    case SEARCH_BY_REGION:
      if (action.payload.name === 'show all') {
        return {
          ...state,
          filtered: state.countries,
        };
      }
      let searchRegion = action.payload.name;
      filtered = state.countries.filter(
        ({ region }) => region.toLowerCase() === searchRegion
      );
      return {
        ...state,
        searchRegion,
        filtered,
      };
    case SET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        filtered: action.payload,
      };
    default:
      throw new Error('Not found action. :(');
  }
}
