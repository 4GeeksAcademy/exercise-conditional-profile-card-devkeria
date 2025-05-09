window.onload = function() {
  // Initial variables setup
  const variables = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "position-left",
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };

  // Function to render the profile card
  function render(variables) {
    console.log("Rendering with variables:", variables);

    let cover = variables.includeCover
      ? `<div class="cover"><img src="${variables.background}" /></div>`
      : "<div class='cover'></div>";

    document.querySelector("#profile-card").innerHTML = `
      <div class="widget">
        ${cover}
        <img src="${variables.avatarURL}" class="photo" />
        <h1>${variables.name || "First Name"} ${variables.lastName ||
      "Last Name"}</h1>
        <h2>${variables.role || "Role"}</h2>
        <h3>${variables.city || "City"}, ${variables.country || "Country"}</h3>
        <ul class="${variables.socialMediaPosition}">
          <li><a href="${
            variables.twitter ? "https://twitter.com/" + variables.twitter : "#"
          }"><i class="fab fa-twitter"></i></a></li>
          <li><a href="${
            variables.github ? "https://github.com/" + variables.github : "#"
          }"><i class="fab fa-github"></i></a></li>
          <li><a href="${
            variables.linkedin
              ? "https://linkedin.com/in/" + variables.linkedin
              : "#"
          }"><i class="fab fa-linkedin"></i></a></li>
          <li><a href="${
            variables.instagram
              ? "https://instagram.com/" + variables.instagram
              : "#"
          }"><i class="fab fa-instagram"></i></a></li>
        </ul>
      </div>
    `;
  }

  // Initial render
  render(variables);

  // Add event listeners to update the profile card on input change
  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let value = this.value;

      // Convert value to appropriate type
      if (value === "true") value = true;
      else if (value === "false") value = false;
      else if (value === "") value = null;

      variables[attribute] = value;
      render(variables);
    });
  });
};
