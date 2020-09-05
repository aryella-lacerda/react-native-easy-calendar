import { by, element } from 'detox';

class Wrapper {
  selectedDate: ReturnType<typeof element>;
  actionButton: (buttonTestID: string) => ReturnType<typeof element>;

  constructor(testID: string) {
    const wrapper = by.id(testID);
    this.selectedDate = element(by.id('selected-date').withAncestor(wrapper));
    this.actionButton = (buttonTestID) =>
      element(by.id(buttonTestID).withAncestor(wrapper));
  }
}

export default Wrapper;
