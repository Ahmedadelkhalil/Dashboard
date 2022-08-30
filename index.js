let numCountOne = document.querySelector(".percentage-num-count-1");
let numCountTwo = document.querySelector(".percentage-num-count-2");
let numCountThree = document.querySelector(".percentage-num-count-3");
let progressOne = document.querySelector(".dashboard .progress-1");
let progressTwo = document.querySelector(".dashboard .progress-2");
let progressThree = document.querySelector(".dashboard .progress-3");
let cards = document.querySelector(".cards");
let money = document.querySelector(".money-gained");
let loss = document.querySelector(".loss");
let gross = document.querySelector(".gross");
let i = 1;
let started = false;

window.onload = function () {
  if (window.scrollY >= cards.offsetTop - 300) {
    if (!started) {
      startcount(numCountOne.textContent);
      moneyCount(money.textContent);
      startcountofsecondbox(numCountTwo.textContent);
      moneyCountofsecondbox(loss.textContent);
      startcountofthirdbox(numCountThree.textContent);
      moneyCountofthirdbox(gross.textContent);
      analyticsleftcounttop(leftOneTop.textContent);
      analyticsleftdowncount(leftOneTwo.textContent);
      middleonetopfun(middleoneTop.textContent);
      middleoneBottomfun(middleoneBottom.textContent);
      middleTwotopfun(middleTwoTop.textContent);
      middleTwoBottomfun(middleTwoBottom.textContent);
      lastanaTopfun(lastanaTop.textContent);
      lastanaBottomfun(lastanaBottom.textContent);
    }
    started = true;
  }
  if (window.localStorage.getItem("theme") === "container darkon") {
    container.classList.add("darkon");
    lightTheme.classList.remove("themeOn");
    darkTheme.classList.add("themeOn");
    LSLightTheme.classList.remove("themeOn");
    LSDarkTheme.classList.add("themeOn");
  } else if (window.localStorage.getItem("theme") === "container") {
    container.classList.remove("darkon");
    lightTheme.classList.add("themeOn");
    darkTheme.classList.remove("themeOn");
    LSLightTheme.classList.add("themeOn");
    LSDarkTheme.classList.remove("themeOn");
  }

  if (window.localStorage.getItem("left options") === "dashboard") {
    document.querySelector("#middle-Two").classList.remove("active");
    document.querySelector("#middle-Three").classList.remove("active");
    document.querySelector("#middle-Four").classList.remove("active");
    document.querySelector("#middle-Five").classList.remove("active");
    document.querySelector("#middle-Six").classList.remove("active");
    document.querySelector("#middle-Seven").classList.remove("active");
    document.querySelector("#middle-One").classList.add("active");
    document.querySelector(".customers").classList.remove("active-screen");
    document.querySelector(".analytics").classList.remove("active-screen");
    document.querySelector(".order").classList.remove("active-screen");
    document.querySelector(".messages").classList.remove("active-screen");
    document.querySelector(".products").classList.remove("active-screen");
    document.querySelector(".sign-up").classList.remove("active-screen");
    document.querySelector(".dashboard").classList.add("active-screen");
  } else if (window.localStorage.getItem("left options") === "customers") {
    document.querySelector("#middle-One").classList.remove("active");
    document.querySelector("#middle-Three").classList.remove("active");
    document.querySelector("#middle-Four").classList.remove("active");
    document.querySelector("#middle-Five").classList.remove("active");
    document.querySelector("#middle-Six").classList.remove("active");
    document.querySelector("#middle-Seven").classList.remove("active");
    document.querySelector("#middle-Two").classList.add("active");
    document.querySelector(".dashboard").classList.remove("active-screen");
    document.querySelector(".analytics").classList.remove("active-screen");
    document.querySelector(".order").classList.remove("active-screen");
    document.querySelector(".messages").classList.remove("active-screen");
    document.querySelector(".products").classList.remove("active-screen");
    document.querySelector(".sign-up").classList.remove("active-screen");
    document.querySelector(".customers").classList.add("active-screen");
  } else if (window.localStorage.getItem("left options") === "order") {
    document.querySelector("#middle-One").classList.remove("active");
    document.querySelector("#middle-Two").classList.remove("active");
    document.querySelector("#middle-Four").classList.remove("active");
    document.querySelector("#middle-Five").classList.remove("active");
    document.querySelector("#middle-Six").classList.remove("active");
    document.querySelector("#middle-Seven").classList.remove("active");
    document.querySelector("#middle-Three").classList.add("active");
    document.querySelector(".dashboard").classList.remove("active-screen");
    document.querySelector(".customers").classList.remove("active-screen");
    document.querySelector(".analytics").classList.remove("active-screen");
    document.querySelector(".messages").classList.remove("active-screen");
    document.querySelector(".products").classList.remove("active-screen");
    document.querySelector(".sign-up").classList.remove("active-screen");
    document.querySelector(".order").classList.add("active-screen");
    document.querySelector(".search-btn").focus();
  } else if (window.localStorage.getItem("left options") === "analytics") {
    document.querySelector("#middle-One").classList.remove("active");
    document.querySelector("#middle-Two").classList.remove("active");
    document.querySelector("#middle-Three").classList.remove("active");
    document.querySelector("#middle-Five").classList.remove("active");
    document.querySelector("#middle-Six").classList.remove("active");
    document.querySelector("#middle-Seven").classList.remove("active");
    document.querySelector("#middle-Four").classList.add("active");
    document.querySelector(".dashboard").classList.remove("active-screen");
    document.querySelector(".customers").classList.remove("active-screen");
    document.querySelector(".order").classList.remove("active-screen");
    document.querySelector(".products").classList.remove("active-screen");
    document.querySelector(".messages").classList.remove("active-screen");
    document.querySelector(".sign-up").classList.remove("active-screen");
    document.querySelector(".analytics").classList.add("active-screen");
  } else if (window.localStorage.getItem("left options") === "messages") {
    document.querySelector("#middle-One").classList.remove("active");
    document.querySelector("#middle-Two").classList.remove("active");
    document.querySelector("#middle-Three").classList.remove("active");
    document.querySelector("#middle-Four").classList.remove("active");
    document.querySelector("#middle-Six").classList.remove("active");
    document.querySelector("#middle-Seven").classList.remove("active");
    document.querySelector("#middle-Five").classList.add("active");
    document.querySelector(".dashboard").classList.remove("active-screen");
    document.querySelector(".customers").classList.remove("active-screen");
    document.querySelector(".order").classList.remove("active-screen");
    document.querySelector(".analytics").classList.remove("active-screen");
    document.querySelector(".products").classList.remove("active-screen");
    document.querySelector(".sign-up").classList.remove("active-screen");
    document.querySelector(".messages").classList.add("active-screen");
    document.querySelector(".input-msg").focus();
  } else if (window.localStorage.getItem("left options") === "products") {
    document.querySelector("#middle-One").classList.remove("active");
    document.querySelector("#middle-Two").classList.remove("active");
    document.querySelector("#middle-Three").classList.remove("active");
    document.querySelector("#middle-Five").classList.remove("active");
    document.querySelector("#middle-Four").classList.remove("active");
    document.querySelector("#middle-Seven").classList.remove("active");
    document.querySelector("#middle-Six").classList.add("active");
    document.querySelector(".dashboard").classList.remove("active-screen");
    document.querySelector(".customers").classList.remove("active-screen");
    document.querySelector(".order").classList.remove("active-screen");
    document.querySelector(".messages").classList.remove("active-screen");
    document.querySelector(".analytics").classList.remove("active-screen");
    document.querySelector(".sign-up").classList.remove("active-screen");
    document.querySelector(".products").classList.add("active-screen");
  } else if (window.localStorage.getItem("left options") === "SignUp") {
    document.querySelector("#middle-One").classList.remove("active");
    document.querySelector("#middle-Two").classList.remove("active");
    document.querySelector("#middle-Three").classList.remove("active");
    document.querySelector("#middle-Five").classList.remove("active");
    document.querySelector("#middle-Four").classList.remove("active");
    document.querySelector("#middle-Six").classList.remove("active");
    document.querySelector("#middle-Seven").classList.add("active");
    document.querySelector(".dashboard").classList.remove("active-screen");
    document.querySelector(".customers").classList.remove("active-screen");
    document.querySelector(".order").classList.remove("active-screen");
    document.querySelector(".messages").classList.remove("active-screen");
    document.querySelector(".analytics").classList.remove("active-screen");
    document.querySelector(".products").classList.remove("active-screen");
    document.querySelector(".sign-up").classList.add("active-screen");
  }

  //......................................................... LEFT ICONS LARGE SCREENS LOCAL STORAGE

  if (window.localStorage.getItem("left options") === "dashboard") {
    document.querySelector("#middle-TwoLS").classList.remove("active");
    document.querySelector("#middle-ThreeLS").classList.remove("active");
    document.querySelector("#middle-FourLS").classList.remove("active");
    document.querySelector("#middle-FiveLS").classList.remove("active");
    document.querySelector("#middle-SixLS").classList.remove("active");
    document.querySelector("#middle-SevenLS").classList.remove("active");
    document.querySelector("#middle-OneLS").classList.add("active");
    document.querySelector(".customers").classList.remove("active-screen");
    document.querySelector(".analytics").classList.remove("active-screen");
    document.querySelector(".order").classList.remove("active-screen");
    document.querySelector(".messages").classList.remove("active-screen");
    document.querySelector(".products").classList.remove("active-screen");
    document.querySelector(".sign-up").classList.remove("active-screen");
    document.querySelector(".dashboard").classList.add("active-screen");
  } else if (window.localStorage.getItem("left options") === "customers") {
    document.querySelector("#middle-OneLS").classList.remove("active");
    document.querySelector("#middle-ThreeLS").classList.remove("active");
    document.querySelector("#middle-FourLS").classList.remove("active");
    document.querySelector("#middle-FiveLS").classList.remove("active");
    document.querySelector("#middle-SixLS").classList.remove("active");
    document.querySelector("#middle-SevenLS").classList.remove("active");
    document.querySelector("#middle-TwoLS").classList.add("active");
    document.querySelector(".dashboard").classList.remove("active-screen");
    document.querySelector(".analytics").classList.remove("active-screen");
    document.querySelector(".order").classList.remove("active-screen");
    document.querySelector(".messages").classList.remove("active-screen");
    document.querySelector(".products").classList.remove("active-screen");
    document.querySelector(".sign-up").classList.remove("active-screen");
    document.querySelector(".customers").classList.add("active-screen");
  } else if (window.localStorage.getItem("left options") === "order") {
    document.querySelector("#middle-OneLS").classList.remove("active");
    document.querySelector("#middle-TwoLS").classList.remove("active");
    document.querySelector("#middle-FourLS").classList.remove("active");
    document.querySelector("#middle-FiveLS").classList.remove("active");
    document.querySelector("#middle-SixLS").classList.remove("active");
    document.querySelector("#middle-SevenLS").classList.remove("active");
    document.querySelector("#middle-ThreeLS").classList.add("active");
    document.querySelector(".dashboard").classList.remove("active-screen");
    document.querySelector(".customers").classList.remove("active-screen");
    document.querySelector(".analytics").classList.remove("active-screen");
    document.querySelector(".messages").classList.remove("active-screen");
    document.querySelector(".products").classList.remove("active-screen");
    document.querySelector(".sign-up").classList.remove("active-screen");
    document.querySelector(".order").classList.add("active-screen");
    document.querySelector(".search-btn").focus();
  } else if (window.localStorage.getItem("left options") === "analytics") {
    document.querySelector("#middle-OneLS").classList.remove("active");
    document.querySelector("#middle-TwoLS").classList.remove("active");
    document.querySelector("#middle-ThreeLS").classList.remove("active");
    document.querySelector("#middle-FiveLS").classList.remove("active");
    document.querySelector("#middle-SixLS").classList.remove("active");
    document.querySelector("#middle-SevenLS").classList.remove("active");
    document.querySelector("#middle-FourLS").classList.add("active");
    document.querySelector(".dashboard").classList.remove("active-screen");
    document.querySelector(".customers").classList.remove("active-screen");
    document.querySelector(".order").classList.remove("active-screen");
    document.querySelector(".products").classList.remove("active-screen");
    document.querySelector(".messages").classList.remove("active-screen");
    document.querySelector(".sign-up").classList.remove("active-screen");
    document.querySelector(".analytics").classList.add("active-screen");
  } else if (window.localStorage.getItem("left options") === "messages") {
    document.querySelector("#middle-OneLS").classList.remove("active");
    document.querySelector("#middle-TwoLS").classList.remove("active");
    document.querySelector("#middle-ThreeLS").classList.remove("active");
    document.querySelector("#middle-FourLS").classList.remove("active");
    document.querySelector("#middle-SixLS").classList.remove("active");
    document.querySelector("#middle-SevenLS").classList.remove("active");
    document.querySelector("#middle-FiveLS").classList.add("active");
    document.querySelector(".dashboard").classList.remove("active-screen");
    document.querySelector(".customers").classList.remove("active-screen");
    document.querySelector(".order").classList.remove("active-screen");
    document.querySelector(".analytics").classList.remove("active-screen");
    document.querySelector(".products").classList.remove("active-screen");
    document.querySelector(".sign-up").classList.remove("active-screen");
    document.querySelector(".messages").classList.add("active-screen");
    document.querySelector(".input-msg").focus();
  } else if (window.localStorage.getItem("left options") === "products") {
    document.querySelector("#middle-OneLS").classList.remove("active");
    document.querySelector("#middle-TwoLS").classList.remove("active");
    document.querySelector("#middle-ThreeLS").classList.remove("active");
    document.querySelector("#middle-FiveLS").classList.remove("active");
    document.querySelector("#middle-FourLS").classList.remove("active");
    document.querySelector("#middle-SevenLS").classList.remove("active");
    document.querySelector("#middle-SixLS").classList.add("active");
    document.querySelector(".dashboard").classList.remove("active-screen");
    document.querySelector(".customers").classList.remove("active-screen");
    document.querySelector(".order").classList.remove("active-screen");
    document.querySelector(".messages").classList.remove("active-screen");
    document.querySelector(".analytics").classList.remove("active-screen");
    document.querySelector(".sign-up").classList.remove("active-screen");
    document.querySelector(".products").classList.add("active-screen");
  } else if (window.localStorage.getItem("left options") === "SignUp") {
    document.querySelector("#middle-OneLS").classList.remove("active");
    document.querySelector("#middle-TwoLS").classList.remove("active");
    document.querySelector("#middle-ThreeLS").classList.remove("active");
    document.querySelector("#middle-FiveLS").classList.remove("active");
    document.querySelector("#middle-FourLS").classList.remove("active");
    document.querySelector("#middle-SixLS").classList.remove("active");
    document.querySelector("#middle-SevenLS").classList.add("active");
    document.querySelector(".dashboard").classList.remove("active-screen");
    document.querySelector(".customers").classList.remove("active-screen");
    document.querySelector(".order").classList.remove("active-screen");
    document.querySelector(".messages").classList.remove("active-screen");
    document.querySelector(".analytics").classList.remove("active-screen");
    document.querySelector(".products").classList.remove("active-screen");
    document.querySelector(".sign-up").classList.add("active-screen");
  }

  //.................................................................................................

  if (window.sessionStorage.getItem("First Name")) {
    firstName.value = window.sessionStorage.getItem("First Name");
  }
  if (window.sessionStorage.getItem("Last Name")) {
    lastName.value = window.sessionStorage.getItem("Last Name");
  }
  if (window.sessionStorage.getItem("Full Name")) {
    fullName.value = window.sessionStorage.getItem("Full Name");
  }
  if (window.sessionStorage.getItem("Email")) {
    email.value = window.sessionStorage.getItem("Email");
  }
  if (window.sessionStorage.getItem("pass")) {
    passwordField.value = window.sessionStorage.getItem("pass");
  }
  if (window.sessionStorage.getItem("passCon")) {
    passwordConfirmField.value = window.sessionStorage.getItem("passCon");
  }

  if (
    window.localStorage.getItem("mobile aside menu theme") ===
    "mobile-aside show-mobile-aside light-mode"
  ) {
    document.querySelector(".mobile-aside").classList.remove("dark-mode");
    document.querySelector(".mobile-aside").classList.add("light-mode");
  } else if (
    window.localStorage.getItem("mobile aside menu theme") ===
    "mobile-aside show-mobile-aside dark-mode"
  ) {
    document.querySelector(".mobile-aside").classList.remove("light-mode");
    document.querySelector(".mobile-aside").classList.add("dark-mode");
  }

  if (
    window.localStorage.getItem("mobile aside menu theme") ===
    "mobile-aside light-mode"
  ) {
    document.querySelector(".mobile-aside").classList.remove("dark-mode");
    document.querySelector(".mobile-aside").classList.add("light-mode");
  } else if (
    window.localStorage.getItem("mobile aside menu theme") ===
    "mobile-aside dark-mode"
  ) {
    document.querySelector(".mobile-aside").classList.remove("light-mode");
    document.querySelector(".mobile-aside").classList.add("dark-mode");
  }
};

