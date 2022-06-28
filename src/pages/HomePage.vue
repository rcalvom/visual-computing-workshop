<template>
    <b-container class="my-4">
        <b-row>
            <b-col>
                <h1>Visual Computing</h1>
            </b-col>
        </b-row>
        <b-row class="mt-4">
            <h2>Introduction</h2>
        </b-row>
        <b-row>
            <p class="text-left">This web page contains a collection of animations developed in the "Visual Computing" course offered by the Department of Systems Engineering and Computing at the Faculty of Engineering of the National University of Colombia, Bogotá. The animations and illusions presented here apply the different theories and principles of computer graphics and how this has generated a great impact in recent years.</p>
        </b-row>
        <b-row>
            <h2>Authors</h2>
        </b-row>
        <b-row align-content="center" class="mt-2">
            <b-col md="6" align-self="center">
                <b-card
                    class="mb-2"
                    align="center"
                    bg-variant="primary"
                >
                    <b-card-title>
                        <b-avatar class="mr-3" size="lg"/>Ricardo Andrés Calvo Méndez
                    </b-card-title>
                    <b-card-text>Universidad Nacional de Colombia</b-card-text>
                    <b-button href="https://github.com/rcalvom" variant="primary"><b-icon-github class="mb-1 mr-2"/>Github Profile</b-button>
                    <b-button href="https://www.linkedin.com/in/ricardo-andres-calvo-mendez" variant="primary"><b-icon-linkedin class="mb-1 mr-2"/>Linkedin Profile</b-button>
                </b-card>
            </b-col>
            <b-col md="6" align-self="center">
                <b-card
                    class="mb-2"
                    align="center"
                    bg-variant="primary"
                >
                    <b-card-title>
                        <b-avatar class="mr-3" size="lg"/>Jorge Aurelio Morales Manrique
                    </b-card-title>
                    <b-card-text>Universidad Nacional de Colombia</b-card-text>
                    <b-button href="https://github.com/jomorales1" variant="primary"><b-icon-github class="mb-1 mr-2"/>Github Profile</b-button>
                    <b-button href="https://www.linkedin.com/in/jorge-aurelio-morales-manrique-3117471b5/" variant="primary"><b-icon-linkedin class="mb-1 mr-2"/>Linkedin Profile</b-button>
                </b-card>
            </b-col>

        </b-row>
        <b-row class="mt-4">
            <h2>Frameworks and technologies</h2>
        </b-row>
        <b-row class="pl-4 ml-4 mt-4">
            <svg viewBox="0 0 128 128" width="40" height="40">
                <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"/>
                <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"/>
            </svg>
            <h4 class="ml-4">Vue.js</h4>
        </b-row>
        <b-row class="pl-4 ml-4 mt-4">
            <p class="ml-4"><b-link href="https://vuejs.org/">Vue.js Framework</b-link> is used as the frontend framework for this website, Vue.js allow us to use a lot of usefull package from <b-link href="https://nodejs.org">node.js</b-link></p>
            <p class="ml-4">In this project we're using <b-link href="https://bootstrap-vue.org/">Bootstrap Vue</b-link> as grpahical package</p> 
        </b-row>
        <b-row class="pl-4 ml-4 mt-4">
            <svg  width="60" height="40">
                <defs>
                    <path id="p5js-logo-small_svg__a" d="M0 0h36v36H0z"/>
                    <path id="p5js-logo-small_svg__b" d="M0 0h36v36H0z"/>
                </defs>
                <g fill="none" fill-rule="evenodd">
                    <path fill="#ED225D" d="M0 0h56v42H0z"/>
                    <g transform="translate(10)">
                        <use fill="#FFF" xlink:href="#p5js-logo-small_svg__a"/>
                        <path stroke="#979797" d="M.5.5h35v35H.5z"/>
                    </g>
                    <path fill="#ED225D" d="M21.025 20.617a2.826 2.826 0 00-.941-.795c-.38-.201-.824-.302-1.334-.302-.481 0-.912.104-1.29.314-.38.209-.704.478-.974.805-.27.329-.474.702-.612 1.12a3.85 3.85 0 000 2.496c.138.411.342.78.612 1.109.27.328.594.593.974.794.378.202.809.302 1.29.302.51 0 .955-.104 1.334-.313a2.91 2.91 0 00.94-.806c.248-.328.434-.701.559-1.12a4.283 4.283 0 000-2.497 3.54 3.54 0 00-.558-1.107"/>
                    <g transform="translate(10)">
                        <mask id="p5js-logo-small_svg__c" fill="#fff">
                            <use xlink:href="#p5js-logo-small_svg__b"/>
                        </mask>
                        <path fill="#ED225D" d="M32.75 16.44l-.989.717-1.026-1.361-1.001 1.326-.963-.734.975-1.337-1.582-.571.374-1.15 1.586.511v-1.644h1.273v1.647l1.574-.476.373 1.15-1.57.536.975 1.385zm-7.045 8.959a5.208 5.208 0 01-1.25 1.769 5.422 5.422 0 01-1.844 1.105 6.559 6.559 0 01-2.25.383c-1.334 0-2.46-.312-3.374-.936a5.238 5.238 0 01-1.533-1.614l1.953-1.835.03-.01a3.14 3.14 0 001.125 1.52c.525.384 1.147.576 1.867.576.405 0 .787-.068 1.147-.204.36-.134.675-.33.945-.585a2.72 2.72 0 00.641-.958c.158-.383.237-.815.237-1.296 0-.616-.106-1.127-.315-1.533a2.775 2.775 0 00-.821-.98 3.075 3.075 0 00-1.136-.519 5.634 5.634 0 00-1.282-.146c-.3 0-.619.022-.957.067-.337.046-.667.11-.99.192-.322.083-.637.177-.944.281a6.717 6.717 0 00-.821.338l.27-8.722h9.065v2.434h-6.501l-.157 3.449c.254-.075.558-.128.91-.158a11.4 11.4 0 01.957-.045c.78 0 1.503.112 2.17.338a5.15 5.15 0 011.744.98c.495.429.88.955 1.158 1.578.278.624.416 1.341.416 2.153 0 .887-.153 1.679-.46 2.378zm-11.601-.36a5.504 5.504 0 01-1.058 1.825 5.08 5.08 0 01-1.664 1.24c-.653.307-1.392.462-2.216.462a4.678 4.678 0 01-2.103-.474c-.638-.315-1.13-.743-1.474-1.285h-.045v6.853h-2.7V17.43h2.588v1.51h.067c.135-.21.311-.424.529-.642.217-.218.484-.413.799-.587a4.908 4.908 0 012.407-.597c.764 0 1.469.147 2.114.44.645.293 1.2.695 1.665 1.206a5.465 5.465 0 011.08 1.803c.254.691.382 1.435.382 2.231 0 .797-.124 1.544-.371 2.243zM0 36.07h36V0H0v36.071z" mask="url(#p5js-logo-small_svg__c)"/>
                    </g>
                </g>            
            </svg>
            <h4 class="ml-2">P5.js</h4>
        </b-row>
        <b-row class="pl-4 ml-4 mt-4">
            <p class="ml-4"><b-link href="https://p5js.org/"> P5.js</b-link> is used as the drawing package that allow us to create sketches where we show different applications of visual computing</p>
        </b-row>
        <b-row class="pl-4 ml-4 mt-4">
            <svg width="64px" height="64px" viewBox="0 0 256 263" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                <g fill="#ffffff">
                    <path d="M166.872326,131.23686 L212.781118,51.9623472 L234.965569,131.23686 L212.781118,210.493243 L166.872326,131.23686 L166.872326,131.23686 Z M144.495923,144.110517 L190.412179,223.373299 L110.445569,202.886567 L52.6751399,144.110517 L144.495923,144.110517 L144.495923,144.110517 Z M190.401515,39.0780261 L144.495923,118.352539 L52.6751399,118.352539 L110.445569,59.5732891 L190.401515,39.0780261 L190.401515,39.0780261 Z M255.940714,104.258913 L227.932619,0.0603519323 L123.392808,27.9852677 L107.918186,55.1924919 L76.5167858,54.9674802 L0,131.244325 L76.5167858,207.50304 L76.519985,207.50304 L107.907522,207.270564 L123.404539,234.477788 L227.932619,262.398438 L255.940714,158.219072 L240.035264,131.23686 L255.940714,104.258913 L255.940714,104.258913 Z"></path>
                </g>
            </svg>
            <h4 class="ml-2 mt-3">Unity Game Engine</h4>
        </b-row>
        <b-row class="pl-4 ml-4 mt-4">
            <p class="ml-4"><b-link href="https://unity.com/">Unity Game Engine</b-link> is used similar to p5.js, unity is used to visualize the concepts discussed throughout this web site.</p>
        </b-row>
        <b-row class="pl-4 ml-4 mt-4">
            <b-icon-github scale="2" class="ml-4"/>
            <h4 class="ml-4">Github Pages</h4>
        </b-row>
        <b-row class="pl-4 ml-4 mt-4">
            <p class="ml-4">For deployment of this website, we're using a Pipeline of <b-link href="https://pages.github.com/"> GitHub pages</b-link> to automatically perform a deploy on a push action on master branch</p>
        </b-row>
    </b-container>
</template>
