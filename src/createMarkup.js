export function oneCountryCreateMarkup(
  countryName,
  flag,
  capital,
  population,
  languages
) {
  return `<li class="country_item">
    
    <div class="container_country_item"><img src="${flag.svg}" alt="${
    flag.alt
  }" class="country_img">
    <h1>${countryName.official}</h1></div>
    <p><span class="country_item-text">Capital:</span> ${capital}</p>
    <p><span class="country_item-text">Population:</span> ${population}</p>
    <p><span class="country_item-text">Languages:</span> ${Object.values(
      languages
    )}</p>
</li>`;
}

export function manyCountriesCreateMarkup(countryName, flag) {
  return `<li class="country_item">
    <div class="container_country_item"><img src="${flag.svg}" alt="${flag.alt}" class="country_img">
    <p>${countryName.official}</p></div>
</li>`;
}
