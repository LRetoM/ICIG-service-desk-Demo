import type { Ticket, TicketStatus } from "../../types/ticket";
import { TicketCard } from "./TicketCard";

type TicketListProps = {
  tickets: Ticket[];
  onStatusChange: (id: string, status: TicketStatus) => void;
};

export function TicketList({ tickets, onStatusChange }: TicketListProps) {
  if (tickets.length === 0) {
    return (
      <div className="empty-state">
        <h3>No tickets found</h3>
        <p>Try adjusting the filters or create a new ticket.</p>
      </div>
    );
  }

  return (
    <div className="ticket-list">
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} onStatusChange={onStatusChange} />
      ))}
    </div>
  );
}
