'use strict';

define(function(require){

	var $ = require('jquery');
	var jqueryui = require('jqueryui');
	var Tone = require('Tone');
	var MidiConvert = require('MidiConvert');

	var StringEnsemble2 = require('http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/string_ensemble_2-mp3.js')

	var Samplers = require('Samplers');

	class MainPage{
		constructor(){

			this.tone = Tone;
			var synth = new Tone.PolySynth(9, Tone.MonoSynth).toMaster();
			var synth2 = new Tone.PolySynth(9, Tone.Synth).toMaster();

			var samplers = {};

			//for(var key in MIDI.Soundfont){
			//	samplers[key] = new Tone.Sampler(MIDI.Soundfont[key]).toMaster();
			//}

			//console.log(samplers);

			//Samplers.generateSampler('voice_oohs');

			window.synth = synth;

			//var synth = new Tone.PolySynth(4, Tone.Synth, {
			//	"volume" : -8,
			//	"oscillator" : {
			//		"partials" : [1, 2, 1],
			//	},
			//	"portamento" : 0.05
			//}).toMaster();

			//var synth = new Tone.MonoSynth({
			//	"volume" : -10,
			//	"envelope" : {
			//		"attack" : 0.1,
			//		"decay" : 0.3,
			//		"release" : 2,
			//	},
			//	"filterEnvelope" : {
			//		"attack" : 0.001,
			//		"decay" : 0.01,
			//		"sustain" : 0.5,
			//		"baseFrequency" : 200,
			//		"octaves" : 2.6
			//	}
			//}).toMaster();

			synth.set({
				"oscillator" : {
					type : 'triangle',
				//    modulationType : 'sawtooth',
				//    modulationIndex : 3,
				//    harmonicity: 3.4
				},
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


			var waiting_for_load = 0;


			function onLoadCallback(){

				console.log('loaded', waiting_for_load);
				waiting_for_load -= 1;

				if(waiting_for_load === 0){
					Tone.Transport.start();
				}
			}



			function parseFile(file){
				//read the file
				var reader = new FileReader();
				reader.onload = function(e){
					
					var partsData = MidiConvert.parse(e.target.result);
					document.querySelector("#ResultsText").value = JSON.stringify(partsData, undefined, 2);

					var midi = partsData;

					// make sure you set the tempo before you schedule the events
					Tone.Transport.bpm.value = midi.header.bpm;



					for(var i = 0; i < midi.tracks.length; i++){
						var track = midi.tracks[i];


						if(track.isPercussion){
							continue;
						}

						var instrument = track.instrument;

						if(instrument !== undefined){
							instrument = instrument.replace(/ /g, '_');
							instrument = instrument.replace(/[()]/g, '');
						}

						if(instrument === 'orchestra_kit'){
							instrument = 'orchestra_hit';
						}

						if(!samplers.hasOwnProperty(instrument)){
							console.log('missing', instrument);

							var ret = Samplers.generateSampler(instrument, onLoadCallback);

							console.log(ret);

							samplers[instrument] = ret.instrument;

							if(ret.result){
								waiting_for_load += 1;
							}


						}

						var midiPart = new Tone.Part(function(time, note){

							var inst = synth;

							//console.log(this.instrument, samplers.hasOwnProperty(this.instrument));
							if(samplers.hasOwnProperty(this.instrument)){
								inst = samplers[this.instrument];
								//console.log('Playing', track.name, 'as', this.instrurment);
							}

							inst.triggerAttackRelease(note.name, note.duration, time, note.velocity);

						}.bind({instrument: instrument}), track.notes).start();

					}


//					var vocal_notes = [];
//					var all_notes = [];
//
//					for(var i = 0; i < midi.tracks.length; i++){
//						var track = midi.tracks[i];
//
//						if(track.isPercussion){
//							continue;
//						}
//						if(track.name === "Vocals"){
//							vocal_notes.push(...midi.tracks[i].notes);
//						}
//						else{
//							all_notes.push(...midi.tracks[i].notes);
//						}
//
//					}
//					// pass in the note events from one of the tracks as the second argument to Tone.Part 
//					var midiPart = new Tone.Part(function(time, note) {
//						//use the events to play the synth
//						sampler.triggerAttackRelease(note.name, note.duration, time, note.velocity)
//
//					}, all_notes).start();
//
//					var midiPart2 = new Tone.Part(function(time, note) {
//						//use the events to play the synth
//						synth2.triggerAttackRelease(note.name, note.duration, time, note.velocity)
//
//					}, vocal_notes).start();


					// start the transport to hear the events
					//Tone.Transport.start();


				};
				reader.readAsBinaryString(file);
			}



			var waveform = 'triangle';

			var attackDefault = 0.005;
			var decayDefault = 0.1;
			var sustainDefault = 0.3;
			var releaseDefault = 1;
			var partialDefault = 0;

			var attack = attackDefault;
			var decay = decayDefault;
			var sustain = sustainDefault;
			var release = releaseDefault;
			var partial = partialDefault;


			$("#triangleButton").click(function(){
				waveform = 'triangle';
				setWaveform();
			});

			$("#sawtoothButton").click(function(){
				waveform = 'sawtooth';
				setWaveform();
			});

			$("#squareButton").click(function(){
				waveform = 'square';
				setWaveform();
			});


			$("#sineButton").click(function(){
				waveform = 'sine';
				setWaveform();
			});

			function setWaveform(){
				var wf = waveform;

				if(partial > 0){
					wf = wf + partial;
				}

				console.log(wf);

				synth.set({
					oscillator : {
						type : wf,
					},
				});
			}


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
				},
				slide: function(event, ui){
					$('.valueLabel', $(event.target).parent()).text(ui.value);
					attack = ui.value;
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
				},
				slide: function(event, ui){
					$('.valueLabel', $(event.target).parent()).text(ui.value);
					decay = ui.value;
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
				},
				slide: function(event, ui){
					$('.valueLabel', $(event.target).parent()).text(ui.value);
					sustain = ui.value;
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
				},
				slide: function(event, ui){
					$('.valueLabel', $(event.target).parent()).text(ui.value);
					release = ui.value;
				}
			});


			var partialSlider = $("#partialSlider").slider({
				value: partial,
				min: 0,
				max: 256,
				step: 1,
				change: function(event, ui){
					$('.valueLabel', $(event.target).parent()).text(ui.value);
					partial = ui.value;
					setWaveform();
				},
				slide: function(event, ui){
					$('.valueLabel', $(event.target).parent()).text(ui.value);
					partial = ui.value;
				}

			});


			var resetButton = $("#resetButton").click(function(){
				console.log('resetting');
				attackSlider.slider("value", attackDefault);
				decaySlider.slider("value", decayDefault);
				sustainSlider.slider("value", sustainDefault);
				releaseSlider.slider("value", releaseDefault);
				partialSlider.slider("value", partialDefault);
				setEnvelope();
				setWaveform();
			});






			var dest = Tone.context._context.createMediaStreamDestination();
			var mediaRecorder = new MediaRecorder(dest.stream);

			var chunks = [];
			var clicked = false;

			var b = document.querySelector("button");
			b.addEventListener("click", function(e) {
				if (!clicked) {
					mediaRecorder.start();
					e.target.innerHTML = "Stop recording";
					clicked = true;
				} else {
					Tone.Transport.stop();
					mediaRecorder.stop();
					e.target.disabled = true;
				}
			});

			mediaRecorder.ondataavailable = function(evt) {
				// push each chunk (blobs) in an array
				chunks.push(evt.data);
				console.log(evt.data);
			};

			mediaRecorder.onstop = function(evt) {
				// Make blob out of our blobs, and open it.
				var blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });

				console.log(chunks, blob);
				document.querySelector("audio").src = URL.createObjectURL(blob);
			};


		} // end constructor
	}




	$(document).ready(function(){
		var page = new MainPage();

		//var Tone = page.tone;

		window.Tone = Tone;


		
	});


	return {};
});