

//Pagination
$(function($) {
  // Consider adding an ID to your table
  // incase a second table ever enters the picture.
  let items = $("table tbody tr"),
      numItems = 250,
      perPage = 50;

  // Only show the first 3 (or first `per_page`) items initially.
  items.slice(perPage).hide();

  // Now setup the pagination using the `.pagination-page` div.
  $(".pagination-page").pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: '<',
    nextText: '>',

    // This is the actual page changing functionality.
    onPageClick: function(pageNumber) {
      // We need to show and hide `tr`s appropriately.
      let showFrom = perPage * (pageNumber - 1),
          showTo = showFrom + perPage;

      // We'll first hide everything...
      items.hide()
        // ... and then only show the appropriate rows.
        .slice(showFrom, showTo).show();
    }
  });

});



//Filtration

    $("#myInput").on("keyup", function () {

        let value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });

    });



//Sort table
$(function() {

  // initial sort set using sortList option
  $("#domainsTable").tablesorter({
    // sort on the first column and second column in ascending order
    sortList: [[0, 0], [1, 0]]
  });

});



  //ColorPicker

  let toogleColorBut;
  $('#backgroundColor').on('click', () => {
    
    $('.back').addClass('ui-state-active');
    $('.color').removeClass('ui-state-active');
    toogleColorBut = true;
    console.log('background-click');
    

  });

  $('#color').on('click',  () => {
    $('.color').addClass('ui-state-active');
    $('.back').removeClass('ui-state-active');
    toogleColorBut = false;
    console.log('color-click');

 });

  $( function() {
    function hexFromRGB(r, g, b) {
      let hex = [
        r.toString( 16 ),
        g.toString( 16 ),
        b.toString( 16 )
      ];
      $.each( hex, function( nr, val ) {
        if ( val.length === 1 ) {
          hex[ nr ] = "0" + val;
        }
      });
      return hex.join( "" ).toUpperCase();
    }
    function refreshSwatch() {
      let red = $( "#red" ).slider( "value" ),
        green = $( "#green" ).slider( "value" ),
        blue = $( "#blue" ).slider( "value" ),
        hex = hexFromRGB( red, green, blue );

        if (toogleColorBut == true) {
          $( "#swatch" ).css( "background-color", "#" + hex );
          console.log('background-color');
        } else {
          $( "#swatch" ).css( "color", "#" + hex );
          console.log('color');
        }

       
    }

    $( "#red, #green, #blue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch
    });

    $( "#red" ).slider( "value", 255 );
    $( "#green" ).slider( "value", 140 );
    $( "#blue" ).slider( "value", 60 );
  } );






