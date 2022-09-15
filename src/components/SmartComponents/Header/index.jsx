import React, { useContext } from 'react';
import { ThemeContext } from 'context/ThemeContext';
import { HiOutlineMoon, HiMoon } from 'react-icons/hi';
import { Container, Text } from 'components/styled';

const Header = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <Container.Header>
      <Container.Wrapper>
        <Container.Nav>
          <Text.TitleHeader>Where in the world?</Text.TitleHeader>
          <Container.Theme onClick={changeTheme} role="button">
            {theme.theme === 'dark' ? <HiMoon /> : <HiOutlineMoon />}
            <Text.Theme>
              {theme.theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </Text.Theme>
          </Container.Theme>
        </Container.Nav>
      </Container.Wrapper>
    </Container.Header>
  );
};

export default Header;
