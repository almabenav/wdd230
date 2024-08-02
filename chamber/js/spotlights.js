const spotlightDiv = document.querySelectorAll('.spotlight div')
const data = 'https://almabenav2.github.io/wdd230/chamber/data.json'

fetch(data)
  .then(function (response) {
    return response.json()
  })
  .then(function (jsonObject) {
    const businesses = jsonObject['business']

    const filtered = businesses.filter((business) => {
      return (
        business.membership == 'Silver Membership' ||
        business.membership == 'Gold Membership'
      )
    })

    spotlightDiv.forEach((spotlight, index) => {
      const rand = Math.floor(Math.random() * filtered.length)
      const business = filtered[rand]

      let name = document.createElement('h2')
      let logo = document.createElement('img')
      let hr = document.createElement('hr')
      let address = document.createElement('p')
      let phone = document.createElement('p')

      name.textContent = business.name
      logo.setAttribute('src', business.logourl)
      logo.setAttribute('alt', ` ${business.name} logo`)
      logo.setAttribute('loading', 'lazy')
      address.textContent = business.address
      phone.textContent = business.phone

      spotlight.appendChild(name)
      spotlight.appendChild(logo)
      spotlight.appendChild(hr)
      spotlight.appendChild(address)
      spotlight.appendChild(phone)

      filtered.splice(rand, 1)
    })
  })
