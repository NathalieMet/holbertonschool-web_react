import $ from 'jquery';
import _ from 'lodash';
import './body.css';

let count = 0;

function updateCounter() {
  count += 1;
  $("#count").text(`${count} clicks on the button`);
}

// version "debounced" de updateCounter avec un délai de 500ms
const debouncedUpdateCounter = _.debounce(updateCounter, 500);

$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

// Attacher l'événement click du bouton à la version "debounced" de updateCounter
$('button').on('click', debouncedUpdateCounter);
