import './App.css'
import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import HomeRoute from './components/HomeRoute'
import HeaderRoute from './components/HeaderRoute'
import RegisterRoute from './components/RegisterRoute'
import NotFoundRoute from './components/NotFoundRoute'
import ReactContext from './context'

// Replace your code here
class App extends Component {
  state = {
    name: '',
    topics: 'Arts and Culture',
    register: false,
    isError: false,
    error: '',
  }

  changeName = event => {
    this.setState({name: event.target.value})
  }

  changeTopics = event => {
    this.setState({topics: event.target.value})
  }

  showError = () => {
    this.setState({isError: true, error: 'Please enter your name'})
  }

  isRegister = () => {
    this.setState({register: true})
  }

  render() {
    const {name, topics, data, isError, register, error} = this.state
    return (
      <ReactContext.Provider
        value={{
          name,
          topics,
          changeName: this.changeName,
          changeTopics: this.changeTopics,
          data,
          register,
          isError,
          isRegister: this.isRegister,
          showError: this.showError,
          error,
        }}
      >
        <HeaderRoute />
        <Switch>
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/register" component={RegisterRoute} />
          <Route exact component={NotFoundRoute} />
        </Switch>
      </ReactContext.Provider>
    )
  }
}

export default App
