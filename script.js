console.log("Started Script");
extractHostname = (url) => {
  let hostname = url.indexOf("//") > -1 ? url.split('/')[2] : url.split('/')[0];

  // find & remove port number
  hostname = hostname.split(':')[0];
  // find & remove "?"
  hostname = hostname.split('?')[0];

  return hostname;
};

// this function is storing in db
setByteLengthPerOrigin = (_dbname, origin, byteLength) => {
  const stats = localStorage.getItem(_dbname);
  const statsJson = null === stats ? {} : JSON.parse(stats);

  let bytePerOrigin = undefined === statsJson[origin] ? 0 : parseInt(statsJson[origin]);
  statsJson[origin] = bytePerOrigin + byteLength;

  localStorage.setItem(_dbname, JSON.stringify(statsJson));
};



isChrome = () => {
  return (typeof(browser) === 'undefined');
};

headersReceivedListener = (requestDetails) => {
  date = new Date()
  localStorage.setItem("now", date.getMinutes())
  if (isChrome()) {
     const origin = extractHostname(!requestDetails.initiator ? requestDetails.url : requestDetails.initiator);
     const responseHeadersContentLength = requestDetails.responseHeaders.find(element => element.name.toLowerCase() === "content-length");
     const contentLength = undefined === responseHeadersContentLength ? {value: 0}
      : responseHeadersContentLength;
     const requestSize = parseInt(contentLength.value, 10);
     setByteLengthPerOrigin('stats', origin, requestSize);

     localStorage.setItem("myEmissionHistory", JSON.stringify([localStorage.stats]))

     return {};
  }

  currentMinute = date.getMinutes();

  let filter = browser.webRequest.filterResponseData(requestDetails.requestId);

  filter.ondata = event => {
    const origin = extractHostname(!requestDetails.originUrl ? requestDetails.url : requestDetails.originUrl);
    setByteLengthPerOrigin(origin, event.data.byteLength);

    filter.write(event.data);
  };

  filter.onstop = () => {
    filter.disconnect();
  };

  return {};
};

setBrowserIcon = (type) => {
  chrome.browserAction.setIcon({path: `icons/icon-${type}-48.png`});
};

addOneMinute = () => {
  let duration = localStorage.getItem('duration');
  duration = null === duration ? 1 : 1 * duration + 1;
  localStorage.setItem('duration', duration);
};

addOneHour = () => {
  // At every three minute append stats to myEmissionHistory

  stats = JSON.parse(localStorage.getItem("stats"));

  emissionHistory = (localStorage.getItem("myEmissionHistory"))

  emissionHistory.push(stats);

  localStorage.setItem('stats', JSON.stringify({}))

  localStorage.setItem("myEmissionHistory", (emissionHistory))

}

let addOneMinuteInterval, addOneHourInterval;

handleMessage = (request) => {

  if ('start' === request.action) {
    setBrowserIcon('on');

    chrome.webRequest.onHeadersReceived.addListener(
      headersReceivedListener,
      {urls: ['<all_urls>']},
      ['responseHeaders']
    );


    if (!addOneMinuteInterval) {
      addOneMinuteInterval = setInterval(addOneMinute, 60000);
    }

    if (!addOneHourInterval){
      addOneHourInterval = setInterval(addOneHour, 10000);
    }

    return;
  }

  

  if ('stop' === request.action) {
    setBrowserIcon('off');
    chrome.webRequest.onHeadersReceived.removeListener(headersReceivedListener);

    if (addOneMinuteInterval) {
      clearInterval(addOneMinuteInterval);
      addOneMinuteInterval = null;
    }
  
    
  }
};


chrome.runtime.onMessage.addListener(handleMessage);


