import { Entry } from './journal-js';
import './styles.css';

$(document).ready(function() {
  $('#entry-form').submit(function(event) {
    event.preventDefault();
    var titleContent = $("#title").val();
    var bodyContent = $("#body").val();
    var newEntry = new Entry(titleContent, bodyContent);
    $("#word-count").text(newEntry.wordCount());
    $("#vowel-count").text(newEntry.vowelCount());
    $("#consonant-count").text(newEntry.consonantCount());
  });
});
