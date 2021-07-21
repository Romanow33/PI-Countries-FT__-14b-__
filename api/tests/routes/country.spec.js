/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai")
const session = require("supertest-session")
const app = require("../../src/app.js")
const { Activity, conn } = require("../../src/db.js")

const agent = session(app)

describe("Country routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err)
    })
  )
  describe("GET /countries", () => {
    it("should get 200", (done) => { agent.get("/countries").expect(200), done()})
    it('responds with 200', () => agent.get('/countries/?page=0').expect(200));
    it('responds with 200', () => agent.get('/countries/arg').expect(200));
  })
})

describe("Activity routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err)
    })
  )
  beforeEach(() =>
    Activity.sync({ force: true }).then(() => Activity.create({      name: "sky",
    
    duration: "5",
    dificulty: "Alta",
    season: "summer"}))
  )
  describe("POST /activity", () => {
    it("should get 200", (done) => {agent.post("/activity").send({
      name: "sky",
      dificulty: "Alta",
      duration: "5",
      country:"Argentina",
      season: "summer"
    }).expect(200), done()})
    it('responds with 400 if it`s doesn`t object', () =>
    agent.post('/activity')
      .send([{
        name: 2,
        dificulty: 'Alta',
        duration: "10",
        season: "summer"
      }])
      .expect(404));
  })
})