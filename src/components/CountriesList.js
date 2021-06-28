import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

class CountriesList extends React.Component {
  state = {
    countries: [...countries],
  };

  render() {
    return (
      <div>
        {this.state.countries.map((country) => {
          return (
            <div className="list-group">
              <Link
                className="list-group-item list-group-item-action "
                to={`${country.cca3}`}
                key={country.cca3}
              >
                {country.flag}&nbsp;&nbsp;&nbsp; {country.name.common}
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CountriesList;
