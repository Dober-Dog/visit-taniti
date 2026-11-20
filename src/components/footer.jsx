export default function Footer(){

    function toBeAdded(){
        alert('feature to be added')
    }

    return (
        <div className="footer">
            <div className="socials">
                <img src='/fb_icon.png' onClick={toBeAdded} />
                <img src='/insta_icon.png' onClick={toBeAdded} />
                <img src='/x_icon.png' onClick={toBeAdded} />
            </div>
            <div className="sitemap">
                <a onClick={toBeAdded}>View Sitemap</a>
            </div>
            <div className="contact">
                <span>Have any questions? </span>
                <a onClick={toBeAdded}>Contact Us!</a>
            </div>
        </div>
    )
}