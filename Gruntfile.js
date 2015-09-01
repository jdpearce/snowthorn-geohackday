module.exports = function(grunt) {
	grunt.initConfig({
		pkg : require('./package.json')
	});
	
	grunt.loadTasks('tasks');
	
	grunt.registerTask(
  		'rebuild', 
  		'Compiles all of the assets and copies the files to the build directory.', 
  		[ 'clean:build', 'copy']
	);
	
	grunt.registerTask(
  		'default', 
  		'Rebuilds, runs connect and then sits watching the src folder.', 
  		[ 'rebuild', 'connect', 'watch']
	);
};