function startcount(e) {
  let goalOne = document
    .querySelector(".percentage-num-count-1")
    .getAttribute("data-goal");
  let holderOne = setInterval(() => {
    `${numCountOne.textContent++}`;
    progressOne.style.background = `conic-gradient(#7380ec ${
      numCountOne.textContent * 3.5
    }deg, lightgray 0deg)`;
    if (numCountOne.textContent === goalOne) {
      clearInterval(holderOne);
      numCountOne.textContent = `${goalOne}%`;
    }
  }, 2000 / goalOne);
}

function moneyCount(e) {
  let goalOne = money.getAttribute("data-money");
  let holderOne = setInterval(() => {
    `${money.textContent++}`;
    if (money.textContent === goalOne) {
      clearInterval(holderOne);
      money.textContent = `$ ${goalOne}`;
    }
  }, 2000 / goalOne);
}

//...........................................

function startcountofsecondbox(e) {
  let goalTwo = document
    .querySelector(".percentage-num-count-2")
    .getAttribute("data-goalTwo");
  let holderTwo = setInterval(() => {
    `${numCountTwo.textContent++}`;
    progressTwo.style.background = `conic-gradient(#ff7782 ${
      numCountTwo.textContent * 3.6
    }deg, lightgray 0deg)`;
    if (numCountTwo.textContent === goalTwo) {
      clearInterval(holderTwo);
      numCountTwo.textContent = `${goalTwo}%`;
    }
  }, 2000 / goalTwo);
}

