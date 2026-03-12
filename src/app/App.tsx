import { Shell } from "./layout/Shell";
import { TicketBoard } from "../features/tickets/TicketBoard";

export function App() {
  return (
    <Shell>
      <TicketBoard />
    </Shell>
  );
}
