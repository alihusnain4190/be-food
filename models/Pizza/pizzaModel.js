const connection = require("../../db/connection");
exports.getALLPizzaModel = async () => {
  const data = await connection.select("*").from("pizza");

  return data;
};
exports.getPizzaModelByID = async (id) => {
  const data = await connection("pizza").where("p_id", id);
  if (data.length === 0) {
    return Promise.reject({ status: 404, msg: "Invalid id" });
  } else {
    return data;
  }
};
exports.deletePizzaModelByID = async (id) => {
  const data = await connection("pizza").where({ p_id: id }).del();

  if (!data) {
    return Promise.reject({ status: 404, msg: "Invalid id" });
  } else {
    return data;
  }
};

exports.addPizzaModel = async (data) => {
  const result = await connection("pizza").insert(data).returning("*");

  // if (result.length === 0) {
  //   return Promise.reject({ status: 400, messege: "empty object" });
  // }
  return result[0];
};
exports.updatePizzaModelByID = async (
  { p_name, p_larg, p_medium, p_small, dip, p_image },
  { id }
) => {
  if(p_name||p_larg||p_medium||p_small||dip||p_image){
 const result = await connection("pizza")
    .update({ p_name, p_larg, p_medium, p_small, dip,p_image })
    .where({ p_id: id })
    .returning("*");
    console.log(result);
     if (result.length===0) {
    return Promise.reject({ status: 404, msg: "Invalid id" });
  } else {
    return result[0];
  }
  }else{
  return Promise.reject({ status: 400, msg: "Bad Request" });
  }
  
 
};
