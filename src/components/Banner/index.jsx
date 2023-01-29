import styled from 'styled-components'
import colors from '../../utils/style/colors'

const BannerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 223px;
  width: 93%;
  margin-left: 25px;
  top: 40px;
  border-radius: 25px;

  @media screen and (max-width: 768px) {
    margin-left: 20px;
  }
`

const BannerImage = styled.img`
  height: 223px;
  width: 100%;
  height: 100%;
  padding: 0%;
  border-radius: 25px;
  object-fit: cover;
  filter: brightness(70%);
`

const BannerText1 = styled.h1`
  position: absolute;
  margin: auto;
  text-align: center;
  top: 35%;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 68px;
  color: ${colors.secondary};

  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 24px;
    margin: 20px 0 0 15px;
  }
`

const Break = styled.br`
  display: none;

  @media screen and (max-width: 768px) {
    display: initial;
  }
`
export function Banner({ image, alt, text1, text2 }) {
  return (
    <BannerContainer>
      <BannerImage src={image} alt={alt} />
      <BannerText1>
        {text1}
        <Break></Break>
        {text2}
      </BannerText1>
    </BannerContainer>
  )
}
