export class InvalidCredentialsError extends Error {
  constructor () {
    super('Credenciais inv[alidas')
    this.name = 'InvalidCredentialsError'
  }
}
