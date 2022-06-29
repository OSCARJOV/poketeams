const chai = require('chai');
const chaiHttp = require('chai-http')

const app = require('../../app').app

chai.use(chaiHttp)

describe('Suite de tests de integracion', () => {
    it('Should return the new pokemon from the team of the given user', (done) => {
        chai.request(app)
            .post('/team/pokemons')
            .send({name: 'pikachu'})
            .set("Authorization", 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')
            .end((err, res) => {
                /*
                    {
                        message: "Pokemon added succesfully on your team",
                        pokemon: {
                            name: "pikachu"
                        }
                    }
                */
                chai.assert.equal(res.status, 201)
                chai.assert.equal(res.body.message, "Pokemon added succesfully on your team")
                chai.assert.property(res.body.pokemon, "name")
                chai.assert.equal(res.body.pokemon.name, 'pikachu')
                done()
            })
    })
})


