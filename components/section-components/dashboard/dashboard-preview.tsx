"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shared/ui/card";

const STATS = [
  { label: "Inquiries (7d)", value: 18 },
  { label: "Confirmed", value: 6 },
  { label: "Pending", value: 5 },
];

const ROWS = [
  { name: "Riya", type: "Wedding", date: "2025-11-22", status: "Pending" },
  { name: "Arjun", type: "Corporate", date: "2025-10-30", status: "Confirmed" },
  { name: "Aisha", type: "Birthday", date: "2025-12-05", status: "Follow-up" },
];

export function DashboardPreview() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Mini Dashboard (Preview)</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {STATS.map((s) => (
          <Card key={s.label}>
            <CardHeader>
              <CardTitle className="text-base">{s.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold">{s.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6 overflow-x-auto">
        <CardHeader>
          <CardTitle className="text-base">Recent Inquiries</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b border-border">
                <th className="py-2 pr-4">Name</th>
                <th className="py-2 pr-4">Type</th>
                <th className="py-2 pr-4">Date</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, i) => (
                <tr key={i} className="border-b border-border last:border-0">
                  <td className="py-2 pr-4">{r.name}</td>
                  <td className="py-2 pr-4">{r.type}</td>
                  <td className="py-2 pr-4">{r.date}</td>
                  <td className="py-2">{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
