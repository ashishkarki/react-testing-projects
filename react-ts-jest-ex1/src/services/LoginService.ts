interface PromiseState {
  status: number
}

export class LoginService {
  public async login(userName: string, password: string): Promise<boolean> {
    try {
      const loginResponse = await Promise.resolve<PromiseState>({
        status: Math.random() > 0.5 ? 201 : 401,
      })

      if (loginResponse.status === 201) {
        // console.log('Successful login')
        return true
      } else {
        // console.log('Un-successful login')
        return false
      }
    } catch (error) {
      console.error(error.message)
      return false
    }
  }
}
