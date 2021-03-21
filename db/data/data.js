const pizza = [
  {
    p_id: 1,
    p_image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1314&q=80",
    p_sign:
      "https://images.unsplash.com/photo-1595757816291-ab4c1cba0fc2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80 ",
    p_name: "BBQ-chicken",
    p_size: [
      { size: "larg", price: "15" },
      { size: "medium", price: "12" },
      { size: "sml", price: "10" },
    ],
    topping: ["bacon", "cheese", "ham"],
    dip: "Garlic dip",
  },
  {
    p_id: 2,
    p_image: "",
    p_sign: "",
    p_name: "Meat Feast",

    p_image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1314&q=80",
    p_sign:
      "https://images.unsplash.com/photo-1595757816291-ab4c1cba0fc2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80 ",
    p_size: [
      { size: "larg", price: "15" },
      { size: "medium", price: "12" },
      { size: "sml", price: "10" },
    ],
    topping: ["black olives", "cheese", "green paper"],
    dip: "Garlic dip",
  },
  {
    p_id: 3,
    p_image: "",
    p_sign: "",
    p_name: "BBQ-chicken",

    p_image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1314&q=80",
    p_sign:
      "https://images.unsplash.com/photo-1595757816291-ab4c1cba0fc2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80 ",
    p_size: [
      { size: "larg", price: "15" },
      { size: "medium", price: "12" },
      { size: "sml", price: "10" },
    ],
    topping: ["pepproni", "sweetcorn", "green paper"],
    dip: "Garlic dip",
  },
];

const customise = [
  {
    p_size: [
      { size: "larg", price: "15" },
      { size: "medium", price: "12" },
      { size: "sml", price: "10" },
    ],
    p_souce: ["Base pizza souce", "Base BBQ souce", "Base Amarillo souce"],
    topping: [
      "pepproni",
      "sweetcorn",
      "green paper",
      "jalapeno papper",
      "Ham",
      "Red chilli paper",
    ],
    drink: ["papsi,papsi max,papsi cherry", "7up free"],
  },
];
export { customise, pizza };
