import React from "react"
import '../App.css'

const STATUS_FETCHING = "fetching"
const STATUS_FETCHED = "fetched"
const API_KEY = 'c50f46cf-8ed0-402c-a5be-d41c7f559deb'


class GetCats extends React.Component {
    state = {
        images: [],
        loadingState: STATUS_FETCHING,
        page: 0,
        limit: 17
    };
    
    componentDidMount() {
        this.getRandomCat()
    }
    
    loadMore = () => {
    this.setState(
        s => ({
            page: s.page + 1
        }),
        () => {
            fetch(
                `https://api.thecatapi.com/v1/images/search?limit=${
                    this.state.limit
                }&page=${this.state.page}`,
                {
                    headers: {
              "Content-Type": "application/json",
              "x-api-key": API_KEY
            }
        }
        )
        .then(data => data.json())
        .then(data => {
            this.setState({
                images: [
                    ...this.state.images,
                    ...data.map(e => ({ id: e.id, url: e.url }))
              ]
            });
        });
    }
    );
};

  getRandomCat = () => {
    this.setState({
      loadingState: STATUS_FETCHING
    });
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=${
        this.state.limit
      }&page=${this.state.page}`,
      {
        headers: {
            "Content-Type": "application/json",
          "x-api-key": API_KEY
        }
      }
    )
      .then(data => data.json())
      .then(data => {
        this.setState({
          images: data.map(e => ({ id: e.id, url: e.url })),
          loadingState: STATUS_FETCHED
        })
      })
  }

  render() {
    return (
        <div className="gallery">
        {this.state.loadingState !== STATUS_FETCHED && (
          <div className="loader">Cats incoming...</div>
          )}
        {this.state.loadingState !== STATUS_FETCHING &&
          this.state.images.length > 0 &&
          this.state.images.map(image => (
            <div className="card" key={image.id}>
                <a href={image.url} rel="noreferrer" target="_blank">
              <img src={image.url} alt="Cat"  />

                </a>
             { console.log(this.state.images)}
            </div>
          ))}
        {this.state.loadingState === STATUS_FETCHED && (
          <button onClick={this.loadMore}>Show more</button>
          )}
      </div>
    )
  }
}

    export default GetCats