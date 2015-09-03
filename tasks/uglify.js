module.exports = function(grunt) {

  grunt.config('uglify', {
      uglify : {
        options: {
        banner: '/*! <%= pkg.name %> lib - v<%= pkg.version %> -' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      dist: {
        files: {
          '<%= grunt.config.dist %>/js/lib.min.js': [
            '<%= bower.directory %>/jquery/jquery.js',
            '<%= bower.directory %>/underscore/underscore.js',
            '<%= bower.directory %>/requirejs/require.js',
          ]
        }
      }
    }
  });
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
};