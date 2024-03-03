import React from "react";
import styled from "styled-components";
import mapImage from "../assets/japan.png"; // Assuming you have a map image in your assets folder
import { FaMapMarkerAlt } from 'react-icons/fa';

const Book = () => {
  return (
    <BookingSection>
      <BookingContainer>
        <BookingContent>
          <BookingForm>
            <FormGroup>
              <FormLabel>Destination</FormLabel>
              <FormInput type="text" placeholder="Enter destination" />
              <FormIcon>
                <FaMapMarkerAlt />
              </FormIcon>
            </FormGroup>
            <FormGroup>
              <FormLabel>Check-in</FormLabel>
              <FormInput type="date" />
            </FormGroup>
            <FormGroup>
              <FormLabel>Check-out</FormLabel>
              <FormInput type="date" />
            </FormGroup>
            <FormGroup>
              <FormButton>Search</FormButton>
            </FormGroup>
          </BookingForm>
        </BookingContent>
        <MapContainer>
          <MapImage src="https://www.conceptdraw.com/How-To-Guide/picture/Conference-centre--location-map.png" alt="Map" />
        </MapContainer>
      </BookingContainer>
    </BookingSection>
  );
};

const BookingSection = styled.section`
  background-color: #f9f9f9;
  padding: 4rem 0;
`;

const BookingContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BookingContent = styled.div`
  flex: 1;
  padding: 0 2rem;
`;

const BookingForm = styled.form`
  background-color: #fff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
`;

const FormButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const MapContainer = styled.div`
  flex: 1;
  height: 400px;
`;

const MapImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export default Book;
