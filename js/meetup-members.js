// Twine state object that will be populated with events
var context = {};

(() => {
  // Fetch meetup events json from glitch app
  const api = 'https://videumcodeup-meetup-members.glitch.me'

  fetch(api)
    .then(response => response.json())
    .then(members => {
      document.querySelector(".meetup-members-container").innerHTML =
        members.reduce((string, member) => {
	  return `${string}<div class="member"><a href="${member.link}"><img src="${member.thumb_link}" />${member.name}</a></div>`;
	}, "");
    });
})()
