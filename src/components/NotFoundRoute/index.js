import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundText,
} from './StyledNotFound'

const NotFoundRoute = () => (
  <NotFoundContainer>
    <NotFoundImg
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundText>
      We are sorry, the page you requested could not be found.
    </NotFoundText>
  </NotFoundContainer>
)

export default NotFoundRoute
