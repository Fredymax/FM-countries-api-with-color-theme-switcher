import { Routes, Route } from 'react-router-dom';
import Details from 'views/Details';
import Home from 'views/Home';
import Layout from 'views/layout';

export default function WebRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/detail/:nameCountry" element={<Details />} />
      </Route>
    </Routes>
  );
}
