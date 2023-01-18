import React from 'react'
import "./ButtonList.css"

const ButtonList = ({ categories, filterCategory }) => {
    return (
		<div>
			<div className='categories-title'>
				<h1>
					Entradas
				</h1>
			</div>
			<div className='categories'>
			{categories.map(category => (
				<button
					type='button'
					className='btn-category'
					onClick={() => filterCategory(category)}
					key={category}
				><h2>
					{category}
				</h2>
				</button>
			))}
			</div>
		</div>

		
	);
}

export default ButtonList