//function to retrieve cookie values
const checkCookie = (name) => {
  const splitCookies = document.cookie.split(";")
  return splitCookies
    ?.find((cookie) => cookie.includes(name + "="))
    ?.split("=")?.[1]
    ?.trim()
}
