function updateTime() {
  //tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("asia/tokyo");
  tokyoDateElement.innerHTML = `${tokyoTime.format("LL")}`;
  tokyoTimeElement.innerHTML = `${tokyoTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  )}`;
  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("europe/london");
  londonDateElement.innerHTML = `${londonTime.format("LL")}`;
  londonTimeElement.innerHTML = `${londonTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  )}`;
  //Los Angeles
  let los_angelesElement = document.querySelector("#los_angeles");
  let los_angelesDateElement = los_angelesElement.querySelector(".date");
  let los_angelesTimeElement = los_angelesElement.querySelector(".time");
  let los_angelesTime = moment().tz("america/los_angeles");
  los_angelesDateElement.innerHTML = `${los_angelesTime.format("LL")}`;
  los_angelesTimeElement.innerHTML = `${los_angelesTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  )}`;
  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("australia/sydney");
  sydneyDateElement.innerHTML = `${sydneyTime.format("LL")}`;
  sydneyTimeElement.innerHTML = `${sydneyTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  )}`;
}

function updateCity(event) {
  if (event.target.value == "") location.reload();
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
            <div>
              <h2>${cityName}</h2>
              <div class="date">${cityTime.format("LL")}</div>
            </div>
            <div class="time">${cityTime.format(
              "hh:mm:ss [<small>]A[</small>]"
            )}</div>
          </div>`;
}

updateTime();
setInterval(updateTime, 1000);
let citiesSelectElement = document.querySelector("#city-selection");

citiesSelectElement.addEventListener("change", updateCity);
