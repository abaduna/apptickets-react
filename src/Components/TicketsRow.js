import { Table } from "react-bootstrap";
function TicketsRow({
  id,
  descripcion,
  precio,
  cantidad,
  addTickecQuantity,
  subtrackTicketQuantyti,
}) {
  return (
    <tr>
      <td className="text-center">{descripcion}</td>
      <td className="text-center">${precio}</td>
      <td className="text-center">
        {" "}
        <button
          className="btn btn-primary m-3"
          onClick={subtrackTicketQuantyti}
        >
          -
        </button>
        <span>{cantidad}</span>
        <button
          className="btn btn-primary m-3"
          onClick={() => addTickecQuantity(id)}
        >
          +
        </button>
      </td>
    </tr>
  );
}

export default TicketsRow;
