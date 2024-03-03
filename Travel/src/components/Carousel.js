import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
  {
    title: "Suite",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$200 per night",
    image: suiteImage,
  },
];

const Carousel = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) =>
        prevIndex === cards.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); 
    return () => clearInterval(interval);
  }, [cards]);

  return (
    <CardContainer>
      {cards.map((card, index) => (
        <Card key={index} active={index === currentCardIndex} index={index} currentIndex={currentCardIndex}>
          <CardImage src={card.image} alt={card.title} />
          <CardTitle>{card.title}</CardTitle>
          <CardDescription>{card.description}</CardDescription>
          <Price>{card.price}</Price>
          <BookButton>Book Now</BookButton>
        </Card>
      ))}
    </CardContainer>
  );
};

const BookingS = () => {
  return (
    <Container className="booking-section">
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
  color: #fff;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Card = styled.div`
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
  margin: 1rem;
  transition: transform 0.3s ease;
  transform: ${(props) => props.active ? `translateY(-10px)` : `translateY(0)`} ${(props) => props.index === props.currentIndex ? `scale(1.1)` : `scale(1)`};
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const CardTitle = styled.h3`
  color: #333;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
`;

const Price = styled.p`
  color: #333;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const BookButton = styled.button`
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ff4d4d;
  }
`;

export default BookingS;