function moneyCountofsecondbox(el) {
  let goalTwo = loss.getAttribute("data-moneytwo");
  let holderTwo = setInterval(() => {
    `${loss.textContent++}`;
    if (loss.textContent === goalTwo) {
      clearInterval(holderTwo);
      loss.textContent = `$ ${goalTwo}`;
    }
  }, 2000 / goalTwo);
}

//............................................

function startcountofthirdbox(e) {
  let goalThree = document
    .querySelector(".percentage-num-count-3")
    .getAttribute("data-goalthree");
  let holderThree = setInterval(() => {
    `${numCountThree.textContent++}`;
    progressThree.style.background = `conic-gradient(#41f1b6 ${
      numCountThree.textContent * 3.6
    }deg, lightgray 0deg)`;
    if (numCountThree.textContent === goalThree) {
      clearInterval(holderThree);
      numCountThree.textContent = `${goalThree}%`;
    }
  }, 2000 / goalThree);
}

function moneyCountofthirdbox(el) {
  let goalThree = gross.getAttribute("data-moneythree");
  let holderThree = setInterval(() => {
    `${gross.textContent++}`;
    if (gross.textContent === goalThree) {
      clearInterval(holderThree);
      gross.textContent = `$ ${goalThree}`;
    }
  }, 2000 / goalThree);
}

