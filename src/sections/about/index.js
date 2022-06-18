import React from 'react'
import Particles from 'react-particles-js';
import Progress from 'components/progress'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import ThemeContext from '../../context'
import './styles.scss'
import { graphql, StaticQuery } from 'gatsby';

class Hero extends React.Component {

    static contextType = ThemeContext

    render() {
        console.log("nnlknlnlnlk------", this.props);
        const { tile, description, sectionName } = this.props.contentfulAboutMe;
        const { linkedin, facebook, instagram, twitter } = this.props.contentfulSocialMedias;
        return (
            <section id={`${this.props.id}`} className="about" style={{height: this.context.height}}>
                {this.particles()}
                <Row>
                    <Col md={6} className="content">
                        <div className="content-text">
                            <div className="line-text">
                                <h4>{sectionName}</h4>
                            </div>
                            <h3>{tile}</h3>
                            <div className="separator" />
                            <p>
                            {description.description}
                            </p>
                            <div className="social social_icons">
                                {instagram && <FontAwesomeIcon icon={faInstagram}
                                className="social_icon"
                                onClick={() => window.open(instagram)}/>}
                                
                                {facebook && <FontAwesomeIcon icon={faFacebook}
                                className="social_icon"
                                onClick={() => window.open(facebook)}/>}
                                
                                {twitter && <FontAwesomeIcon icon={faTwitter}
                                className="social_icon"
                                onClick={() => window.open(twitter)}/>}
                                
                                {linkedin && <FontAwesomeIcon icon={faLinkedin}
                                className="social_icon"
                                onClick={() => window.open(linkedin)}/>}
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="skills">
                            <div className="line-text">
                                <h4>How does it Work?</h4>
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

// export default Hero

export default props => (
    <StaticQuery
        query={graphql`
        query {
            contentfulAboutMe {
                tile
                description {
                  id
                  description
                }
                sectionName
              }
              contentfulSocialMedias {
                linkedin
                facebook
                instagram
              }
        }
      `}
        render={data => <Hero {...data} {...props} />}
        />

)
