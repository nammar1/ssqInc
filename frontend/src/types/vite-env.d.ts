/// <reference types="vite/client" />
/// <reference types="@react-three/fiber" />

declare module '@react-three/fiber' {
  interface ThreeElements {
    group: any
    mesh: any
    primitive: any
    geometry: any
    bufferGeometry: any
    bufferAttribute: any
    material: any
    meshBasicMaterial: any
    meshStandardMaterial: any
    meshPhongMaterial: any
    lineBasicMaterial: any
    ambientLight: any
    directionalLight: any
    pointLight: any
    spotLight: any
    hemisphereLight: any
    rectAreaLight: any
    perspectiveCamera: any
    orthographicCamera: any
    points: any
    line: any
    lineSegments: any
    text3D: any
    center: any
  }
}

export {}
  