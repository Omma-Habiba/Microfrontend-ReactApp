import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TitleRemote from '../remote/src/TitleRemote'; 

test('renders the remote component with a title', () => {
  render(<TitleRemote title="Test Remote Title" />);
  expect(screen.getByText('Test Remote Title')).toBeInTheDocument();
  expect(screen.getByText('This is a unique component for the Remote application.')).toBeInTheDocument();
});
