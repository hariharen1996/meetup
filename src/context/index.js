import React from 'react'

const ReactContext = React.createContext({
  register: false,
  isError: false,
  name: '',
  topics: 'Arts and Culture',
  changeName: () => {},
  changeTopics: () => {},
  data: [],
  error: '',
})

export default ReactContext
