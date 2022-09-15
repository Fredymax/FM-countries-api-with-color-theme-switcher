import { Container, Icon } from 'components/styled';
import React, { useRef, useState } from 'react';
import continents from 'constants/continents';
import { SEARCH_BY_REGION } from 'store/actions';

const Dropdown = ({ dispatch }) => {
  const [open, setOpen] = useState(false);
  const DropDownList = useRef(null);
  const [searchBy, setSearchBy] = useState('Show all');

  function toggleDropDown(e) {
    const currentRegion = e.target?.dataset?.continent;
    if (currentRegion) {
      setSearchBy(currentRegion);
      dispatch({
        type: SEARCH_BY_REGION,
        payload: {
          name: String(currentRegion).toLowerCase(),
        },
      });
    }
    setOpen(!open);
  }

  return (
    <Container.DropDown onClick={toggleDropDown}>
      <Container.DropDownSelected>{searchBy}</Container.DropDownSelected>
      <Icon.HiChevronDown open={open} />
      {open && (
        <Container.DropDownListItem ref={DropDownList}>
          <Container.DropDownItem data-continent="Show all">
            Show All
          </Container.DropDownItem>
          {continents.map((continent, index) => (
            <Container.DropDownItem key={index} data-continent={continent}>
              {continent}
            </Container.DropDownItem>
          ))}
        </Container.DropDownListItem>
      )}
    </Container.DropDown>
  );
};

export default Dropdown;
