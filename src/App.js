import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import ListUserProfiles from "./components/ListUserProfiles";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ListMovieProfiles from "./components/ListMovieProfiles";


/*
 Use React and the data below to display a list of users alongside their favorite movies.
 
 For detailed instructions, refer to instructions.md.
 */

const profiles = [
    {
        id: 1,
        userID: '1',
        favoriteMovieID: '1',
    },
    {
        id: 2,
        userID: '2',
        favoriteMovieID: '3',
    },
    {
        id: 3,
        userID: '4',
        favoriteMovieID: '5',
    },
    {
        id: 4,
        userID: '5',
        favoriteMovieID: '2',
    },
    {
        id: 5,
        userID: '3',
        favoriteMovieID: '5',
    },
    {
        id: 6,
        userID: '6',
        favoriteMovieID: '4',
    },
];

const users = {
    1: {
        id: 1,
        name: 'Jane Cruz',
        userName: 'coder',
    },
    2: {
        id: 2,
        name: 'Matthew Johnson',
        userName: 'mpage',
    },
    3: {
        id: 3,
        name: 'Autumn Green',
        userName: 'user123',
    },
    4: {
        id: 4,
        name: 'John Doe',
        userName: 'user173',
    },
    5: {
        id: 5,
        name: 'Lauren Carlson',
        userName: 'user155',
    },
    6: {
        id: 6,
        name: 'Nicholas Lain',
        userName: 'user144',
    },
};

const movies = {
    1: {
        id: 1,
        name: 'Planet Earth 1',
    },
    2: {
        id: 2,
        name: 'Selma',
    },
    3: {
        id: 3,
        name: 'Million Dollar Baby',
    },
    4: {
        id: 4,
        name: 'Forrest Gump',
    },
    5: {
        id: 5,
        name: 'Get Out',
    },
};

class App extends Component {
    constructor(props) {
        super(props);
        this.usersByMovie = {};
        
        profiles.forEach(profile => {
            const movieID = profile.favoriteMovieID;
            
            if (this.usersByMovie[movieID]) {
                this.usersByMovie[movieID].push(profile.userID);
            } else {
                this.usersByMovie[movieID] = [profile.userID];
            }
        });
    }
    
    render() {
        return (
            <div className='main'>
                <div className='row'>
                    <div className='col-12 col'>
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h1 className="App-title">ReactND - Coding Practice</h1>
                        </header>
                    </div>
                </div>
                <div className='container'>
                    <div className='row mt-3 mb-3'>
                        <div className='col-12 col'>
                            <Tabs className='brk-tabs brk-tabs-parallax'>
                                <TabList className='brk-tabs-nav'>
                                    <Tab className='brk-tab'>User Profiles</Tab>
                                    <Tab className='brk-tab'>Favorite Movies</Tab>
                                </TabList>
                                <TabPanel className='brk-tab-item'>
                                    <ListUserProfiles profiles={profiles} users={users} movies={movies} usersByMovie={this.usersByMovie}/>
                                </TabPanel>
                                <TabPanel className='brk-tab-item'>
                                    <ListMovieProfiles profiles={profiles} users={users} movies={movies} usersByMovie={this.usersByMovie}/>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                
                </div>
            </div>
        );
    }
}

export default App;
