import { Input } from "@/components/shared/ui/input";
import { Label } from "@/components/shared/ui/label";
import { Textarea } from "@/components/shared/ui/textarea";
import { gaps, booking } from "@/constants";

export function BookingFormFields() {
  return (
    <>
      <div className={`grid ${gaps.element.tight}`}>
        <Label htmlFor="name">{booking.form.fields.name.label}</Label>
        <Input
          id="name"
          name="name"
          required
          placeholder={booking.form.fields.name.placeholder}
        />
      </div>
      <div className={`grid ${gaps.element.tight}`}>
        <Label htmlFor="date">{booking.form.fields.date.label}</Label>
        <Input id="date" name="date" type="date" required />
      </div>
      <div className={`grid ${gaps.element.tight}`}>
        <Label htmlFor="type">{booking.form.fields.type.label}</Label>
        <Input
          id="type"
          name="type"
          required
          placeholder={booking.form.fields.type.placeholder}
        />
      </div>
      <div className={`grid ${gaps.element.tight}`}>
        <Label htmlFor="budget">{booking.form.fields.budget.label}</Label>
        <Input
          id="budget"
          name="budget"
          placeholder={booking.form.fields.budget.placeholder}
        />
      </div>
      <div className={`grid ${gaps.element.tight} md:col-span-2`}>
        <Label htmlFor="location">{booking.form.fields.location.label}</Label>
        <Input
          id="location"
          name="location"
          placeholder={booking.form.fields.location.placeholder}
        />
      </div>
      <div className={`grid ${gaps.element.tight} md:col-span-2`}>
        <Label htmlFor="message">{booking.form.fields.message.label}</Label>
        <Textarea
          id="message"
          name="message"
          placeholder={booking.form.fields.message.placeholder}
          className="min-h-24"
        />
      </div>
    </>
  );
}
