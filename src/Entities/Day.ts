import type { DateProperties } from './DateProperties';

export interface Day {
  properties: DateProperties | null;
  date: string;
}
