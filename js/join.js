window.onload = function () {
  const win = window,
    winType = "_self",
    platformReferal = document.referrer,
    defaultPage = "http://moaa.mars.hzdesign.com",
    facebookCTA =
      "https://ebiz.moaa.org/PersonifyEbusiness/Default.aspx?tabId=153&utm_source=facebookShare&utm_medium=landingPagePremium&utm_campaign=fightingwords_premium_2018_shareLink",
    twitterCTA =
      "https://ebiz.moaa.org/PersonifyEbusiness/Default.aspx?tabId=153&utm_source=twitterShare&utm_medium=landingPagePremium&utm_campaign=fightingwords_premium_2018_shareLink",
    linkedinCTA =
      "https://ebiz.moaa.org/PersonifyEbusiness/Default.aspx?tabId=153&utm_source=linkedinShare&utm_medium=landingPagePremium&utm_campaign=fightingwords_premium_2018_shareLink";

  function processRedirect(platform) {
    let rgExFacebook = /\bfacebook\b/g,
      rgExTwitter = /\bt\b\.\bco\b/g,
      rgExLinkedin = /\blinkedin\b/g;

    if (platform.match(rgExFacebook)) {
      callToActionURL = facebookCTA;
    } else if (platform.match(rgExTwitter)) {
      callToActionURL = twitterCTA;
    } else if (platform.match("") || platform.match(rgExLinkedin)) {
      callToActionURL = linkedinCTA;
    } else {
      callToActionURL = defaultPage;
    }

    win.open(callToActionURL, winType);
  }

  processRedirect(platformReferal);
};
