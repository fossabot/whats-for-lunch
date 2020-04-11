import React from 'react'
import { submitFormAsJson } from './App';
import { MdMyLocation } from 'react-icons/md'
import { getLocationAndCenterMap } from './Map';

class Search extends React.Component {

  submitForm(event) {
    event.preventDefault();
    submitFormAsJson(event.target);
  }

  render() {
    return [
      <form key="manual-location" className="search-form flex" method="POST" action="location" onSubmit={this.submitForm}>
        <div>
          <input className="location-add" placeholder="Add restaurant manually" type="search" name="name" />
        </div>
        <div>
          <button className="location-add-button" title="Add">Add</button>
        </div>
      </form>,
      <div key="google-location" className="search-form flex">
        <div>
          <input className="location-search" placeholder="Search for restaurant or food type" type="search" />
        </div>
        <div>
          <button className="location-search-button" title="Search">Search</button>
          <button className="location-search-button" title="Center Map" onClick={getLocationAndCenterMap}><MdMyLocation /></button>
        </div>
      </div>,
    ]
  }
}

export default Search;