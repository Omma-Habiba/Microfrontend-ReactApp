import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TitleHost from '../host/src/TitleHost'; 

test('renders the host component with a title', () => {
  render(<TitleHost title="Test Host Title" />);
  expect(screen.getByText('Test Host Title')).toBeInTheDocument();
  expect(screen.getByText('This is a unique component for the Host application.')).toBeInTheDocument();
});
