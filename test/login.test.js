const request = require('supertest');
const chai = require('chai');
const { expect } = chai;
require('dotenv').config()

describe('Login', () => {
    describe('POST /login', () => {
        it('Deve retornar 200 com token em string quando usar credenciais válidas', async () => {
            const response = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-type', 'application/json')
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                })

            expect(response.status).to.equal(200);
            expect(response.body.token).to.be.a('string');
        });
    })
})