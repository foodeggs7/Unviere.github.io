function opentab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabs-parallel" and hide them
  tabcontent = document.getElementsByClassName("tabs-settings");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks-parallel" and remove the class "active"
  tablinks = document.getElementsByClassName("tabs-navigation");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("styles").click();
});
