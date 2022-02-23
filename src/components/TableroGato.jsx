import React, { useEffect, useState } from 'react';

import styles from '../styles/tableroGato.module.css';

export const TableroGato = ({ turno = false, empate = false }) => {
  const valor = [
    ['😉', '🐧', '🐧'],
    ['😉', '😉', '🐧'],
    ['🐧', '😉', '😉'],
	];
	
	const [animacionEmpate, setAnimacionEmpate] = useState([
    [false, false, false],
    [false, false, false],
    [false, false, false],
	])

	useEffect(() => {

		if (!empate) {
			return
		}

		const ordenAnimation = {
			0: {row:0, col:2},
			1: {row:0, col:1},
			2: {row:0, col:0},
			3: {row:1, col:0},
			4: {row:2, col:0},
			5: {row:2, col:1},
			6: {row:2, col:2},
			7: {row:1, col:2},
			8: {row:1, col:1},
		}


		let avance = 0;
		const interval = setInterval(() => {
			if (avance < 9) {
				const { row, col } = ordenAnimation[avance];
				setAnimacionEmpate([...animacionEmpate, animacionEmpate[row][col] = true])
				avance++
			} else {
				clearInterval(interval);
			}
    }, 150);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>gato</h1>
      <table className={styles.tablero}>
        <tbody>
          {valor.map((row, indexRow) => {
            return (
              <tr key={`${indexRow}-tr`}>
                {row.map((valor, indexCol) => (
                  <td
                    key={`${indexCol}-td`}
                    className={` ${turno && styles.turno} ${ animacionEmpate[indexRow][indexCol] && styles.animacion} `}
                  >
                    <p
                      className={`${styles.text} + ${styles.last} + ${styles.noselect}`}
                    >
                      {valor}
                    </p>
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
