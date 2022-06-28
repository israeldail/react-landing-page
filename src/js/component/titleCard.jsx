import React from "react";
import {Card,Button} from 'react-bootstrap'

export const TitleCard = () => {
  return (
    <div id="titleCardDiv">
      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title className="fs-1">A Warm Welcome</Card.Title>
          <Card.Text className="fs-3 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur veniam ipsa sit? Eos, molestiae. Similique vel est nisi voluptates, exercitationem dolores porro esse debitis veniam hic ipsam consequuntur? Sunt, eaque.

          </Card.Text>
          <Button className="mt-2 fs-2" variant="dark">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
