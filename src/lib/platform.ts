export function isApplePlatform(): boolean {
  if (typeof navigator === 'undefined') return false

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
  const isIPadOS = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1
  const isMac = /Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints <= 1

  return isIOS || isIPadOS || isMac
}
