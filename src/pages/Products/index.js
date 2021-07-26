import React, { useState } from "react";
import swal from "sweetalert";
import { Container, Box } from "./styles";
import NavFooter from "../../components/Footer";

const Products = () => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length === 0 || price.length === 0 || code.length === 0) {
      swal(
        "O formulário tem campos vazios! ",
        "Preencha o formulário corretamente!"
      );
      return;
    }

    let product = {
      code: code,
      name: name,
      price: price,
    };

    let products = [];

    let productsExists = JSON.parse(localStorage.getItem("products:"));

    if (productsExists) {
      products.push(...productsExists);
    }

    products.push(product);

    localStorage.setItem("products:", JSON.stringify(products));

    swal("Produto cadastrado com sucesso!");

    clearFields();
  };

  const clearFields = () => {
    setName("");
    setCode("");
    setPrice("");
  };

  return (
    <Container>
      <Box>
        <h2>Cadastro de produtos</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Código do produto"
            name={code}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nome do produto"
            name={name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            min="1"
            step="any"
            placeholder="Preço do produto"
            name={price}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button type="submit">CADASTRAR PRODUTO</button>
        </form>
        <NavFooter
          name1="Página Principal"
          link1=""
          name2="Cadastrar clientes"
          link2="Clients"
        />
      </Box>
    </Container>
  );
};

export default Products;
