//returns localStorage data at specified key as JSON format
export let getLocalStorageData = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

//method that adds data to a value in local storage
export let addToLocalStorageData = (key, dataKey, data) => {
  let localData = JSON.parse(localStorage.getItem(key));
  localData[dataKey] = data;
  localStorage.setItem(key, localData);
}

//converts JSON to string and sets local storage data at specified key
export let setLocalStorageData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}

