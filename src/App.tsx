import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import HeroImage from './components/Hero/Heroimage';
import BookingForm from './components/BookingForm/Booking'; 
import Testimonials from './components/Testimonials/Testimonials';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

const HomePage: React.FC = () => {
  return (
    <>
      <HeroImage />
      <BookingForm />
      <Testimonials />
    </>
  );
};

export default App;
