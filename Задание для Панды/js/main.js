

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


//В качестве наглядности перефильтрации хотел сделать условные input, в которые мы вводим данные для таблицы и она
//перефильтруется, но почему-то (пока не разобрался) данные при фильтрации не учитываются

$('#but').click( function (e) {
  let name = $('#name').val(),
    created_by = $('#created').val(),
    date_table = $('#date').val();
  console.log(name, created_by, date_table);

  $('#myTable').append($('<tr class="content">').append($('<td>').append(name)).append($('<td>').append(created_by)).append($('<td>').append(date_table)) );


});


//Цвет меняется разово, только по клику, пока не смог придумать решение, как реализовать полностью данную задачу
  //ColorPicker
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

       // $( "#swatch" ).css( "background-color", "#" + hex );
       $('#backgroundColor').on('click', () => {

         if ($('#backgroundColor').hasClass('back')) {
           $( "#swatch" ).css( "background-color", "#" + hex );
           console.log('У элемента есть класс back');
         } else {
           console.log('Элемент не содержит класс back');
         }

       });

      $('#color').on('click',  e => {
         $( "#swatch" ).css( "color", "#" + hex );
        console.log(e.target);
      });

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






