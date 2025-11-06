import { Button } from "@/components/shared/ui/button";
import { booking } from "@/constants";

interface BookingSubmitButtonProps {
  loading: boolean;
}

export function BookingSubmitButton({ loading }: BookingSubmitButtonProps) {
  return (
    <div className="md:col-span-2">
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-primary-foreground hover:opacity-90"
        aria-busy={loading}
      >
        {loading ? booking.form.submit.loading : booking.form.submit.text}
      </Button>
    </div>
  );
}