//........................................................................................

let leftIcons = document.querySelectorAll(".op-holder");

leftIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    leftIcons.forEach((icon) => {
      icon.classList.remove("active");
    });
    if (e.currentTarget.getAttribute("data-directcu")) {
      e.currentTarget.classList.add("active");
      document.querySelector(".dashboard").classList.remove("active-screen");
      document.querySelector(".order").classList.remove("active-screen");
      document.querySelector(".analytics").classList.remove("active-screen");
      document.querySelector(".messages").classList.remove("active-screen");
      document.querySelector(".products").classList.remove("active-screen");
      document.querySelector(".sign-up").classList.remove("active-screen");
      document.querySelector(".customers").classList.add("active-screen");
      window.localStorage.setItem(
        "left options",
        e.currentTarget.getAttribute("data-directcu")
      );
    } else if (e.currentTarget.getAttribute("data-directdb")) {
      e.currentTarget.classList.add("active");
      document.querySelector(".customers").classList.remove("active-screen");
      document.querySelector(".order").classList.remove("active-screen");
      document.querySelector(".analytics").classList.remove("active-screen");
      document.querySelector(".messages").classList.remove("active-screen");
      document.querySelector(".products").classList.remove("active-screen");
      document.querySelector(".sign-up").classList.remove("active-screen");
      document.querySelector(".dashboard").classList.add("active-screen");
      window.localStorage.setItem(
        "left options",
        e.currentTarget.getAttribute("data-directdb")
      );
      window.location.reload();
    } else if (e.currentTarget.getAttribute("data-director")) {
      e.currentTarget.classList.add("active");
      document.querySelector(".dashboard").classList.remove("active-screen");
      document.querySelector(".customers").classList.remove("active-screen");
      document.querySelector(".analytics").classList.remove("active-screen");
      document.querySelector(".messages").classList.remove("active-screen");
      document.querySelector(".products").classList.remove("active-screen");
      document.querySelector(".sign-up").classList.remove("active-screen");
      document.querySelector(".order").classList.add("active-screen");
      document.querySelector(".search-btn").focus();
      window.localStorage.setItem(
        "left options",
        e.currentTarget.getAttribute("data-director")
      );
    } else if (e.currentTarget.getAttribute("data-directana")) {
      e.currentTarget.classList.add("active");
      document.querySelector(".dashboard").classList.remove("active-screen");
      document.querySelector(".customers").classList.remove("active-screen");
      document.querySelector(".order").classList.remove("active-screen");
      document.querySelector(".messages").classList.remove("active-screen");
      document.querySelector(".products").classList.remove("active-screen");
      document.querySelector(".sign-up").classList.remove("active-screen");
      document.querySelector(".analytics").classList.add("active-screen");
      window.localStorage.setItem(
        "left options",
        e.currentTarget.getAttribute("data-directana")
      );
      window.location.reload();
    } else if (e.currentTarget.getAttribute("data-directmsg")) {
      e.currentTarget.classList.add("active");
      document.querySelector(".dashboard").classList.remove("active-screen");
      document.querySelector(".customers").classList.remove("active-screen");
      document.querySelector(".analytics").classList.remove("active-screen");
      document.querySelector(".order").classList.remove("active-screen");
      document.querySelector(".products").classList.remove("active-screen");
      document.querySelector(".sign-up").classList.remove("active-screen");
      document.querySelector(".messages").classList.add("active-screen");
      window.localStorage.setItem(
        "left options",
        e.currentTarget.getAttribute("data-directmsg")
      );
      document.querySelector(".input-msg").focus();
    } else if (e.currentTarget.getAttribute("data-directpro")) {
      e.currentTarget.classList.add("active");
      document.querySelector(".dashboard").classList.remove("active-screen");
      document.querySelector(".customers").classList.remove("active-screen");
      document.querySelector(".analytics").classList.remove("active-screen");
      document.querySelector(".messages").classList.remove("active-screen");
      document.querySelector(".order").classList.remove("active-screen");
      document.querySelector(".sign-up").classList.remove("active-screen");
      document.querySelector(".products").classList.add("active-screen");
      window.localStorage.setItem(
        "left options",
        e.currentTarget.getAttribute("data-directpro")
      );
    } else if (e.currentTarget.getAttribute("data-directsign")) {
      e.currentTarget.classList.add("active");
      document.querySelector(".dashboard").classList.remove("active-screen");
      document.querySelector(".customers").classList.remove("active-screen");
      document.querySelector(".analytics").classList.remove("active-screen");
      document.querySelector(".messages").classList.remove("active-screen");
      document.querySelector(".order").classList.remove("active-screen");
      document.querySelector(".products").classList.remove("active-screen");
      document.querySelector(".sign-up").classList.add("active-screen");
      window.localStorage.setItem(
        "left options",
        e.currentTarget.getAttribute("data-directsign")
      );
    }
  });
});

