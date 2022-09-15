import axios from 'utils/instanceAxios';

export async function getCountries(region = 'Show all') {
  try {
    const redirecTo = region === 'Show all' ? 'all' : `region/${region}`;
    const { data } = await axios.get(redirecTo);
    return data;
  } catch (error) {
    return [];
  }
}

export async function getCountryByName(nameCountry) {
  try {
    const { data } = await axios.get(`name/${nameCountry}`);
    return data;
  } catch (error) {
    return [{}];
  }
}
