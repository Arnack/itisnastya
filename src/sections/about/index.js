import React from 'react'
import Particles from 'react-particles-js';
import Progress from 'components/progress'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import ThemeContext from '../../context'
import './styles.scss'

class Hero extends React.Component {

    static contextType = ThemeContext

    render() {
        return (
            <section id={`${this.props.id}`} className="about" style={{height: this.context.height}}>
                {this.particles()}
                <Row>
                    <Col md={6} className="content">
                        <div className="content-text">
                            <div className="line-text">
                                <h4>About Me</h4>
                            </div>
                            <h3>I help Tech companies scale their Product Teams</h3>
                            <div className="separator" />
                            <p>
                            Helping EMs & CTOs build strong high-performance Cross-Functional Engineering teams.
                            I supply Software Engineers of all levels with opportunities from Global tech businesses, 
                            relocate, on-site or remote!
                            </p>
                            <div className="social social_icons">
                                <FontAwesomeIcon icon={faInstagram} className="social_icon" onClick={() => window.open('https://www.instagram.com/antonova_n/')}/>
                                {/* <FontAwesomeIcon icon={faTwitter} className="social_icon" onClick={() => window.open('https://www.twitter.com')} /> */}
                                {/* <FontAwesomeIcon icon={faYoutube} className="social_icon" onClick={() => window.open('https://www.youtube.com')} /> */}
                                <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com/in/anastasiya-antonova-08153a137/')} />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="skills">
                            <div className="line-text">
                                <h4>How It Works?</h4>
                            </div>
                            <div className="skills-container">
                                <Progress name="Profiling" value={20} delay={1000} />
                                <Progress name="Sourcing" value={40} delay={1500} />
                                <Progress name="Interviewing" value={60} delay={2000} />
                                <Progress name="Offer Extension and Negotiation" value={80} delay={2500} />
                                <Progress name="Onboarding" value={100} delay={3000} />
                            </div>
                    </Col>
                </Row>
            </section>
        )
    }

    particles() {
        return (
            <Particles
                className="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": false,
                                "value_area": 5000
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": .5
                        },
                        "size": {
                            "value": 1
                        },
                    },
                    "retina_detect": true
            }}/>
        )
    }

}

export default Hero