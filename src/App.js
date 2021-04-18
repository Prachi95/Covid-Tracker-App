import React from 'react';
import { Cards, Chart, Dropdown } from './Components';
import styles from './App.module.css';
import { getAllData, getCountryData } from './api';
import coronaImage from './Images/headerImage.png';

class App extends React.Component {

  state = {
    data : {},
    country : 'Global'
  }

  async componentDidMount() {
    const response = await getAllData();
    this.setState({data : response})
  }

  countryChangeHandler = async (event) => {
    if(event.target.value === 'global') {
      const response = await getAllData();
      this.setState({data : response, country: 'Global'});
    } else {
      const response = await getCountryData(event.target.value);
      const data = {
        cases : response.cases,
        recovered : response.recovered,
        deaths: response.deaths, 
        updated : response.updated
      }
      this.setState({data, country: event.target.value});
    }
  }

  render() {
    const {data, country} = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <img className={styles.image} src={coronaImage} alt="Covid-19"/>
          <Dropdown countryChangeHandler={this.countryChangeHandler}/>
        </div>
        <Cards data={data}/>
        <Chart data={data} country={country}/>     
      </div>
      
    );
  }
  
}

export default App;