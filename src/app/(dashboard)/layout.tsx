import { AppShellWrapper } from '@/components/layout';

export default function DashboardLy({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppShellWrapper>{children}</AppShellWrapper>;
}
