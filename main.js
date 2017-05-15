var infoStorage = JSON.parse(localStorage.getItem('list')) || [];
  function renderFromStorage () {
          $('#content').textContent = JSON.stringify(infoStorage);
                                }