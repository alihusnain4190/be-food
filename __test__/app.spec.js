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
    describe("GET", () => {
      test("Return status 200 with array of all pizza list", async () => {
        const pizza = await request(app).get("/api/pizza").expect(200);
        expect(Array.isArray(pizza.body)).toBe(true);
      });
      test("Return status 200 with object of pizza according to passed id", async () => {
        const { body } = await request(app).get("/api/pizza/1").expect(200);
        expect(typeof body).toBe("object");
        const expected = [
          "p_id",
          "p_name",
          "p_larg",
          "p_medium",
          "p_small",
          "dip",
          "p_image",
        ];
        expect(Object.keys(body)).toEqual(expect.arrayContaining(expected));
      });
      test("Return status 404 response with Invalid id if we passed non existing pizza ID", async () => {
        const { body } = await request(app).get("/api/pizza/1000").expect(404);
        expect(body.msg).toBe("Invalid id");
      });
      test("Return status 400 response with Bad Request if we pass non valid pizza id ", async () => {
        const { body } = await request(app).get("/api/pizza/ali").expect(400);
        expect(body.msg).toBe("Bad Request");
      });
    });
    describe("DELETE", () => {
      test("Return status 204 delete pizza by ID", async () => {
        const { body } = await request(app).delete("/api/pizza/1").expect(204);
        console.log(body);
        // expect(body).toBe("successfuly delete");
      });
      test.only("Return status 404 response with Invalid id if we passed non existing pizza ID", async () => {
        const { body } = await request(app)
          .delete("/api/pizza/1000")
          .expect(404);
        expect(body.msg).toBe("Invalid ID");
      });
    });
  });
});
