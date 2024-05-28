# Aritmeticos
print(7 + 8)
print(3 - 5)
print(3 * 4)
print(7 / 5)

print(7 // 5) # Division entera
print(5 % 2) # Resto de la division

print(2 ** 2) # Potencia
print(2 ** 0.5) # Raiz cuadrada

suma = 7 + (10*5 - 8/2)
print("La variable es de tipo: " + str(type(suma))) # Casteo explicito
print("Hola ", suma) # Separo los valores dentro del print con comas
print(f"El costo final es de: ${suma} pesos argentinos") # uso f string

# Comparando con el mismo resultado concatenando y casteando
print("El costo final es de: $" + str(suma) + " pesos argentinos")
