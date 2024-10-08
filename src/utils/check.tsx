export const check = {
  isTablet(opts?: any) {
    let requestHeader;
    // Nếu không lấy được trên server = lấy UserAgent của Browser
    if (typeof navigator !== "undefined") {
      requestHeader = navigator.userAgent;
    } else {
      requestHeader = opts.req;
    }
    if (
      requestHeader &&
      requestHeader.headers &&
      typeof requestHeader.headers["user-agent"] === "string"
    ) {
      requestHeader = requestHeader.headers["user-agent"];
    }
    if (typeof requestHeader !== "string") return false;
    const isTablet =
      /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i.test(
        requestHeader
      );
    return isTablet;
  },
  isMobile(opts?: any) {
    // Những UserAgent để detect
    const mobileRE =
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;
    const tabletRE =
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i;
    let requestHeader;
    // Nếu không lấy được trên server = lấy UserAgent của Browser
    if (typeof navigator !== "undefined") {
      requestHeader = navigator.userAgent;
    } else {
      requestHeader = opts.req;
    }
    if (
      requestHeader &&
      requestHeader.headers &&
      typeof requestHeader.headers["user-agent"] === "string"
    ) {
      requestHeader = requestHeader.headers["user-agent"];
    }
    if (typeof requestHeader !== "string") return false;
    // let result = opts.tablet
    //   ? tabletRE.test(requestHeader)
    //   : mobileRE.test(requestHeader);
    let result = mobileRE.test(requestHeader);
    if (
      !result &&
      opts?.tablet &&
      opts?.featureDetect &&
      navigator &&
      navigator.maxTouchPoints > 1 &&
      requestHeader.indexOf("Macintosh") !== -1 &&
      requestHeader.indexOf("Safari") !== -1
    ) {
      result = true;
    }
    return result;
  },
};
