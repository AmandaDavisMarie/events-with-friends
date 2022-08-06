import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

export function Post({event}) {

    return (
        <div>
          <Card>
            <CardImg top width="100%" src="https://www.thesun.co.uk/sport/10222559/watch-nba-hart-hilarious-reaction-harden-hit-face/#" alt="Card image cap" />
            <CardBody>
              <CardTitle>{event.eventName}</CardTitle>
              <CardText>{event.eventTime} {event.eventDate}</CardText>
            </CardBody>
          </Card>
        </div>
      );

};

export default Post;