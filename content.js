alert('Extension is runnin ');
const container = document.getElementsByClassName('video-ads ytp-ad-module')[0];

const observer = new MutationObserver(() => {
  //get the element button
  const skipButton = document.getElementsByClassName(
    'ytp-ad-skip-button ytp-button',
  )[0];
  if (skipButton) {
    //click the button to skip the ad
    skipButton.click();
  }
});

observer.observe(container, { childList: true });
alert('Extension is runnin 1');
