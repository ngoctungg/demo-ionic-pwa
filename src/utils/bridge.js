/* eslint-disable */
export default {
  callNative(data, fnName) {
    //android
    console.log(data);
    if (typeof Android !== "undefined" && Android !== null) {
      switch (fnName) {
        case "nvShowToast":
            Android.nvShowToast(JSON.stringify(data));
          break;
        case "sum":
            Android.sum(JSON.stringify(data));
          break;
      }
    } else {
      alert("Not viewing in webview");
    }
  },
};
