import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundimg="model-3.jpg"
        leftbtntext="Custom order"
        rightbtntext="Existing Inventory"
        opacity="0.85"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundimg="model-y.jpg"
        leftbtntext="Custom order"
        rightbtntext="Existing Inventory"
        opacity="0.85"
      />
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundimg="model-s.jpg"
        leftbtntext="Custom order"
        rightbtntext="Existing Inventory"
        opacity="0.85"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundimg="model-x.jpg"
        leftbtntext="Custom order"
        rightbtntext="Existing Inventory"
        opacity="0.85"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundimg="solar-panel.jpg"
        leftbtntext="Order Now"
        rightbtntext="Learn More"
        opacity="0.85"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundimg="solar-roof.jpg"
        leftbtntext="Order Now"
        rightbtntext="Learn More"
        opacity="0.85"
      />
      <Section
        title="Accessories"
        description=""
        backgroundimg="accessories.jpg"
        leftbtntext="Shop Now"
        rightbtntext=""
        opacity="1.5"
        mglf="280px"
      />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
`;
