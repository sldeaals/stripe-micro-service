const fetch = require('node-fetch');

async function fetchCountryCodes(countryCode) {
  try {
    let url = 'https://restcountries.com/v3.1/';
    if (countryCode) {
      url += `alpha/${countryCode}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch country information: ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to validate country code: ${error.message}`);
  }
}

module.exports = { fetchCountryCodes };
