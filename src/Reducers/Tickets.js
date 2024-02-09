import { SET_TICKETS, ADD_QUANTITY } from "../Action/Tickets";

const initialState = {
  tickets: [],
  total: 0,
};
const getTotal = (tickets) => {
  console.log(tickets);
 return tickets
    .map((ticket) => ticket.precio * ticket.cantidad)
    .reduce((prev, current) => prev + current, 0);
};

export const ticketReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_TICKETS: {
      return {
        tickets: action.payload.tickets,
        total: getTotal(state.tickets),
      };
    }
    case ADD_QUANTITY: {
      let tickets = state.tickets;
      const index = tickets.findIndex((tick) => tick.id === action.payload.id);
      console.log(tickets);

      console.log(index);
      tickets[index].cantidad += 1;

      // Creamos una copia del array de tickets usando el operador de propagación

      // let tickets = [...state.tickets];
      // // Buscamos el índice del ticket que queremos modificar
      // const index = tickets.findIndex((tick) => tick.id === action.payload.id);
      // // Creamos una copia del ticket usando Object.assign y le sumamos 1 a la cantidad
      // tickets[index] = Object.assign({}, tickets[index], {
      //   cantidad: tickets[index].cantidad + 1,
      // });
      console.log(tickets[index]);
      return {
        tickets,
        total: getTotal(tickets),
      };
    }
    default:
      return state;
  }
};
