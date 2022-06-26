<template>
    <div id="unity-container" class="unity-desktop">
        <canvas id="unity-canvas" width=960 height=600></canvas>
        <div id="unity-loading-bar">
            <div id="unity-logo"></div>
            <div id="unity-progress-bar-empty">
                <div id="unity-progress-bar-full"></div>
            </div>
        </div>
    <div id="unity-warning"></div>
    </div>
</template>

<script>
    import createUnityInstance from '@/unity/Unity.loader';
    export default {
        name: "UnityWebGL",
        props: {
            dataPath: String,
            loaderPath: String,
            frameworkPath: String,
            codePath: String,
            streamingAssetsPath: String,
            companyName: String,
            productName: String,
            productVersion: String
        },
        data(){
            return{
                
            }
        },
        mounted(){
            var config = {
                dataUrl: this.dataPath,
                frameworkUrl: this.frameworkPath,
                codeUrl: this.codePath,
                streamingAssetsUrl: this.streamingAssetsPath,
                companyName: this.companyName,
                productName: this.productName,
                productVersion: this.productVersion,
                showBanner: this.unityShowBanner,
            };
            var canvas = document.querySelector("#unity-canvas");
            canvas.style.width = "960px";
            canvas.style.height = "600px";

            var loadingBar = document.querySelector("#unity-loading-bar");
            loadingBar.style.display = "block";

            var script = document.createElement("script");
            script.src = this.loaderPath;
            script.onload = () => {
                createUnityInstance(canvas, config, (progress) => {
                    var progressBarFull = document.querySelector("#unity-progress-bar-full");
                    progressBarFull.style.width = 100 * progress + "%";
                }).then((/*unityInstance*/) => {
                    loadingBar.style.display = "none";
                }).catch((message) => {
                    alert(message);
                });
            };
            document.body.appendChild(script);
        },
        methods: {
            unityShowBanner: function(msg, type) {
                var warningBanner = document.querySelector("#unity-warning");
                function updateBannerVisibility() {
                    warningBanner.style.display = warningBanner.children.length ? 'block' : 'none';
                }
                var div = document.createElement('div');
                div.innerHTML = msg;
                warningBanner.appendChild(div);
                if (type == 'error') {
                    div.style = 'background: red; padding: 10px;';
                } else {
                    if (type == 'warning') {
                        div.style = 'background: yellow; padding: 10px;';
                    }
                    setTimeout(function() {
                        warningBanner.removeChild(div);
                        updateBannerVisibility();
                    }, 5000);
                }
                updateBannerVisibility();
            }
        }
    }
</script>

<style>
#unity-container { 
    position: absolute 
}
#unity-container.unity-desktop { 
    left: 50%; 
    top: 50%; 
    transform: translate(-50%, -50%);
}
#unity-container.unity-mobile { 
    width: 100%; 
    height: 100%; 
}
#unity-canvas { 
    background: #231F20;
}
.unity-mobile #unity-canvas { 
    width: 100%; 
    height: 100%;
}
#unity-loading-bar {
    position: absolute; 
    left: 50%; 
    top: 50%; 
    transform: translate(-50%, -50%); 
    display: none;
}
#unity-logo { 
    width: 154px; 
    height: 130px; 
    background: url('@/unity/test/TemplateData/unity-logo-dark.png') no-repeat center;
}
#unity-progress-bar-empty { 
    width: 141px; 
    height: 18px; 
    margin-top: 10px; 
    margin-left: 6.5px; 
    background: url('@/unity/test/TemplateData/progress-bar-empty-dark.png') no-repeat center;
}
#unity-progress-bar-full { 
    width: 0%; 
    height: 18px; 
    margin-top: 10px; 
    background: url('@/unity/test/TemplateData/progress-bar-full-dark.png') no-repeat center;
}
#unity-warning { 
    position: absolute; 
    left: 50%; 
    top: 5%; 
    transform: translate(-50%); 
    background: white; 
    padding: 10px; 
    display: none;
}
</style>