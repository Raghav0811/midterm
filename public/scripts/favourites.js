const renderFavouritesPage = () => {
  return $('.main-content').append(`
  <section class="favourites-body">
  <h1 class="title">Favourites</h1>
  <div class="boxes"><img class="img-favourites" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Arduino_ftdi_chip-1.jpg/1920px-Arduino_ftdi_chip-1.jpg">
    <p class="information"> information </p>
    <ul class="ul-favourites">
      <li> text 1 </li>
      <li> text 2 </li>
      <li> text 3 </li>
      <li> text 4 </li>
    </ul>
    <form method="POST" class="text"> Message User:
        <input type="message" name= "message" placeholder="Type Message..."> </input>
        <button type="submit">Submit </button>
    </form>

  </div>
  <div class="boxes">
    <img class="img-favourites" src="https://www.online-tech-tips.com/wp-content/uploads/2019/12/electronic-gadgets.jpeg">
    <p class="information">Favourite box 2 </p>
    <ul class="ul-favourites">
      <li>text 1</li>
      <li>text 2</li>
      <li>text 3</li>
      <li>text 4</li>
    </ul>
    <form method="POST" class="text"> Message User:
        <input type="message" name= "message" placeholder="Type Message..."> </input>
        <button type="submit">Submit </button>
    </form>
</div>
</section>`
  )
}

$(() => {
  $('.favourites-button').click(() => {
    $('.main-content').empty();
    renderFavouritesPage();
  })
})
