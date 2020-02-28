Algoritmo determinaElmayorNumero
	Definir N1,N2,N3,R Como Entero
	Escribir 'Ingresa 3 numeros diferentes'
	Leer N1,N2,N3
	Mientras N1=N2 o N2=N3 o N1=N3 Hacer
		Escribir 'No debe repitir numeros, ingresa valor diferente'
		Leer N1, N2, N3
	FinMientras
	Si N1<N2 Entonces
		R <- N1
	SiNo
		R <- N2
	FinSi
	Si R>N3 Entonces
		Escribir 'El mayor es: '
		Escribir R
	SiNo
		Escribir 'El Mayor es: '
		Escribir N3
	FinSi
FinAlgoritmo
