const request = require('supertest');

const obterToken = async (usuario, senha) => {
    // Obtém o Token
    const responseLogin = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-type', 'application/json')
        .send({
            'username': usuario,
            'senha': senha
        })

    return responseLogin.body.token
}

module.exports = {
    obterToken
}