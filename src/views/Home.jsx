import React, {
  Fragment,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from 'react';
import Dropdown from 'components/DumbComponents/Dropdown';
import InputSearch from 'components/DumbComponents/InputSearch';
import { Container } from 'components/styled';
import CardCountry from 'components/DumbComponents/CardCountry';
import { getCountries } from 'services/countries';
import reducer from 'store/reduce';
import { SET_COUNTRIES } from 'store/actions';
import Loading from 'components/DumbComponents/Loading';

const initialState = {
  searchName: '',
  searchRegion: '',
  countries: [],
  filtered: [],
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);

  const getCountriesCallback = useCallback(async (region) => {
    const data = await getCountries(region);
    setIsLoading(false);
    return data;
  }, []);

  useEffect(() => {
    (async () => {
      const countries = await getCountriesCallback();
      dispatch({
        type: SET_COUNTRIES,
        payload: countries,
      });
    })();
  }, [getCountriesCallback]);

  return (
    <Fragment>
      {isLoading && <Loading />}

      <Container.Filters>
        <InputSearch dispatch={dispatch} />
        <Dropdown dispatch={dispatch} />
      </Container.Filters>
      <Container.SectionCountries>
        {state.filtered.length > 0 &&
          state.filtered.map((country, index) => (
            <CardCountry key={index} {...country} />
          ))}
      </Container.SectionCountries>
    </Fragment>
  );
};

export default Home;
