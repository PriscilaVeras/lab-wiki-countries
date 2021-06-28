import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

class CountryDetails extends React.Component {
  state = {
    name: '',
    capital: '',
    area: 0,
    borders: [],
    cca3: '',
  };

  searchCountry = () => {
    if (!this.state.name) {
      const countryFind = countries.find((country) => {
        return country.cca3 === this.props.match.params.cca3;
      });

      if (countryFind) {
        this.setState({ ...countryFind });
      }
    }
  };

  render() {
    console.log(this.props.match.params.cca3);
    this.searchCountry();

    return (
      <div className="table">
        <table
          className="col-5
         "
        >
          <thead></thead>
          <tbody>
            <tr>
              <td key={this.state.country}>
                <h1>{this.state.name.common} </h1>
              </td>

              <td style={{ width: '30%' }}>Capital {this.state.capital} </td>
            </tr>
            <tr>
              <td>Area: {this.state.area} </td>
              <td>
                kms<sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders: </td>
              <td>
                <ul>
                  {this.state.borders.map((border) => {
                    return (
                      <li key={border.cca3}>
                        <Link to={`/${this.state.cca3}`}>{border} </Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetails;
