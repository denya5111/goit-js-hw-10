export function oneCountryCreateMarkup(array) {
  return array.map(item => {
    return `<li class="country_item">
    <div class="container_country_item"><img src="${item.flags.svg}" alt="${
      item.flags.alt
    }" class="country_img">
    <h1>${item.name.official}</h1></div>
    <p><span class="country_item-text">Capital:</span> ${item.capital}</p>
    <p><span class="country_item-text">Population:</span> ${item.population}</p>
    <p><span class="country_item-text">Languages:</span> ${Object.values(
      item.languages
    )}</p>
</li>`;
  });
}

export function manyCountriesCreateMarkup(array) {
  return array
    .map(item => {
      return `<li class="country_item">
    <div class="container_country_item"><img src="${item.flags.svg}" alt="${item.flags.alt}" class="country_img">
    <p>${item.name.official}</p></div>
</li>`;
    })
    .join('');
}
