// Booking form utilities
export function formatBookingPayload(formData: FormData) {
  return {
    name: String(formData.get("name") || "").trim(),
    date: String(formData.get("date") || "").trim(),
    type: String(formData.get("type") || "").trim(),
    budget: String(formData.get("budget") || "").trim(),
    location: String(formData.get("location") || "").trim(),
    message: String(formData.get("message") || "").trim(),
  };
}

export function createBookingConfirmationMessage(
  payload: ReturnType<typeof formatBookingPayload>
) {
  return `Thanks ${payload.name}, we've received your inquiry for ${payload.type} on ${payload.date}. Our planner will contact you shortly!`;
}

export function createWhatsAppBookingMessage(
  payload: ReturnType<typeof formatBookingPayload>
) {
  return `Hello! I just submitted a booking inquiry.%0A
Name: ${payload.name}%0A
Type: ${payload.type}%0A
Date: ${payload.date}%0A
Budget: ${payload.budget}%0A
Location: ${payload.location}%0A
Message: ${payload.message}`;
}
