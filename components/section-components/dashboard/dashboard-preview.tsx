"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shared/ui/card";
import { gaps, typography, components, responsiveSpacing } from "@/constants";
import {
  TrendingUp,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Users,
  BarChart3,
  Eye,
} from "lucide-react";

const STATS = [
  {
    label: "Total Inquiries",
    value: 18,
    change: "+12%",
    trend: "up",
    icon: TrendingUp,
    period: "Last 7 days",
  },
  {
    label: "Events Confirmed",
    value: 6,
    change: "+3",
    trend: "up",
    icon: CheckCircle,
    period: "This month",
  },
  {
    label: "Pending Reviews",
    value: 5,
    change: "-2",
    trend: "down",
    icon: Clock,
    period: "Awaiting response",
  },
  {
    label: "Active Clients",
    value: 24,
    change: "+8%",
    trend: "up",
    icon: Users,
    period: "This quarter",
  },
];

const ROWS = [
  {
    name: "Riya Sharma",
    type: "Wedding",
    date: "2025-11-22",
    status: "pending",
    budget: "₹5,00,000",
    guests: 250,
  },
  {
    name: "Arjun Technologies",
    type: "Corporate Event",
    date: "2025-10-30",
    status: "confirmed",
    budget: "₹2,50,000",
    guests: 150,
  },
  {
    name: "Aisha Khan",
    type: "Birthday Party",
    date: "2025-12-05",
    status: "follow-up",
    budget: "₹75,000",
    guests: 50,
  },
  {
    name: "Mehta Family",
    type: "Anniversary",
    date: "2025-11-15",
    status: "confirmed",
    budget: "₹1,20,000",
    guests: 80,
  },
];

const getStatusBadge = (status: string) => {
  const statusConfig = {
    confirmed: {
      color:
        "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
      icon: CheckCircle,
    },
    pending: {
      color:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
      icon: Clock,
    },
    "follow-up": {
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
      icon: AlertCircle,
    },
  };

  const config =
    statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${config.color}`}
    >
      <Icon className="w-3 h-3" />
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export function DashboardPreview() {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      {/* Remove duplicate header since it's handled in page.tsx */}

      <div className="space-y-8">
        {/* Stats Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${gaps.element.comfortable}`}
        >
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.label}
                className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div
                      className={`flex items-center gap-1 text-xs ${
                        stat.trend === "up"
                          ? "text-green-600 dark:text-green-400"
                          : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      <TrendingUp
                        className={`w-3 h-3 ${
                          stat.trend === "down" ? "rotate-180" : ""
                        }`}
                      />
                      {stat.change}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p
                      className={`${typography.display.sm} ${typography.weight.bold} text-foreground`}
                    >
                      {stat.value}
                    </p>
                    <p
                      className={`${typography.body.sm} font-medium text-foreground/80`}
                    >
                      {stat.label}
                    </p>
                    <p
                      className={`${typography.body.xs} text-muted-foreground`}
                    >
                      {stat.period}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Inquiries Table */}
        <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle
                  className={`${typography.heading.h4} flex items-center gap-2`}
                >
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Recent Inquiries
                </CardTitle>
                <p
                  className={`${typography.body.sm} text-muted-foreground mt-1`}
                >
                  Latest event bookings and status updates
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Eye className="w-4 h-4" />
                Preview Mode
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/30">
                    <th
                      className={`text-left py-3 px-6 ${typography.body.sm} font-semibold text-foreground/80`}
                    >
                      Client
                    </th>
                    <th
                      className={`text-left py-3 px-4 ${typography.body.sm} font-semibold text-foreground/80`}
                    >
                      Event Type
                    </th>
                    <th
                      className={`text-left py-3 px-4 ${typography.body.sm} font-semibold text-foreground/80`}
                    >
                      Date
                    </th>
                    <th
                      className={`text-left py-3 px-4 ${typography.body.sm} font-semibold text-foreground/80`}
                    >
                      Budget
                    </th>
                    <th
                      className={`text-left py-3 px-4 ${typography.body.sm} font-semibold text-foreground/80`}
                    >
                      Guests
                    </th>
                    <th
                      className={`text-left py-3 px-6 ${typography.body.sm} font-semibold text-foreground/80`}
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-border/20 last:border-0 hover:bg-muted/20 transition-colors duration-200"
                    >
                      <td
                        className={`py-4 px-6 ${typography.body.sm} font-medium text-foreground`}
                      >
                        {row.name}
                      </td>
                      <td
                        className={`py-4 px-4 ${typography.body.sm} text-foreground/80`}
                      >
                        {row.type}
                      </td>
                      <td
                        className={`py-4 px-4 ${typography.body.sm} text-foreground/80`}
                      >
                        {new Date(row.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>
                      <td
                        className={`py-4 px-4 ${typography.body.sm} font-medium text-foreground`}
                      >
                        {row.budget}
                      </td>
                      <td
                        className={`py-4 px-4 ${typography.body.sm} text-foreground/80`}
                      >
                        {row.guests}
                      </td>
                      <td className="py-4 px-6">
                        {getStatusBadge(row.status)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4 p-6">
              {ROWS.map((row, i) => (
                <Card
                  key={i}
                  className="bg-background/50 border border-border/30"
                >
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className={`${typography.body.base} font-semibold`}>
                        {row.name}
                      </h4>
                      {getStatusBadge(row.status)}
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Event</p>
                        <p className="font-medium">{row.type}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Date</p>
                        <p className="font-medium">
                          {new Date(row.date).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                          })}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Budget</p>
                        <p className="font-medium">{row.budget}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Guests</p>
                        <p className="font-medium">{row.guests}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