//................................................................... LEFT ICONS LARGE SCREEN

let leftIconsLS = document.querySelectorAll(".op-holderLS");

leftIconsLS.forEach((iconLS) => {
  iconLS.addEventListener("click", (e) => {
    leftIconsLS.forEach((iconLS) => {
      iconLS.classList.remove("active");
    });
    if (e.currentTarget.getAttribute("data-directcu")) {
      e.currentTarget.classList.add("active");
      document.querySelector(".dashboard").classList.remove("active-screen");
      document.querySelector(".order").classList.remove("active-screen");
      document.querySelector(".analytics").classList.remove("active-screen");
      document.querySelector(".messages").classList.remove("active-screen");
      document.querySelector(".products").classList.remove("active-screen");
      document.querySelector(".sign-up").classList.remove("active-screen");
      document.querySelector(".customers").classList.add("active-screen");
      window.localStorage.setItem(
        "left options",
        e.currentTarget.getAttribute("data-directcu")
      );
    } else if (e.currentTarget.getAttribute("data-directdb")) {
      e.currentTarget.classList.add("active");
      document.querySelector(".customers").classList.remove("active-screen");
      document.querySelector(".order").classList.remove("active-screen");
      document.querySelector(".analytics").classList.remove("active-screen");
      document.querySelector(".messages").classList.remove("active-screen");
      document.querySelector(".products").classList.remove("active-screen");
      document.querySelector(".sign-up").classList.remove("active-screen");
      document.querySelector(".dashboard").classList.add("active-screen");
      window.localStorage.setItem(
        "left options",
        e.currentTarget.getAttribute("data-directdb")
      );
      window.location.reload();
    } else if (e.currentTarget.getAttribute("data-director")) {
      e.currentTarget.classList.add("active");
      document.querySelector(".dashboard").classList.remove("active-screen");
      document.querySelector(".customers").classList.remove("active-screen");
      document.querySelector(".analytics").classList.remove("active-screen");
      document.querySelector(".messages").classList.remove("active-screen");
      document.querySelector(".products").classList.remove("active-screen");
      document.querySelector(".sign-up").classList.remove("active-screen");
      document.querySelector(".order").classList.add("active-screen");
      document.querySelector(".search-btn").focus();
      window.localStorage.setItem(
        "left options",
        e.currentTarget.getAttribute("data-director")
      );
    } else if (e.currentTarget.getAttribute("data-directana")) {
      e.currentTarget.classList.add("active");
      document.querySelector(".dashboard").classList.remove("active-screen");
      document.querySelector(".customers").classList.remove("active-screen");
      document.querySelector(".order").classList.remove("active-screen");
      document.querySelector(".messages").classList.remove("active-screen");
      document.querySelector(".products").classList.remove("active-screen");
      document.querySelector(".sign-up").classList.remove("active-screen");
      document.querySelector(".analytics").classList.add("active-screen");
      window.localStorage.setItem(
        "left options",
        e.currentTarget.getAttribute("data-directana")
      );
      window.location.reload();
    } else if (e.currentTarget.getAttribute("data-directmsg")) {
      e.currentTarget.classList.add("active");
      document.querySelector(".dashboard").classList.remove("active-screen");
      document.querySelector(".customers").classList.remove("active-screen");
      document.querySelector(".analytics").classList.remove("active-screen");
      document.querySelector(".order").classList.remove("active-screen");
      document.querySelector(".products").classList.remove("active-screen");
      document.querySelector(".sign-up").classList.remove("active-screen");
      document.querySelector(".messages").classList.add("active-screen");
      window.localStorage.setItem(
        "left options",
        e.currentTarget.getAttribute("data-directmsg")
      );
      document.querySelector(".input-msg").focus();
    } else if (e.currentTarget.getAttribute("data-directpro")) {
      e.currentTarget.classList.add("active");
      document.querySelector(".dashboard").classList.remove("active-screen");
      document.querySelector(".customers").classList.remove("active-screen");
      document.querySelector(".analytics").classList.remove("active-screen");
      document.querySelector(".messages").classList.remove("active-screen");
      document.querySelector(".order").classList.remove("active-screen");
      document.querySelector(".sign-up").classList.remove("active-screen");
      document.querySelector(".products").classList.add("active-screen");
      window.localStorage.setItem(
        "left options",
        e.currentTarget.getAttribute("data-directpro")
      );
    } else if (e.currentTarget.getAttribute("data-directsign")) {
      e.currentTarget.classList.add("active");
      document.querySelector(".dashboard").classList.remove("active-screen");
      document.querySelector(".customers").classList.remove("active-screen");
      document.querySelector(".analytics").classList.remove("active-screen");
      document.querySelector(".messages").classList.remove("active-screen");
      document.querySelector(".order").classList.remove("active-screen");
      document.querySelector(".products").classList.remove("active-screen");
      document.querySelector(".sign-up").classList.add("active-screen");
      window.localStorage.setItem(
        "left options",
        e.currentTarget.getAttribute("data-directsign")
      );
    }
  });
});

