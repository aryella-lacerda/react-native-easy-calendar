import { by, element } from 'detox';

class Wrapper {
  self: ReturnType<typeof element>;
  selectedDate: ReturnType<typeof element>;
  actionButton: (buttonTestID: string) => ReturnType<typeof element>;

  constructor(testID: string) {
    const wrapper = by.id(testID);

    this.self = element(wrapper);
    this.selectedDate = element(by.id('selected-date').withAncestor(wrapper));
    this.actionButton = (buttonTestID) =>
      element(by.id(buttonTestID).withAncestor(wrapper));
  }
}

export default Wrapper;
