const PageScrollIndicator = PageScrollIndicator || {};

PageScrollIndicator.createProgressBar = function(progressBarLocation, contentToTrack) {
  
  // Create the container div
  const $progressContElement = $("<div id='progress-cont'></div>");

  // Create the progress bar itself
  const $progressBarElement = $("<div id='progress-bar'></div>");
  $progressBarElement.css("width", "0%");

  $progressContElement.append($progressBarElement);

  const $locationObject = $(progressBarLocation);
  $locationObject.prepend($progressContElement);

  // Event handler that updates the width of the progress bar based
  // on how far the contentToTrack elemt has been scrolled
  $(window).scroll(function(e){
    const pageHeight = $(window).height();
    const $container = $(contentToTrack);

    // Adjusted height
    const adjustedHeight = $container.innerHeight() - pageHeight;
    const progress = (($(window).scrollTop() / adjustedHeight) * 100);
    $progressBarElement.css("width", progress + "%");
  });
}