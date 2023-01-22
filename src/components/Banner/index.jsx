import '../../styles/Banner.css'

export function Banner({ image, alt, text }) {
  return (
    <div className="banner">
      <img className='banner-image' src={image} alt={alt} />
      <h1 className="banner-text">{text}</h1>
    </div>
  )
}
