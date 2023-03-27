import './css/styles.css';
import { debounce } from 'debounce';
import Notiflix, { Notify } from 'notiflix';
import { fetchCountries } from './fetchCountries';
import {
  oneCountryCreateMarkup,
  manyCountriesCreateMarkup,
} from './createMarkup';

const DEBOUNCE_DELAY = 300;
let markup = '';
const searchInput = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');

searchInput.addEventListener('input', debounce(handleInput, DEBOUNCE_DELAY));

function handleInput() {
  countryList.innerHTML = '';
  if (searchInput.value.trim() !== '') {
    fetchCountries(searchInput.value.trim())
      .then(data => {
        if (data.length === 1) {
          markup = oneCountryCreateMarkup(data);
        } else if (data.length > 1 && data.length <= 10) {
          markup = manyCountriesCreateMarkup(data);
        } else {
          Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        }
        countryList.insertAdjacentHTML('beforeend', markup);
      })
      .catch(error =>
        Notify.failure('Oops, there is no country with that name')
      );
  }
}
