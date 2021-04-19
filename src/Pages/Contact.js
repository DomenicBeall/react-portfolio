import React from "react";

import '../scss/content.scss';
import SocialCard from '../Components/SocialCard';

export default class Contact extends React.Component {

    render() {
        return (
            <div className="container">
                <h1 className="white">I can be contacted through any one of my socials</h1>
                <div className="row">
                    <SocialCard name="Facebook" link="https://www.facebook.com/domenic.beall"  imgsrc="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" />
                    <SocialCard name="Twitter" link="https://twitter.com/DomenicBeall"  imgsrc="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" />
                    <SocialCard name="LinkedIn" link="https://www.linkedin.com/in/domenic-beall-690155197/"  imgsrc="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/linkedin_circle-512.png" />
                    <SocialCard name="GitHub" link="https://github.com/DomenicBeall" imgsrc="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-256.png" />
                </div>
            </div>
        )
    }

}