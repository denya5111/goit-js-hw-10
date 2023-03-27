import './css/styles.css';
import { debounce } from 'debounce';
import Notiflix, { Notify } from 'notiflix';
import { fetchCountries } from './fetchCountries';
import {
  oneCountryCreateMarkup,
  manyCountriesCreateMarkup,
} from './createMarkup';

const DEBOUNCE_DELAY = 300;

const searchInput = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');

searchInput.addEventListener('input', debounce(handleInput, DEBOUNCE_DELAY));

function handleInput() {
  countryList.innerHTML = '';
  if (searchInput.value.trim() !== '') {
    fetchCountries(searchInput.value.trim())
      .then(data => {
        if (data.length === 1) {
          data.forEach(({ name, flags, capital, population, languages }) => {
            const markup = oneCountryCreateMarkup(
              name,
              flags,
              capital,
              population,
              languages
            );
            countryList.insertAdjacentHTML('beforeend', markup);
          });
        } else if (data.length > 1 && data.length <= 10) {
          data.forEach(({ name, flags }) => {
            const markup = manyCountriesCreateMarkup(name, flags);

            countryList.insertAdjacentHTML('beforeend', markup);
          });
        } else {
          Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        }
      })
      .catch();
  }
}
