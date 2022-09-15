import styled from 'styled-components';

const Input = styled.input`
  padding: 1em;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: inherit;
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.fontPrimaryColor};
  transition: background-color 300ms, color 300ms;

  &::placeholder {
    opacity: 0.8;
    transition: translate 300ms;
  }

  &:focus::placeholder {
    translate: 0.5em;
  }
`;

export const Outline = styled(Input)`
  inline-size: 100%;
`;

export const InputGroup = styled(Input)`
  padding: 1em 1em 1em 0.3em;
  inline-size: 100%;
`;
