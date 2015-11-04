module.exports = function(grunt) {


	//require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

	grunt.initConfig({
		babel: {
			options: {
				sourceMap: true,
				//"modules": "amd"
			},
			dist: {
				files: [
					{
						expand: true,
						cwd: 'www/js/pages',
						src: ['*.js'],
						dest: 'www/js/pages_cj'
					}
				]
			}
		}
	});
	grunt.loadNpmTasks('grunt-babel');

	grunt.registerTask('default', ['babel']);


};