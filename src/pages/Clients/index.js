import React, { useState } from "react";
import swal from "sweetalert";
import { Container, Box } from "./styles";
import NavFooter from "../../components/Footer";

const Clients = () => {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length === 0 || adress.length === 0 || city.length === 0) {
      swal(
        "O formulário tem campos vazios! ",
        "Preencha o formulário corretamente!"
      );
      return;
    }

    let client = {
      name: name,
      adress: adress,
      city: city,
    };

    let clients = [];

    let clientsExists = JSON.parse(localStorage.getItem("clients:"));

    if (clientsExists) {
      clients.push(...clientsExists);
    }

    clients.push(client);

    localStorage.setItem("clients:", JSON.stringify(clients));

    swal("Cliente cadastrado com sucesso!");

    clearFields();
  };

  const clearFields = () => {
    setName("");
    setCity("");
    setAdress("");
  };

  return (
    <Container>
      <Box>
        <h2>Cadastro de clientes</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Nome do cliente"
            name={name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Endereço do cliente"
            name={adress}
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />
          <input
            type="text"
            placeholder="Cidade do cliente"
            name={city}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">CADASTRAR CLIENTE</button>
        </form>
        <NavFooter
          name1="Página Principal"
          link1=""
          name2="Cadastro de produtos"
          link2="products"
        />
      </Box>
    </Container>
  );
};

export default Clients;
