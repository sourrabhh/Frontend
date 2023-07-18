import './Banner.scss'
import BannerImage from '../../../assets/BannerImage.png'


const Banner = () => {
    return( 
        <div className='hero-banner'>
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>sjfldblsdbv
                        lsbdvjlkksdvknzldb
                        nfabfhbjlbsdldbvfzbdfngbzfd
                    </p>
                    <div className='ctas'>
                        <div className='banner-cta'>Read More </div>
                        <div className='banner-cta v2'>Shop Now</div>
                    </div>
                </div>
                <img className='banner-image' src= {BannerImage} alt='' />
            </div>
        </div>
    )
}

export default Banner;