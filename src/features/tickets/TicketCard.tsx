import { TICKET_STATUSES, type Ticket, type TicketStatus } from "../../types/ticket";

const getNextStatus = (status: TicketStatus): TicketStatus | null => {
  const currentIndex = TICKET_STATUSES.indexOf(status);
  const nextStatus = TICKET_STATUSES[currentIndex + 1];

  return nextStatus ?? null;
};

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("de-DE", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));

const toCssModifier = (value: string) => value.toLowerCase().replaceAll(" ", "-");

type TicketCardProps = {
  ticket: Ticket;
  onStatusChange: (id: string, status: TicketStatus) => void;
};

export function TicketCard({ ticket, onStatusChange }: TicketCardProps) {
  const nextStatus = getNextStatus(ticket.status);
  const statusModifier = toCssModifier(ticket.status);
  const priorityModifier = toCssModifier(ticket.priority);

  return (
    <article className="ticket-card">
      <header className="ticket-card__header">
        <div>
          <h3>{ticket.title}</h3>
          <p className="ticket-card__meta">
            <span>{ticket.id}</span>
            <span>{formatDate(ticket.createdAt)}</span>
          </p>
        </div>
        <div className={`status-pill status-pill--${statusModifier}`}>
          {ticket.status}
        </div>
      </header>
      <p className="ticket-card__description">{ticket.description}</p>
      <footer className="ticket-card__footer">
        <span className={`priority-pill priority-pill--${priorityModifier}`}>
          {ticket.priority}
        </span>
        {nextStatus ? (
          <button
            className="ghost-button"
            type="button"
            onClick={() => onStatusChange(ticket.id, nextStatus)}
            aria-label={`Move ${ticket.title} to ${nextStatus}`}
          >
            Move to {nextStatus}
          </button>
        ) : (
          <span className="ticket-card__done">Completed</span>
        )}
      </footer>
    </article>
  );
}
