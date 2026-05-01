const $body = document.body;
const $wrap = document.getElementById('wrap');
const canvassize = 500;
const length = 30;
const radius = 5.6;
const rotatevalue = 0.035;
const pi2 = Math.PI * 2;

let acceleration = 0;
let animatestep = 0;
let toend = false;

let camera, scene, renderer, mesh, ring, ringcover, group;

class CustomTubeCurve extends THREE.Curve {
    getPoint(percent, optionalTarget = new THREE.Vector3()) {
        const x = length * Math.sin(pi2 * percent);
        const y = radius * Math.cos(pi2 * 3 * percent);
        
        let t = (percent % 0.25) / 0.25;
        t = (percent % 0.25) - (2 * (1 - t) * t * -0.0185 + t * t * 0.25);
        
        if (Math.floor(percent / 0.25) === 0 || Math.floor(percent / 0.25) === 2) {
            t *= -1;
        }
        
        const z = radius * Math.sin(pi2 * 2 * (percent - t));
        return optionalTarget.set(x, y, z);
    }
}

function init() {
    camera = new THREE.PerspectiveCamera(65, 1, 1, 10000);
    camera.position.z = 150;

    scene = new THREE.Scene();
    group = new THREE.Group();
    scene.add(group);

    // Geometria do Tubo
    const curve = new CustomTubeCurve();
    const geometry = new THREE.TubeGeometry(curve, 200, 1.1, 8, true);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true });
    
    mesh = new THREE.Mesh(geometry, material);
    group.add(mesh);

    // Ring Cover
    ringcover = new THREE.Mesh(
        new THREE.PlaneGeometry(50, 15), 
        new THREE.MeshBasicMaterial({ color: 0x212b46, opacity: 0, transparent: true })
    );
    ringcover.position.x = length + 1;
    ringcover.rotation.y = Math.PI / 2;
    group.add(ringcover);

    // Ring
    ring = new THREE.Mesh(
        new THREE.RingGeometry(4.3, 5.55, 32), 
        new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0, transparent: true })
    );
    ring.position.x = length + 1.1;
    ring.rotation.y = Math.PI / 2;
    group.add(ring);

    // Sombras (Fake Shadows)
    for (let i = 0; i < 10; i++) {
        const plain = new THREE.Mesh(
            new THREE.PlaneGeometry(length * 2 + 1, radius * 3), 
            new THREE.MeshBasicMaterial({ color: 0x212b46, transparent: true, opacity: 0.13 })
        );
        plain.position.z = -2.5 + i * 0.5;
        group.add(plain);
    }

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvassize, canvassize);
    renderer.setClearColor('#212b46');

    $wrap.appendChild(renderer.domElement);

    $body.addEventListener('mousedown', () => toend = true);
    $body.addEventListener('touchstart', () => toend = true);
    $body.addEventListener('mouseup', () => toend = false);
    $body.addEventListener('touchend', () => toend = false);

    animate();
}

function easing(t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
}

function render() {
    animatestep = Math.max(0, Math.min(240, toend ? animatestep + 1 : animatestep - 4));
    acceleration = easing(animatestep, 0, 1, 240);

    if (acceleration > 0.35) {
        const progress = (acceleration - 0.35) / 0.65;
        group.rotation.y = -Math.PI / 2 * progress;
        group.position.z = 50 * progress;
        
        const opacityProgress = Math.max(0, (acceleration - 0.97) / 0.03);
        mesh.material.opacity = 1 - opacityProgress;
        ringcover.material.opacity = ring.material.opacity = opacityProgress;
        ring.scale.x = ring.scale.y = 0.9 + 0.1 * opacityProgress;
    } else {
        // Reset suave
        group.rotation.y = 0;
        group.position.z = 0;
        mesh.material.opacity = 1;
    }

    renderer.render(scene, camera);
}

function animate() {
    mesh.rotation.x += rotatevalue + acceleration;
    render();
    requestAnimationFrame(animate);
}

init();