//................................................. SMART PHONES THEME

let lightTheme = document.querySelector(".fa-sun");
let darkTheme = document.querySelector(".fa-moon");
let container = document.querySelector(".container");

darkTheme.addEventListener("click", () => {
  container.classList.add("darkon");
  lightTheme.classList.remove("themeOn");
  darkTheme.classList.add("themeOn");
  document.querySelector(".mobile-aside").classList.add("dark-mode");
  document.querySelector(".mobile-aside").classList.remove("light-mode");
  window.localStorage.setItem("theme", container.classList);
  window.localStorage.setItem(
    "mobile aside menu theme",
    document.querySelector(".mobile-aside").classList
  );
});
lightTheme.addEventListener("click", () => {
  container.classList.remove("darkon");
  lightTheme.classList.add("themeOn");
  darkTheme.classList.remove("themeOn");
  document.querySelector(".mobile-aside").classList.remove("dark-mode");
  document.querySelector(".mobile-aside").classList.add("light-mode");
  window.localStorage.setItem("theme", container.classList);
  window.localStorage.setItem(
    "mobile aside menu theme",
    document.querySelector(".mobile-aside").classList
  );
});
//................................................................ LARGE SCREEN THEME
let LSLightTheme = document.querySelector(".LScLightMode");
let LSDarkTheme = document.querySelector(".LScDarkMode");

LSDarkTheme.addEventListener("click", () => {
  container.classList.add("darkon");
  LSLightTheme.classList.remove("themeOn");
  LSDarkTheme.classList.add("themeOn");
  window.localStorage.setItem("theme", container.classList);
});

LSLightTheme.addEventListener("click", () => {
  container.classList.remove("darkon");
  LSLightTheme.classList.add("themeOn");
  LSDarkTheme.classList.remove("themeOn");
  window.localStorage.setItem("theme", container.classList);
});

//................................................................

