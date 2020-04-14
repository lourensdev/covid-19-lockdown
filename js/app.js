Vue.component("timer-item", {
  props: ["text", "desc"],
  template: "<div class='b-timer-item'><span class='e-timer-value'>{{text}}</span><span class='e-timer-desc'>{{desc}}</span></div>"
});

function getCountdown() {
  return moment().countdown("2020-4-30");
}

function padTime(time) {
  if (time < 10) {
    return `0${time}`;
  }
  return time.toString();
}

let app = new Vue({
  el: "#app",
  data: {
    days: padTime(getCountdown().days),
    hours: padTime(getCountdown().hours),
    minutes: padTime(getCountdown().minutes),
    seconds: padTime(getCountdown().seconds)
  }
});

setInterval(() => {
  app.days = padTime(getCountdown().days);
  app.hours = padTime(getCountdown().hours);
  app.minutes = padTime(getCountdown().minutes);
  app.seconds = padTime(getCountdown().seconds);
}, 1000);
