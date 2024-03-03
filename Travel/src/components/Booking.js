import React from "react";
import styled from "styled-components";

import Carousel from "./Carousel"; // Import the Carousel component

import standardRoomImage from "../assets/japan.png";
import deluxeRoomImage from "../assets/cuba.png";
import suiteImage from "../assets/paris.png";

const sampleCards = [
  {
    title: "Standard Room",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$100 per night",
    image: standardRoomImage,
  },
  {
    title: "Deluxe Room",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$150 per night",
    image: deluxeRoomImage,
  },
  {
    title: "Suite",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$200 per night",
    image: suiteImage,
  },
];

const BookingSection = () => {
  return (
    <Container>
      <Title>Book Your Stay</Title>
      <Carousel cards={sampleCards} />
    </Container>
  );
};

const Container = styled.section`
  padding: 2rem;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

export default BookingSection;
