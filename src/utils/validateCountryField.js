const { fetchCountryCodes } = require('../services/addressService');

const validateCountryField = async (countryCode) => {
  try {
    const countryData = await fetchCountryCodes(countryCode);
    return !!countryData;
  } catch (error) {
    throw new Error(`Invalid country code: ${countryCode}`); 
  }
};

module.exports = { validateCountryField };
