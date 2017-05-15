var infoStorage = JSON.parse(localStorage.getItem('list')) || [];
  function renderFromStorage () {
          $('#content').textContent = JSON.stringify(infoStorage);
                                }
 var addTask = function(){
       var newVal = $("#text").val();
       var newElement = {
         key1 : newVal
                        };
              infoStorage.push(newVal);
              localStorage.setItem('list', JSON.stringify(infoStorage));

                               }
 $('#opener').on('click', addTask);
      var inp = $('#text');
      var inp1 = $('#opener');
      inp1.on('click',
      function myFunction(addTask){
              $(function() {
              $( "#dialog" ).dialog({
                        autoOpen: true,
                        show: {
                               effect: "blind",
                               duration: 1000,
                               },
      
                        hide: {
                               effect: "explode",
                               duration: 1000,
                              }
      
    });
 
      $( "#opener" ).click(function() {
      $( "#dialog" ).dialog('instance');
     });
     });                                                              