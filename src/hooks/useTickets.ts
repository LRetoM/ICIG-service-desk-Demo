import { useEffect, useState } from "react";
import {
  createTicket as createTicketService,
  getTickets,
  updateTicketStatus as updateTicketStatusService,
} from "../services/ticketService";
import type { Ticket, TicketInput, TicketStatus } from "../types/ticket";

type UseTicketsResult = {
  tickets: Ticket[];
  loading: boolean;
  error: string | null;
  createTicket: (input: TicketInput) => Promise<void>;
  updateStatus: (id: string, status: TicketStatus) => Promise<void>;
};

export function useTickets(): UseTicketsResult {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadTickets() {
      setLoading(true);
      setError(null);
      try {
        const data = await getTickets();
        setTickets(data);
      } catch {
        setError("Could not load tickets.");
      } finally {
        setLoading(false);
      }
    }
    
    loadTickets();
  }, []);

  const createTicket = async (input: TicketInput) => {
    setError(null);
    try {
      const created = await createTicketService(input);
      setTickets((prev) => [created, ...prev]);
    } catch {
      setError("Could not create ticket.");
      throw new Error("Create failed");
    }
  };

  const updateStatus = async (id: string, status: TicketStatus) => {
    setError(null);
    try {
      const updated = await updateTicketStatusService(id, status);
      setTickets((prev) => prev.map((ticket) => (ticket.id === id ? updated : ticket)));
    } catch {
      setError("Could not update ticket.");
      throw new Error("Update failed");
    }
  };

  return { tickets, loading, error, createTicket, updateStatus };
}
