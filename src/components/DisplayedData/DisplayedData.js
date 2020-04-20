import React from 'react'
import styled from 'styled-components'
import elColors from '../../styles/elColors';

const AllLocationsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`

const SiteNames = styled.div`
  font-size: 25px;
  color: ${elColors.text1};
  font-weight: bold;
`

const EventNames = styled.div`
  font-size: 35px;
  padding: 10px;
`

const NoneWrapper = styled.div`
  font-size: 25px;
  color: ${elColors.text1};
  margin-top: 150px;
`

const SiteLink = styled.a`
  text-decoration: none;
  color: ${elColors.text1};
`

const DisplayedData = ({ data }) => {
  if (!data) return null

  if (!data.find((eventData) => eventData.matchNames.length)) {
    return <NoneWrapper>No matches found.</NoneWrapper>
  }

  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  const toReadableMatchname = (matchName) => {
    return matchName.split('_').map((word) => capitalizeFirstLetter(word)).join('   ')
      .split('+').map((word) => capitalizeFirstLetter(word)).join(' ')
  }


  return (
    <AllLocationsContainer>
      {
        data.map((eventsComparisonData) => {
          const { siteNames, siteUrls, matchNames } = eventsComparisonData

          const capitalizedSitenames = siteNames.map(siteName => capitalizeFirstLetter(siteName))

        const siteLinks = capitalizedSitenames.map((siteName, i) => <SiteLink href={siteUrls[i]}>{siteName}</SiteLink>)

          return matchNames.length
            ? (
              <LocationContainer>
                <SiteNames>{siteLinks[0]} &amp; {siteLinks[1]}</SiteNames>
                { matchNames.map((matchName) => <EventNames>{toReadableMatchname(matchName)}</EventNames>) }
              </LocationContainer>
            )
            : null
        })
      }
    </AllLocationsContainer>
  ) 
}

export default DisplayedData;