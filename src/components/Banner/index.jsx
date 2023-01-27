import styled from "styled-components"
import colors from "../../utils/style/colors"

const BannerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 223px;
  width: 93%;
  margin-left: 25px;
  top: 40px;
  border-radius: 25px;
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

const BannerText = styled.h1`
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
`

export function Banner({ image, alt, text }) {
  return (
    <BannerContainer>
      <BannerImage src={image} alt={alt} />
      <BannerText>{text}</BannerText>
    </BannerContainer>
  )
}
