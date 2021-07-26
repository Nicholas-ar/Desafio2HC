import React, { useEffect, useState } from "react";
import { Container, Box, Cards } from "./styles";
import NavFooter from "../../components/Footer";

const MainPage = () => {
  const [products, setProducts] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    let clients = JSON.parse(localStorage.getItem("clients:"));
    let products = JSON.parse(localStorage.getItem("products:"));

    if (clients) {
      setClients(clients.length);
    }

    if (products) {
      setProducts(products.length);
    }
  }, []);

  return (
    <Container>
      <Box>
        <h2>Página Principal - Desafio 02 - Hiring Coders </h2>
        <Cards>
          <div>
            <p>CLIENTES: {clients}</p>
          </div>
          <div>
            <p>PRODUTOS: {products}</p>
          </div>
        </Cards>
        <NavFooter
          name1="Cadastrar Clientes"
          link1="clients"
          name2="Cadastrar Produtos"
          link2="products"
        />
      </Box>
    </Container>
  );
};

export default MainPage;
