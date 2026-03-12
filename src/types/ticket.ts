export const TICKET_STATUSES = ["Open", "In Progress", "Done"] as const;

export const TICKET_PRIORITIES = ["Low", "Medium", "High"] as const;

export const TICKET_STATUS_FILTERS = ["All", ...TICKET_STATUSES] as const;

export const DEFAULT_TICKET_PRIORITY: TicketPriority = "Medium";

export type TicketStatus = (typeof TICKET_STATUSES)[number];

export type TicketPriority = (typeof TICKET_PRIORITIES)[number];

export type TicketStatusFilter = (typeof TICKET_STATUS_FILTERS)[number];

export type Ticket = {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
  createdAt: string;
};

export type TicketInput = {
  title: string;
  description: string;
  priority: TicketPriority;
};

export function isTicketStatus(value: string): value is TicketStatus {
  return (TICKET_STATUSES as readonly string[]).includes(value);
}

export function isTicketPriority(value: string): value is TicketPriority {
  return (TICKET_PRIORITIES as readonly string[]).includes(value);
}

export function isTicketStatusFilter(value: string): value is TicketStatusFilter {
  return (TICKET_STATUS_FILTERS as readonly string[]).includes(value);
}
