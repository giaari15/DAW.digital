// Get the gallery box
var imageBox1 = document.getElementById("flyer");

// Get the modal image tag
var modal = document.getElementById("myModal");

var modalImage = document.getElementById("modal-image");

var span = document.getElementsByClassName("close")[0];

// When the user clicks the big picture, set the image and open the modal
imageBox1.onclick = function (e) {
  var src = e.srcElement.src;
  modal.style.display = "block";
  modalImage.src = src;
};

span.onclick = function () {
    modal.style.display = "none";
  };