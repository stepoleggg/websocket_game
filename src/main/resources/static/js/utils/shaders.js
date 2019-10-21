let TIME = 0;
const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
        uTime: { value: TIME }
    },
    vertexShader:   document.getElementById('floor-vertex-shader').textContent,
    fragmentShader: document.getElementById('floor-fragment-shader').textContent
});


function updateUniforms() {
    TIME += 0.005;
    scene.traverse((child) => {
        if (child instanceof THREE.Mesh
            && child.material.type === 'ShaderMaterial') {
            child.material.uniforms.uTime.value = TIME;
            child.material.needsUpdate = true;
        }
    });
}