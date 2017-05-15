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
         var newDiv = document.createElement("div");
              newDiv.setAttribute("id","dialog");
              var d = new Date();
              var month = d.getMonth() + 1;
              month = (month< 10) ? '0' + month : month;
              var day =   d.getDate();
              var year =  d.getFullYear();
              var time1 = d.getUTCHours();
              var time2 = d.getUTCMinutes();
              time2 = (time2< 10) ? '0' + time2 : time2;
              var time3 = d.getUTCSeconds();
              time3 = (time3< 10) ? '0' + time3 : time3;
              var date = day + '/' + month + '/' + year + '<br>' + time1 + ':' + time2 + ':' + time3;
              newDiv.innerHTML = inp.val()+" "+ date;
             $("#content").append(newDiv);
             
       inp.val('');});

   $(function() {
            $( "#opener" ).button();
            $( "#opener" ).buttonset();
         });                                                              