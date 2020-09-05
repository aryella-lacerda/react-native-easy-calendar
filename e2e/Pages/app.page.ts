import { by, element } from 'detox';

class App {
  scrollView: ReturnType<typeof element>;
  scrollDownTo: (calendar: ReturnType<typeof by>) => void;
  scrollUpTo: (calendar: ReturnType<typeof by>) => void;

  constructor() {
    this.scrollView = element(by.id('scroll-view'));

    this.scrollDownTo = async (calendar) => {
      await waitFor(element(calendar))
        .toBeVisible()
        .whileElement(by.id('scroll-view'))
        .scroll(400, 'down');
    };

    this.scrollUpTo = async (calendar) => {
      await waitFor(element(calendar))
        .toBeVisible()
        .whileElement(by.id('scroll-view'))
        .scroll(400, 'up');
    };
  }
}
export default App;
