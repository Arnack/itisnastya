import React from 'react'
import './styles.scss'
import { Row, Col } from 'react-bootstrap'
import AnimationContainer from 'components/animation-container'
import BaffleText from 'components/baffle-text'
import ThemeContext from '../../context'
import toast from 'react-hot-toast';
import { graphql, StaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const ContactMe = (props) => {

    // const { buttonText, email, formTitle, location } = props.contentfulContactSection;
    const { facebook, instagram, linkedin, twitter } = props.contentfulSocialMedias;
    const { telegram, phone, subtitle, title, email } = props.contentfulContactInformation;
    return <div>
        <h4>{title}</h4>
        <p className='subtitle'>{subtitle}</p>

        <div className='contactInfo'>

            <div className='contactInfo__item'>
                <FontAwesomeIcon className='contact-icon' icon={faTelegram} />
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
                <span className='contact-label contact-telegram'
                    onClick={() => window.open(telegram)}>
                    {telegram}
                </span>
            </div>
            <div className='contactInfo__item'>
                <FontAwesomeIcon className='contact-icon' icon={faPhone} /> <span className="contact-label">{phone}</span>
            </div>

            <div className='contactInfo__item'>
                <FontAwesomeIcon className='contact-icon' icon={faEnvelope} /> <span className="contact-label">{email}</span>
            </div>


            <div className="social social_icons">
                {instagram &&
                    <div className='social_icon_wrapper'>

                        <FontAwesomeIcon icon={faInstagram}
                            className="social_icon"
                            onClick={() => window.open(instagram)}
                        />
                    </div>
                }


                {facebook &&
                    <div className='social_icon_wrapper'>

                        <FontAwesomeIcon icon={faFacebook}
                            className="social_icon"
                            onClick={() => window.open(facebook)}
                        />
                    </div>
                }

                {twitter &&
                    <div className='social_icon_wrapper'>

                        <FontAwesomeIcon icon={faTwitter}
                            className="social_icon"
                            onClick={() => window.open(twitter)}
                        />
                    </div>
                }

                {linkedin &&
                    <div className='social_icon_wrapper'>

                        <FontAwesomeIcon icon={faLinkedin}
                            className="social_icon"
                            onClick={() => window.open(linkedin)}
                        />
                    </div>
                }

            </div>



            <div className='two-circles'>
                <div className='big-circle' />
                <div className='small-circle' />
            </div>
        </div>

    </div>

}

export default props => (
    <StaticQuery
        query={graphql`
        query {
            contentfulSocialMedias {
                linkedin
                facebook
                instagram
              }
              contentfulContactInformation {
                email
                phone
                telegram
                subtitle
                title
              }
        }`}
        render={data => <ContactMe {...data} {...props} />}
    />
)


