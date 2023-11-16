import * as THREE from 'three'

export function createRenderer(width: number, height: number) {
  const renderer = new THREE.WebGLRenderer({ alpha: true })
  renderer.setSize(width, height)
  renderer.setClearColor(0x000000, 0)
  return renderer
}

export function cube(size: number, mat: THREE.MeshPhongMaterialParameters) {
  const geometry = new THREE.BoxGeometry(size, size, size)
  const material = new THREE.MeshPhongMaterial(mat)
  return new THREE.Mesh(geometry, material)
}