'use strict'

describe('buzz.sound', function() {
	
	var file = 'fixtures/song.mp3',
		sound = new buzz.sound(file),
		matchers = {
			
		};
		
	var songHasStarted = function() {
		var past = sound.getTime();

		waitsFor(function() {
			return sound.getTime() > past;
		}, 'song get started', 1000);
	};
	
	describe('audio controls', function() {
		beforeEach(function() {
			this.addMatchers(matchers);
		});
	
		afterEach(function() {
			sound.stop();
		});
		
		it('should play a song normally', function() {
			sound.play();
			songHasStarted();
			
			runs(function() {
				expect(sound.getTime()).toBeGreaterThan(0);
			});
		});
		
		it('should pause a song', function() {
			sound.play();
			songHasStarted();
			
			runs(function() {
				sound.pause()
				expect(sound.isPaused()).toBeTruthy();
			});
		});
		
		it('should stop a song', function() {
			sound.play();
			songHasStarted();
			
			runs(function() {
				sound.stop()
				expect(sound.getTime()).toBe(0);
				expect(sound.isPaused()).toBeTruthy();
			});
		});
	});
	
	describe('volume controls', function() {
		beforeEach(function() {
			sound.play();
			songHasStarted();
		});
	
		afterEach(function() {
			sound.stop();
		});
		
		it('should increase the volume up to 10', function() {
			var vol = 10;
			
			sound.setVolume(vol);
			expect(sound.getVolume()).toBe(vol);
		});
		
		it('should decrease the volume up to 5', function() {
			var vol = 5;
			
			sound.setVolume(vol);
			expect(sound.getVolume()).toBe(vol);
		});
		
		it('should decrease the volume to 0 if the volume is a negative number', function() {
			var vol = -10;
			
			sound.setVolume(vol);
			expect(sound.getVolume()).toBe(0);
		});
		
		it ('should increase the volume up to the maximum if the volume is greater than 100', function() {
			var vol = 100000;
			
			sound.setVolume(vol);
			expect(sound.getVolume()).toBe(100);
		});
	});
	
	describe('if the song does not exists', function() {
		it('should not load when the song doesnt exists', function() {
			try {
				sound = new buzz.sound('mydummysong.mp3');
			} catch(e) {
				expect(sound).toThrow(e);
			}
		});
	});
});