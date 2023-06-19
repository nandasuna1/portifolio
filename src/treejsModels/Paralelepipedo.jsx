import React, { useRef } from 'react'
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'

export default function Paralelepipedo({techName = 'WeatherApp'}) {

    console.log(techName);
    const projectImgPath = {
        'CryptoApp': "img/projects/criptoVerse.png",
        'Pokedex': "img/projects/pokedex.png",
        'VueMovies': "img/projects/vueMovies.png",
        'WeatherApp': "img/projects/wApp.jpeg",
        'EventPlataform': "img/projects/eventplataform.png",
        'IgniteTeams': "img/projects/igniteteams.png",
    }

    // Cria a textura
    const textureLoader = new TextureLoader();
    const texture = textureLoader.load(projectImgPath[techName]);
    
    return (
    <mesh>
        <boxGeometry args={[3.5,0.1,3]}/>
        <meshStandardMaterial map={texture}>
            <RenderTexture attach="map">
                <PerspectiveCamera 
                    makeDefault
                    position={[0,0,0]}
                />
                <color attach="background" args={["#686868"]}/>
                {/* <Text fontSize={0.5} color="#0caaaa" ref={textRef}>{textString}</Text> */}
            </RenderTexture>
        </meshStandardMaterial>
    </mesh>
  )
}
