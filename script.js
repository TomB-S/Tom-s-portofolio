// @ts-nocheck
function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  // @ts-ignore
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here
    showPopup(true);
    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    // @ts-ignore
    element.innerHTML =
      "<span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span>";
    // Add this element to the end of the list of recommendations
    // @ts-ignore
    document.getElementById("all_recommendations").appendChild(element);

    // Reset the value of the textarea
    // @ts-ignore
    recommendation.value = "";
  }
}

// @ts-ignore
function showPopup(bool) {
  if (bool) {
    // @ts-ignore
    document.getElementById("popup").style.visibility = "visible";
  } else {
    // @ts-ignore
    document.getElementById("popup").style.visibility = "hidden";
  }
}
