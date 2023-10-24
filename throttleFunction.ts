function throttle(
    cb: (...args: any[]) => void,delay: number = 1000): (...args: any[]) => void {
    let shouldWait = false;
    let waitingArgs: any[] | null = null;
  
    const timeoutFunc = () => {
      if (waitingArgs === null) {
        shouldWait = false;
      } else {
        cb(...waitingArgs);
        waitingArgs = null;
        setTimeout(timeoutFunc, delay);
      }
    };
  
    return (...args: any[]) => {
      if (shouldWait) {
        waitingArgs = args;
        return;
      }
      cb(...args);
      shouldWait = true;
      setTimeout(timeoutFunc, delay);
    };
  }
  
  function sayhi(){
    console.log('hello!')
  }

  let sayhiTwice = throttle(sayhi)
  sayhiTwice()
  sayhiTwice()
  sayhiTwice()
  sayhiTwice()