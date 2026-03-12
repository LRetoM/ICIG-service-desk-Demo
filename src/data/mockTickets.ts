import type { Ticket } from "../types/ticket";

export const mockTickets: Ticket[] = [
  {
    id: "T-1001",
    title: "VPN access for new employee",
    description: "Set up VPN access for onboarding starting next Monday.",
    status: "Open",
    priority: "High",
    createdAt: "2026-03-07T09:15:00.000Z",
  },
  {
    id: "T-1002",
    title: "Laptop battery replacement",
    description: "Battery drains within one hour during meetings.",
    status: "In Progress",
    priority: "Medium",
    createdAt: "2026-03-06T14:30:00.000Z",
  },
  {
    id: "T-1003",
    title: "Reset printer queue",
    description: "Invoices stuck in queue since this morning.",
    status: "Done",
    priority: "Low",
    createdAt: "2026-03-05T08:10:00.000Z",
  },
  {
    id: "T-1004",
    title: "CRM login issue",
    description: "User gets a login error after password reset.",
    status: "Open",
    priority: "High",
    createdAt: "2026-03-04T11:45:00.000Z",
  },
  {
    id: "T-1005",
    title: "Update meeting room screen",
    description: "Replace welcome message with new branding.",
    status: "In Progress",
    priority: "Low",
    createdAt: "2026-03-03T16:20:00.000Z",
  },
];
