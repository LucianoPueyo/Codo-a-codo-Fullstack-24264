"""
    Las tuplas son muy parecidas a las listas.
    Son colecciones INMUTABLES de elementos ordenados.

    Las acciones mas comunes son:

    - Crear

    - Acceso
    - Iterar

    - Existencia
"""
#         0 1 2 3
tupla1 = (1,2,3,4)

# Acceso
print("Primer Elemento", tupla1[0])
print("Ultimo Elemento", tupla1[-1])

# Existencia
print(6 in tupla1)
print(3 in tupla1)

# Iterar
for i in range(len(tupla1)):
    print(tupla1[i])

print("---------------------------")

for numero in tupla1:
    print(numero)

# Checkeando tipos
print(type(tupla1), type([8,7,9]))

def funcion1():
    return "hola", "Adios"

resultado = funcion1()
print(resultado, type(resultado))