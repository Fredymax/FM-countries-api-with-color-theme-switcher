import React from 'react';
import { Container, Text, ReactRouter } from 'components/styled';
import { formatPopulation } from 'utils/numberFormat';

const CardCountry = ({ flags, name, population, capital, region }) => {
  return (
    <Container.CardCountry>
      <ReactRouter.Link to={`/detail/${String(name.common).toLowerCase()}`}>
        <Container.Figure>
          <Container.ImageCountrySmall src={flags.svg} alt="Country flag" />
        </Container.Figure>
        <Container.CardCountryBody>
          <Text.Title>{name.common}</Text.Title>
          <Text.Sentence>
            <Text.SemiBold>Population: </Text.SemiBold>
            <Text.Paragraph>{formatPopulation(population)}</Text.Paragraph>
          </Text.Sentence>
          <Text.Sentence>
            <Text.SemiBold>Region: </Text.SemiBold>
            <Text.Paragraph>{region}</Text.Paragraph>
          </Text.Sentence>
          <Text.Sentence>
            <Text.SemiBold>Capital: </Text.SemiBold>
            <Text.Paragraph>
              {capital?.length > 0 ? capital.join(', ') : '-'}
            </Text.Paragraph>
          </Text.Sentence>
        </Container.CardCountryBody>
      </ReactRouter.Link>
    </Container.CardCountry>
  );
};

export default CardCountry;
