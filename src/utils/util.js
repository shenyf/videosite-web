export function isIE () {
  const bw = window.navigator.userAgent
  const compare = (s) => bw.indexOf(s) >= 0
  const ie11 = (() => 'ActiveXObject' in window)()
  return compare('MSIE') || ie11
}

export function sleep (ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms)
  })
}
