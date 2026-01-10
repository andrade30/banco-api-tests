const request = require('supertest');
const chai = require('chai');
const { expect } = chai;
require('dotenv').config()

describe('Transferências', () => {
    describe('POST /transferencias', () => {
        it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de R$ 10,00', async () => {
            // Obtém o Token
            const responseLogin = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-type', 'application/json')
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                })

            const token = responseLogin.body.token

            const response = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 12,
                    token: ""
                })

            expect(response.status).to.equal(201);

            console.log(response.body)
        });

        it('Deve retornar falha com 422 quando o valor da transferência for abaixo de R$ 10,00', async () => {
                    // Obtém o Token
            const responseLogin = await request('http://localhost:3000')
                .post('/login')
                .set('Content-type', 'application/json')
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                })

            const token = responseLogin.body.token

            const response = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 8,
                    token: ""
                })

            expect(response.status).to.equal(422);

            console.log(response.body)
        });
    });
});