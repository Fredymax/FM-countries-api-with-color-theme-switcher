import axios from 'axios';
import { END_POINT, VERSION } from 'constants/config';

axios.defaults.baseURL = `${END_POINT}/${VERSION}`;

export default axios;
