import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FormComponent } from './form';
import userEvent from '@testing-library/user-event';

describe('form.test', () => {
  it('Username must be at least 2 characters', async () => {
    const user = userEvent.setup();
    const container = render(<FormComponent />);

    const submitButton = container.getByRole('button');
    await user.click(submitButton);
    expect(container.getByText('Username must be at least 2 characters.')).toBeInTheDocument();
  });
});
