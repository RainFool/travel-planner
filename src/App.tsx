import React from 'react';
import TravelHeader from './components/TravelHeader';
import TravelOverview from './components/TravelOverview';
import PreTripPlanning from './components/PreTripPlanning';
import PackingList from './components/PackingList';
import TravelNotes from './components/TravelNotes';
import Itinerary from './components/Itinerary';
import './App.css';

function App() {
  return (
    <div className="app">
      <TravelHeader />
      <div className="app-content">
        <TravelOverview />
        <PreTripPlanning />
        <PackingList />
        <TravelNotes />
        <Itinerary />
      </div>
    </div>
  );
}

export default App;
