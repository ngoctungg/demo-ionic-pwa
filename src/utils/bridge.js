/* eslint-disable */
export default {
  callNative(data) {
    //android
    console.log(data);
    if (typeof Android !== "undefined" && Android !== null) {
        Android.nvShowToast(data);
    } else {
      alert("Not viewing in webview");
    }
  },
};
