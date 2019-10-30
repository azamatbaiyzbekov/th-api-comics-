import React, { Component } from 'react';

import './Homepage.css'

class HomePage extends Component {
    state = {
        items: [],
        isLoaded: false,
        showLatestComics: false
    };
    
    componentDidMount() {
        const url = `https://xkcd.now.sh/?comic=latest`
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
    
    toggleComicsHandler = () => {
        const doesShow = this.state.showLatestComics;
        this.setState({showLatestComics: !doesShow})
    };

    render() {
        
        let comics = null;

        const {isLoaded, items} = this.state;
        if(!isLoaded) {
            return <div>Loading....</div>
        }

        if (this.state.showLatestComics) {
            comics = (
                <div className="output">
                    <ul>
                        <li>Month: {items.month}</li>
                        <li>Number: {items.num}</li>
                        <li>Year: {items.year}</li>
                        <li>Safe_title: {items.safe_title}</li>
                        <li>Alt: {items.title}</li>
                        <img src={items.img} />
                        <li>Title: {items.alt}</li>
                    </ul>
                </div>
            )
        };
        
        return (
            <>
            <nav>
                <div class="nav-wrapper blue">
                    <div class="container">
                        <a href="#" class="brand-logo center">Your Favorite Comics</a>
                    </div>
                </div>
            </nav>
            <div className="instructions">
                <h1>Welcome User!</h1>
                    <li>Check out our lates comics by clicking the "Latest Comics" button</li>
                    <li>Click search link to navigate to our search page</li>
                    <li>If it keeps loading make sure to refresh the page</li>
            <br></br>
            </div>
            <div className="homePage">
                <br></br>
                    <button className="latest" onClick={this.toggleComicsHandler}>Lates Comic</button>
                    {comics}
            </div>
            </>
        )
    }
}

export default HomePage;