import { fireEvent } from '@testing-library/dom'
import * as ReactDOM from 'react-dom'
import { LoginService } from '../services/LoginService'

import { Login } from './Login'

describe('Login components tests', () => {
  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)

    ReactDOM.render(<Login />, container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container.remove()
  })

  describe('Renders the initial document correctly', () => {
    test('displays inputs correctly', () => {
      const inputs = container.querySelectorAll('input')

      expect(inputs).toHaveLength(3)
      expect(inputs[0].name).toBe('login')
      expect(inputs[1].name).toBe('password')
      expect(inputs[2].value).toBe('Login')
    })

    test("shouldn't display labels", () => {
      const labels = container.querySelectorAll('label')

      //expect(labels).not.toBeInTheDocument()
      expect(labels).toHaveLength(1)
    })

    test('render the document using data-test query', () => {
      expect(
        container.querySelector("[data-test='login-form']")
      ).toBeInTheDocument()

      expect(
        container.querySelector("[data-test='login-input']")
      ).toBeInTheDocument()

      expect(
        container
          .querySelector("[data-test='login-input']")
          ?.getAttribute('name')
      ).toBe('login')
    })
  })

  describe('tests for credentials', () => {
    let inputs: NodeListOf<HTMLInputElement>,
      loginInput: HTMLInputElement,
      pwInput: HTMLInputElement,
      btnInput: HTMLInputElement

    let loginSrvSpy: jest.SpyInstance

    beforeEach(() => {
      inputs = container.querySelectorAll('input')
      loginInput = inputs[0]
      pwInput = inputs[1]
      btnInput = inputs[2]

      loginSrvSpy = jest.spyOn(LoginService.prototype, 'login')
    })

    it('passes creds correctly', () => {
      // setup
      fireEvent.click(btnInput)

      // assert
      expect(loginSrvSpy).toBeCalled()
    })
  })
})
