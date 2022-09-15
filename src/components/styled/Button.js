import styled from 'styled-components';

const BaseButton = styled.button`
  padding: 0.5em 1.5em;
  outline: none;
  border: none;
  border-radius: 0.1em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25em;
  cursor: pointer;
`;

export const Primary = styled(BaseButton)`
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => (props.theme.theme === 'dark' ? '#fff' : 'black')};
  box-shadow: 0 0 6px hsl(0deg 0% 0% / 20%);
  transition: background-color 300ms, color 300ms;
`;
