module.exports = function(grunt) {

  grunt.config('copy', {
    dist: {
      files: [{
          expand: true,
          cwd: '<%= bower.directory %>/bootstrap/dist',
          src: ['css/boostrap.min.css', 'css/bootstrap-theme.min.css'],
          dest: '<%= dist %>'
        }, {
          expand: true,
          cwd: '<%= bower.directory %>/bootstrap/dist',
          src: 'fonts/*',
          dest: '<%= dist %>'
        }, {
          expand: true,
          cwd: '<%= bower.directory %>/bootstrap/dist',
          src: 'js/bootstrap.min.js',
          dest: '<%= dist %>'
        }, {
          expand: true,
          cwd: '<%= bower.directory %>/jquery/dist',
          src: 'jquery.min.js',
          dest: '<%= dist %>/js'
        }, {
          expand: true,
          cwd: '<%= app %>',
          src: '**/*',
          dest: '<%= dist %>'
        }]
    }
  });
	
	grunt.loadNpmTasks('grunt-contrib-copy');
};