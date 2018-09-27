
var jsonData
           $.ajax({
               url: "language/en.json",
               dataType: 'json',
               async: false,
               success: function(data) {
                   jsonData = data;
           }
           });


  // ///////////////////////////sidebar/////////////////////////////////////////
   

 $(document)
    .ready(function() {


      // fix main menu to page on passing
      $('.main_navigation').visibility({
        type: 'fixed'
      });
  // ///////////////////////////sidebar/////////////////////////////////////////
   
       $('.ui.sidebar')
        .sidebar('attach events', '.menu_icon.item')
      ;
     
 // ///////////////////////////serach dropdown/////////////////////////////////////////

$('.ui.search')
  .search({
    type: 'category'
  })
;

$('.ui.dropdown')
  .dropdown()
;
 // ///////////////////////////hover dropdown/////////////////////////////////////////
  $('.searchjob_drop')
  .dropdown({
    on: 'hover',
    action: 'hide',
     transition: 'scale'
  })
;
$('.ui.accordion')
  .accordion()
;

$('.ui.checkbox').checkbox();

 // ///////////////////////////sticky filters dropdown/////////////////////////////////////////

// $('.filters')
//   .sticky({
//     offset: 70,
//     context: '#job_filter',
//   })
// ;

 // //////////////////////////tabs menu/////////////////////////////////////////

$('.menu_tab .item').tab();


})
  ;


