const renderNewListings = () => {
  return $('.main-content').append(`
  <h1 class="new-title">New Listing</h1>
    <form method="POST" class="listing-inputs">
      <section class="row1">
      <label class="labels">
        <input type="text" name="text" placeholder="Product Name">
      </label>
        </input>
      <label class="labels">
        <input type="text" name="text" placeholder="Sub-Image 2">
        </label>
        </input>
    </section>
    <section class="row1">
      <label class="labels">
        <input type="text" name="text" placeholder="Price">
      </label>
        </input>
      <label class="labels">
        <input type="text" name="text" placeholder="Sub-Image 3">
        </label>
        </input>
    </section>
<section class="row1">
      <label class="labels">
        <input type="text" name="text" placeholder="Sub-Image 1">
      </label>
        </input>
      <label class="labels">
        <input type="text" name="text" placeholder="Sub-Image 4">
        </label>
        </input>
    </section>
<section class="row1">
      <label class="labels">
        <div class="custom-select">
         <select>
           <option value="0"> Select Category:</option>
                              <option value="1"> Phone </option>
                              <option value="2"> Computer </option>
                              <option value="3"> T.V </option>
                              <option value="4"> Camera </option>
                              <option value="5"> Video Games </option>
                              <option value="6"> Music </option>
                              <option value="7"> Printer </option>
                              <option value="8"> Tablet </option>
                              <option value="9"> Laptop </option>
                              <option value="10"> Accessories </option>
                              <option value="11"> Monitor </option>
                            </select>
                          </div>
                        </label>
      </label>
        </input>
      <label class="labels">
        <div class="custom-select">
    <select>
      <option value="0"> Select Condition: </option>
      <option value="1"> Very Bad </option>
      <option value="2"> Bad </option>
      <option value="3"> Good </option>
      <option value="4"> Very Good </option>
      <option value="5"> Excellent </option>
      <option value="6"> Brand-new </option>
    </select>
  </div>
        </label>
        </input>
    </section>
<input type="text" name="text" placeholder="Main Image" class="second-last">
</input>
  <label class="last-label">

    <input class="description-input" type="text" name="text" placeholder="Description">
</label>
</input>
      </form>`)
}



$(() => {
  $('.new-listing_button').click(() => {
    $('.main-content').empty();
    renderNewListings();
    $(document).ready(function() {
      $(".description-input").on("keyup", function () {
        let newCounter = 400 - this.value.length;
        const search = $(this).closest("form").find(".counter")
        search.val(newCounter);
        if (newCounter < 0) {
          // keeping this temporarily, can formulate error messages in main client js.
          alert("Too Long!!")
        }
      })
    })
  })

})
