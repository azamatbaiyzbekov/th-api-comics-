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

    


    render() {
        return(
            <div>Hi I am search page</div>
        )
    }
}


export default Search;