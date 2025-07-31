// import { PayrollDashboard } from "@/components/payroll-dashboard";
import PayrollDashboard from "./payroll";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <PayrollDashboard />
    </main>
  );
}