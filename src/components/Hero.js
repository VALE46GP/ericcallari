import './Hero.sass';

function Hero() {

    return (
        <div className='hero'>
            <img
                alt='self portrait overlooking San Francisco'
                className='hero__image'
                src='https://ericcallari.s3.us-west-1.amazonaws.com/tank-hill-centered.jpg'
            />
            <div className='hero__content'>
            </div>
        </div>
    );
}

export default Hero;
