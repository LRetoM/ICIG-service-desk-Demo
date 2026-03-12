import {
  TICKET_STATUS_FILTERS,
  isTicketStatusFilter,
  type TicketStatusFilter,
} from "../../types/ticket";

type TicketFiltersProps = {
  query: string;
  status: TicketStatusFilter;
  onQueryChange: (value: string) => void;
  onStatusChange: (value: TicketStatusFilter) => void;
  onReset: () => void;
};

export function TicketFilters({
  query,
  status,
  onQueryChange,
  onStatusChange,
  onReset,
}: TicketFiltersProps) {
  const handleStatusChange = (value: string) => {
    if (isTicketStatusFilter(value)) {
      onStatusChange(value);
    }
  };

  return (
    <div className="filters">
      <div className="field">
        <label htmlFor="search">Search</label>
        <input
          id="search"
          type="search"
          placeholder="Search by title or description"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          value={status}
          onChange={(event) => handleStatusChange(event.target.value)}
        >
          {TICKET_STATUS_FILTERS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button className="ghost-button" type="button" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
