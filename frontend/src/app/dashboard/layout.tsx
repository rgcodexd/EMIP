import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', width: '100%', minHeight: 'calc(100vh - 72px)' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '2rem 5%', overflowY: 'auto' }}>
        {children}
      </div>
    </div>
  );
}
