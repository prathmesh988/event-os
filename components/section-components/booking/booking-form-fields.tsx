import { Input } from "@/components/shared/ui/input";
import { Label } from "@/components/shared/ui/label";
import { Textarea } from "@/components/shared/ui/textarea";
import { gaps } from "@/constants";

export function BookingFormFields() {
  return (
    <>
      <div className={`grid ${gaps.element.tight}`}>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required placeholder="Your name" />
      </div>
      <div className={`grid ${gaps.element.tight}`}>
        <Label htmlFor="date">Event Date</Label>
        <Input id="date" name="date" type="date" required />
      </div>
      <div className={`grid ${gaps.element.tight}`}>
        <Label htmlFor="type">Event Type</Label>
        <Input
          id="type"
          name="type"
          required
          placeholder="Wedding, Corporate, Birthday..."
        />
      </div>
      <div className={`grid ${gaps.element.tight}`}>
        <Label htmlFor="budget">Budget Range</Label>
        <Input id="budget" name="budget" placeholder="e.g., $2,000 - $5,000" />
      </div>
      <div className={`grid ${gaps.element.tight} md:col-span-2`}>
        <Label htmlFor="location">Preferred Location</Label>
        <Input
          id="location"
          name="location"
          placeholder="City or venue preferences"
        />
      </div>
      <div className={`grid ${gaps.element.tight} md:col-span-2`}>
        <Label htmlFor="message">Notes</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your event..."
          className="min-h-24"
        />
      </div>
    </>
  );
}
