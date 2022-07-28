import { CookiesService } from './cookies.service';
import { ErrorService } from './error.service';
import { LoggingService } from './logging.service';
import { NotificationService } from './notification.service';
import { ConnectionService } from './connection.service';

export const services: any[] = [
  CookiesService,
  ErrorService,
  LoggingService,
  NotificationService,
  ConnectionService,
];

export * from './cookies.service';
export * from './error.service';
export * from './logging.service';
export * from './notification.service';
export * from './connection.service';
