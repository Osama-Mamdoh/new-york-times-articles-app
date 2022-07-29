import { CookiesService } from './cookies.service';
import { ErrorService } from './error.service';
import { LoggingService } from './logging.service';
import { NotificationService } from './notification.service';
import { ApiGatewayService } from './api-getaway.service';

export const utlis: any[] = [
  CookiesService,
  ErrorService,
  LoggingService,
  NotificationService,
  ApiGatewayService,
];

export * from './cookies.service';
export * from './error.service';
export * from './logging.service';
export * from './notification.service';
export * from './api-getaway.service';
