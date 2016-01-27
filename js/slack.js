'use strict'

window.onload = function(apiKey, photoset) {

    var apiKey, photosetId;
    var form = document.getElementById("getAPIKey");
    var formContainer = document.getElementById("formContainer");

    // Use form to get user's API key for Flickr
    form.onsubmit = function(event) {
       event.preventDefault();
       stopPropagation(event);

       apiKey = document.querySelector('[name="apiKey"]').value;
       photosetId = "72157643952371695";
       requestPhotos(apiKey, photosetId);

       // Make API request and build out image links
       buildLinks(requestPhotos(apiKey, photosetId));
    };


    // Make API request from Flickr for photoset
    function requestPhotos(apiKey, photosetId) {
        var apiUrl = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=" + apiKey + "&photoset_id=" + photosetId + "&extras=url_n" + "&format=json&nojsoncallback=1";
        var xhr = new XMLHttpRequest();

        xhr.open("GET", apiUrl, false);
        xhr.send();

        // If request fails, show an error message
        var errorMessage = document.getElementById("error");

        if (xhr.readyState === 4) {
            var response = JSON.parse(xhr.response);
            if (response.stat === "fail") {
                fadeIn(errorMessage);
                setTimeout(function() {
                    fadeOut(errorMessage);
                }, 3000);
            } else {
                form.style.display = "none";
                formContainer.style.display = "none";
                errorMessage.style.display = "none";
            }
        }

        return JSON.parse(xhr.response);
    }


    // Fade in/out helper functions
    function fadeOut(el) {
      el.style.opacity = 1;

      (function fade() {
        if ((el.style.opacity -= .1) < 0) {
          // el.style.display = 'none';
          el.style.opacity = 0;
          el.classList.add('is-hidden');
        } else {
          requestAnimationFrame(fade);
        }
      })();
    }

    // fade in

    function fadeIn(el, display) {
      if (el.classList.contains('is-hidden')){
        el.classList.remove('is-hidden');
      }
      el.style.opacity = 0;
      el.style.display = display || "block";

      (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
          el.style.opacity = val;
          requestAnimationFrame(fade);
        }
      })();
    }



    // Flickr API allows you to request images that have been presized.
    // Use these images to build out the lightbox so we don't have to do
    // extra image processing
    function requestSizes(photoId) {
        var apiUrl = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" + apiKey + "&photo_id=" + parseInt(photoId) + "&format=json&nojsoncallback=1&"
        var xhr = new XMLHttpRequest();

        xhr.open("GET", apiUrl, false);
        xhr.send();
        return JSON.parse(xhr.response);
    }


    // Take API response data and build out the images and put them in the DOM
    function buildLinks(data) {
        // Take our photoset object
        var photodata = data.photoset.photo;

        // Loop through and build out an object to pass through to render()
        for (var i = 0; i < photodata.length; i++) {
            // Save previous and next image ids as data-attributes
            var prev = '';
            var next = '' ;

            if (i > 0) {
                prev = photodata[i-1].id;
            }

            if (i < (photodata.length-1)) {
                next = photodata[i+1].id;
            }

            // "n" is a "normal" sized image Flickr returns to us
            var sizeurl = "url_n";
            var sizeheight = "height_n";
            var sizewidth = "width_n";

            var id = photodata[i].id;
            var title = photodata[i].title;
            var imgUrl = photodata[i][sizeurl];
            var height = photodata[i][sizeheight];
            var width = photodata[i][sizewidth];

            // Render images in the DOM
            render(id, title, imgUrl, height, width, prev, next);
        }
    }


    // Render images in the DOM and add custom data-attributes so we can
    // keep track of previous and next images for the lightbox functionality
    function render(id, title, imgUrl, height, width, prev, next) {
        var imgContainer = "<div id='" + id + "' class='thumb col-md-3' data-title='" + title + "' data-previous='" + prev + "' data-next='"+ next + "' style='background-repeat: no-repeat; position: relative; max-width:" + width + "px; width: 100%; height:" + height + "px;'><img src='" + imgUrl + "'/></div>";
        document.getElementById("container").innerHTML += imgContainer;
    }


    // Helper function to bind an event listener to the children of the parent
    // element that was clicked. This prevents excessive event binding and frees
    // up memory
    function handleSelect(event) {
        if (event.target !== event.currentTarget) {
            startLightBox(event.target.parentElement.id);
        }

        // Prevent the event from bubbling back up the DOM
        stopPropagation(event);
    }


    // Helper function to get the current clicked element and check its
    // data attributes for the previous image's ID and open the lightbox with
    // the previous image
    function handlePrev() {
        var current = document.getElementsByClassName("current")[0];
        var previous = current.getAttribute("data-previous");

        startLightBox(previous);
    }


    // Helper function to get the current clicked element and check its
    // data attributes for the next image's ID and open the lightbox with
    // the next image
    function handleNext() {
        var current = document.getElementsByClassName("current")[0];
        var next = current.getAttribute("data-next");

        startLightBox(next);
    }


    // Cross browser helper function to stop element from propagating back up
    // the DOM
    function stopPropagation(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        else {
            event.returnValue = false;
        }
    }


    // Main function that opens the lightbox
    function startLightBox(id) {
        // Find any instance of class of "current" and remove it
        if (document.getElementsByClassName("current").length > 0) {
            var previouslySelected = document.getElementsByClassName("current")[0];
            previouslySelected.className = previouslySelected.className.replace( /(?:^|\s)current(?!\S)/g , '' )
        }

        // Set "current" to be our selected element by id.
        // This helps us keep track of our state when we are moving previous and next
        var current = document.getElementById(id);
        current.className += " current";

        // Use Flickr's image titles as our image captions
        var title = document.getElementById("caption");
        title.innerHTML = current.getAttribute("data-title");

        // Make API call to find all the sizes and urls of our selected image
        // and get the large image
        var sizes = requestSizes(id);
        var largeImg = sizes.sizes.size[8];

        // Create our lightbox, background, and container
        var lightboxBackground = document.getElementById("lightBoxBg");
        var lightBox = document.getElementById("lightBox");
        var lightBoxContainer = document.getElementById("lightBoxContainer");
        var body = document.body;
        var html = document.documentElement;
        var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

        lightboxBackground.style.height = height + "px";
        lightboxBackground.style.display = "block";
        lightBox.style.display = "block";
        lightBox.style.height = largeImg.height + "px";
        lightBox.style.width = largeImg.width + "px";
        lightBox.style.backgroundImage = "url('" + largeImg.source + "')";
        lightBoxContainer.style.display = "flex";
        lightBoxContainer.style.height = "flex";

        // Add keyboard listeners to move through lightbox images or close on escape
        document.addEventListener("keydown", shortcutKeys, false);

        // Click background to close lightbox
        lightBoxContainer.addEventListener("click", dismiss);
        // Prevent propagation to children when clicking parent lightBoxContainer
        lightBox.addEventListener("click", function(event) {
           stopPropagation(event);
        });
    }


    // Helper function to add keyboard shortcuts to lightbox for previous, next, and close
    function shortcutKeys(event) {
        stopPropagation(event);

        if (event.keyCode === 39) {
            handleNext();
        } else if (event.keyCode === 37) {
            handlePrev();
        } else if (event.keyCode === 27) {
            dismiss();
        }
    }


    // Closes lightbox
    function dismiss() {
        var lightBoxBackground = document.getElementById("lightBoxBg");
        var lightBox = document.getElementById("lightBox");
        var lightBoxContainer = document.getElementById("lightBoxContainer");

        lightBoxBackground.style.display = "none";
        lightBox.style.display = "none";
        lightBoxContainer.style.display = "none";
    }


    // Add event listener to all the children elements of the container (images)
    var container = document.querySelector("#container");
    container.addEventListener("click", handleSelect, false);

    // Add event listener to our previous and next arrows
    document.getElementById("previous").addEventListener("click", handlePrev, false);
    document.getElementById("next").addEventListener("click", handleNext, false);

}
