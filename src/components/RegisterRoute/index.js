import {Component} from 'react'
import ReactContext from '../../context/index'
import {
  RegisterContainer,
  RegisterSubContainer,
  RegisterImage,
  RegisterImg,
  RegisterForm,
  RegisterHeading,
  RegisterLabel,
  RegisterInput,
  Select,
  RegButton,
  Error,
} from './StyledRegister'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class RegisterRoute extends Component {
  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {
            name,
            topics,
            changeName,
            changeTopics,
            isError,
            showError,
            isRegister,
            error,
          } = value
          const submitForm = event => {
            event.preventDefault()

            if (name === '' || topics === '') {
              showError()
            } else {
              const {history} = this.props
              history.replace('/')
              isRegister()
            }
          }
          return (
            <RegisterContainer>
              <RegisterSubContainer>
                <RegisterImage>
                  <RegisterImg
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png "
                    alt="website register"
                  />
                </RegisterImage>
                <RegisterForm onSubmit={submitForm}>
                  <RegisterHeading>Let us join</RegisterHeading>
                  <RegisterLabel htmlFor="name">NAME</RegisterLabel>
                  <RegisterInput
                    type="text"
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={changeName}
                  />
                  <RegisterLabel htmlFor="topics">TOPICS</RegisterLabel>
                  <Select id="topics" value={topics} onChange={changeTopics}>
                    {topicsList.map(item => (
                      <option value={item.id} key={item.id}>
                        {item.displayText}
                      </option>
                    ))}
                  </Select>
                  <RegButton type="submit">Register Now</RegButton>
                  {isError && <Error>{error}</Error>}
                </RegisterForm>
              </RegisterSubContainer>
            </RegisterContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default RegisterRoute
