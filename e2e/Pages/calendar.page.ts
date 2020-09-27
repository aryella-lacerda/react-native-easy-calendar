import { by, element } from 'detox';

class Calendar {
  // To make App's scrollTo command read more naturally
  matcher: ReturnType<typeof by>;

  // Dates used by various calendars to test various functionalities
  jan_01_2020: ReturnType<typeof element>;
  jan_02_2020: ReturnType<typeof element>;
  jan_05_2020: ReturnType<typeof element>;
  jan_12_2020: ReturnType<typeof element>;
  jan_27_2020: ReturnType<typeof element>;
  jan_31_2020: ReturnType<typeof element>;
  feb_01_2020: ReturnType<typeof element>;
  feb_02_2020: ReturnType<typeof element>;
  feb_05_2020: ReturnType<typeof element>;
  feb_10_2020: ReturnType<typeof element>;
  apr_01_2020: ReturnType<typeof element>;
  apr_05_2020: ReturnType<typeof element>;
  apr_10_2020: ReturnType<typeof element>;
  apr_12_2020: ReturnType<typeof element>;
  apr_27_2020: ReturnType<typeof element>;
  apr_30_2020: ReturnType<typeof element>;
  sep_23_2020: ReturnType<typeof element>;
  dec_01_2019: ReturnType<typeof element>;
  dec_05_2019: ReturnType<typeof element>;
  dec_31_2019: ReturnType<typeof element>;

  // Months used by various calendars
  jan_2020: ReturnType<typeof element>;
  feb_2020: ReturnType<typeof element>;
  mar_2020: ReturnType<typeof element>;
  apr_2020: ReturnType<typeof element>;
  may_2020: ReturnType<typeof element>;
  sep_2020: ReturnType<typeof element>;
  dec_2020: ReturnType<typeof element>;

  // Weekdays labels used by locale calendars
  frenchSundayLabel: ReturnType<typeof element>;
  englishSundayLabel: ReturnType<typeof element>;
  spanishSundayLabel: ReturnType<typeof element>;
  frenchFebruaryLabel: ReturnType<typeof element>;
  englishFebruaryLabel: ReturnType<typeof element>;
  spanishFebruaryLabel: ReturnType<typeof element>;

  // Calendar elements
  container: ReturnType<typeof element>;
  leftArrow: ReturnType<typeof element>;
  rightArrow: ReturnType<typeof element>;
  titleText: ReturnType<typeof element>;
  titleButton: ReturnType<typeof element>;
  monthView: ReturnType<typeof element>;
  yearView: ReturnType<typeof element>;

  constructor(testID: string) {
    const calendar = by.id(testID);
    this.matcher = by.id(testID);

    // Elements
    this.container = element(calendar);
    this.leftArrow = element(by.label('left arrow').withAncestor(calendar));
    this.rightArrow = element(by.label('right arrow').withAncestor(calendar));
    this.titleText = element(by.id('title-text').withAncestor(calendar));
    this.titleButton = element(by.id('title').withAncestor(calendar));
    this.monthView = element(by.id('days-container').withAncestor(calendar));
    this.yearView = element(by.id('months-container').withAncestor(calendar));

    // Months
    this.jan_2020 = element(by.label('Jan').withAncestor(calendar));
    this.feb_2020 = element(by.label('Feb').withAncestor(calendar));
    this.mar_2020 = element(by.label('Mar').withAncestor(calendar));
    this.apr_2020 = element(by.label('Apr').withAncestor(calendar));
    this.may_2020 = element(by.label('May').withAncestor(calendar));
    this.sep_2020 = element(by.label('Sep').withAncestor(calendar));
    this.dec_2020 = element(by.label('Dec').withAncestor(calendar));

    // Weekdays
    this.frenchSundayLabel = element(
      by.id('weekday').withAncestor(calendar).and(by.label('dim.'))
    );
    this.englishSundayLabel = element(
      by.id('weekday').withAncestor(calendar).and(by.label('Sun'))
    );
    this.spanishSundayLabel = element(
      by.id('weekday').withAncestor(calendar).and(by.label('dom.'))
    );
    this.frenchFebruaryLabel = element(
      by.id('month-text').withAncestor(calendar).and(by.label('FÉVR.'))
    );
    this.englishFebruaryLabel = element(
      by.id('month-text').withAncestor(calendar).and(by.label('FEB'))
    );
    this.spanishFebruaryLabel = element(
      by.id('month-text').withAncestor(calendar).and(by.label('FEV'))
    );

    // Dates
    this.jan_01_2020 = element(
      by.id('day-container').withAncestor(calendar).and(by.label('January 1, 2020'))
    );
    this.jan_02_2020 = element(
      by.id('day-container').withAncestor(calendar).and(by.label('January 2, 2020'))
    );
    this.jan_05_2020 = element(
      by.id('day-container').withAncestor(calendar).and(by.label('January 5, 2020'))
    );
    this.jan_12_2020 = element(
      by.id('day-container').withAncestor(calendar).and(by.label('January 12, 2020'))
    );
    this.jan_27_2020 = element(
      by.id('day-container').withAncestor(calendar).and(by.label('January 27, 2020'))
    );
    this.jan_31_2020 = element(
      by.id('day-container').withAncestor(calendar).and(by.label('January 31, 2020'))
    );
    this.feb_01_2020 = element(
      by.id('day-container').withAncestor(calendar).and(by.label('February 1, 2020'))
    );
    this.feb_02_2020 = element(
      by.id('day-container').withAncestor(calendar).and(by.label('February 2, 2020'))
    );
    this.feb_05_2020 = element(
      by.id('day-container').withAncestor(calendar).and(by.label('February 5, 2020'))
    );
    this.feb_10_2020 = element(
      by.id('day-container').withAncestor(calendar).and(by.label('February 10, 2020'))
    );
    this.apr_01_2020 = element(
      by.id('day-container').withAncestor(calendar).and(by.label('April 1, 2020'))
    );
    this.apr_05_2020 = element(
      by.id('day-container').withAncestor(calendar).and(by.label('April 5, 2020'))
    );
    this.apr_10_2020 = element(
      by.id('day-container').withAncestor(calendar).and(by.label('April 10, 2020'))
    );
    this.apr_12_2020 = element(
      by.id('day-container').withAncestor(calendar).and(by.label('April 12, 2020'))
    );
    this.apr_27_2020 = element(
      by.id('day-container').withAncestor(calendar).and(by.label('April 27, 2020'))
    );
    this.apr_30_2020 = element(
      by.id('day-container').withAncestor(calendar).and(by.label('April 30, 2020'))
    );
    this.sep_23_2020 = element(
      by.id('day-container').withAncestor(calendar).and(by.label('September 23, 2020'))
    );
    this.dec_01_2019 = element(
      by.id('day-container').withAncestor(calendar).and(by.label('December 1, 2019'))
    );
    this.dec_05_2019 = element(
      by.id('day-container').withAncestor(calendar).and(by.label('December 5, 2019'))
    );
    this.dec_31_2019 = element(
      by.id('day-container').withAncestor(calendar).and(by.label('December 31, 2019'))
    );
  }
}
export default Calendar;
