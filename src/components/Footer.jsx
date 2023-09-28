import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className="">
            <div className="bg-black h-20 m-0 ">
            <h2 className="text-white text-center">Created By Jordon Marchesano</h2>
            <div className="text-center">
                <a className="pl-2 pr-2" href="https://github.com/cHoMpDiSs" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} style={{color: "#fcfcfc",}} />
                </a>
                <a className="pl-2 pr-2" href="https://www.linkedin.com/in/jordon-marchesano-01281416b/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} style={{color: "#fcfcfc",}} />
                </a>
            </div>
            <p className="text-white text-center">English(US)</p>
            </div>
        </footer>
    )
}

export default Footer;