import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import elColors from '../../styles/elColors'
import colors from '../../styles/colors'
import ArbiBetSearch from '../ArbiBetSearch/ArbiBetSearch'

const LandingWrap = styled.div`
  background-color: ${elColors.background1};
  width: 100%;
  min-height: 100vh;
  color: ${elColors.text1};
  box-sizing: border-box;
  margin: 0;
`

const Title = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  padding-top: 70px;
  padding-bottom: 70px;
  font-size: 70px;
  color: ${elColors.title1};
  user-select: none;
  margin-bottom: 50px;
  background-image: linear-gradient(19deg, ${props => props.searchMatchingOdds ? colors.red : colors.blue}, #A9F);

  @media only screen and (max-width: 500px) {
    font-size: 50px;
  }
`

const LandingPage = () => {
  const [counter, setCounter] = useState(0)
  const [searchMatchingOdds, setSearchMatchingOdds] = useState(false)

  const handleTitleClick = () => {
    setCounter(counter+1)
  }

  useEffect(() => {
    if (counter >= 5) {
      setSearchMatchingOdds(!searchMatchingOdds)
      setCounter(0)
    }
  }, [counter])

  return (
    <LandingWrap>
      <Title searchMatchingOdds={searchMatchingOdds} onClick={handleTitleClick}>&#123;arbisearch&#125;</Title>
      <ArbiBetSearch reverseOddsMatch={searchMatchingOdds} />
    </LandingWrap>
  );
}
 
export default LandingPage;