function Footer() {
    return (
        <>
            <div className="subscription center">

                <figure className="subscription__staff">
                    <img src="../../../src/images/face.svg" alt="face"/>
                        <p className="subscription__staff__figure-text">“Vestibulum quis porttitor dui! Quisque<br/> <em>viverra nunc
                            mi, a pulvinar
                            purus<br/>
                                condimentum“</em></p>
                </figure>

                <div className="subscription__input-email">
                    <p className="subscription__input-email__text"><span
                        className="subscription__input-email__title">SUBSCRIBE</span><br/>
                            FOR OUR NEWLETTER AND PROMOTION</p>

                    <div className="subscription__input-email__submit">
                        <input className="subscription__input-email__submit__subscribe" type="email" required
                            placeholder="Enter Your Email"/>
                            <input className="subscription__input-email__submit__btn" type="submit" value="Subscribe"/>
                            </div>
                    </div>

                </div>

            <footer className="footer center">
                <p className="footer__text">© 2023  Brand  All Rights Reserved.</p>
                <div className="footer__items">
                    <a className="footer__items__item" href="#"><img src="../../../src/images/facebook.svg" alt="facebook"/></a>
                    <a className="footer__items__item" href="#"><img src="../../../src/images/instagram.svg" alt="instagram"/></a>
                    <a className="footer__items__item" href="#"><svg width="13" height="16" viewBox="0 0 13 16" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.74032 0.203125C3.55564 0.203125 0.408203 2.34063 0.408203 5.8C0.408203 8 1.63738 9.25 2.38233 9.25C2.68963 9.25 2.86655 8.3875 2.86655 8.14375C2.86655 7.85313 2.13091 7.23438 2.13091 6.025C2.13091 3.5125 4.03055 1.73125 6.4889 1.73125C8.60271 1.73125 10.1671 2.94062 10.1671 5.1625C10.1671 6.82187 9.50597 9.93437 7.36422 9.93437C6.59133 9.93437 5.93018 9.37187 5.93018 8.56563C5.93018 7.38438 6.74963 6.24062 6.74963 5.02187C6.74963 2.95312 3.835 3.32812 3.835 5.82812C3.835 6.35313 3.90018 6.93437 4.13298 7.4125C3.70463 9.26875 2.82931 12.0344 2.82931 13.9469C2.82931 14.5375 2.91311 15.1188 2.96899 15.7094C3.07452 15.8281 3.02175 15.8156 3.18316 15.7563C4.74757 13.6 4.69169 13.1781 5.3994 10.3562C5.78119 11.0875 6.76826 11.4812 7.55046 11.4812C10.8469 11.4812 12.3275 8.24688 12.3275 5.33125C12.3275 2.22813 9.66427 0.203125 6.74032 0.203125Z"
                            fill="black" />
                    </svg>
                    </a>
                    <a className="footer__items__item" href="#"><svg width="17" height="14" viewBox="0 0 17 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.4184 3.74113C14.4285 3.88325 14.4285 4.02541 14.4285 4.16753C14.4285 8.50253 11.1512 13.4975 5.16133 13.4975C3.31595 13.4975 1.60168 12.9594 0.159668 12.0254C0.421861 12.0558 0.673935 12.066 0.946216 12.066C2.46887 12.066 3.87057 11.5483 4.98989 10.665C3.55797 10.6345 2.35797 9.69038 1.94452 8.39088C2.14621 8.42131 2.34788 8.44163 2.55966 8.44163C2.85209 8.44163 3.14455 8.401 3.4168 8.32997C1.92437 8.02538 0.805016 6.70559 0.805016 5.11169V5.07109C1.23861 5.31475 1.74285 5.46703 2.27726 5.48731C1.39996 4.89847 0.825192 3.89341 0.825192 2.75634C0.825192 2.14722 0.986506 1.58884 1.26887 1.10153C2.87224 3.09138 5.28232 4.39084 7.9848 4.533C7.93439 4.28934 7.90413 4.03556 7.90413 3.78175C7.90413 1.97463 9.35623 0.502563 11.1613 0.502563C12.0991 0.502563 12.9461 0.898501 13.5411 1.53809C14.2772 1.39597 14.9831 1.12184 15.6083 0.74622C15.3662 1.50766 14.852 2.14725 14.1764 2.55331C14.8318 2.48228 15.4671 2.2995 16.052 2.04572C15.6084 2.69544 15.0537 3.27409 14.4184 3.74113V3.74113Z"
                            fill="black" />
                    </svg>
                    </a>
                </div>
            </footer>
        </>
    );
}

export default Footer;