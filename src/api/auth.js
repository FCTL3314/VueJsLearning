export default function (instance) {
  return {
    signIn(payload) {
			return instance.post('auth/token/login/', payload)
    },
    signUp(payload) {
			return instance.post('users/', payload)
    },
    logout() {
			return instance.post('auth/token/logout')
    },
  }
}