import { Publisher, Subjects, TicketCreatedEvent } from "@dqticket/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}

