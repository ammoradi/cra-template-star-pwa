const phoneNumberRegex: RegExp = /^0?9\d{9}$/

export const isPhoneValid = (phoneNumber: string) =>
  phoneNumberRegex.test(phoneNumber)

export const zeroPad = (num: number, places: number): string =>
  String(num).padStart(places, '0')

export const isAsync = (func: (...rest: any) => any): boolean => {
  const string = func.toString().trim()

  return !!(string.match(/^async /) || string.match(/return _ref[^.]*\.apply/))
}
