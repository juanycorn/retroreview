import React from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';

const About = () => {
  return (
    <Grid
      textAlign="center"
      style={{ height: '100vh' }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 600 }}>
        <Header as="h2" color="teal" textAlign="center">
          About Us
        </Header>
        <Segment textAlign="left">
          <p>
            Our team consists of Juan Cornejo, Oscar Osorio, Russell Booth, and Connor Ruthven. We are students working together on a school group project aimed at learning collaboration and various technologies used in web development.
          </p>
          <p>
            This project utilizes technologies such as React for the frontend, GraphQL with a Node.js and Express.js server, MongoDB with Mongoose for the database, and it is deployed using Render. We have implemented features like querying, adding, updating, and deleting data using GraphQL mutations. Throughout this project, we have focused on learning and applying best practices in software development, including teamwork, version control, and project management.
          </p>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default About;
