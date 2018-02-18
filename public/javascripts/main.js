'use strict';

define(function(require){

	var $ = require('jquery');
	var jqueryui = require('jqueryui');
	var Tone = require('Tone');
	var MidiConvert = require('MidiConvert');

	class MainPage{
		constructor(){

			this.tone = Tone;
			var synth = new Tone.PolySynth(9, Tone.MonoSynth).toMaster();

			synth.set({
				//"oscillator" : {
				//	type : 'fmsquare',
				//    modulationType : 'sawtooth',
				//    modulationIndex : 3,
				//    harmonicity: 3.4
				//},
				"filter" : {
					"type" : "allpass"
				},
			})

			if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
				document.querySelector("#FileDrop #Text").textContent = "Reading files not supported by this browser";
			} else {
				var fileDrop = document.querySelector("#FileDrop")
				fileDrop.addEventListener("dragenter", function(){
					fileDrop.classList.add("Hover");
				})
				fileDrop.addEventListener("dragleave", function(){
					fileDrop.classList.remove("Hover");
				});
				fileDrop.addEventListener("drop", function(){
					fileDrop.classList.remove("Hover");
				});
				document.querySelector("#FileDrop input").addEventListener("change", function(e){
					//get the files
					var files = e.target.files;
					if (files.length > 0){
						var file = files[0];
						document.querySelector("#FileDrop #Text").textContent = file.name;
						parseFile(file);
					}
				});
			}




			function parseFile(file){
				//read the file
				var reader = new FileReader();
				reader.onload = function(e){
					
					var partsData = MidiConvert.parse(e.target.result);
					//document.querySelector("#ResultsText").value = JSON.stringify(partsData, undefined, 2);

					var midi = partsData;

					// make sure you set the tempo before you schedule the events
					Tone.Transport.bpm.value = midi.header.bpm;


					var all_notes = [];

					for(var i = 0; i < midi.tracks.length; i++){
						var track = midi.tracks[i];

						if(track.isPercussion){
							continue;
						}
						all_notes.push(...midi.tracks[i].notes);

					}
					// pass in the note events from one of the tracks as the second argument to Tone.Part 
					var midiPart = new Tone.Part(function(time, note) {
						//use the events to play the synth
						synth.triggerAttackRelease(note.name, note.duration, time, note.velocity)

					}, all_notes).start();


					// start the transport to hear the events
					Tone.Transport.start();


				};
				reader.readAsBinaryString(file);
			}



			$("#triangleButton").click(function(){
				synth.set({
					oscillator : {
						type : 'triangle16',
					},
				});
			});

			$("#sawtoothButton").click(function(){
				synth.set({
					oscillator : {
						type : 'sawtooth',
					},
				});
			});

			$("#squareButton").click(function(){
				synth.set({
					oscillator : {
						type : 'square',
					},
				});
			});


			$("#sineButton").click(function(){
				synth.set({
					oscillator : {
						type : 'sine',
					},
				});
			});


			var attackDefault = 0.005;
			var decayDefault = 0.1;
			var sustainDefault = 0.3;
			var releaseDefault = 1;

			var attack = attackDefault;
			var decay = decayDefault;
			var sustain = sustainDefault;
			var release = releaseDefault;


			function setEnvelope(){
				synth.set({
					envelope: {
						attack: attack,
						decay: decay,
						sustain: sustain,
						release: release,
					},
					filterEnvelope: {
						attack: attack,
						decay: decay,
						sustain: sustain,
						release: release,
					}
				});
			}

			var attackSlider = $("#attackSlider").slider({
				value: attack,
				min: 0.001,
				max: 5,
				step: 0.001,
				change: function(event, ui){
					$('.valueLabel', $(event.target).parent()).text(ui.value);
					attack = ui.value;
					setEnvelope();
				}
			});

			var decaySlider = $("#decaySlider").slider({
				value: decay,
				min: 0.001,
				max: 5,
				step: 0.001,
				change: function(event, ui){
					$('.valueLabel', $(event.target).parent()).text(ui.value);
					decay = ui.value;
					setEnvelope();
				}
			});

			var sustainSlider = $("#sustainSlider").slider({
				value: sustain,
				min: 0.001,
				max: 1,
				step: 0.001,
				change: function(event, ui){
					$('.valueLabel', $(event.target).parent()).text(ui.value);
					sustain = ui.value;
					setEnvelope();
				}
			});

			var releaseSlider = $("#releaseSlider").slider({
				value: release,
				min: 0.001,
				max: 5,
				step: 0.001,
				change: function(event, ui){
					$('.valueLabel', $(event.target).parent()).text(ui.value);
					release = ui.value;
					setEnvelope();
				}
			});


			var resetButton = $("#resetButton").click(function(){
				console.log('resetting');
				attackSlider.slider("value", attackDefault);
				decaySlider.slider("value", decayDefault);
				sustainSlider.slider("value", sustainDefault);
				releaseSlider.slider("value", releaseDefault);
				setEnvelope();
			})


		} // end constructor
	}




	$(document).ready(function(){
		var page = new MainPage();

		//var Tone = page.tone;



		
	});


	return {};
});