import React from 'react';
import { List, ListItem, ListItemText, Typography, Divider } from '@mui/material';

function LapList({ laps, formatTime }) {
  return (
    <div>
      <Typography variant="h5" component="h3" gutterBottom>
        Laps
      </Typography>
      <List>
        {laps.map((lap, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText 
                primary={`Lap ${index + 1}`} 
                secondary={formatTime(lap)} 
              />
            </ListItem>
            {index < laps.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default LapList;