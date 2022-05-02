import React, { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Experiences.module.css';

const Experiences = () => {
	const { newTheme } = useContext(ThemeContext);
	return (
		<div className={styles.experiences}>
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Experience
			</h1>
			<div className={styles.borderBottom} />

			<div className={styles.container}>
				<div className={styles.position}>
					Assistant Accountent | {' '}
					<a href=''>@ MS Enterprises</a>
				</div>
				<div className={styles.date}>March 2020 - May 2021</div>
				<fieldset className={styles.responsibilites}>
					<legend>
						<h3> Roles & responsibilites </h3>
					</legend>
					<ul>
						<li>
							GST bills and payment transfers. Money collecting form the customers
							 and depositing in companies account.
						</li>
						<li>
							Worked on the main part along with senior accountent
							and Maintained the documentation. Over viwe of the monthly expenditure
							calculation.
						</li>
						
					</ul>
				</fieldset>
			</div>
		</div>
	);
};

export default Experiences;
