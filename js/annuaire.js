// Generated by CoffeeScript 2.7.0
var extlinks, i, navigation, nodeMap, source;

nodeMap = document.createAttribute('target');

nodeMap.value = '_blank';

extlinks = document.getElementsByTagName('a');

i = 0;

while (i < extlinks.length) {
  source = extlinks[i].getAttributeNode('href').value;
  if (source.substring(0, 4) === 'http') {
    extlinks[i].setAttribute('target', '_blank');
  }
  i++;
}

navigation = document.querySelector('nav');

navigation.innerHTML = "<a href='aperitifs.html'> Apéritifs</a> <a href='culture.html'> Culture</a> <a href='musique.html'> &#10132; Musique</a> <a href='informatique.html'> Informatique</a> <a href='linuxetc.html'> &#10132; Linux etc.</a> <a href='webdev.html'> &#10132; Dév. web</a> <a href='medias.html'> Médias</a> <a href='science.html'> Science</a> <a href='senneterre.html'> Senneterre</a> <a href='voyager.html'> Voyager</a>";

submenu = document.querySelector('#nav');