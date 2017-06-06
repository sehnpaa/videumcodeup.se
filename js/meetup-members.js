(() => {
  // Fetch meetup events json from glitch app
  const api = 'https://videum-codeup-meetup-members.glitch.me/members'
  const defaultPic = 'https://secure.meetupstatic.com/s/img/6155798774261950966005/nobody_180.png';

  fetch(api)
    .then(response => response.json())
    .then(members => {
      document.querySelector(".meetup-members-container").innerHTML = members.reduce((string, member) => {
	  const pic = member.thumb_link ? member.thumb_link : defaultPic;
	  return `${string}<div class="member"><a href="${member.link}"><img src="${pic}" />${member.name}</a></div>`;
	}, "");
    });
  document.querySelector(".meetup-members").classList.remove("hide");
})()
