import styled from 'styled-components';

export const Wrapper = styled.div`
  max-inline-size: 375px;
  inline-size: 100%;
  block-size: 100%;
  margin: auto;
  padding-inline: 10px;

  @media (min-width: 768px) {
    max-inline-size: 1420px;
  }
`;

export const Header = styled.header`
  block-size: 80px;
  box-shadow: 2px 2px 6px hsl(0deg 0% 0% / 10%);
  position: relative;
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.fontPrimaryColor};
  transition: background-color 300ms, color 300ms;
`;

export const Main = styled.main`
  --space: 2.5em;
  min-block-size: calc(100vh - 80px);
  block-size: 100%;
  background-color: ${(props) => props.theme.primaryColor};
  transition: background-color 300ms;
  padding-block: calc(var(--space) / 2);
`;

export const Nav = styled.nav`
  block-size: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Theme = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.2em;
  padding: 0.5em 0;
  cursor: pointer;

  &:hover {
    filter: drop-shadow(0 0 5px ${(props) => props.theme.textShadow});
  }
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--space) - 0.5em);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;

export const IconInput = styled.div`
  color: #b2b2b2;
  padding-inline: 1em;
  font-size: 1.3em;
  line-height: 1;
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.secondaryColor};
  transition: background-color 300ms;
  border-radius: 0.3em;
  box-shadow: 2px 2px 6px hsl(0deg 0% 0% / 10%);
  overflow: hidden;
`;

export const DropDown = styled(Card)`
  padding: 1em;
  inline-size: max-content;
  min-inline-size: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.fontPrimaryColor};
  transition: background-color 300ms, color 300ms;
  position: relative;
  overflow: visible;
  cursor: pointer;

  @media (min-width: 768px) {
    min-inline-size: 250px;
  }
`;

export const DropDownSelected = styled.div`
  text-transform: capitalize;
  transition: background-color 300ms, color 300ms;
`;

export const DropDownListItem = styled(Card)`
  min-inline-size: max-content;
  inline-size: 100%;
  block-size: auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: calc(100% + 0.3em);
  background-color: ${(props) => props.theme.secondaryColor};
  transition: background-color 300ms, color 300ms;
  border-radius: 0.3em;
  left: 0;
`;

export const DropDownItem = styled.div`
  inline-size: 100%;
  block-size: auto;
  padding-block: 0.5em;
  padding-inline-start: 0.5em;

  &:hover {
    background: hsl(0deg 0% 0% / 10%);
    border-radius: 0.3em;
  }
`;

export const Figure = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SectionCountries = styled.section`
  padding-block-start: var(--space);
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space);
  color: ${(props) => props.theme.fontPrimaryColor};
  transition: color 300ms;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 100px;
  }
`;

export const CardCountry = styled(Card)`
  padding: 0;
  max-inline-size: 300px;
  margin: auto;
  block-size: 100%;
  @media (min-width: 768px) {
    max-inline-size: 100%;
  }
`;

export const CardCountryBody = styled(Card)`
  block-size: 100%;
  padding: 1.5em;

  & > * {
    margin-block-end: 0.5em;
  }
`;

export const BaseImage = styled.img``;

export const ImageCountrySmall = styled(BaseImage)`
  inline-size: 100%;
  block-size: auto;
`;

export const Detail = styled.div`
  inline-size: 100%;
  block-size: auto;
  padding-block: var(--space);
  color: ${(props) => props.theme.fontPrimaryColor};
  transition: color 300ms;

  @media (min-width: 768px) {
    inline-size: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1em;
    flex-wrap: auto;
  }
`;

export const DetailFlag = styled.div`
  @media (min-width: 768px) {
    min-inline-size: 500px;
    inline-size: 700px;
    /* inline-size: max-content; */
  }
`;

export const DetailInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space);
  margin-block-end: var(--space);
  @media (min-width: 768px) {
    inline-size: max-content;
    flex-direction: row;
  }
`;

export const DetailBody = styled.div`
  padding-block-start: var(--space);

  & > :nth-child(1) {
    margin-block-end: calc(var(--space) / 2);
  }

  @media (min-width: 768px) {
    inline-size: 500px;
  }
`;

export const DetailBodyPrimary = styled.div`
  & > * {
    margin-block-end: calc(var(--space) / 3);
  }

  & :last-child {
    margin-block-end: 0;
  }
`;

export const DetailBodySecondary = styled.div`
  & > * {
    margin-block-end: calc(var(--space) / 3);
  }
  & :last-child {
    margin-block-end: 0;
  }
`;

export const DetailFooter = styled.div``;

export const DetailFooterButtons = styled.div`
  padding-block-start: 0.5em;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`;

export const Loader = styled.div`
  position: fixed;
  flex-direction: column;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  inline-size: 100%;
  block-size: 100%;
  background: hsl(0deg 0% 0% / 80%);
  color: #fff;
  gap: 1em;
`;
