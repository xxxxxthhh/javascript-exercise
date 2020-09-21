function fetchData(url, successCallback, errorCallback) {
  const xhr = new XMLHttpRequest();
  // <-- start
  // TODO 21: 通过XMLHttpRequest实现异步请求
  xhr.open('Get', url);
  xhr.send();

  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) {
      errorCallback(xhr.statusText);
    }
    if (xhr.status >= 200 && xhr.status < 300) {
      successCallback(xhr.statusText);
    } else {
      errorCallback(xhr.statusText);
    }
  };
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(
  URL,
  result => {
    document.writeln(JSON.parse(result).name);
  },
  error => {
    console.error(error);
  }
);
