// document.addEventListener('DOMContentLoaded', function () {

//   let blockedList = []; //stores blocked websites
//   chrome.storage.sync.get('blockedWebsites', function (data) {
//     //chrome.storage.sync = chrome api that allows extension to use data
//     //has get and set methods to use data
//     if (data.blockedWebsites) {
//       blockedList = data.blockedWebsites;
//     } else {
//       blockedList = []
//     }

//     blockedList.forEach(website => {
//       addWebsiteToList(website) //iterate over blocked list to add each website
//     })
//   })
// })

// //now add an event listener for when the add button is clicked
// document.getElementById("add").addEventListener("click", function () {
//   const userInput = document.getElementById("website") //gets the website url from the html page
//   const websiteUrlText = userInput.value.trim() //trims down the text (value)
//   if (websiteUrlText) {
//     //add new website to blockedList arr
//     blockedList.push(websiteUrlText)
//     //"set" method to chrome.storage to save the new key value pair?
//     chrome.storage.sync.set({ 'blockedWebsites': blockedList }, function () {
//       console.log("Cursed site added!")
//     })
//     addWebsiteToList(websiteUrlText);
//     document.getElementById("website").reset();
//   }
// })

// //create a function that creates an HTML list, set it to the website url, and add it to our unordered list
// function addWebsiteToList(website) {
//   const li = document.createElement("li") //creates a new element that is an HTML <li> (list)
//   li.textContent = website //sets HTML text inside the element to the website url
//   document.getElementById('blockedList').appendChild(li) //adds the new website to the list displayed on the site
// }

