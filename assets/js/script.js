
function show_menu() {
  $('#show_menuitems').addClass('active');
}

function hide_menu() {
  $('#show_menuitems').removeClass('active');
}
// --------------------------------------

$(document).ready(function() {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 10000,
  autoplayHoverPause: true
  });
});

const triggerTabList = document.querySelectorAll('#myTab button')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
})
// --------------------------------------
