import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import elColors from '../../styles/elColors'
import ArbiBetSearch from '../ArbiBetSearch/ArbiBetSearch'

const LandingWrap = styled.div`
  background-color: ${elColors.background1};
  width: 100%;
  min-height: 100vh;
  color: ${elColors.title1};
  box-sizing: border-box;
  margin: 0;
  padding: 0 20px;
`

const Title = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 50px;
  font-size: 90px;
  color: ${props => props.searchMatchingOdds ? elColors.title2 : elColors.title1};
  user-select: none;
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
      <Title searchMatchingOdds={searchMatchingOdds} onClick={handleTitleClick}>&#123;arbi search&#125;</Title>
      <ArbiBetSearch reverseOddsMatch={searchMatchingOdds} />
    </LandingWrap>
  );
}
 
export default LandingPage;