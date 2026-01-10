const request = require('supertest');
const postLogin = require('../fixtures/postLogin.json')

const obterToken = async (usuario, senha) => {
    const bodyLogin = {...postLogin}
    // Obtém o Token
    const responseLogin = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-type', 'application/json')
        .send(bodyLogin)

    return responseLogin.body.token
}

module.exports = {
    obterToken
}