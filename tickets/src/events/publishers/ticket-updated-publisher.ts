import { Publisher, Subjects, TicketUpdatedEvent } from "@dqticket/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}

