## Reto #19 📦 Apila cajas mágicas para repartir regalos

<details>
    <summary>📝 Instrucciones</summary>

<br/>
¡Se acerca el día para repartir regalos! Necesitamos apilar los regalos que transportaremos en el trineo 🛷 y para eso los vamos a meter en cajas 📦.

Los regalos se pueden meter en 4 cajas distintas, donde cada caja soporta 1, 2, 5, 10 de peso y se representan así:

``` js

    _
1: |_|
    _____
2: |_____|
    _____
5: |     |
   |_____|
     _________
10: |         |
    |_________|

// Representación en JavaScript:
const boxRepresentations = {
  1: [" _ ", "|_|"] ,
  2: [" ___ ", "|___|"],
  5: [" _____ ", "|     |", "|_____|"],
  10: [" _________ ", "|         |", "|_________|"]
}

```

Tu misión es que al recibir el peso de los regalos, uses las mínimas cajas posibles y que, además, las apiles de menos peso (arriba) a más peso (abajo). Siempre alineadas a la izquierda.

Además, ten en cuenta que al apilarlas, se reusa el borde inferior de la caja.

``` js
distributeWeight(1)
// Devuelve:
//  _
// |_|

distributeWeight(2)
// Devuelve:
//  ___
// |___|

distributeWeight(3)
// Devuelve:
//  _
// |_|_
// |___|

distributeWeight(4)
// Devuelve:
//  ___
// |___|
// |___|

distributeWeight(5)
// Devuelve:
//  _____
// |     |
// |_____|

distributeWeight(6)
// Devuelve:
//  _
// |_|___
// |     |
// |_____|

```
Nota: ¡Ten cuidado con los espacios en blanco! No añadas espacios en blanco a la derecha de una caja si no son necesarios.

</details>

<br/>

## Solución

``` js

function distributeWeight(weight) {
	const sizes = [10, 5, 2, 1]
	const boxes = [];
	const boxR = {
		1: [" _ ", "|_|"],
		2: [" ___ ", "|___|"],
		5: [" _____ ", "|     |", "|_____|"],
		10: [" _________ ", "|         |", "|_________|"]
	}

	for (let size of sizes) {
		while (weight >= size) {
			boxes.push(size);
			weight -= size;
		}
	}

	return boxes.map((value, i) => {
		let top = boxes[i + 1]
			? boxR[boxes[i + 1]]?.at(-1)
			: boxR[boxes[i]]?.at(0)
		let bottom = boxR[value].length <= 2 ? "" : boxR[value].at(1)
		top += boxR[value].at(0).slice(top?.length ?? 0).trim()

		return [top, bottom, i === 0 && boxR[value].at(-1)].filter(Boolean).join("\n")
	}).reverse().join("\n")
}

```

> Puntuación: 🌟🌟🌟🌟🌟

<br/>

[⬅ Atras](https://github.com/jdtb4/adventJS)