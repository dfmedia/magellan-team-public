import React from 'react';
import MovieList from '../components/MovieList';

class MovieContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/movies.json')
            .then(response => {
                return response.json();
            }).then(data => {

                let movies = data.Search;

                // Sort year newest to oldest
                movies.sort((a, b) => {
                    if (a.Year > b.Year) {
                        return -1;
                    }
                    if (a.Year < b.Year) {
                        return 1;
                    }
                    return 0;
                });

                this.setState({
                    movies: movies
                });
            }
        );
    }

    render() {
        return <MovieList movies={this.state.movies}/>;
    }
}

export default MovieContainer;
