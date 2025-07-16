function montrerLettre() {
  const enveloppe = document.getElementById('enveloppe');
  const lettre = document.getElementById('lettre');

  // Affiche l'enveloppe
  enveloppe.style.display = 'block';

  // Redémarre l'animation de la lettre
  lettre.classList.remove('animate');
  void lettre.offsetWidth;
  lettre.classList.add('animate');
}
