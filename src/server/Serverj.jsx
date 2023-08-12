import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card,Rating,Button,List, Icon,Label } from 'semantic-ui-react'

function Serverj() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const unsplashAccessKey = 'A5L9KcgzR9Vnv8gZbFPZ52Iwk5tx8f8mPFTPbGG1Ur8';

    axios.get(`https://api.unsplash.com/photos?client_id=${unsplashAccessKey}`)
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  }, []);

  return (
    <div>
      <h1>Unsplash Photos</h1>
      <Card.Group itemsPerRow={3}>
        {photos.map(photo => (
          <Card key={photo.id}>
            <img src={photo.urls.small} alt={photo.alt_description} />
            <List horizontal>
              <Button primary>Like</Button>
            <Rating className="rating" icon='heart' defaultRating={0} maxRating={1} size='massive' />
            </List>
          </Card>
        ))}
        
      </Card.Group>
)
    </div>
  );
}

export default Serverj;