let lis = document.querySelectorAll(".order-process-type li");
let allTableLines = Array.from(document.querySelectorAll(".catching"));

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    lis.forEach((li) => {
      li.classList.remove("active-order");
      e.currentTarget.classList.add("active-order");
    });
  });

  li.addEventListener("click", () => {
    allTableLines.forEach((line) => {
      line.style.display = "none";
    });
    document.querySelectorAll(li.dataset.order).forEach((el) => {
      el.style.display = "";
    });
  });
});

//................................................................
let input = document.querySelector(".search-btn");
input.onkeyup = () => {
  let input = document.querySelector(".search-btn");
  let filter = input.value.toUpperCase();
  let myTable = document.querySelector(".table-3 table");
  let tr = myTable.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      let txtValue = td.textContent;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};

//...................................................     START TOP LEFT ONE ANALYTICS COUNT

let leftOneTop = document.querySelector(".ana-num-value-1");

function analyticsleftcounttop(e) {
  let anaonegoal = document
    .querySelector(".ana-num-value-1")
    .getAttribute("data-anatopone");

  let anaoneholder = setInterval(() => {
    leftOneTop.textContent++;

    if (leftOneTop.textContent === anaonegoal) {
      clearInterval(anaoneholder);
      leftOneTop.textContent = `$ 434`;
    }
  }, 10 / anaonegoal);
}

let leftOneTwo = document.querySelector(".arrow-top-1");

function analyticsleftdowncount(e) {
  let goal = document
    .querySelector(".arrow-top-1")
    .getAttribute("data-anatoptwo");

  let holder = setInterval(() => {
    leftOneTwo.textContent++;
    if (leftOneTwo.textContent === goal) {
      clearInterval(holder);
      leftOneTwo.textContent = `+588.9%`;
    }
  }, 10 / goal);
}

//..............................................  START TOP MIDDLE ONE ANALYTICS COUNT

let middleoneTop = document.querySelector(".ana-num-value-2");

function middleonetopfun(e) {
  let goal = document
    .querySelector(".ana-num-value-2")
    .getAttribute("data-middleonetop");

  let holder = setInterval(() => {
    middleoneTop.textContent++;
    if (middleoneTop.textContent === goal) {
      clearInterval(holder);
      middleoneTop.textContent = `$ 25,736.21`;
    }
  }, 10 / goal);
}

let middleoneBottom = document.querySelector(".arrow-top-2");

function middleoneBottomfun(e) {
  let goal = document
    .querySelector(".arrow-top-2")
    .getAttribute("data-middleonebottom");

  let holder = setInterval(() => {
    middleoneBottom.textContent++;

    if (middleoneBottom.textContent === goal) {
      clearInterval(holder);
      middleoneBottom.textContent = `+491.6%`;
    }
  }, 10 / goal);
}

//..................................................... START TOP MIDDLE TWO ANALYTICS COUNT

let middleTwoTop = document.querySelector(".ana-num-value-3");

function middleTwotopfun(e) {
  let goal = document
    .querySelector(".ana-num-value-3")
    .getAttribute("data-middleTwotop");

  let holder = setInterval(() => {
    middleTwoTop.textContent++;
    if (middleTwoTop.textContent === goal) {
      clearInterval(holder);
      middleTwoTop.textContent = `0.61%`;
    }
  }, 10 / goal);
}

let middleTwoBottom = document.querySelector(".arrow-top-3");

function middleTwoBottomfun(e) {
  let goal = document
    .querySelector(".arrow-top-3")
    .getAttribute("data-middleTwobottom");

  let holder = setInterval(() => {
    middleTwoBottom.textContent++;

    if (middleTwoBottom.textContent === goal) {
      clearInterval(holder);
      middleTwoBottom.textContent = `+455.7%`;
    }
  }, 10 / goal);
}

//............................................................... START LAST ANALYTICS COUNT

let lastanaTop = document.querySelector(".ana-num-value-4");

function lastanaTopfun(e) {
  let goal = document
    .querySelector(".ana-num-value-4")
    .getAttribute("data-lastanatop");

  let holder = setInterval(() => {
    lastanaTop.textContent++;
    if (lastanaTop.textContent === goal) {
      clearInterval(holder);
      lastanaTop.textContent = `$ 59.30`;
    }
  }, 10 / goal);
}

let lastanaBottom = document.querySelector(".arrow-down");

function lastanaBottomfun(e) {
  let goal = document
    .querySelector(".arrow-down")
    .getAttribute("data-lastanabottom");

  let holder = setInterval(() => {
    lastanaBottom.textContent++;

    if (middleTwoBottom.textContent === goal) {
      clearInterval(holder);
      lastanaBottom.textContent = `-14.1%`;
    }
  }, 10 / goal);
}

//...........................................................................

let msgInput = document.querySelector(".input-msg");

msgInput.onkeyup = () => {
  let msgInput = document.querySelector(".input-msg");
  let filteringMsg = msgInput.value.toUpperCase();
  let messages = document.querySelector(".msgs");
  let msgHolder = messages.getElementsByClassName("msg-holder");

  for (let i = 0; i < msgHolder.length; i++) {
    let msgTargetSearch = msgHolder[i].getElementsByTagName("p")[0];
    if (msgTargetSearch) {
      let txtValuemsg = msgTargetSearch.textContent;
      if (txtValuemsg.toUpperCase().indexOf(filteringMsg) > -1) {
        msgHolder[i].style.display = "";
      } else {
        msgHolder[i].style.display = "none";
      }
    }
  }
};

//...................................................................... FORM VALIDATION

