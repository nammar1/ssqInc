/// <reference types="@react-three/fiber" />

declare global {
  namespace JSX {
    type R3FThreeElements = import('@react-three/fiber').ThreeElements;
    interface IntrinsicElements extends R3FThreeElements {}
  }
} 