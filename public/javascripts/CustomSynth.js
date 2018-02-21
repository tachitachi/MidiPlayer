'use strict';


define(function(require){

	var Tone = require('Tone');


	class CustomSynth extends Tone.Monophonic{
		constructor(options){

			var defaults = {
				"oscillator" : {
					"type" : "triangle"
				},
				"envelope" : {
					"attack" : 0.005,
					"decay" : 0.1,
					"sustain" : 0.3,
					"release" : 1
				}
			};

			options = Tone.defaultArg(options, defaults);

			super(options);

			// The note to be played
			this.frequency = new Tone.Signal(440, Tone.Type.Frequency);

			// The originator of the oscillator
			this._carrier = new Tone.Synth();

			this.oscillator = this._carrier.oscillator;


			this.envelope = this._carrier.envelope;


			// Allow the input oscillator to change notes
			this.frequency.connect(this._carrier.frequency);

			// Connect this to the next node
			this._carrier.chain(this.output);

			// Objects that can have their properties modified by this.set()
			this.properties = ['frequency', 'oscillator', 'envelope']
			this._readOnly(this.properties);

		}


		_triggerEnvelopeAttack(time, velocity){
			//the port glide
			time = this.toSeconds(time);
			//the envelopes
			this._carrier._triggerEnvelopeAttack(time, velocity);
			//this._modulator._triggerEnvelopeAttack(time);
			return this;
		}

		_triggerEnvelopeRelease(time){
			this._carrier._triggerEnvelopeRelease(time);
			//this._modulator._triggerEnvelopeRelease(time);
			return this;
		}

		dispose(){
			super.dispose();

			//this._writable(["frequency", "harmonicity", "oscillator", "envelope", "modulation", "modulationEnvelope", "detune"]);
			this._writable(this.properties);
			this._carrier.dispose();
			this._carrier = null;
			//this._modulator.dispose();
			//this._modulator = null;
			this.frequency.dispose();
			this.frequency = null;
			//this.detune.dispose();
			//this.detune = null;
			//this.harmonicity.dispose();
			//this.harmonicity = null;
			//this._modulationScale.dispose();
			//this._modulationScale = null;
			//this._modulationNode.dispose();
			//this._modulationNode = null;
			this.oscillator = null;
			this.envelope = null;
			//this.modulationEnvelope = null;
			//this.modulation = null;
			return this;
		}
	}


	return CustomSynth;

});