import styled from 'styled-components';

export const BaseText = styled.p`
  font-weight: ${(props) => props.weight || ''};
`;

// export const Title = styled.strong`
//   font-size: 1em;
//   font-weight: 800;
// `;

export const Theme = styled.span`
  font-size: smaller;
  font-weight: 600;
  user-select: none;
`;

export const TitleHeader = styled.h1`
  @media (max-width: 786px) {
    font-size: 1em;
  }
`;

export const Title = styled.h1``;

export const Sentence = styled.div``;

export const SemiBold = styled(Theme)`
  font-size: 1em;
  user-select: auto;
`;

export const Bold = styled(Theme)`
  font-size: 1em;
  user-select: auto;
  font-weight: bold;
`;

export const Paragraph = styled(BaseText)`
  display: inline;
`;

export const Badge = styled.div`
  padding: 0.2em 1em;
  background-color: ${(props) => props.theme.secondaryColor};
  min-inline-size: max-content;
  inline-size: max-content;
  display: inline-block;
  text-align: center;
  box-shadow: 2px 2px 6px hsl(0deg 0% 0% / 10%);
  border-radius: 0.2em;
`;
