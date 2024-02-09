import { fireEvent, getByText, render } from "@testing-library/react";
import TicketsTable from "../../Components/TicketsTable";
import { ticket } from "../../mocks/ticket";
describe("ticketTable", () => {
  test("ticketTable should render properly for initial state", () => {
    const { getByText } = render(<TicketsTable ticket={ticket} />);
    getByText(/Tickets/i);
    getByText("0"); //TOTAL: ${state.total}
    getByText("TOTAL: $0");
  });
  test("should increment ticket quantity and modify total", () => {
    const { getByRole } = render(<TicketsTable ticket={ticket} />);
    fireEvent.click(getByRole("button", { name: "+" }));
    getByText("1");
  });
});
