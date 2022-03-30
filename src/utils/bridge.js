export default {
  callNative(data) {
    //android
    const Android = window.Android;
    if (typeof Android !== "undefined" && Android !== null) {
        Android.nvShowToast(data);
    } else {
      alert("Not viewing in webview");
    }
  },
};