import React from "react";
import Table from "react-bootstrap/Table";
import TicketsRow from "./TicketsRow";
import { useState, useReducer, useEffect } from "react";
import { ticketReducer } from "../Reducers/Tickets";
import { ADD_QUANTITY, SET_TICKETS } from "../Action/Tickets";
function TicketsTable({ tickets }) {
  const [state, discpach] = useReducer(ticketReducer, ticketReducer());

  useEffect(() => {
    discpach({ type: SET_TICKETS, payload: { tickets } });
  }, [tickets]);
  const addTickecQuantity = (id) => {
    console.log(id);
    discpach({ type: ADD_QUANTITY, payload: { id } });
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th className="text-center">Tickets</th>
            <th className="text-center">Cantidad</th>
            <th className="text-center">Precio</th>
          </tr>
        </thead>
        <tbody>
          {tickets?.map((ticket) => (
            <TicketsRow
              key={ticket.id}
              {...ticket}
              addTickecQuantity={addTickecQuantity}
            />
          ))}
        </tbody>
      </Table>
      ${state.total}
    </>
  );
}

export default TicketsTable;
