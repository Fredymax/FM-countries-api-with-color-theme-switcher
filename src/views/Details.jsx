import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { Button, Container, Text } from 'components/styled';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import scrollTop from 'utils/scrollTop';
import { useParams } from 'react-router-dom';
import { getCountryByName } from 'services/countries';
import { formatPopulation } from 'utils/numberFormat';
import Loading from 'components/DumbComponents/Loading';

const Details = () => {
  const { nameCountry } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getCountry = useCallback(async () => {
    const [data] = await getCountryByName(nameCountry);
    setCountry(data);
    setIsLoading(false);
  }, [nameCountry]);

  useEffect(() => {
    scrollTop();
    getCountry();
  }, [getCountry]);

  return (
    <Fragment>
      {isLoading && <Loading />}
      <Button.Primary onClick={() => navigate('/')}>
        <HiArrowNarrowLeft />
        Back
      </Button.Primary>
      <Container.Detail>
        <Container.DetailFlag>
          <Container.Figure>
            <Container.ImageCountrySmall
              src={country?.flags?.svg}
              alt={country?.name?.common}
            />
          </Container.Figure>
        </Container.DetailFlag>
        <Container.DetailBody>
          <Text.Title>{country?.name?.common}</Text.Title>
          <Container.DetailInformation>
            <Container.DetailBodyPrimary>
              <Text.Sentence>
                <Text.Bold>Native Name: </Text.Bold>
                <Text.Paragraph>
                  {country?.name?.nativeName?.spa?.official}
                </Text.Paragraph>
              </Text.Sentence>
              <Text.Sentence>
                <Text.Bold>Population: </Text.Bold>
                <Text.Paragraph>
                  {formatPopulation(country?.population)}
                </Text.Paragraph>
              </Text.Sentence>
              <Text.Sentence>
                <Text.Bold>Region: </Text.Bold>
                <Text.Paragraph>{country?.region}</Text.Paragraph>
              </Text.Sentence>
              <Text.Sentence>
                <Text.Bold>Sub Region: </Text.Bold>
                <Text.Paragraph>{country.subregion}</Text.Paragraph>
              </Text.Sentence>
              {country?.capital?.length > 0 && (
                <Text.Sentence>
                  <Text.Bold>Capital: </Text.Bold>
                  <Text.Paragraph>{country.capital}</Text.Paragraph>
                </Text.Sentence>
              )}
            </Container.DetailBodyPrimary>
            <Container.DetailBodySecondary>
              {country?.tld?.length > 0 && (
                <Text.Sentence>
                  <Text.Bold>Top Level Domain: </Text.Bold>
                  <Text.Paragraph>{country.tld.join(', ')}</Text.Paragraph>
                </Text.Sentence>
              )}
              {country?.currencies && (
                <Text.Sentence>
                  <Text.Bold>Currencies: </Text.Bold>
                  <Text.Paragraph>
                    {Object.keys(country.currencies).join(' / ')}
                  </Text.Paragraph>
                </Text.Sentence>
              )}
              {country?.languages && (
                <Text.Sentence>
                  <Text.Bold>Lenguages: </Text.Bold>
                  <Text.Paragraph>
                    {Object.values(country.languages).join(', ')}
                  </Text.Paragraph>
                </Text.Sentence>
              )}
            </Container.DetailBodySecondary>
          </Container.DetailInformation>
          <Container.DetailFooter>
            <Text.Paragraph weight="600">Border Countries:</Text.Paragraph>
            <Container.DetailFooterButtons>
              {country?.borders?.length > 0 &&
                country.borders.map((border) => (
                  <Text.Badge key={border}>{border}</Text.Badge>
                ))}
            </Container.DetailFooterButtons>
          </Container.DetailFooter>
        </Container.DetailBody>
      </Container.Detail>
    </Fragment>
  );
};

export default Details;
