'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} milion poeple</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbour country (2)
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };
// getCountryAndNeighbour('portugal');

// AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

// const request = fetch('https://restcountries.eu/rest/v2/name/portugal');
// console.log(request);

const getJSON = function (url, errorMsg = 'Something went wrong!') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   getJSON(
//     `https://restcountries.eu/rest/v2/name/${country}`,
//     'Country now found!'
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[1];
//       if (!neighbour) throw new Error('No neighbour found!');

//       return getJSON(
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong! ${err.message} Try again! `);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   getCountryData('poland');
// });

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//       if (!response.ok) throw new Error(`Throttled!`);
//       return response.json();
//     })
//     .then(data =>
//       fetch(
//         `https://restcountries.eu/rest/v2/name/${data.country.toLowerCase()}`
//       )
//     )
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found! (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => {
//       console.error(`${err.message}`);
//     });
// };
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });
// console.log('Test end');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN!');
//     } else {
//       reject(new Error('You lost lost your money!'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// wait(1)
//   .then(() => {
//     console.log('1 second pass');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 seconds passed');
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 4 seconds'));

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject('abc').catch(x => console.error(x));

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// // getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })

//     .then(response => {
//       if (!response.ok) throw new Error(`Throttled!`);
//       return response.json();
//     })
//     .then(data =>
//       fetch(
//         `https://restcountries.eu/rest/v2/name/${data.country.toLowerCase()}`
//       )
//     )
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found! (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => {
//       console.error(`${err.message}`);
//     });
// };
// whereAmI();
const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     let img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', () => {
//       imgContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', () => {
//       reject(new Error('Image loading issue'));
//     });
//   });
// };

// let currentImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(e => console.error(e));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmi = async function () {
//   try {
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error('Problem getting location data');
//     const dataGeo = await resGeo.json();

//     const res = await fetch(
//       `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//     );
//     if (!res.ok) throw new Error('Problem getting country');
//     const data = await res.json();
//     renderCountry(data[0]);

//     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (err) {
//     console.error(err);
//     renderError(`${err.message}.`);
//     throw err;
//   }
// };
// console.log('1: will get location');
// // whereAmi()
// //   .then(city => console.log(`2: ${city}`))
// //   .catch(err => console.error(`2: ${err.message}`))
// //   .finally(() => console.log('3: Finished getting location'));

// (async function () {
//   try {
//     const city = await whereAmi();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message}`);
//   }
//   console.log('3: Finished getting location');
// })();

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(
//     //   `https://restcountries.eu/rest/v2/name/${c1}`
//     // );
//     // const [data2] = await getJSON(
//     //   `https://restcountries.eu/rest/v2/name/${c2}`
//     // );
//     // const [data3] = await getJSON(
//     //   `https://restcountries.eu/rest/v2/name/${c3}`
//     // );

//     const data = await Promise.all([
//       getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
//       getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
//       getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
//     ]);

//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };
// get3Countries('poland', 'portugal', 'germany');

// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.eu/rest/v2/name/italy`),
//     getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
//     getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took too long!'));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://restcountries.eu/rest/v2/name/italy`),
//   timeout(1),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.log(err));

// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Success!!!'),
// ]).then(res => console.log(res));

// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Success!!!'),
// ]).then(res => console.log(res));

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    let img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error('Image loading issue'));
    });
  });
};

let currentImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(e => console.error(e));

const loadNPause = async function () {
  try {
    const img1 = await createImage('img/img-1.jpg');
    currentImg = img1;
    await wait(2);
    currentImg.style.display = 'none';

    const img2 = await createImage('img/img-2.jpg');
    currentImg = img2;
    await wait(2);
    currentImg.style.display = 'none';
  } catch (e) {
    console.error(e);
  }
};
// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);
    const arr = await Promise.all(imgs);
    arr.forEach(img => img.classList.add('parallel'));
  } catch (error) {
    console.error(error);
  }
};

['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
