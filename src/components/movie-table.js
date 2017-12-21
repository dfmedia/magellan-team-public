import React, { Component } from 'react';

class MovieRow extends Component {
    render() {
        const movie = this.props.movie;
        return(
            <tr>
                <td>{movie.Title.trim()}</td>
                <td>{movie.Year}</td>
            </tr>
        )
    }
}

export class MovieTable extends Component {
    render() {
        const movies = this.props.movies;
        const rows = movies
            .sort((a, b) => parseInt(a.Year, 10) - parseInt(b.Year, 10))
            .map(movie => <MovieRow movie={movie} />);
        return(
            <table className="table table-striped">
                <caption>Movies</caption>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}