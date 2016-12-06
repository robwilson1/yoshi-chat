const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

import config from '../src/config'
import packageJson from '../package'

const port = process.env.PORT || config.port
const baseURL = `http://localhost:${port}`

describe('The utility controller', () => {

    describe('The /healthcheck route', () => {

        it('should return HTTP 200', (done) => {
            chai.request(baseURL)
                .get('/healthcheck')
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    done()
                })
        })

    })

    describe('The /version route', () => {

        it('should return HTTP 200', (done) => {
            chai.request(baseURL)
                .get('/version')
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    done()
                })
        })

        it('should return the version listed in package.json', (done) => {
            chai.request(baseURL)
                .get('/version')
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res.body.version).to.equal(packageJson.version)
                    done()
                })
        })

    })
})