const { assert } = require("chai");
const res = require("express/lib/response");
const { describe } = require("mocha");

const usersDB = {
    1: {
        id: 1,
        name: 'Sahid',
        email: 'sahid.kick@academlo.com',
        password: 'root',
        age: 21
    },
    2: {
        id: 2,
        name: 'Cristian',
        email: 'cristian@gmail.com',
        password: '1234',
        age: 25
    }
}

describe('Suite de Testing unitario para el controlador de edit de usuarios', () => {
    it('Should return correctly the body', (done) => {
        const body = {
            id: 1,
            name: 'Sahid',
            email: 'sahid.kick@academlo.com',
            password: '5678',
            age: 21
        }
        const result = editUser(1, body)
        assert.equal(result.id, 1)
        assert.equal(result.password, body.password)
        assert.equal(result.name, 'Sahid')
        assert.equal(result.email, body.email)
        assert.typeOf(result.password, 'string')
        done()
    })
})

describe('Suite de testing unitario para el controlador de getAllUsers')

