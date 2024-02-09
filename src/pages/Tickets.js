import React from "react";
import TicketsTable from "../Components/TicketsTable";

const tickets = [
  {
    id: 1,
    descripcion: "Descripcion del precio",
    precio: 800,
    cantidad: 0,
  },
  {
    id: 2,
    descripcion: "Descripcion del precio",
    precio: 700,
    cantidad: 0,
  },
];

const Tickets = () => {
  return (
    <>
      <h2>Tickets</h2>
      <TicketsTable tickets={tickets} />
    </>
  );
};

export default Tickets;
