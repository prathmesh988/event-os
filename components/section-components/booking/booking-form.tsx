"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader } from "@/components/shared/ui/card";
import { whatsappUrl } from "@/lib/whatsapp";
import {
  formatBookingPayload,
  createBookingConfirmationMessage,
  createWhatsAppBookingMessage,
} from "@/utils/booking/form-utils";
import { BookingSectionHeader } from "./booking-section-header";
import { BookingFormFields } from "./booking-form-fields";
import { BookingSubmitButton } from "./booking-submit-button";
import { gaps } from "@/constants";

export function BookingForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  async function onSubmit(formData: FormData) {
    const payload = formatBookingPayload(formData);
    const confirmationMessage = createBookingConfirmationMessage(payload);

    try {
      setLoading(true);
      await fetch("/api/inquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      toast({
        title: "Inquiry sent",
        description: confirmationMessage,
      });

      const waText = createWhatsAppBookingMessage(payload);

      // Open WhatsApp in a new tab with prefilled details
      window.open(whatsappUrl(waText), "_blank", "noopener,noreferrer");
    } catch (_e) {
      toast({
        title: "Something went wrong",
        description: "Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <BookingSectionHeader />
      </CardHeader>
      <CardContent>
        <form
          action={onSubmit}
          className={`grid ${gaps.element.comfortable} md:grid-cols-2`}
          aria-label="Booking form"
        >
          <BookingFormFields />
          <BookingSubmitButton loading={loading} />
        </form>
      </CardContent>
    </Card>
  );
}
