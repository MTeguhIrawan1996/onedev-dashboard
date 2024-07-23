import { WelcomePage } from '@/components/features';

import { render, screen } from '@/test-utils';

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<WelcomePage />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/',
    );
  });
});
