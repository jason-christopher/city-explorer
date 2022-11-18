import React from 'react';

class Movie extends React.Component {

  render() {

    if(!this.props.isMoviesShown) {
      return <div />
    }

    let MovieDivs = this.props.movies.map(item => {
      return (
        <div className="movieDiv">
          <div className="moviePicDiv">
            <img className="moviePic" src={item.posterImg} alt={item.title + ' image'}/>
          </div>
          <article className="movieArticle">
            <h3>{item.title} ({item.releaseDate})</h3>
            <p>{item.overview}</p>
          </article>
        </div>
      );
    })

    console.log(MovieDivs);

    return (
      <>
        {MovieDivs}
      </>
    )
  }
}

export default Movie;
