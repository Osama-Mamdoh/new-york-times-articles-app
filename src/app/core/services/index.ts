import { AuthenticationService } from './authentication.service';
import { NyTimesService } from '@core/services/ny-times.service';

export const services: any[] = [AuthenticationService, NyTimesService];

export * from './authentication.service';
export * from '@core/services/ny-times.service';
