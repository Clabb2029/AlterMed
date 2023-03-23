var express = require('express');
var router = express.Router();

dataMed = [
  {"name": "Acupuncture", "description": "D'origine chinoise, application de très fines aiguilles en certains points du corps, sur le parcours de méridiens d'énergie.", "image": "/images/acupuncture.jpg"},
  {"name": "Luminothérapie", "description" : "Traitement par l'exposition à la lumière de troubles dépressifs saisonniers.", "image": "/images/luminothérapie.jpg"},
  {"name": "Méditation", "description": "Regroupe plusieurs techniques de concentration qui, en dehors de leur visée spirituelle, sont parfois utilisées à des fins de relaxation et pour lutter contre le stress.", "image": "/images/méditation.jpg"},
  {"name": "Naturopathie", "description": "Vise à rééquilibrer ou garder le fonctionnement de l'organisme par des moyens dits \"naturels\" : rééquilibrage alimentaire, hygiène de vie, exercices physiques, relaxation... à tous les âges de la vie.", "image": "/images/naturopathie.jpg"},
  {"name": "Phytothérapie", "description": "Utilisation des plantes médicinales.", "image": "/images/phytothérapie.jpg"},
  {"name": "Reiki", "description": "Proche de la technique radiance : soin manuel par transmission d'énergie curative.", "image": "/images/reiki.jpg"},
  {"name": "Shiatsu", "description": "Technique orientale de pression manuelle sur des points précis.", "image": "/images/shiatsu.jpg"}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Alter Med', page_name:'index'});
});

router.get('/medicines', function(req, res, next) {
  res.render('medicines', { title: 'Alter Med - Medicines', page_name:'medicines', dataMed:dataMed});
});



module.exports = router;
