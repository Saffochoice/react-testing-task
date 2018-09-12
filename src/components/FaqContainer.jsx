import React from 'react';
import QuestionElement from './QuestionElement';


export default function FaqContainer({questions}) {
	const moduleElements = questions.map((question) => <QuestionElement key={question.id} question={question.question} answer={question.answer}/>)

	return (
		<div>{moduleElements}</div>
	)

}