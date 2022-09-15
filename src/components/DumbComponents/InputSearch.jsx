import React from 'react';
import { Container, Input } from 'components/styled';
import { FiSearch } from 'react-icons/fi';
import { SEARCH_BY_NAME } from 'store/actions';

const InputSearch = ({ dispatch }) => {
  function handleKeyUp({ target }) {
    dispatch({
      type: SEARCH_BY_NAME,
      payload: {
        name: target.value.toLowerCase().trim(),
      },
    });
  }

  return (
    <Container.Card>
      <Container.InputGroup>
        <Container.IconInput>
          <FiSearch />
        </Container.IconInput>
        <Input.InputGroup
          onKeyUp={handleKeyUp}
          placeholder="Search for a country..."
        />
      </Container.InputGroup>
    </Container.Card>
  );
};

export default InputSearch;
