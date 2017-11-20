# Hello.  Thank you for the opportunity to take this test.

The app was built with the MERN stack.  Star wars is pretty rad.  

## After cloning repository:

### To start the app run:
% npm i && npm run start-dev
  
This will start the client side and the server side

### GET endpoints:
#### http://localhost:3001/api/movies

### POST endpoints:
#### http://localhost:3001/api/movies
The body of a post request should be in the following format:
```javascript
{  
  "Title": "The title of your movie",  
  "Year": "The year the movie was released",
  "imdbID": "This can be found at by looking up the movie on imdb.com",
  "Type": "movie",
  "Poster": "This should be an image url"
}
```
