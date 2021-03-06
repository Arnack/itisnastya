import React from 'react'
import './styles.scss'
import { Row, Col } from 'react-bootstrap'
import AnimationContainer from 'components/animation-container'
import BaffleText from 'components/baffle-text'
import ThemeContext from '../../context'
import toast from 'react-hot-toast';
import { graphql, StaticQuery } from 'gatsby'
import ContactMe from './contactMe'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKeyboard, faHeartbeat } from '@fortawesome/free-solid-svg-icons'

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            phone: "",
            message: "",
            error: false,
            show: false,
            shortCreds: true
        }
        this.show = this.show.bind(this)
    }
    static contextType = ThemeContext


    show() {
        this.setState({ show: true })
    }

    check(val) {
        if (this.state.error && val === "") {
            return false
        } else {
            return true
        }
    }

    submit(email) {
        const sendEmail = () => {
            window.Email.send({
                SecureToken: "f096f0a5-3df8-4b2a-931d-37010b1aae16",
                To: email,
                From: 'info@itisnastya.art',
                Subject: `Message from  ${this.state.name} via contact form`,
                Body: `Name: ${this.state.name} <br/>
             Email: ${this.state.email}  <br/> 
             Phone: ${this.state.phone} <br/>
             Message: ${this.state.message}`
            }).then(
                message => {
                    toast.success('Your message has been sent successfully!');
                }
            ).catch(err => console.error(err));
        }

        if (this.state.name === "" || this.state.email === "" || this.state.message === "") {
            this.setState({ error: true })
        } else {
            sendEmail();
            this.setState({ error: false })
        }
    }


    render() {
        const { buttonText, email, formTitle } = this.props.contentfulContactSection;
        return (
            <section id={`${this.props.id}`} className="contact" style={{ height: this.context.height }}>

                <Row>
                    <Col md={2} className="side">
                        <h2>
                            <BaffleText text="Contact" revealDuration={500} revealDelay={500} parentMethod={this.show} callMethodTime={1100} />
                        </h2>
                    </Col>
                    <Col md={5} className="form">
                        {this.form(formTitle, email, buttonText)}
                    </Col>
                    <Col md={5} className="contact-me">
                        {/* {this.map(location)} */}
                        <AnimationContainer delay={300} animation="fadeInUp fast">
                            <ContactMe />
                        </AnimationContainer>

                        <div className='creator'>
                            <span
                                onClick={() => this.setState({ shortCreds: !this.state.shortCreds })}
                            >
                                {this.state.shortCreds ?
                                        'Designed by' :
                                        <span>
                                            Created with <FontAwesomeIcon icon={faKeyboard} /> & <FontAwesomeIcon icon={faHeartbeat} /> by 
                                        </span>}
                            </span>
                            <a href='https://arnack.github.io' target="_blank"> Greg</a>
                        </div>
                    </Col>
                </Row>
            </section>
        )
    }

    form(title, email, buttonText) {
        if (this.state.show || this.context.height === "auto") {
            return (
                <AnimationContainer delay={400} animation="fadeInUp fast">
                    <div className="form-container">
                        <div className="line-text">
                            <h4>{title}</h4>
                            <AnimationContainer delay={50} animation="fadeInUp fast">
                                <div className="form-group">
                                    <input type="text" className={`name ${this.check(this.state.name) ? "" : "error"}`} placeholder="Name" onChange={e => this.setState({ name: e.target.value })} />
                                </div>
                            </AnimationContainer>
                            <AnimationContainer delay={100} animation="fadeInUp fast">
                                <div className="form-group">
                                    <input type="text" className={`email ${this.check(this.state.email) ? "" : "error"}`} placeholder="Email" onChange={e => this.setState({ email: e.target.value })} />
                                </div>
                            </AnimationContainer>
                            <AnimationContainer delay={150} animation="fadeInUp fast">
                                <div className="form-group">
                                    <input type="text" className="phone" placeholder="Phone" onChange={e => this.setState({ phone: e.target.value })} />
                                </div>
                            </AnimationContainer>
                            <AnimationContainer delay={200} animation="fadeInUp fast">
                                <div className="form-group">
                                    <textarea className={`message ${this.check(this.state.message) ? "" : "error"}`} placeholder="Message" onChange={e => this.setState({ message: e.target.value })}></textarea>
                                </div>
                            </AnimationContainer>
                            <AnimationContainer delay={250} animation="fadeInUp fast">
                                <div className="submit">
                                    <button className={`hover-button ${this.state.error ? "error" : ""}`} onClick={() => this.submit(email)}>
                                        <span>{buttonText}</span>
                                    </button>
                                </div>
                            </AnimationContainer>
                        </div>
                    </div>
                </AnimationContainer>
            )
        }
    }

    map(location) {
        if (this.state.show || this.context.height === "auto") {
            return (
                <AnimationContainer delay={1000} animation="fadeIn fast" height={this.context.height}>

                    {/* <iframe
                    title='map'
                    width="100%"
                    height="100%"
                    frameborder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=34.97315168380738%2C29.537413848243954%2C34.99117612838746%2C29.5494732406084&amp;layer=cyclemap&amp;marker=${location.lat},${location.lon}`} /> */}


                </AnimationContainer>
            )
        }
    }

}

// export default Contact

export default props => (
    <StaticQuery
        query={graphql`
        query {
            contentfulContactSection {
                buttonText
                email
                formTitle
                location {
                    lat
                    lon
                  }
              }
        }`}
        render={data => <Contact {...data} {...props} />}
    />
)


