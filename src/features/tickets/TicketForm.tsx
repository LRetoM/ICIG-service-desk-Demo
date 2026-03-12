import { useState} from "react";
import {
  DEFAULT_TICKET_PRIORITY,
  TICKET_PRIORITIES,
  isTicketPriority,
  type TicketInput,
  type TicketPriority,
} from "../../types/ticket";

type TicketFormProps = {
  onSubmit: (input: TicketInput) => Promise<void>;
};

export function TicketForm({ onSubmit }: TicketFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<TicketPriority>(DEFAULT_TICKET_PRIORITY);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handlePriorityChange = (value: string) => {
    if (isTicketPriority(value)) {
      setPriority(value);
    }
  };

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title.trim()) {
      setFormError("Title is required.");
      return;
    }

    setSubmitting(true);
    setFormError(null);
    try {
      await onSubmit({ title, description, priority });
      setTitle("");
      setDescription("");
      setPriority(DEFAULT_TICKET_PRIORITY);
    } catch {
      setFormError("Could not create ticket.");
    } finally{ 
      setSubmitting(false);
    }
  };

  return (
    <form className="ticket-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Short summary"
            required
            aria-invalid={formError ? "true" : "false"}
            aria-describedby={formError ? "ticket-form-error" : undefined}
          />
        </div>
        <div className="field">
          <label htmlFor="priority">Priority</label>
          <select id="priority" value={priority} onChange={(event) => handlePriorityChange(event.target.value)}>
            {TICKET_PRIORITIES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          rows={3}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Short explanation of the request"
        />
      </div>
      {formError ? (
        <p className="form-error" id="ticket-form-error" role="alert">
          {formError}
        </p>
      ) : null}
      <button className="primary-button" type="submit" disabled={submitting}>
        {submitting ? "Saving..." : "Create ticket"}
      </button>
    </form>
  );
}
