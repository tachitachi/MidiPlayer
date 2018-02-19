'use strict';

define(function(require){


	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/accordion-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/acoustic_bass-mp3.js");
	//require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/acoustic_grand_piano-mp3.js");
	//require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/acoustic_guitar_nylon-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/acoustic_guitar_steel-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/agogo-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/alto_sax-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/applause-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/bagpipe-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/banjo-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/baritone_sax-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/bassoon-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/bird_tweet-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/blown_bottle-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/brass_section-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/breath_noise-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/bright_acoustic_piano-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/celesta-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/cello-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/choir_aahs-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/church_organ-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/clarinet-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/clavinet-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/contrabass-mp3.js");
	//require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/distortion_guitar-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/drawbar_organ-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/dulcimer-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/electric_bass_finger-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/electric_bass_pick-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/electric_grand_piano-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/electric_guitar_clean-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/electric_guitar_jazz-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/electric_guitar_muted-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/electric_piano_1-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/electric_piano_2-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/english_horn-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/fiddle-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/flute-mp3.js");
	//require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/french_horn-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/fretless_bass-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/fx_1_rain-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/fx_2_soundtrack-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/fx_3_crystal-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/fx_4_atmosphere-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/fx_5_brightness-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/fx_6_goblins-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/fx_7_echoes-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/fx_8_scifi-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/glockenspiel-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/guitar_fret_noise-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/guitar_harmonics-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/gunshot-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/harmonica-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/harpsichord-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/helicopter-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/honkytonk_piano-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/kalimba-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/koto-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/lead_1_square-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/lead_2_sawtooth-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/lead_3_calliope-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/lead_4_chiff-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/lead_5_charang-mp3.js");
	//require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/lead_6_voice-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/lead_7_fifths-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/lead_8_bass__lead-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/marimba-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/melodic_tom-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/music_box-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/muted_trumpet-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/oboe-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/ocarina-mp3.js");
	//require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/orchestra_hit-mp3.js");
	//require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/orchestral_harp-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/overdriven_guitar-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/pad_1_new_age-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/pad_2_warm-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/pad_3_polysynth-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/pad_4_choir-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/pad_5_bowed-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/pad_6_metallic-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/pad_7_halo-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/pad_8_sweep-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/pan_flute-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/percussive_organ-mp3.js");
	//require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/piccolo-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/pizzicato_strings-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/recorder-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/reed_organ-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/reverse_cymbal-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/rock_organ-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/seashore-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/shakuhachi-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/shamisen-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/shanai-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/sitar-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/slap_bass_1-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/slap_bass_2-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/soprano_sax-mp3.js");
	//require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/steel_drums-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/string_ensemble_1-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/string_ensemble_2-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/synth_bass_1-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/synth_bass_2-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/synth_brass_1-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/synth_brass_2-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/synth_choir-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/synth_drum-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/synth_strings_1-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/synth_strings_2-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/taiko_drum-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/tango_accordion-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/telephone_ring-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/tenor_sax-mp3.js");
	//require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/timpani-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/tinkle_bell-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/tremolo_strings-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/trombone-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/trumpet-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/tuba-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/tubular_bells-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/vibraphone-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/viola-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/violin-mp3.js");
	//require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/voice_oohs-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/whistle-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/woodblock-mp3.js");
	// require("http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/xylophone-mp3.js");


	var sample_list = [
		"accordion-mp3",
		"acoustic_bass-mp3",
		"acoustic_grand_piano-mp3",
		"acoustic_guitar_nylon-mp3",
		"acoustic_guitar_steel-mp3",
		"agogo-mp3",
		"alto_sax-mp3",
		"applause-mp3",
		"bagpipe-mp3",
		"banjo-mp3",
		"baritone_sax-mp3",
		"bassoon-mp3",
		"bird_tweet-mp3",
		"blown_bottle-mp3",
		"brass_section-mp3",
		"breath_noise-mp3",
		"bright_acoustic_piano-mp3",
		"celesta-mp3",
		"cello-mp3",
		"choir_aahs-mp3",
		"church_organ-mp3",
		"clarinet-mp3",
		"clavinet-mp3",
		"contrabass-mp3",
		"distortion_guitar-mp3",
		"drawbar_organ-mp3",
		"dulcimer-mp3",
		"electric_bass_finger-mp3",
		"electric_bass_pick-mp3",
		"electric_grand_piano-mp3",
		"electric_guitar_clean-mp3",
		"electric_guitar_jazz-mp3",
		"electric_guitar_muted-mp3",
		"electric_piano_1-mp3",
		"electric_piano_2-mp3",
		"english_horn-mp3",
		"fiddle-mp3",
		"flute-mp3",
		"french_horn-mp3",
		"fretless_bass-mp3",
		"fx_1_rain-mp3",
		"fx_2_soundtrack-mp3",
		"fx_3_crystal-mp3",
		"fx_4_atmosphere-mp3",
		"fx_5_brightness-mp3",
		"fx_6_goblins-mp3",
		"fx_7_echoes-mp3",
		"fx_8_scifi-mp3",
		"glockenspiel-mp3",
		"guitar_fret_noise-mp3",
		"guitar_harmonics-mp3",
		"gunshot-mp3",
		"harmonica-mp3",
		"harpsichord-mp3",
		"helicopter-mp3",
		"honkytonk_piano-mp3",
		"kalimba-mp3",
		"koto-mp3",
		"lead_1_square-mp3",
		"lead_2_sawtooth-mp3",
		"lead_3_calliope-mp3",
		"lead_4_chiff-mp3",
		"lead_5_charang-mp3",
		"lead_6_voice-mp3",
		"lead_7_fifths-mp3",
		"lead_8_bass__lead-mp3",
		"marimba-mp3",
		"melodic_tom-mp3",
		"music_box-mp3",
		"muted_trumpet-mp3",
		"oboe-mp3",
		"ocarina-mp3",
		"orchestra_hit-mp3",
		"orchestral_harp-mp3",
		"overdriven_guitar-mp3",
		"pad_1_new_age-mp3",
		"pad_2_warm-mp3",
		"pad_3_polysynth-mp3",
		"pad_4_choir-mp3",
		"pad_5_bowed-mp3",
		"pad_6_metallic-mp3",
		"pad_7_halo-mp3",
		"pad_8_sweep-mp3",
		"pan_flute-mp3",
		"percussive_organ-mp3",
		"piccolo-mp3",
		"pizzicato_strings-mp3",
		"recorder-mp3",
		"reed_organ-mp3",
		"reverse_cymbal-mp3",
		"rock_organ-mp3",
		"seashore-mp3",
		"shakuhachi-mp3",
		"shamisen-mp3",
		"shanai-mp3",
		"sitar-mp3",
		"slap_bass_1-mp3",
		"slap_bass_2-mp3",
		"soprano_sax-mp3",
		"steel_drums-mp3",
		"string_ensemble_1-mp3",
		"string_ensemble_2-mp3",
		"synth_bass_1-mp3",
		"synth_bass_2-mp3",
		"synth_brass_1-mp3",
		"synth_brass_2-mp3",
		"synth_choir-mp3",
		"synth_drum-mp3",
		"synth_strings_1-mp3",
		"synth_strings_2-mp3",
		"taiko_drum-mp3",
		"tango_accordion-mp3",
		"telephone_ring-mp3",
		"tenor_sax-mp3",
		"timpani-mp3",
		"tinkle_bell-mp3",
		"tremolo_strings-mp3",
		"trombone-mp3",
		"trumpet-mp3",
		"tuba-mp3",
		"tubular_bells-mp3",
		"vibraphone-mp3",
		"viola-mp3",
		"violin-mp3",
		"voice_oohs-mp3",
		"whistle-mp3",
		"woodblock-mp3",
		"xylophone-mp3"
	];


	var notes = ["A0",
		"A1",
		"A2",
		"A3",
		"A4",
		"A5",
		"A6",
		"A7",
		"Ab1",
		"Ab2",
		"Ab3",
		"Ab4",
		"Ab5",
		"Ab6",
		"Ab7",
		"B0",
		"B1",
		"B2",
		"B3",
		"B4",
		"B5",
		"B6",
		"B7",
		"Bb0",
		"Bb1",
		"Bb2",
		"Bb3",
		"Bb4",
		"Bb5",
		"Bb6",
		"Bb7",
		"C1",
		"C2",
		"C3",
		"C4",
		"C5",
		"C6",
		"C7",
		"C8",
		"D1",
		"D2",
		"D3",
		"D4",
		"D5",
		"D6",
		"D7",
		"Db1",
		"Db2",
		"Db3",
		"Db4",
		"Db5",
		"Db6",
		"Db7",
		"E1",
		"E2",
		"E3",
		"E4",
		"E5",
		"E6",
		"E7",
		"Eb1",
		"Eb2",
		"Eb3",
		"Eb4",
		"Eb5",
		"Eb6",
		"Eb7",
		"F1",
		"F2",
		"F3",
		"F4",
		"F5",
		"F6",
		"F7",
		"G1",
		"G2",
		"G3",
		"G4",
		"G5",
		"G6",
		"G7",
		"Gb1",
		"Gb2",
		"Gb3",
		"Gb4",
		"Gb5",
		"Gb6",
		"Gb7"
	]

	var short_notes = [
		"C3",
		"B3",
		"D3",
		"A3",
		"E3",

	];


	function generateSampler(name, onLoad){


		if(name === "" || name === undefined){
			return {'result': false, 'instrument': new Tone.PolySynth(9, Tone.MonoSynth).toMaster()};
		}


		var data = {};
		for(var i in short_notes){
			var note = short_notes[i];


			if(note.indexOf('3') < 0){
				continue;
			}


			var url = 'http://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/{0}-mp3/{1}.mp3'.format(name, note);
			console.log(name, url);
			data[note] = url;
		}


		var s = new Tone.Sampler(data, {
			'onload': onLoad
		}).toMaster();


		return {'result': true, 'instrument': s};

		//console.log(data);
	}


	return {'generateSampler': generateSampler};

});