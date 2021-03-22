// process.env.NODE_ENV = "test";
const request = require("supertest");
const app = require("../app");
const connection = require("../db/connection");
beforeEach(() => {
  return connection.seed.run();
});

afterAll(() => {
  return connection.destroy();
});
describe("/api", () => {
  describe("/pizza", () => {
    test("Return status 200 with array of all pizza list", async () => {
      const pizza = await request(app).get("/api/pizza").expect(200);
      expect(Array.isArray(pizza.body)).toBe(true);
    });
    test.only("Return status 200 with object of pizza according to passed id", async () => {
      const { body } = await request(app).get("/api/pizza/1").expect(200);
      expect(typeof body).toBe("object");
      // const arr=
      expect(Object.keys(body)).toHaveProperty(["p_image"]);
    });
  });
});