//........................ FIRST NAME VALIDATION

let firstName = document.querySelector(".first-name");

firstName.onkeyup = () => {
  let firstNameTrue = document.querySelector(".first-name-green");
  let firstNameFalse = document.querySelector(".first-name-red");
  let pattern = /\w{2,}/gi;
  if (firstName.value.match(pattern)) {
    firstNameTrue.style.display = "block";
    firstNameFalse.style.display = "none";
  } else {
    firstNameTrue.style.display = "none";
    firstNameFalse.style.display = "block";
  }
  if (firstName.value === "") {
    firstNameTrue.style.display = "none";
    firstNameFalse.style.display = "none";
  }
};

//................................. SECOND NAME VALIDATION

let lastName = document.querySelector(".last-name");

lastName.onkeyup = () => {
  let lastNameTrue = document.querySelector(".last-name-green");
  let lastNameFalse = document.querySelector(".last-name-red");

  let pattern = /\w{2,}/gi;
  if (lastName.value.match(pattern)) {
    lastNameTrue.style.display = "block";
    lastNameFalse.style.display = "none";
  } else {
    lastNameTrue.style.display = "none";
    lastNameFalse.style.display = "block";
  }
  if (lastName.value === "") {
    lastNameTrue.style.display = "none";
    lastNameFalse.style.display = "none";
  }
};

//................................ FULL NAME VALIDATION

let fullName = document.querySelector(".user-name");

fullName.onkeyup = () => {
  let lastFullNameTrue = document.querySelector(".full-name-green");
  let lastFullNameFalse = document.querySelector(".full-name-red");

  let pattern = /\w{2,}\s\w{2,}\s\w{2,}(\s\w{2,}\s\w{2,})?/gi;

  if (fullName.value.match(pattern)) {
    lastFullNameTrue.style.display = "block";
    lastFullNameFalse.style.display = "none";
  } else {
    lastFullNameTrue.style.display = "none";
    lastFullNameFalse.style.display = "block";
  }
  if (fullName.value === "") {
    lastFullNameTrue.style.display = "none";
    lastFullNameFalse.style.display = "none";
  }
};

//................................................... EMAIL VALIDATION

let email = document.querySelector(".email");

email.onkeyup = () => {
  let emailTrue = document.querySelector(".mail-green");
  let emailFalse = document.querySelector(".mail-red");
  let pattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/gi;
  if (email.value.match(pattern)) {
    emailTrue.style.display = "block";
    emailFalse.style.display = "none";
  } else {
    emailTrue.style.display = "none";
    emailFalse.style.display = "block";
  }
  if (email.value === "") {
    emailTrue.style.display = "none";
    emailFalse.style.display = "none";
  }
};

//............................................... PASSWORD VALIDATION

let eyeSlash = document.querySelector(".fa-eye-slash");
let passwordField = document.querySelector(".pass");

eyeSlash.addEventListener("click", () => {
  if (eyeSlash.classList.contains("fa-eye-slash")) {
    eyeSlash.classList.remove("fa-eye-slash");
    eyeSlash.classList.add("fa-eye");
    passwordField.setAttribute("type", "text");
  } else {
    eyeSlash.classList.remove("fa-eye");
    eyeSlash.classList.add("fa-eye-slash");
    passwordField.setAttribute("type", "password");
  }
});

//............................................. CONFIRM PASSWORD VALIDATION

let eyeSlashConfirm = document.querySelector(".confirmation");
let passwordConfirmField = document.querySelector(".con-pass");

eyeSlashConfirm.addEventListener("click", () => {
  if (eyeSlashConfirm.classList.contains("confirmation")) {
    eyeSlashConfirm.classList.remove("fa-eye-slash");
    eyeSlashConfirm.classList.remove("confirmation");
    eyeSlashConfirm.classList.add("fa-eye");
    passwordConfirmField.setAttribute("type", "text");
  } else {
    eyeSlashConfirm.classList.remove("fa-eye");
    eyeSlashConfirm.classList.add("confirmation");
    eyeSlashConfirm.classList.add("fa-eye-slash");
    passwordConfirmField.setAttribute("type", "password");
  }
});

//................................... END FORM VALIDATION

//.............................................................. SET FORM INFO INTO SESSION STORAGE

firstName.onblur = () => {
  window.sessionStorage.setItem("First Name", firstName.value);
};

lastName.onblur = () => {
  window.sessionStorage.setItem("Last Name", lastName.value);
};

fullName.onblur = () => {
  window.sessionStorage.setItem("Full Name", fullName.value);
};

email.onblur = () => {
  window.sessionStorage.setItem("Email", email.value);
};

passwordField.onblur = () => {
  window.sessionStorage.setItem("pass", passwordField.value);
};

passwordConfirmField.onblur = () => {
  window.sessionStorage.setItem("passCon", passwordConfirmField.value);
};

//.............................. MOBILE TOGGOLE BUTTON

let bar = document.querySelector(".fa-bars");
let mobileAside = document.querySelector(".mobile-aside");

bar.addEventListener("click", () => {
  mobileAside.classList.toggle("show-mobile-aside");
});

let xMark = document.querySelector(".fa-xmark");

xMark.addEventListener("click", () => {
  mobileAside.classList.remove("show-mobile-aside");
});

//................................ END SETTING FORM INFO IN SESSION STORAGE
//.......... END JS FUNCTIONALITY ..
