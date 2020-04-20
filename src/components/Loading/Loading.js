import React from 'react'
import styled from 'styled-components'
import elColors from '../../styles/elColors';
import BounceLoader from "react-spinners/BounceLoader"
import colors from '../../styles/colors';

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`

const Loading = () => (
  <LoadingWrapper>
    <BounceLoader
      size={100}
      color={colors.blue}
    />
  </LoadingWrapper>
)

export default Loading