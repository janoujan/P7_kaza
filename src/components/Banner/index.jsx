import styled from "styled-components"

const BannerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 225px;
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
  font-size: 48px;
  font-weight: 500;
  height: 68px;
  color: #fff;
`

export function Banner({ image, alt, text }) {
  return (
    <BannerContainer>
      <BannerImage src={image} alt={alt} />
      <BannerText>{text}</BannerText>
    </BannerContainer>
  )
}
