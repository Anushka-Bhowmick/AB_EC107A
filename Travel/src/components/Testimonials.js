import React from "react";
import { MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import styled from "styled-components";

// Styled component for the background container
const BackgroundContainer = styled.div`
  background-image: url(https://mdbcdn.b-cdn.net/img/Photos/Others/background2.webp);
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

// Styled component for the white card container
const CardContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px; // Adjust the max-width as needed
  padding: 2rem;
`;

// Styled component for the circular image frame
const CircularImage = styled.img`
  border-radius: 50%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`;

export default function App() {
  return (
    <BackgroundContainer>
      <CardContainer>
        <MDBContainer fluid>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol md="8" lg="6" xl="4">
              <MDBCard>
                <MDBCardBody className="m-3">
                  <MDBRow className="align-items-center">
                    <MDBCol lg="4" className="d-flex justify-content-center">
                      <CircularImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                        alt="woman avatar"
                        width="150"
                        height="150"
                      />
                    </MDBCol>
                    <MDBCol lg="8">
                      <p className="text-muted fw-light mb-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Id quam sapiente molestiae numquam quas, voluptates
                        omnis nulla ea odio quia similique corrupti magnam.
                      </p>
                      <p className="fw-bold lead mb-2">
                        <strong>Anna Smith</strong>
                      </p>
                      <p className="fw-bold text-muted mb-0">Product manager</p>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </CardContainer>
    </BackgroundContainer>
  );
}
