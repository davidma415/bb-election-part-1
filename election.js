document.addEventListener("DOMContentLoaded", function() {
  var candidateButton = document.getElementById('button1')
  candidateButton.addEventListener('click', returnCandidates);

  function returnCandidates() {
    $.ajax({
      url: 'https://bb-election-api.herokuapp.com/',
      method: 'GET',
      data: {},
      dataType: 'json'
    }).done(function(responseData) {
      var listCandidates = document.getElementById('candidates-list')
      for (var i = 0; i < responseData.candidates.length; i++) {
        listItem = document.createElement('li');
        listItem.innerHTML = 'Name: ' + responseData.candidates[i].name + ' Votes: ' + responseData.candidates[i].votes;
        listCandidates.append(listItem);
      }
    });
  }
});
