import styled, { keyframes } from 'styled-components'
import colors from '../../utils/style/colors'

const rotation = keyframes`
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
`

const LoaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 300%;
`

const Loader = styled.span`
    width: 100px;
    height: 100px;
    display: inline-block;
    position: relative;
    &::after,
    &::before {
      content: '';
      width: 200px;
      height: 200px;
      border: 2px solid ${colors.primary};
      position: absolute;
      left: 0;
      top: 0;
      animation: ${rotation} 2s ease-in-out infinite alternate;
    }
    &::after {
      border-color: ${colors.primary};
      animation-direction: alternate-reverse;
    }
  }
`

export default function SpinLoader() {
  return (
    <LoaderContainer>
      <Loader></Loader>
    </LoaderContainer>
  )
}
