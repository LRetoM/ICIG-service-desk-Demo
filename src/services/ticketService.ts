import { mockTickets } from "../data/mockTickets";
import type { Ticket, TicketInput, TicketStatus } from "../types/ticket";

let tickets = [...mockTickets];

export async function getTickets(): Promise<Ticket[]> {
  return [...tickets].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function createTicket(input: TicketInput): Promise<Ticket> {
  const ticket: Ticket = {
    id: crypto.randomUUID(),
    title: input.title.trim(),
    description: input.description.trim(),
    status: "Open",
    priority: input.priority,
    createdAt: new Date().toISOString(),
  };
  tickets = [ticket, ...tickets];
  return ticket;
}

export async function updateTicketStatus(id: string, status: TicketStatus): Promise<Ticket> {
  const index = tickets.findIndex((ticket) => ticket.id === id);
  if (index === -1) {
    throw new Error("Ticket not found");
  }
  const updated: Ticket = { ...tickets[index], status };
  tickets = tickets.map((ticket) => (ticket.id === id ? updated : ticket));
  return updated;
}
