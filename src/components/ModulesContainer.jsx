import React from 'react';
import ModuleElement from './ModuleElement';


export default function ModulesContainer({modules}) {
	const moduleElements = modules.map((module) => <ModuleElement key={module.id} caption={module.caption} description={module.description} img={module.img}/>)

	return (
		<div>{moduleElements}</div>
	)

}