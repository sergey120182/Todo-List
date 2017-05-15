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