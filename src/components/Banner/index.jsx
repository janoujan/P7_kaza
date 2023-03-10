import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Flex from '../../utils/style/displayFlex'
import fontFamily from '../../utils/style/fontFamily'
import MarginLeft from '../../utils/style/marginLeft'

const BannerContainer = styled.div`
  position: relative;
  ${Flex}
  justify-content: center;
  height: 223px;
  width: 93%;
  margin-left: ${MarginLeft.desktop};
  top: 40px;
  border-radius: 25px;

  @media screen and (max-width: 768px) {
    margin-left: ${MarginLeft.mobile};
    margin-right: 10px;
    height: 100%;
    justify-content: left;
    top: 0;
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
  object-position: center bottom;
`

const BannerText = styled.h1`
  position: absolute;
  margin: auto;
  text-align: center;
  top: 35%;
  font-family: ${fontFamily.fontFamily};
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 68px;
  color: ${colors.secondary};

  @media screen and (max-width: 768px) {
    top: 14%;
    font-size: 28px;
    line-height: 28px;
    margin: 7px 0 10px 20px;
    text-align: left;
    height: max-content;
  }
`

const Break = styled.br`
  display: none;

  @media screen and (max-width: 768px) {
    display: initial;
  }
`
export default function Banner({ image, alt, text1, text2, srcSet }) {
  return (
    <BannerContainer>
      <BannerImage src={image} alt={alt} srcSet={srcSet} />
      <BannerText>
        {text1}
        {/* here we force the text to split where we want */}
        <Break></Break>
        {text2}
      </BannerText>
    </BannerContainer>
  )
}
