class Calculator {
  constructor() {
    this.countingSeq = [];
    this.countingResult = 0;
    this.currentType = false; // false: sign, true: number
  }

  get countingSeq() {
    return this.countingSeq;
  }

  get countingResult() {
    return this.countingResult;
  }

  isEqualToCurrentType(component) {
    let inputType = false;
    if (component !== '+' || component !== '-' || component !== '×' || component !== '÷') {
      inputType = true;
    } else {
      inputType = false;
    }
    return (inputType === this.currentType);
  }

  append(component) {
    this.countingSeq.unshift(component);
  }

  delete() {
    let removedComponent = this.countingSeq.shift();
  }

  clearAll() {
    this.countingSeq.slice(0, this.countingSeq.length);
    this.countingResult = 0;
  }

  calculateResult() {
    if (this.countingSeq.length !== 0) {
      let firstComponent = this.countingSeq[0];
      if (component !== '+' || component !== '-' || component !== '×' || component !== '÷') {
        this.countingSeq.shift()
      } else { /* do nothing */ }
      let tempResult = 0;
      while (this.countingSeq.length !== 0) {
        let lastNumber = this.countingSeq.pop();
        let lastSign = this.countingSeq.pop();
        switch (lastSign) {
          case '+':
            tempResult += parseInt(lastNumber);
            break;
          case '-':
            tempResult -= parseInt(lastNumber);
            break;
          case '×':
            tempResult *= parseInt(lastNumber);
            break;
          case '÷':
            tempResult /= parseInt(lastNumber);
            break;
        }
      }
      this.countingResult = tempResult;
    } else {
      this.countingResult = 0;
    }
  }
}