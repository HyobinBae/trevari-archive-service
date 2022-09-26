export const postMessage = (channel: string, message: string) => {
  (function () {
    if (
      // eslint-disable-next-line
      (window as any)[channel] &&
      // eslint-disable-next-line
      (window as any)[channel].postMessage
      ) {
        // eslint-disable-next-line
        (window as any)[channel].postMessage(message);
      }
    })();
  }