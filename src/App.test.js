import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Components/Login';
import App from './App';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

test('Renders Navbar Link', () => {
  render(<Router><Navbar /></Router>);
  const linkElement = screen.getByText(/Supra Schedule/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders Login Link', () => {
  render(<Router><Login /></Router>);
  const linkElement = screen.getByText(/Hi, what's your name?/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders Calendar', () => {
  render(<Router>< /></Router>);
  const linkElement = screen.getByText(/?/i);
  expect(linkElement).toBeInTheDocument();
});