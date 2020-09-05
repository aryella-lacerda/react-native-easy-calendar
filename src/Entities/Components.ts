import type { Props as ArrowProps } from '../Components/Arrow';
import type { Props as TitleProps } from '../Components/Title';
import type { Props as MonthProps } from '../Components/Month';
import type { Props as DayProps } from '../Components/Day';
import type { Props as WeekdaysProps } from '../Components/Weekdays';

export type ArrowComponentType = (props: ArrowProps) => JSX.Element;
export type TitleComponentType = (props: TitleProps) => JSX.Element;
export type MonthComponentType = (props: MonthProps) => JSX.Element;
export type DayComponentType = (props: DayProps) => JSX.Element;
export type WeekdaysComponentType = (props: WeekdaysProps) => JSX.Element;

export type { ArrowProps, TitleProps, MonthProps, DayProps, WeekdaysProps };
