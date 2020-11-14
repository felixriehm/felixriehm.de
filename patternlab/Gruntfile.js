/******************************************************
 * PATTERN LAB NODE
 * EDITION-NODE-GRUNT
 * The grunt wrapper around patternlab-node core, providing tasks to interact with the core library and move supporting frontend assets.
******************************************************/

module.exports = function (grunt) {

  var path = require('path'),
      argv = require('minimist')(process.argv.slice(2));

  // load all grunt tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-copy-part-of-file');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  /******************************************************
   * PATTERN LAB CONFIGURATION
  ******************************************************/

  //read all paths from our namespaced config file
  var config = require('./patternlab-config.json'),
    pl = require('patternlab-node')(config);

  function paths() {
    return config.paths;
  }

  function getConfiguredCleanOption() {
    return config.cleanPublic;
  }

  grunt.registerTask('patternlab', 'create design systems with atomic design', function (arg) {

    if (arguments.length === 0) {
      pl.build(function(){}, getConfiguredCleanOption());
    }

    if (arg && arg === 'version') {
      pl.version();
    }

    if (arg && arg === "patternsonly") {
      pl.patternsonly(function(){},getConfiguredCleanOption());
    }

    if (arg && arg === "help") {
      pl.help();
    }

    if (arg && arg === "liststarterkits") {
      pl.liststarterkits();
    }

    if (arg && arg === "loadstarterkit") {
      pl.loadstarterkit(argv.kit, argv.clean);
    }

    if (arg && (arg !== "version" && arg !== "patternsonly" && arg !== "help" && arg !== "starterkit-list" && arg !== "starterkit-load")) {
      pl.help();
    }
  });


  grunt.initConfig({
    /******************************************************
     * LESS TASKS
    ******************************************************/
    less: {
            default: {
                files: [
                    {
                        expand: true,
                        cwd: path.resolve(paths().source.css),
                        src: 'style.less',
                        dest: path.resolve(paths().public.css),
                        ext: '.css'
                    }
                ]
            },
            deploy: {
                files: [
                    {
                        expand: true,
                        cwd: path.resolve(paths().source.css),
                        src: 'style.less',
                        dest: path.resolve('./deployment/css/'),
                        ext: '.css'
                    }
                ]
            }
        },

    /******************************************************
     * COPY TASKS
    ******************************************************/
    copy: {
      main: {
        files: [
          { expand: true, cwd: path.resolve(paths().source.js), src: '**/*.js', dest: path.resolve(paths().public.js) },
          { expand: true, cwd: path.resolve(paths().source.js), src: '**/*.js.map', dest: path.resolve(paths().public.js) },
          { expand: true, cwd: path.resolve(paths().source.css), src: '**/*.css', dest: path.resolve(paths().public.css) },
          { expand: true, cwd: path.resolve(paths().source.css), src: '**/*.css.map', dest: path.resolve(paths().public.css) },
          { expand: true, cwd: path.resolve(paths().source.images), src: '**/*', dest: path.resolve(paths().public.images) },
          { expand: true, cwd: path.resolve(paths().source.fonts), src: '**/*', dest: path.resolve(paths().public.fonts) },
          { expand: true, cwd: path.resolve(paths().source.root), src: 'favicon.ico', dest: path.resolve(paths().public.root) },
          { expand: true, cwd: path.resolve(paths().source.styleguide), src: ['*', '**'], dest: path.resolve(paths().public.root) },
          // slightly inefficient to do this again - I am not a grunt glob master. someone fix
          { expand: true, flatten: true, cwd: path.resolve(paths().source.styleguide, 'styleguide', 'css', 'custom'), src: '*.css)', dest: path.resolve(paths().public.styleguide, 'css') }
        ]
      },
      deploy: {
        files: [
          { expand: true, cwd: path.resolve(paths().source.js), src: '**/*.js', dest: path.resolve('./deployment/js/') },
          { expand: true, cwd: path.resolve(paths().source.js), src: '**/*.js.map', dest: path.resolve('./deployment/js/') },
          { expand: true, cwd: path.resolve(paths().source.css), src: '**/*.css', dest: path.resolve('./deployment/css/') },
          { expand: true, cwd: path.resolve(paths().source.css), src: '**/*.css.map', dest: path.resolve('./deployment/css/') },
          { expand: true, cwd: path.resolve(paths().source.images), src: '**/*', dest: path.resolve('./deployment/images/') },
          { expand: true, cwd: path.resolve(paths().source.fonts), src: '**/*', dest: path.resolve('./deployment/fonts/') },
          { expand: true, cwd: path.resolve(paths().source.root), src: 'favicon.ico', dest: path.resolve('./deployment/') },


          { expand: true, cwd: path.resolve('./public/patterns/04-pages-about-about/'), src: '04-pages-about-about.html', dest: path.resolve('./deployment/patterns/04-pages-about-about/') },
          { expand: true, cwd: path.resolve('./public/patterns/04-pages-misc-ants/'), src: '04-pages-misc-ants.html', dest: path.resolve('./deployment/patterns/04-pages-misc-ants/') },
          { expand: true, cwd: path.resolve('./public/patterns/04-pages-misc-car/'), src: '04-pages-misc-car.html', dest: path.resolve('./deployment/patterns/04-pages-misc-car/') },
          { expand: true, cwd: path.resolve('./public/patterns/04-pages-misc-misc/'), src: '04-pages-misc-misc.html', dest: path.resolve('./deployment/patterns/04-pages-misc-misc/') },
          { expand: true, cwd: path.resolve('./public/patterns/04-pages-misc-table/'), src: '04-pages-misc-table.html', dest: path.resolve('./deployment/patterns/04-pages-misc-table/') },
          { expand: true, cwd: path.resolve('./public/patterns/04-pages-social-augenblick/'), src: '04-pages-social-augenblick.html', dest: path.resolve('./deployment/patterns/04-pages-social-augenblick/') },
          { expand: true, cwd: path.resolve('./public/patterns/04-pages-social-bediengungslos/'), src: '04-pages-social-bediengungslos.html', dest: path.resolve('./deployment/patterns/04-pages-social-bediengungslos/') },
          { expand: true, cwd: path.resolve('./public/patterns/04-pages-social-chor/'), src: '04-pages-social-chor.html', dest: path.resolve('./deployment/patterns/04-pages-social-chor/') },
          { expand: true, cwd: path.resolve('./public/patterns/04-pages-social-esn/'), src: '04-pages-social-esn.html', dest: path.resolve('./deployment/patterns/04-pages-social-esn/') },
          { expand: true, cwd: path.resolve('./public/patterns/04-pages-social-geschichten/'), src: '04-pages-social-geschichten.html', dest: path.resolve('./deployment/patterns/04-pages-social-geschichten/') },
          { expand: true, cwd: path.resolve('./public/patterns/04-pages-social-liebe/'), src: '04-pages-social-liebe.html', dest: path.resolve('./deployment/patterns/04-pages-social-liebe/') },
          { expand: true, cwd: path.resolve('./public/patterns/04-pages-social-ruhig-blut/'), src: '04-pages-social-ruhig-blut.html', dest: path.resolve('./deployment/patterns/04-pages-social-ruhig-blut/') },
          { expand: true, cwd: path.resolve('./public/patterns/04-pages-social-social/'), src: '04-pages-social-social.html', dest: path.resolve('./deployment/patterns/04-pages-social-social/') },
          { expand: true, cwd: path.resolve('./public/patterns/04-pages-web-and-design-felixriehm-v1/'), src: '04-pages-web-and-design-felixriehm-v1.html', dest: path.resolve('./deployment/patterns/04-pages-web-and-design-felixriehm-v1/') },
          { expand: true, cwd: path.resolve('./public/patterns/04-pages-web-and-design-felixriehm-v2/'), src: '04-pages-web-and-design-felixriehm-v2.html', dest: path.resolve('./deployment/patterns/04-pages-web-and-design-felixriehm-v2/') },
          { expand: true, cwd: path.resolve('./public/patterns/04-pages-web-and-design-konzil/'), src: '04-pages-web-and-design-konzil.html', dest: path.resolve('./deployment/patterns/04-pages-web-and-design-konzil/') },
          { expand: true, cwd: path.resolve('./public/patterns/04-pages-web-and-design-redesign/'), src: '04-pages-web-and-design-redesign.html', dest: path.resolve('./deployment/patterns/04-pages-web-and-design-redesign/') },
          { expand: true, cwd: path.resolve('./public/patterns/04-pages-web-and-design-web-and-design/'), src: '04-pages-web-and-design-web-and-design.html', dest: path.resolve('./deployment/patterns/04-pages-web-and-design-web-and-design/') }
      ]
      }
    },
    /******************************************************
     * JS MINIFIY
    ******************************************************/
    uglify: {
      deploy: {
        files: {
          './deployment/js/main.min.js': ['./deployment/js/main.js', './deployment/js/redirect.js']
        }
     }
    },
    /******************************************************
     * CSS MINIFIY
    ******************************************************/
    cssmin: {
     deploy: {
        files: [{
          expand: true,
         cwd: './deployment/css',
         src: ['style.css'],
          dest: './deployment/css',
          ext: '.min.css'
        }]
     }
    },

    /******************************************************
     * COPY HEAD AND FOOT TASKS
    ******************************************************/
    'copy-part-of-file': {
        copyhead: {
            options: {
                sourceFileStartPattern: '<!-- START COPY -->',
                sourceFileEndPattern: '<!-- END COPY -->',
                destinationFileStartPattern: '<!-- START HEAD -->',
                destinationFileEndPattern: '<!-- END HEAD -->'
            },
            files: {
                './deployment/patterns/04-pages-about-about/04-pages-about-about.html': ['./deployment/artifacts/head.html'],
                './deployment/patterns/04-pages-misc-ants/04-pages-misc-ants.html': ['./deployment/artifacts/head.html'],
                './deployment/patterns/04-pages-misc-car/04-pages-misc-car.html': ['./deployment/artifacts/head.html'],
                './deployment/patterns/04-pages-misc-misc/04-pages-misc-misc.html': ['./deployment/artifacts/head.html'],
                './deployment/patterns/04-pages-misc-table/04-pages-misc-table.html': ['./deployment/artifacts/head.html'],
                './deployment/patterns/04-pages-social-augenblick/04-pages-social-augenblick.html': ['./deployment/artifacts/head.html'],
                './deployment/patterns/04-pages-social-bediengungslos/04-pages-social-bediengungslos.html': ['./deployment/artifacts/head.html'],
                './deployment/patterns/04-pages-social-chor/04-pages-social-chor.html': ['./deployment/artifacts/head.html'],
                './deployment/patterns/04-pages-social-esn/04-pages-social-esn.html': ['./deployment/artifacts/head.html'],
                './deployment/patterns/04-pages-social-geschichten/04-pages-social-geschichten.html': ['./deployment/artifacts/head.html'],
                './deployment/patterns/04-pages-social-liebe/04-pages-social-liebe.html': ['./deployment/artifacts/head.html'],
                './deployment/patterns/04-pages-social-ruhig-blut/04-pages-social-ruhig-blut.html': ['./deployment/artifacts/head.html'],
                './deployment/patterns/04-pages-social-social/04-pages-social-social.html': ['./deployment/artifacts/head.html'],
                './deployment/patterns/04-pages-web-and-design-felixriehm-v1/04-pages-web-and-design-felixriehm-v1.html': ['./deployment/artifacts/head.html'],
                './deployment/patterns/04-pages-web-and-design-felixriehm-v2/04-pages-web-and-design-felixriehm-v2.html': ['./deployment/artifacts/head.html'],
                './deployment/patterns/04-pages-web-and-design-konzil/04-pages-web-and-design-konzil.html': ['./deployment/artifacts/head.html'],
                './deployment/patterns/04-pages-web-and-design-redesign/04-pages-web-and-design-redesign.html': ['./deployment/artifacts/head.html'],
                './deployment/patterns/04-pages-web-and-design-web-and-design/04-pages-web-and-design-web-and-design.html': ['./deployment/artifacts/head.html']
            }
        },
        copyfoot: {
            options: {
                sourceFileStartPattern: '<!-- START COPY -->',
                sourceFileEndPattern: '<!-- END COPY -->',
                destinationFileStartPattern: '<!-- START FOOT -->',
                destinationFileEndPattern: '<!-- END FOOT -->'
            },
            files: {
                './deployment/patterns/04-pages-about-about/04-pages-about-about.html': ['./deployment/artifacts/foot.html'],
                './deployment/patterns/04-pages-misc-ants/04-pages-misc-ants.html': ['./deployment/artifacts/foot.html'],
                './deployment/patterns/04-pages-misc-car/04-pages-misc-car.html': ['./deployment/artifacts/foot.html'],
                './deployment/patterns/04-pages-misc-misc/04-pages-misc-misc.html': ['./deployment/artifacts/foot.html'],
                './deployment/patterns/04-pages-misc-table/04-pages-misc-table.html': ['./deployment/artifacts/foot.html'],
                './deployment/patterns/04-pages-social-augenblick/04-pages-social-augenblick.html': ['./deployment/artifacts/foot.html'],
                './deployment/patterns/04-pages-social-bediengungslos/04-pages-social-bediengungslos.html': ['./deployment/artifacts/foot.html'],
                './deployment/patterns/04-pages-social-chor/04-pages-social-chor.html': ['./deployment/artifacts/foot.html'],
                './deployment/patterns/04-pages-social-esn/04-pages-social-esn.html': ['./deployment/artifacts/foot.html'],
                './deployment/patterns/04-pages-social-geschichten/04-pages-social-geschichten.html': ['./deployment/artifacts/foot.html'],
                './deployment/patterns/04-pages-social-liebe/04-pages-social-liebe.html': ['./deployment/artifacts/foot.html'],
                './deployment/patterns/04-pages-social-ruhig-blut/04-pages-social-ruhig-blut.html': ['./deployment/artifacts/foot.html'],
                './deployment/patterns/04-pages-social-social/04-pages-social-social.html': ['./deployment/artifacts/foot.html'],
                './deployment/patterns/04-pages-web-and-design-felixriehm-v1/04-pages-web-and-design-felixriehm-v1.html': ['./deployment/artifacts/foot.html'],
                './deployment/patterns/04-pages-web-and-design-felixriehm-v2/04-pages-web-and-design-felixriehm-v2.html': ['./deployment/artifacts/foot.html'],
                './deployment/patterns/04-pages-web-and-design-konzil/04-pages-web-and-design-konzil.html': ['./deployment/artifacts/foot.html'],
                './deployment/patterns/04-pages-web-and-design-redesign/04-pages-web-and-design-redesign.html': ['./deployment/artifacts/foot.html'],
                './deployment/patterns/04-pages-web-and-design-web-and-design/04-pages-web-and-design-web-and-design.html': ['./deployment/artifacts/foot.html']
            }
        }
    },

    /******************************************************
     * SERVER AND WATCH TASKS
    ******************************************************/
    watch: {
      all: {
        files: [
          path.resolve(paths().source.css + '**/*.css'),
          path.resolve(paths().source.css + '**/*.less'),
          path.resolve(paths().source.styleguide + 'css/*.css'),
          path.resolve(paths().source.patterns + '**/*'),
          path.resolve(paths().source.fonts + '/*'),
          path.resolve(paths().source.images + '/*'),
          path.resolve(paths().source.data + '*.json'),
          path.resolve(paths().source.js + '/*.js'),
          path.resolve(paths().source.root + '/*.ico')
        ],
        tasks: ['default', 'bsReload:css']
      }
    },
    browserSync: {
      dev: {
        options: {
          server:  path.resolve(paths().public.root),
          watchTask: true,
          watchOptions: {
            ignoreInitial: true,
            ignored: '*.html'
          },
          snippetOptions: {
            // Ignore all HTML files within the templates folder
            blacklist: ['/index.html', '/', '/?*']
          },
          plugins: [
            {
              module: 'bs-html-injector',
              options: {
                files: [path.resolve(paths().public.root + '/index.html'), path.resolve(paths().public.styleguide + '/styleguide.html')]
              }
            }
          ],
          notify: {
            styles: [
              'display: none',
              'padding: 15px',
              'font-family: sans-serif',
              'position: fixed',
              'font-size: 1em',
              'z-index: 9999',
              'bottom: 0px',
              'right: 0px',
              'border-top-left-radius: 5px',
              'background-color: #1B2032',
              'opacity: 0.4',
              'margin: 0',
              'color: white',
              'text-align: center'
            ]
          }
        }
      }
    },
    bsReload: {
      css: path.resolve(paths().public.root + '**/*.css')
    }
  });

  /******************************************************
   * COMPOUND TASKS
  ******************************************************/

  grunt.registerTask('default', ['patternlab', 'copy:main', 'less:default']);
  grunt.registerTask('patternlab:build', ['patternlab', 'copy:main', 'less:default']);
  grunt.registerTask('patternlab:deploy', ['copy:deploy', 'copy-part-of-file', 'less:deploy', 'uglify:deploy', 'cssmin:deploy']);
  grunt.registerTask('patternlab:watch', ['patternlab', 'copy:main', 'less', 'watch:all']);
  grunt.registerTask('patternlab:serve', ['patternlab', 'copy:main', 'less:default', 'browserSync', 'watch:all']);

};
