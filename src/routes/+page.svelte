<script lang="ts">
  import { onMount } from 'svelte'

  import * as THREE from 'three'
  import { createRenderer, cube } from '$lib/three/three'

  onMount(() => {
    let tick = 0
    let width = window.innerWidth
    let height = window.innerHeight - 64
    const scene = new THREE.Scene()

    const renderer = createRenderer(width, height)
    document.querySelector('#canvas')?.appendChild(renderer.domElement)
    
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 400
    scene.add(camera)

    const sphere = new THREE.Object3D()
    const skeleton = new THREE.Object3D()
    const particles = new THREE.Object3D()
    
    scene
      .add(sphere)
      .add(skeleton)
      .add(particles)
    
    const tetra = new THREE.TetrahedronGeometry(2, 0)
    const icosas = [new THREE.IcosahedronGeometry(7, 1), new THREE.IcosahedronGeometry(15, 1)]

    const flat = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      flatShading: true,
    })

    const wired = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      wireframe: true,
      side: THREE.DoubleSide,
    })

    for (let i = 0; i < 256; i++) {
      const mesh = new THREE.Mesh(tetra, flat)
      mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize()
      mesh.position.multiplyScalar(90 + (Math.random() * 700))
      mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2)
      particles.add(mesh)
    }

    const planet = new THREE.Mesh(icosas[0], flat)
    planet.scale.x = planet.scale.y = planet.scale.z = 16
    sphere.add(planet)

    const frame = new THREE.Mesh(icosas[1], wired)
    frame.scale.x = frame.scale.y = frame.scale.z = 10
    skeleton.add(frame)

    const ambientLight = new THREE.AmbientLight(0x999999)
    scene.add(ambientLight)
    
    const lights: THREE.DirectionalLight[] = []
    lights[0] = new THREE.DirectionalLight(0xffffff, 2)
    lights[0].position.set(1, 0, 0)
    lights[1] = new THREE.DirectionalLight(0x11e8bb, 2)
    lights[1].position.set(0.75, 1, 0.5)
    lights[2] = new THREE.DirectionalLight(0x2c6fef, 2)
    lights[2].position.set(-0.75, -1, 0.5)

    for (const light of lights) {
      scene.add(light)
    }

    function animate() {
      requestAnimationFrame(animate)
      width = window.innerWidth
      height = window.innerHeight - 64
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()

      particles.rotation.x += 0.0000
      particles.rotation.y -= 0.0040
      sphere.rotation.x -= 0.0020
      sphere.rotation.y -= 0.0030
      skeleton.rotation.x -= 0.0010
      skeleton.rotation.y += 0.0020

      renderer.render(scene, camera)
      tick++
    }

    animate()
  })

  import Carousel, { type TrackItem } from '$lib/components/Carousel.svelte'

  let items: TrackItem[] = [
    {
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80',
      caption: 'Free Notes',
      link: '/igcse',
    },
    {
      image: 'https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
      caption: 'Flashcards',
      link: '/flashcards',
    },
    {
      image: 'https://images.unsplash.com/flagged/photo-1584036561584-b03c19da874c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      caption: 'Quality Questions',
      link: '/igcse',
    },
    {
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      caption: 'Open Source Code',
      link: 'https://github.com/intfract/igcsekit',
    },
  ]
</script>

<svelte:head>
  <title>Home</title>
  <meta property="og:title" content="Home">
  <meta property="og:description" content="Create an account and start studying!">
</svelte:head>

<div class="banner container">
  <div id="canvas"></div>
  <h1 class="hero">IGCSE Kit</h1>
</div>
<div class="padded container">
  <Carousel {items}></Carousel>
</div>

<style>
  .banner {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
  }

  #canvas {
    position: absolute;
    background-image: linear-gradient(180deg, var(--mdc-theme-primary), #11e8bb);
  }

  .container {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  .padded {
    padding: 16px;
    box-sizing: border-box;
  }

  .hero {
    margin: 0;
    color: var(--mdc-theme-on-primary);
    z-index: 2;
  }
</style>