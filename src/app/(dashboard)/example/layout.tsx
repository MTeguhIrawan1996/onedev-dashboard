import { ControlPanel } from '@/components/ui/templates';
import { DashboardWrapper, InnerWrapper } from '@/components/ui/wrapper';

export default function ExampleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <InnerWrapper title='Exampel App'>
      <DashboardWrapper
        renderItem={<ControlPanel />}
        paperProps={{
          py: 'xl',
        }}
      >
        {children}
      </DashboardWrapper>
    </InnerWrapper>
  );
}