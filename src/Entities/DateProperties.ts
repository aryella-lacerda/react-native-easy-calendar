export interface DateProperties {
  // Used in period selection calendar
  isPeriod?: boolean; // If a day is isPeriodStart or isPeriodEnd, the day is also isPeriod
  isPeriodStart?: boolean;
  isPeriodEnd?: boolean;
  // Used in date selection calendar
  isSelected?: boolean;
  // Used in both calendars
  isDisabled?: boolean;
}
