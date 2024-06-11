"""
    Las listas con una coleccion de elementos ordenados.

    Las acciones mas comunes son:

    - Crear

    - Acceso
    - Modificar
    - Agregar
    - Eliminar
    
    - Iterar

    - Existencia

    - Ordenar
"""

# Crear
lista1 = [1,2,3, "Hola", True, 5.1, 6+1j, [5,6,7], None]
lista2 = []
lista3 = list()

#           0         1        2
#          -3        -2       -1
alumnos = ["Carlos", "Maria", "Jose"]

# consultar el tamaño de una coleccion
print(len(alumnos))

# Acceso
print(alumnos[0]) # Primer elemento

# Indices negativos
print(alumnos[-1]) # Ultimo elemento

# Fuera de rango!
# alumnos[8]

# Modificar

print(alumnos)
alumnos[2] = "Roberto"
print(alumnos)

# Agregar
alumnos.append("Luisa") # Agregar al final
print(alumnos)

alumnos.insert(2, "Gaston") # Agrego en el indice 2
print(alumnos)

# Quitar
alumnos.pop() # Quita el ultimo
print(alumnos)

alumnos.pop()
print(alumnos)

alumnos.pop(1) #Quita por indice
print(alumnos)

numeros = [10, 20, 30, 10]

print(numeros)
numeros.remove(10)
print(numeros)

# Iterar
# For "Clasico"

#        0    1     2     3    4
notas = [7.5, 10.0, 8.33, 4.0, 6.5]

for i in range(len(notas)):
    print(notas[i])

print("------------------------------")
# For Each
for nota in notas:
    print(nota)

# Existencia
alumnos = ["Carlos", "Maria", "Jose", "Gaston"]
print("Carlos" in alumnos)
print("carlos" in alumnos)

# Ordenar
numeros = [1,9,2,8,3,7,4,6,5,0]

print(numeros)

numeros.sort()
print(numeros)

numeros.sort(reverse=True)
print(numeros)
