import styles from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return ( 
        <>
            <div className={styles.footer}>
                <p className={styles.connect}>Connect with us</p>
                <div className={styles.socials}>
                    <a href="https://www.instagram.com/roboclubiitg/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/company/robotics-club-iitg/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="mailto:roboclub@iitg.ac.in" className={styles.link}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a href="https://www.facebook.com/robotics.iitg" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.youtube.com/user/RCIITG" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </div>
            </div>
        </>
     );
}
 
export default Footer;