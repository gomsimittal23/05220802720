import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, List, ListItem, ListItemText, Typography } from '@mui/material';

const Trains = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h2" gutterBottom>
        All Trains
      </Typography>
      <List component="nav" aria-label="train list">
        {trains.map(train => (
          <ListItem button key={train.id} component={Link} to={`/trains/${train.id}`}>
            <ListItemText primary={train.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Trains;
