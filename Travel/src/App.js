import React from "react";
import Home from "./components/Home";
import MustVisitPlaces from "./components/Exclusive";
import Book from "./components/Book";
import Navbar from "./components/Navbar";
import BookingS from "./components/Carousel";
import { Testimonials } from "./components/Testimonials";
export default function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <MustVisitPlaces/>
      <Book/>
      <BookingS/>
      <Testimonials/>
      
    </div>
  );
}