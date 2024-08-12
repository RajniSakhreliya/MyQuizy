import './footerbar.scss'

const FooterBar = ({ headingValue }) => {
    return (
        <div className='footerMain'>
            <div><a href='/privacy'>Privacy Policy</a></div>

            <div><a href='/aboutus'>About Us</a></div>
        </div>
    )
}

export default FooterBar;