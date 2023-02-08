import styled, { keyframes } from 'styled-components'
import colors from '../../utils/style/colors'

const spinloader = keyframes`
  to {
    transform:rotate(360deg);
  }    
`

const LoaderContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
`

const Loader = styled.div`
  display: flex;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 10px solid ${colors.primary};
  border-top: 10px ${colors.secondary} solid;
  animation: ${spinloader} 1.4s infinite linear;
`

export default function SpinLoader() {
  return (
    <LoaderContainer>
      <Loader></Loader>
    </LoaderContainer>
  )
}
