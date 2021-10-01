window.onload = function () {
  const win = window;

  const ctaLinks = document.querySelectorAll(".cta-social-bar li a"),
    elm = document.querySelectorAll(".cta-social-icon a");

  const modalUrls = {
    email:
      "mailto:?subject=A%20fellow%20officer%20has%20referred%20you%20to%20MOAA.%20Will%20you%20fight%20with%20us?&body=The%20battle%20for%20your%20benefits%20is%20heating%20up%20on%20Capitol%20Hill%2C%20and%20MOAA%20could%20always%20use%20a%20little%20extra%20backup.%20By%20joining%20MOAA%20at%20http%3A%2F%2Fbit.ly%2F2FK4OmL%20you%E2%80%99ll%20be%20giving%20them%20an%20even%20louder%20voice%20on%20our%20behalf.%20If%20you%E2%80%99re%20already%20a%20MOAA%20member%2C%20take%20your%20commitment%20to%20the%20next%20level%20by%20upgrading%20to%20a%20PREMIUM%20Membership%20for%20just%20%243.60%20a%20month%20at%20http%3A%2F%2Fbit.ly%2F2pgXKqK.%20Already%20a%20PREMIUM%20member%3F%20Fight%20beside%20us%20forever%20with%20a%20LIFE%20Membership%20at%20http%3A%2F%2Fbit.ly%2F2piNluL.%20Visit%20http%3A%2F%2Fbit.ly%2F2FG63Ym%20to%20learn%20more%20about%20PREMIUM%20benefits%20like%20career%20transition%20resources%20and%20expert%20advice%20on%20military%20pay%20and%20find%20out%20how%20we%20can%20help%20strengthen%20your%20everyday%20life%20while%20you%20help%20strengthen%20our%20fight%20on%20Capitol%20Hill.%20Use%20promotional%20code%20FIGHTISON18%20for%2010%25%20of%20your%20membership.",
    facebook:
      "https://www.facebook.com/sharer/sharer.php?u=http://moaa.mars.hzdesign.com/join.html",
    twitter:
      "https://twitter.com/intent/tweet?text=Fight%20With%20Us.+http://moaa.mars.hzdesign.com/join.html",
    linkedin:
      "https://www.linkedin.com/shareArticle?mini=true&url=http://moaa.mars.hzdesign.com/join.html&title=Fight%20With%20Us.%20Fellow%20officers%2C%20join%20MOAA%20as%20a%20PREMIUM%20annual%20member%20to%20give%20them%20more%20strength%20in%20the%20fight%20for%20our%20benefits%20on%20Capitol%20Hill.",
    error: "/",
  };

  function setCtaUrl(ctas, links) {
    ctas[0].setAttribute("href", links.email);
    ctas[1].setAttribute("href", links.facebook);
    ctas[2].setAttribute("href", links.twitter);
    ctas[3].setAttribute("href", links.linkedin);
  }

  function setCtaActions(ctaButtons) {
    for (let ctaButton in ctaButtons) {
      ctaButtons[ctaButton].addEventListener("click", socialModal, false);
    }
  }

  function socialModal(event) {
    event.preventDefault();
    let currentSelection = event.target.getAttribute("class"),
      currentShare = "/";

    let modalTop = "0",
      modaLeft = "0",
      modalWidth = "976",
      modalHeight = "695",
      winType = "_blank",
      winWidth = window.outerWidth,
      winHeight = window.outerHeight,
      defaultSpecs = "toolbar=no,scrollbars=no,resizable=no";

    let finalSpecs = "";

    switch (currentSelection) {
      case "email":
        currentShare = modalUrls.email;
        winType = "_self";
        break;

      case "facebook":
        currentShare = modalUrls.facebook;
        (modalWidth = "620"), (modalHeight = "612");
        break;

      case "twitter":
        currentShare = modalUrls.twitter;
        (modalWidth = "620"), (modalHeight = "250");
        break;

      case "linkedin":
        currentShare = modalUrls.linkedin;
        break;

      default:
        currentShare = modalUrls.error;
    }

    modalTop = (winHeight - modalHeight) / 2 + 20;
    modaLeft = (winWidth - modalWidth) / 2;

    win.open(
      currentShare,
      winType,
      defaultSpecs +
        ",top=" +
        modalTop +
        ",left=" +
        modaLeft +
        ",width=" +
        modalWidth +
        ",height=" +
        modalHeight
    );
  }

  setCtaUrl(elm, modalUrls);
  setCtaActions(ctaLinks);
};
