## Reto #25 Ejecuta el leguaje mágico

<details>
    <summary>📝 Instrucciones</summary>

<br/>

¡Ya hemos repartido todos los regalos! De vuelta al taller, ya comienzan los preparativos para el año que viene.

Un elfo genio está creando un lenguaje de programación mágico 🪄, que ayudará a simplificar la entrega de regalos a los niños en 2025.

Los programas siempre empiezan con el valor 0 y el lenguaje es una cadena de texto donde cada caracter representa una instrucción:

- > Se mueve a la siguiente instrucción
- + Incrementa en 1 el valor actual
- - Decrementa en 1 el valor actual
- [ y ]: Bucle. Si el valor actual es 0, salta a la instrucción después de ]. Si no es 0, vuelve a la instrucción después de [
- {y }: Condicional. Si el valor actual es 0, salta a la instrucción después de }. Si no es 0, sigue a la instrucción después de {.

Tienes que devolver el valor del programa tras ejecutar todas las instrucciones.

``` js
execute('+++') // 3
execute('+--') // -1
execute('>+++[-]') // 0
execute('>>>+{++}') // 3
execute('+{[-]+}+') // 2
execute('{+}{+}{+}') // 0
execute('------[+]++') // 2
execute('-[++{-}]+{++++}') // 5

```

Nota: Un condicional puede tener un bucle dentro y también un bucle puede tener un condicional. Pero nunca se anidan dos bucles o dos condicionales.

</details>

<br/>

### Solución

```javascript

function execute(code) {
	let value = 0
	let i = 0
	let lastIndex = 0

	const cmds = {
		"+": () => ++value,
		"-": () => --value,
		"[": () => {
			if (value === 0) i = code.indexOf("]", i)
			lastIndex = i
		},
		"]": () => value !== 0 && (i = lastIndex),
		"{": () => value === 0 && (i = code.indexOf("}", i)),
	}

	for (i; i < code.length; i++) cmds[code[i]]?.()
	return value
}

```

> Puntuación: 🌟🌟🌟🌟🌟

<br/>

[⬅ Atras](https://github.com/jdtb4/adventJS)