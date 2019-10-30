import React, { Component } from 'react';

class Search extends Component {
    state = {
        items: [],
        isLoaded: false,
        query: Number,
        randomNum: Number,
    };
    
    componentDidMount() {
        const num = Math.floor(Math.random() * 2221)
        const url = `https://xkcd.now.sh/?comic=${num}`
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
         .then(res => res.json())
         .then(json => {
             this.setState({
                 isLoaded: true,
                 items: json
             })
         });
    };

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    };

    handleClick = (e) => {
        e.prevent.default();
        this.setState({
            randomNum: Math.floor(Math.random() * 10)
        })
    };


    render() {
        const {isLoaded, items, query } = this.state;
        if(!isLoaded) {
            return <div>Loading....</div>
        }

        else {
            
            return(
                <div>
                <form onSubmit={this.handleClick} >
                  <li>Due to technical issues out search bar is not working properly</li>
                  <li>Please click to Search/Random button to get random comics</li>
                  <li>Click Home button to go back to home page</li>
                <input
                    className="searchInput"
                    type="number"
                    placeholder="Search for..."
                    ref={query => this.search = query}
                    onChange={this.handleInputChange}
                />
                <button className='searchSubmit' type="submit">Search/Random</button>
                
                <p>{this.state.query}</p>
                </form>
                <ul>
                  <li>Month: {items.month}</li>
                  <li>Number: {items.num}</li>
                  <li>Year: {items.year}</li>
                  <li>Safe_title: {items.safe_title}</li>
                  <li>Alt: {items.title}</li>
                  <img className='searchImage' src={items.img}/>
                  <li>Title: {items.alt}</li>
                </ul>
            </div>
            )

        }
    }
}


export default Search;