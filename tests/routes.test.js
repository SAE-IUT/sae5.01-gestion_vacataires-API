const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");

require("dotenv").config();

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI_TEST);
});
  
/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});
  
describe("GET /api/vacataires", () => {
  it("should return all vacataires", async () => {
    const res = await request(app).get("/api/vacataires");
    expect(res.statusCode).toBe(200);
  });
});

describe("GET /api/modules", () => {
  it("should return all vacataires", async () => {
    const res = await request(app).get("/api/modules");
    expect(res.statusCode).toBe(200);
  });
});