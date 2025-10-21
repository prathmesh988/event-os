export function whatsappUrl(message: string) {
  const number =
    (typeof process !== "undefined" && process.env && (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER as string)) ||
    "1234567890"
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${number}?text=${encoded}`
}
