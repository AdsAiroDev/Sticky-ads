(function() {
  // Create container
  const stickyContainer = document.createElement('div');
  stickyContainer.id = 'StickyAd728x100';
  stickyContainer.style.cssText = 'width:728px; height:100px; border:1px solid #d3d3d3; border-radius:6px; overflow:hidden; position:fixed; bottom:20px; left:50%; transform:translateX(-50%); z-index:9999; font-family:Arial,sans-serif; background:#f9f9f9; box-shadow:0 2px 8px rgba(0,0,0,0.2);';

  // Icons Container
  const iconsContainer = document.createElement('div');
  iconsContainer.style.cssText = 'position:absolute; top:6px; right:6px; display:flex; gap:0px; align-items:center; z-index:10;';

  // Info Icon
  const infoBox = document.createElement('div');
  infoBox.title = 'Ad Info';
  infoBox.style.cssText = 'cursor:pointer; width:22px; height:22px; display:flex; align-items:center; justify-content:center; background:#ffffff; border-radius:4px; box-shadow:0 1px 2px rgba(0,0,0,0.2);';
  infoBox.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="12" height="12"><path fill="#1a73e8" d="M7.5,1.5a6,6,0,1,0,0,12a6,6,0,1,0,0,-12m0,1a5,5,0,1,1,0,10a5,5,0,1,1,0,-10ZM6.625,11l1.75,0l0,-4.5l-1.75,0ZM7.5,3.75a1,1,0,1,0,0,2a1,1,0,1,0,0,-2Z"/></svg>';
  infoBox.onclick = showAdFeedback;

  // Close Icon
  const closeBox = document.createElement('div');
  closeBox.title = 'Close Ad';
  closeBox.style.cssText = 'cursor:pointer; width:22px; height:22px; display:flex; align-items:center; justify-content:center; background:#ffffff; border-radius:4px; box-shadow:0 1px 2px rgba(0,0,0,0.2); margin-left:4px;';
  closeBox.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="12" height="12"><path d="M3.25,3.25l8.5,8.5M11.75,3.25l-8.5,8.5" stroke="#1a73e8" stroke-width="1.5" fill="none"/></svg>';
  closeBox.onclick = showAdFeedback;

  iconsContainer.appendChild(infoBox);
  iconsContainer.appendChild(closeBox);

  // Ad Image Link
  const adLink = document.createElement('a');
  adLink.href = 'https://www.pskathait.com/p/google-search-result-preview-tool.html';
  adLink.target = '_blank';
  adLink.style.cssText = 'display:block; height:100%; width:100%;';

  const adImage = document.createElement('img');
  adImage.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQ672qkf6MdloXKEb1_UWvH_pIa_sxBy09S0leogdkBdkEQLxWhPSBklf83rvY6pnpFijogM1nUOSoww0jLkkJsLPe3uYZLkdKk_Jg2VpDIg0dp19Xz9LLRGPVVknfDRmNGKLDUGt3eyNBrVh9Ji5OADA6pbv8sYFlUWaP6mjh9b0EOaV2aASkS3NsKS4/s1600/Google%20Search%20Result%20Preview.gif';
  adImage.alt = 'Ad';
  adImage.style.cssText = 'width:100%; height:100%; object-fit:cover;';

  adLink.appendChild(adImage);

  stickyContainer.appendChild(iconsContainer);
  stickyContainer.appendChild(adLink);

  document.body.appendChild(stickyContainer);

  // Feedback Box
  const feedbackBox = document.createElement('div');
  feedbackBox.id = 'adFeedbackBox';
  feedbackBox.style.cssText = 'display:none; width:728px; border:1px solid #d3d3d3; border-radius:6px; font-family:Arial,sans-serif; padding:10px; background:#fff; font-size:13px; color:#444; text-align:center; position:fixed; bottom:20px; left:50%; transform:translateX(-50%); z-index:10000;';
  feedbackBox.innerHTML = `
    <div id="adsByLogo" style="margin-bottom:10px; display:flex; align-items:center; justify-content:center; gap:6px; color:#000; font-weight:bold;">
      <span>Ads by</span>
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIzRgJuKvuTYOG6Q68jUzJPekP3kMeqrxN2qPnKXhES0XgBVFQeMR3hglGO9QwXoQd_CIZbmvRr6ywPfETsd9zKTejLz16z9zMiS9Slij150GzouxjHTjyfVv6uXmcbttDAPMv6maWSMOa9vyi7LppUYgmwM1BWinbXHvEj0-LMJXqwlNhoivw6UTKKnrL/s1600/PSKathait_dark.png" alt="logo" style="width:65px; height:auto;">
    </div>
    <div id="feedbackButtons" style="display:flex; justify-content:center; gap:10px; margin-bottom:15px;">
      <a href="#" onclick="showFeedbackOptions(); return false;" style="background-color:#4285f5; color:#fff; padding:6px 12px; border-radius:4px; text-decoration:none; font-weight:bold; box-shadow:0 1px 3px rgba(0,0,0,0.2);">Send feedback</a>
      <a href="https://www.adsairo.com/p/about-this-ad.html" target="_blank" style="background-color:#fff; color:#9e9ea6; padding:6px 12px; border-radius:4px; text-decoration:none; display:flex; align-items:center; gap:4px; box-shadow:0 1px 3px rgba(0,0,0,0.2);">
        <span>Why this ad?</span>
        <div style="width:16px; height:16px; display:flex; align-items:center; justify-content:center; background:#ffffff; border-radius:4px; box-shadow:0 1px 2px rgba(0,0,0,0.2);">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="12" height="12"><path d="M7.5,1.5a6,6,0,1,0,0,12a6,6,0,1,0,0,-12m0,1a5,5,0,1,1,0,10a5,5,0,1,1,0,-10ZM6.625,11l1.75,0l0,-4.5l-1.75,0ZM7.5,3.75a1,1,0,1,0,0,2a1,1,0,1,0,0,-2Z"></path></svg>
        </div>
      </a>
    </div>
    <div id="feedbackOptions" style="display:none; justify-content:center; align-items:center; gap:10px; padding:10px;">
      <div onclick="handleFeedbackClick()" style="cursor:pointer; text-align:center; width:30%; background:#f1f3f4; padding:6px 0; border-radius:4px;">Not interested in this ad</div>
      <div onclick="handleFeedbackClick()" style="cursor:pointer; text-align:center; width:30%; background:#f1f3f4; padding:6px 0; border-radius:4px;">Ad was inappropriate</div>
      <div onclick="handleFeedbackClick()" style="cursor:pointer; text-align:center; width:30%; background:#f1f3f4; padding:6px 0; border-radius:4px;">Seen this ad multiple times</div>
    </div>
    <div id="feedbackThanks" style="display:none; text-align:center; padding-top:10px; font-size:16px; font-weight:bold; color:#444;">Thanks. Feedback improves AdsAiro ads</div>
    <div id="adClosedBy" style="display:none; text-align:center; padding-top:10px; font-size:16px; color:#888;">Ad closed by<br><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIzRgJuKvuTYOG6Q68jUzJPekP3kMeqrxN2qPnKXhES0XgBVFQeMR3hglGO9QwXoQd_CIZbmvRr6ywPfETsd9zKTejLz16z9zMiS9Slij150GzouxjHTjyfVv6uXmcbttDAPMv6maWSMOa9vyi7LppUYgmwM1BWinbXHvEj0-LMJXqwlNhoivw6UTKKnrL/s1600/PSKathait_dark.png" style="width:60px;height:auto;"></div>
  `;

  document.body.appendChild(feedbackBox);

  // Functions
  window.showAdFeedback = function() {
    stickyContainer.style.display = 'none';
    feedbackBox.style.display = 'block';
  }

  window.showFeedbackOptions = function() {
    document.getElementById('feedbackOptions').style.display = 'flex';
    document.getElementById('feedbackButtons').style.display = 'none';
    document.getElementById('adsByLogo').style.display = 'none';
  }

  window.handleFeedbackClick = function() {
    const thanks = document.getElementById('feedbackThanks');
    const closedBy = document.getElementById('adClosedBy');
    document.getElementById('feedbackOptions').style.display = 'none';
    thanks.style.display = 'block';
    setTimeout(() => {
      thanks.style.display = 'none';
      closedBy.style.display = 'block';
    }, 1500);
    setTimeout(() => {
      feedbackBox.style.display = 'none';
    }, 4000);
  }
})();
