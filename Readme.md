## Food API

# Background

I am going to build a API for my food app.Which i will use in my front end app.I am following MVC pattren for this app.

For database i am using POSTtgresQL and using Knex query builder http://knexjs.org/

---

# Tools and tech

i am using Node Express framework, JEST,Knex,POSTgresQL.

---

# Routes

## pizza

GET /api/pizza

GET /api/pizza/:id

DELETE /api/pizza/:id
Patch /api/pizza/:id
POST /api/pizza

## drinks

GET /api/drink
GET /api/drink/:id

DELETE /api/drink/:id
Patch /api/drink/:id
POST /api/drink

# Possible Errors

## Relevant HTTP Status Codes

200 OK
201 Created
204 No Content
400 Bad Request
404 Not Found
405 Method Not Allowed
418 I'm a teapot
422 Unprocessable Entity
500 Internal Server Error

# total test case with test

## simple GET

#### happy path

check return array or not
expect(Array.isArray(result.body)).toBe(true);
check total length
expect(result.body.length).toBe(3);
check you can keys
expect(Object.keys(categories[0])).toEqual(
expect.arrayContaining(["slug", "description"])
);

## POST

### send data happy test

check all propert which are returning from database after insert data
expect(
Object.keys(result.body)).toEqual(
expect.arrayContaining(["d_id", "d_name", "d_pirce"])
)
##### Sad path for post 
SEND EMPTY BODY
send wrong data type
send more which is not existing in table
violate null constraint 


