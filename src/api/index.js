

const url = 'https://disease.sh/v3/covid-19';

//method to fetch worldwide data 
export const getAllData = async () => {
    try {
        const response = await fetch(`${url}/all`);
        const responseJson = await response.json();
        const reqData = {
            cases : responseJson.cases,
            recovered : responseJson.recovered,
            deaths: responseJson.deaths, 
            updated : responseJson.updated
        }
        return reqData;
    } catch (error) {
        console.log(error);
    }
}

//method to fetch data on country level
export const getCountryData = async (country) => {
    let changedUrl = `${url}/countries/`;
    if(country) changedUrl = `${url}/countries/${country}`;
    try { 
        const response = await fetch(changedUrl);
        const responseJson = await response.json();
        let reqData;
        if(country) {
            reqData = {
                cases : responseJson.cases,
                recovered : responseJson.recovered,
                deaths: responseJson.deaths, 
                updated : responseJson.updated,
                country : responseJson.country,
                countryInfo : responseJson.countryInfo
            }
        } else {
            reqData = responseJson.map((item) => {
                return {
                    cases : item.cases,
                    recovered : item.recovered,
                    deaths : item.deaths,
                    updated : item.updated,
                    country : item.country,
                    countryInfo : item.countryInfo
                }
            })
        }
        return reqData;
    } catch (error) {
        console.log(error);
    }
}


