const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

import config from '../src/config'

const port = process.env.PORT || config.port
const baseURL = `http://localhost:${port}`

describe('The Yoti controller', () => {

    describe('The /profile route', () => {

        it('should return HTTP 401 when no token is provided', (done) => {
            chai.request(baseURL)
                .get('/profile')
                .end((err, res) => {
                    expect(err).to.not.be.null
                    expect(res).to.have.status(401)
                    done()
                })
        })

        it('should return HTTP 403 when an invalid token is provided', (done) => {
            chai.request(baseURL)
                .get('/profile?token=invalid')
                .end((err, res) => {
                    expect(err).to.not.be.null
                    expect(res).to.have.status(403)
                    done()
                })
        })

    })

})