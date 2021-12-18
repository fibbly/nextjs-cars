/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: kunnatee (https://sketchfab.com/kunnatee)
license: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
source: https://sketchfab.com/models/eef0fd28e05a4e33a111424745bc9587
title: SAZABI MSN-04 Gundam
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

const modelId = "61bd4cac18ffba67aff554a5";
const url = `../models/${modelId}/scene.gltf`;

type GLTFResult = GLTF & {
	nodes: {
		mesh_0: THREE.Mesh;
		mesh_1: THREE.Mesh;
		mesh_2: THREE.Mesh;
		mesh_3: THREE.Mesh;
		mesh_4: THREE.Mesh;
		mesh_5: THREE.Mesh;
		mesh_6: THREE.Mesh;
		mesh_7: THREE.Mesh;
		mesh_8: THREE.Mesh;
		mesh_9: THREE.Mesh;
		mesh_10: THREE.Mesh;
		mesh_11: THREE.Mesh;
		mesh_12: THREE.Mesh;
		mesh_13: THREE.Mesh;
		mesh_14: THREE.Mesh;
		mesh_15: THREE.Mesh;
		mesh_16: THREE.Mesh;
		mesh_17: THREE.Mesh;
		mesh_18: THREE.Mesh;
		mesh_19: THREE.Mesh;
		mesh_20: THREE.Mesh;
		mesh_21: THREE.Mesh;
		mesh_22: THREE.Mesh;
		mesh_23: THREE.Mesh;
		mesh_24: THREE.Mesh;
		mesh_25: THREE.Mesh;
		mesh_26: THREE.Mesh;
		mesh_27: THREE.Mesh;
		mesh_28: THREE.Mesh;
		mesh_29: THREE.Mesh;
		mesh_30: THREE.Mesh;
		mesh_31: THREE.Mesh;
		mesh_32: THREE.Mesh;
		mesh_33: THREE.Mesh;
		mesh_34: THREE.Mesh;
		mesh_35: THREE.Mesh;
		mesh_36: THREE.Mesh;
		mesh_37: THREE.Mesh;
		mesh_38: THREE.Mesh;
		mesh_39: THREE.Mesh;
		mesh_40: THREE.Mesh;
		mesh_41: THREE.Mesh;
		mesh_42: THREE.Mesh;
		mesh_43: THREE.Mesh;
		mesh_44: THREE.Mesh;
		mesh_45: THREE.Mesh;
		mesh_46: THREE.Mesh;
		mesh_47: THREE.Mesh;
		mesh_48: THREE.Mesh;
		mesh_49: THREE.Mesh;
		mesh_50: THREE.Mesh;
		mesh_51: THREE.Mesh;
		mesh_52: THREE.Mesh;
		mesh_53: THREE.Mesh;
		mesh_54: THREE.Mesh;
		mesh_55: THREE.Mesh;
		mesh_56: THREE.Mesh;
		mesh_57: THREE.Mesh;
		mesh_58: THREE.Mesh;
		mesh_59: THREE.Mesh;
		mesh_60: THREE.Mesh;
		mesh_61: THREE.Mesh;
		mesh_62: THREE.Mesh;
		mesh_63: THREE.Mesh;
		mesh_64: THREE.Mesh;
		mesh_65: THREE.Mesh;
		mesh_66: THREE.Mesh;
		mesh_67: THREE.Mesh;
	};
	materials: {
		["15___Default"]: THREE.MeshStandardMaterial;
		["02___Default"]: THREE.MeshStandardMaterial;
		["02___Default"]: THREE.MeshStandardMaterial;
		["04___Default"]: THREE.MeshStandardMaterial;
		["05___Default"]: THREE.MeshStandardMaterial;
		["07___Default"]: THREE.MeshStandardMaterial;
		["07___Default"]: THREE.MeshStandardMaterial;
		["08___Default"]: THREE.MeshStandardMaterial;
		["08___Default"]: THREE.MeshStandardMaterial;
		["09___Default"]: THREE.MeshStandardMaterial;
		["10___Default"]: THREE.MeshStandardMaterial;
		["11___Default"]: THREE.MeshStandardMaterial;
		["13___Default"]: THREE.MeshStandardMaterial;
		["14___Default"]: THREE.MeshStandardMaterial;
		["14___Default"]: THREE.MeshStandardMaterial;
		["16___Default"]: THREE.MeshStandardMaterial;
		["17___Default"]: THREE.MeshStandardMaterial;
		material: THREE.MeshStandardMaterial;
		Material__2594: THREE.MeshStandardMaterial;
		Material__518: THREE.MeshStandardMaterial;
		wire_016016016: THREE.MeshStandardMaterial;
		wire_135059008: THREE.MeshStandardMaterial;
		wire_140088225: THREE.MeshStandardMaterial;
		wire_229154215: THREE.MeshStandardMaterial;
	};
};

export default function Model({ ...props }: JSX.IntrinsicElements["group"]) {
	const group = useRef<THREE.Group>();
	const { nodes, materials } = useGLTF(url) as GLTFResult;

	useFrame(() => (group.current!.rotation.y -= 0.005));

	return (
		<group ref={group} {...props} dispose={null}>
			<group
				rotation={[-Math.PI / 2, 0, 0]}
				scale={[0.005, 0.005, 0.005]}
				position={[0, -2.2, 0]}
			>
				<group position={[-518.07, -213.86, -84.28]}>
					<mesh
						geometry={nodes.mesh_0.geometry}
						material={materials["15___Default"]}
					/>
					<mesh
						geometry={nodes.mesh_1.geometry}
						material={nodes.mesh_1.material}
					/>
					<mesh
						geometry={nodes.mesh_2.geometry}
						material={nodes.mesh_2.material}
					/>
					<mesh
						geometry={nodes.mesh_3.geometry}
						material={nodes.mesh_3.material}
					/>
					<mesh
						geometry={nodes.mesh_4.geometry}
						material={nodes.mesh_4.material}
					/>
					<mesh
						geometry={nodes.mesh_5.geometry}
						material={nodes.mesh_5.material}
					/>
					<mesh
						geometry={nodes.mesh_6.geometry}
						material={nodes.mesh_6.material}
					/>
					<mesh
						geometry={nodes.mesh_7.geometry}
						material={materials["05___Default"]}
					/>
					<mesh
						geometry={nodes.mesh_8.geometry}
						material={nodes.mesh_8.material}
					/>
					<mesh
						geometry={nodes.mesh_9.geometry}
						material={nodes.mesh_9.material}
					/>
					<mesh
						geometry={nodes.mesh_10.geometry}
						material={nodes.mesh_10.material}
					/>
					<mesh
						geometry={nodes.mesh_11.geometry}
						material={nodes.mesh_11.material}
					/>
					<mesh
						geometry={nodes.mesh_12.geometry}
						material={nodes.mesh_12.material}
					/>
					<mesh
						geometry={nodes.mesh_13.geometry}
						material={nodes.mesh_13.material}
					/>
					<mesh
						geometry={nodes.mesh_14.geometry}
						material={nodes.mesh_14.material}
					/>
					<mesh
						geometry={nodes.mesh_15.geometry}
						material={nodes.mesh_15.material}
					/>
					<mesh
						geometry={nodes.mesh_16.geometry}
						material={nodes.mesh_16.material}
					/>
					<mesh
						geometry={nodes.mesh_17.geometry}
						material={nodes.mesh_17.material}
					/>
					<mesh
						geometry={nodes.mesh_18.geometry}
						material={nodes.mesh_18.material}
					/>
					<mesh
						geometry={nodes.mesh_19.geometry}
						material={nodes.mesh_19.material}
					/>
					<mesh
						geometry={nodes.mesh_20.geometry}
						material={nodes.mesh_20.material}
					/>
					<mesh
						geometry={nodes.mesh_21.geometry}
						material={nodes.mesh_21.material}
					/>
					<mesh
						geometry={nodes.mesh_22.geometry}
						material={nodes.mesh_22.material}
					/>
					<mesh
						geometry={nodes.mesh_23.geometry}
						material={nodes.mesh_23.material}
					/>
					<mesh
						geometry={nodes.mesh_24.geometry}
						material={nodes.mesh_24.material}
					/>
					<mesh
						geometry={nodes.mesh_25.geometry}
						material={nodes.mesh_25.material}
					/>
					<mesh
						geometry={nodes.mesh_26.geometry}
						material={nodes.mesh_26.material}
					/>
					<mesh
						geometry={nodes.mesh_27.geometry}
						material={nodes.mesh_27.material}
					/>
					<mesh
						geometry={nodes.mesh_28.geometry}
						material={nodes.mesh_28.material}
					/>
					<mesh
						geometry={nodes.mesh_29.geometry}
						material={nodes.mesh_29.material}
					/>
					<mesh
						geometry={nodes.mesh_30.geometry}
						material={materials["10___Default"]}
					/>
					<mesh
						geometry={nodes.mesh_31.geometry}
						material={nodes.mesh_31.material}
					/>
					<mesh
						geometry={nodes.mesh_32.geometry}
						material={nodes.mesh_32.material}
					/>
					<mesh
						geometry={nodes.mesh_33.geometry}
						material={nodes.mesh_33.material}
					/>
					<mesh
						geometry={nodes.mesh_34.geometry}
						material={nodes.mesh_34.material}
					/>
					<mesh
						geometry={nodes.mesh_35.geometry}
						material={materials["13___Default"]}
					/>
					<mesh
						geometry={nodes.mesh_36.geometry}
						material={nodes.mesh_36.material}
					/>
					<mesh
						geometry={nodes.mesh_37.geometry}
						material={nodes.mesh_37.material}
					/>
					<mesh
						geometry={nodes.mesh_38.geometry}
						material={materials["16___Default"]}
					/>
					<mesh
						geometry={nodes.mesh_39.geometry}
						material={nodes.mesh_39.material}
					/>
					<mesh
						geometry={nodes.mesh_40.geometry}
						material={nodes.mesh_40.material}
					/>
					<mesh
						geometry={nodes.mesh_41.geometry}
						material={materials.material}
					/>
					<mesh
						geometry={nodes.mesh_42.geometry}
						material={nodes.mesh_42.material}
					/>
					<mesh
						geometry={nodes.mesh_43.geometry}
						material={nodes.mesh_43.material}
					/>
					<mesh
						geometry={nodes.mesh_44.geometry}
						material={nodes.mesh_44.material}
					/>
					<mesh
						geometry={nodes.mesh_45.geometry}
						material={nodes.mesh_45.material}
					/>
					<mesh
						geometry={nodes.mesh_46.geometry}
						material={nodes.mesh_46.material}
					/>
					<mesh
						geometry={nodes.mesh_47.geometry}
						material={nodes.mesh_47.material}
					/>
					<mesh
						geometry={nodes.mesh_48.geometry}
						material={nodes.mesh_48.material}
					/>
					<mesh
						geometry={nodes.mesh_49.geometry}
						material={nodes.mesh_49.material}
					/>
					<mesh
						geometry={nodes.mesh_50.geometry}
						material={nodes.mesh_50.material}
					/>
					<mesh
						geometry={nodes.mesh_51.geometry}
						material={nodes.mesh_51.material}
					/>
					<mesh
						geometry={nodes.mesh_52.geometry}
						material={nodes.mesh_52.material}
					/>
					<mesh
						geometry={nodes.mesh_53.geometry}
						material={nodes.mesh_53.material}
					/>
					<mesh
						geometry={nodes.mesh_54.geometry}
						material={nodes.mesh_54.material}
					/>
					<mesh
						geometry={nodes.mesh_55.geometry}
						material={nodes.mesh_55.material}
					/>
					<mesh
						geometry={nodes.mesh_56.geometry}
						material={nodes.mesh_56.material}
					/>
					<mesh
						geometry={nodes.mesh_57.geometry}
						material={nodes.mesh_57.material}
					/>
					<mesh
						geometry={nodes.mesh_58.geometry}
						material={nodes.mesh_58.material}
					/>
					<mesh
						geometry={nodes.mesh_59.geometry}
						material={nodes.mesh_59.material}
					/>
					<mesh
						geometry={nodes.mesh_60.geometry}
						material={nodes.mesh_60.material}
					/>
					<mesh
						geometry={nodes.mesh_61.geometry}
						material={nodes.mesh_61.material}
					/>
					<mesh
						geometry={nodes.mesh_62.geometry}
						material={nodes.mesh_62.material}
					/>
					<mesh
						geometry={nodes.mesh_63.geometry}
						material={materials.Material__518}
					/>
					<mesh
						geometry={nodes.mesh_64.geometry}
						material={materials.wire_016016016}
					/>
					<mesh
						geometry={nodes.mesh_65.geometry}
						material={materials.wire_135059008}
					/>
					<mesh
						geometry={nodes.mesh_66.geometry}
						material={materials.wire_140088225}
					/>
					<mesh
						geometry={nodes.mesh_67.geometry}
						material={materials.wire_229154215}
					/>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload(url);