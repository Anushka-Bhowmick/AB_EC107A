import React from "react";
import styled from "styled-components";

// Sample place data
const samplePlaces = [
  {
    name: "Eiffel Tower",
    description: "Iconic iron tower featuring observation decks.",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Grand Canyon",
    description: "Massive canyon known for its stunning views.",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Machu Picchu",
    description: "Ancient Incan citadel set high in the Andes Mountains.",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Machu Picchu",
    description: "Ancient Incan citadel set high in the Andes Mountains.",
    image: "https://via.placeholder.com/300",
  },
];

// Places you must visit component
const MustVisitPlaces = () => {
  return (
    <Container>
      <Title>Places You Must Visit</Title>
      <CardContainer>
        {samplePlaces.map((place, index) => (
          <Card key={index}>
            <CardDescription>
              <PlaceName>{place.name}</PlaceName>
              <PlaceText>{place.description}</PlaceText>
              <LearnMoreButton>Learn More</LearnMoreButton>
            </CardDescription>
            <CardImage src={place.image} alt={place.name} />
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

// Styled components
const Container = styled.section`
  padding: 2rem;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 45%;
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
`;

const CardDescription = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
`;

const CardImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const PlaceName = styled.h3`
  color: #333;
  margin-bottom: 1rem;
`;

const PlaceText = styled.p`
  color: #666;
  margin-bottom: 1rem;
`;

const LearnMoreButton = styled.button`
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

export default MustVisitPlaces;
