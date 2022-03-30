/* eslint-disable */
export default {
  callNative(data) {
    //android
    if (typeof Android !== "undefined" && Android !== null) {
        Android.nvShowToast(data);
    } else {
      alert("Not viewing in webview");
    }
  },
};
