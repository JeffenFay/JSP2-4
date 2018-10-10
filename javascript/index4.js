//mise à zéro du formulaire via l'id du formulaire
function resetForm() {
  //Récupération des éléments par leur type
  var tags = document.getElementsByTagName('input');
  //Boucle pour parcourir tout les input
  for(i = 0; i < tags.length; i++) {
    tags[i].value = '';
  }
};
