// process.env.NODE_ENV = "test";
const request = require("supertest");
const { result } = require("underscore");
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
      test("Return status 404 response with Invalid id if we passed non existing pizza ID", async () => {
        const { body } = await request(app)
          .delete("/api/pizza/1000")
          .expect(404);
        expect(body.msg).toBe("Invalid id");
      });
      test("Return status 400 response with Bad Request with we passed non existing id", async () => {
        const { body } = await request(app)
          .delete("/api/pizza/ali")
          .expect(400);
        expect(body.msg).toBe("Bad Request");
      });
    });
    describe("POST", () => {
      test("Return status 201 and object containing pizza item", async () => {
        const data = {
          p_name: "ali",

          p_larg: 15,

          p_medium: 12,
          p_small: 10,
          dip: "Garlic dip",
          p_image:
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1314&q=80",
        };
        const result = await request(app)
          .post("/api/pizza")
          .send(data)
          .expect(201);

        expect(Object.keys(result.body)).toEqual(
          expect.arrayContaining([
            "p_id",
            "p_name",
            "p_image",
            "p_small",
            "p_larg",
            "p_medium",
            "dip",
          ])
        );
        expect(result.body).toEqual({
          p_id: 4,
          p_name: "ali",

          p_larg: "15",

          p_medium: "12",
          p_small: "10",
          dip: "Garlic dip",
          p_image:
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1314&q=80",
        });
      });
      test("Rturn 400 if we passed nothing", async () => {
        const results = await request(app)
          .post("/api/pizza")
          .send({})
          .expect(400);
        expect(results.body.msg).toBe("Bad Request");
      });
      test("Rturn 400 when key some is missing ", async () => {
        const data = {
          p_name: "ali",

          p_larg: 15,

          p_medium: 12,
          p_small: 10,
          dip: "Garlic dip",
        };
        const results = await request(app)
          .post("/api/pizza")
          .send(data)
          .expect(400);
        expect(results.body.msg).toBe("Bad Request");
      });
      test.only("Rturn 400 when key some is missing ", async () => {
        const data = {
          p_name: "ali",

          p_larg: 15,

          p_medium: 12,
          p_small: 10,
          dip: "Garlic dip",
          p_image: "",
          p_ali: "ali",
        };
        const results = await request(app)
          .post("/api/pizza")
          .send(data)
          .expect(400);
        expect(results.body.msg).toBe("Bad Request");
      });
    });
  });
});