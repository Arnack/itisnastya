import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './styles.scss'
import { Row, Col } from 'react-bootstrap'
import AnimationContainer from 'components/animation-container'
import BaffleText from 'components/baffle-text'
import ThemeContext from '../../context'

class Vacancies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showPortfolio: false,
    }
    this.showPortfolio = this.showPortfolio.bind(this)
  }
  static contextType = ThemeContext

  showPortfolio() {
    this.setState({ showPortfolio: true })
  }

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="positions"
        style={{ height: this.context.height }}
      >
        <Row>
          <Col md={2} className="side">
            <h2>
              <BaffleText
                text="Hot Jobs"
                // text="Vacancies"
                revealDuration={500}
                revealDelay={500}
                parentMethod={this.showPortfolio}
                callMethodTime={1100}
              />
            </h2>
          </Col>


          <Col md={10} className="recent-works">

            <div className="content">
              <div
                className="position_container"
                style={{
                  maxHeight:
                    this.context.height !== 'auto'
                      ? this.context.height * 0.8
                      : 'inherit',
                }}
              >
                
              <AnimationContainer delay={400} animation="fadeIn">
                <Row>
                 {this.items()}
                </Row>
              </AnimationContainer>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    )
  }


  items() {
    if (this.state.showPortfolio || this.context.height === 'auto') {
      const { items } = this.props;
      
    
  const renderTech = (tech, idx) => {
    const colors = ['#b8c1ec', 'rgba(232, 19, 121, 1)', 'rgba(255, 128, 36, 1)', 'rgba(2, 119, 255, 1)', 'rgba(195, 26, 255, 1)'];
    const color = colors[Math.floor(Math.random()*colors.length)];
    return (
      <span key={idx}>
        {idx === 0 ? '' : ', '}
        <span className='tech-tag' style={{color}}>{tech}</span>
      </span>
    )
  }
      return items.map(({ node }, index) => {
          return (
            <Col md={4}
              className="position_item"
              key={node.id}
            >
                <div onClick={() => window.open(node.pdfDescription.file.url)}>
                  <h3>{node.title}</h3>
                  {/* <p>{node.description}</p> */}
                  <span className="inner-separator">***</span>
                  <p>{node.techStack.map((item, idx) => renderTech(item, idx))}</p>
                  {/* <button onClick={() => window.open(node.pdfDescription.file.url)}>Details</button> */}
                </div>
                
            </Col>
          )

        }
      )
    }
  }
}

export default props => (
  <StaticQuery
    query={graphql`
          query {
            # The layout is built for 6  items #
            allContentfulJobPosition(limit: 6) {
              edges {
                node {
                  description
                  id
                  pdfDescription {
                    file {
                      url
                    }
                  }
                  techStack
                  title
                }
              }
            }
          }      
        `}
    render={({ allContentfulJobPosition }) => <Vacancies items={allContentfulJobPosition.edges} {...props} />}
  />
)
