import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`

export const RegisterSubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`

export const RegisterImage = styled.div`
  margin-left: 30px;
`
export const RegisterImg = styled.img`
  width: 400px;
`
export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`
export const RegisterHeading = styled.h1`
  color: #475569;
  font-size: 25px;
  font-family: 'Roboto';
`
export const RegisterLabel = styled.label`
  color: #7b8794;
  font-size: 12px;
  font-family: 'Roboto';
`
export const RegisterInput = styled.input`
  width: 70%;
  padding: 5px;
`
export const Select = styled.select`
  width: 70%;
  padding: 5px;
`

export const RegButton = styled.button`
  background-color: #2563eb;
  color: #ffffff;
  padding: 6px 12px;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
`

export const Error = styled.p`
  color: #ff0b37;
  font-size: 12px;
  font-family: 'Roboto';
`
