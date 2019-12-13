const request = require("supertest")
const app = require("../src/app")
const User = require("../src/models/user")

const userOne = {
  name: "test user",
  email: "gert@example.com",
  password: "hunter2"
}

beforeEach(async () => {
  await User.deleteMany()
  await new User(userOne).save()
})

test("Should sign up a new user", async () => {
  await request(app).post("/users").send({
    name: "Gert",
    email: "vandormael.gert@gmail.com",
    password: "hunter2"
  }).expect(201)
})

test("Should log in existing user", async () => {
  await request(app).post("/users/login").send({
    email: userOne.email,
    password: userOne.password
  }).expect(200)
})

test("Should not log in, non existing user", async () => {
  await request(app).post("users/login").send({
    email: "userdoesnt@exist.com",
    password: "userdoesntexist"
  }).expect(400)
})