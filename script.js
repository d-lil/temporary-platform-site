
function enlargeImage(imgElement) {
    var modal = document.getElementById("image-modal");
    var modalImg = document.getElementById("modal-image");
  

    modal.style.display = "block";
    modalImg.src = imgElement.src;
  }
  

  function closeModal() {
    var modal = document.getElementById("image-modal");
    modal.style.display = "none";
  }
  

  window.onclick = function(event) {
    var modal = document.getElementById("image-modal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  