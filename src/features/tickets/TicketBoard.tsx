import { useState } from "react";
import { useTickets } from "../../hooks/useTickets";
import type { TicketStatusFilter } from "../../types/ticket";
import { TicketFilters } from "./TicketFilters";
import { TicketForm } from "./TicketForm";
import { TicketList } from "./TicketList";

export function TicketBoard() {
  const { tickets, loading, error, createTicket, updateStatus } = useTickets();
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<TicketStatusFilter>("All");

  const normalizedQuery = query.trim().toLowerCase();
  const filteredTickets = tickets.filter((ticket) => {
    if (status !== "All" && ticket.status !== status) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    return (
      ticket.title.toLowerCase().includes(normalizedQuery) ||
      ticket.description.toLowerCase().includes(normalizedQuery)
    );
  });

  const handleReset = () => {
    setQuery("");
    setStatus("All");
  };

  return (
    <div className="ticket-board">
      <section className="panel">
        <h2>Create ticket</h2>
        <TicketForm onSubmit={createTicket} />
      </section>

      <section className="panel" aria-busy={loading}>
        <div className="panel__header">
          <div>
            <h2>Ticket overview</h2>
            <p className="panel__subtitle">ICIG internal service desk</p>
          </div>
          <div className="panel__count">{filteredTickets.length} items</div>
        </div>

        <TicketFilters
          query={query}
          status={status}
          onQueryChange={setQuery}
          onStatusChange={setStatus}
          onReset={handleReset}
        />

        {error ? (
          <div className="error-banner" role="alert">
            {error}
          </div>
        ) : null}
        {loading ? (
          <div className="loading-state" role="status" aria-live="polite">
            Loading tickets...
          </div>
        ) : (
          <TicketList tickets={filteredTickets} onStatusChange={updateStatus} />
        )}
      </section>
    </div>
  );
}
