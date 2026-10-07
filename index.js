const API_URL = "https://fakestoreapi.com";

const [method, resource, ...args] = process.argv.slice(2);
const [route, id] = (resource ?? "").split("/");

const main = async () => {
  if (method === "GET" && route === "products" && !id) {
    const res = await fetch(`${API_URL}/products`);
    console.log(await res.json());
  } else if (method === "GET" && route === "products" && id) {
    const res = await fetch(`${API_URL}/products/${id}`);
    console.log(await res.json());
  } else if (method === "POST" && route === "products") {
    const [title, price, category] = args;
    const res = await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, price: Number(price), category }),
    });
    console.log(await res.json());
  } else if (method === "DELETE" && route === "products" && id) {
    const res = await fetch(`${API_URL}/products/${id}`, { method: "DELETE" });
    console.log(await res.json());
  } else {
    console.log("Método o recurso no reconocido");
  }
};

main();
