
export function setLocal(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
    console.log("data done")
}

export function getLocal(key) {
     let value = localStorage.getItem(key)
     let errMsg = "No key is stored with the name: " + key;
     return (key ? JSON.parse(value) : errMsg)
}