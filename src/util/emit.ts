import mitt, { Emitter } from 'mitt';
export const emitter: Emitter<EventBus.Event> = mitt<EventBus.Event>()