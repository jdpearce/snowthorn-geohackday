module.exports = function(grunt) {
	
	grunt.config('clean', {
			dist: {
				src: '<%= dist %>'
			}
		});

	grunt.loadNpmTasks('grunt-contrib-clean');
};