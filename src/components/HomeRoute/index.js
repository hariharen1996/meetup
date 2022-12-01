import {Component} from 'react'
import {Link} from 'react-router-dom'
import {
  HomeContainer,
  HomeHeading,
  HomePara,
  HomeButton,
  HomeImage,
} from './StyledHome'
import ReactContext from '../../context/index'

class HomeRoute extends Component {
  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {name, topics, register} = value
          return (
            <HomeContainer>
              {register ? (
                <>
                  <HomeHeading>Hello {name}</HomeHeading>
                  <HomePara>Welcome to {topics}</HomePara>
                  <HomeImage
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                  />
                </>
              ) : (
                <>
                  <HomeHeading>Welcome to Meetup</HomeHeading>
                  <HomePara>Please register for the topic</HomePara>
                  <Link to="/register">
                    <HomeButton type="button">Register</HomeButton>
                  </Link>
                  <HomeImage
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                  />
                </>
              )}
            </HomeContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default HomeRoute
