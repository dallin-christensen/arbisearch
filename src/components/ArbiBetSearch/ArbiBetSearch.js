import React, { useState } from 'react'
import EventTypeSelect from '../EventTypeSelect/EventTypeSelect'
import styled from 'styled-components'
import elColors from '../../styles/elColors';
import Loading from '../Loading/Loading';
import DisplayedData from '../DisplayedData/DisplayedData';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SearchSelectZone = styled.div`
  display: flex;
  width: 600px;
  box-sizing: border-box;
`

const SearchSelectWrap = styled.div`
  flex: 1;
`

const SearchButton = styled.button`
  margin-left: 20px;
  border: 1px solid ${elColors.buttonBackground};
  background-color: ${elColors.buttonBackground};
  color: ${elColors.buttonText};
  font-size: 16px;
  border-radius: 4px;
  padding-left: 30px;
  padding-right: 30px;
  font-weight: bold;
`

const ContentZone = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`


const selectOptions = [
  { value: 'mma', label: 'MMA' },
  { value: 'boxing', label: 'Boxing' },
  { value: 'tableTennis', label: 'Table Tennis' },
  { value: 'darts', label: 'Darts' },
];


const ArbiBetSearch = ({ reverseOddsMatch }) => {
  const [selectedEventType, setSelectedEventType] = useState(selectOptions[0])
  const [isLoading, setIsLoading] = useState(false)
  const [scrapedData, setScrapedData] = useState(null)

  const handleEventTypeChange = (selectedOption) => setSelectedEventType(selectedOption)

  const handleScrapeData = async () => {
    // const data = await scrapeData({ eventType: selectedEventType, setLoadingStatus })

    // console.log({ data })
    setIsLoading(true)
    const url = reverseOddsMatch
      ? `https://arbisearch-server.herokuapp.com/api/${selectedEventType.value}?queryType=matching`
      : `https://arbisearch-server.herokuapp.com/api/${selectedEventType.value}`

    const data = await fetch(url)
      .then((response) => response.json())
      .catch(console.error)

    setIsLoading(false)
    setScrapedData(data)
  }

  return (
    <Wrap>
      <SearchSelectZone>
        <SearchSelectWrap>
          <EventTypeSelect
            value={selectedEventType}
            onChange={handleEventTypeChange}
            options={selectOptions}
          />
        </SearchSelectWrap>

        <SearchButton onClick={handleScrapeData}>Go!</SearchButton>


      </SearchSelectZone>

      <ContentZone>
        
        {
          isLoading
            ? <Loading />
            : <DisplayedData data={scrapedData} />
        }

      </ContentZone>
    </Wrap>
  );
}
 
export default ArbiBetSearch;