"""
    Los diccionarios son colecciones de pares clave-valor.
    Los diccionarios no tienen orden.

    En un diccionarios las claves son unicas.
    
    - Crear

    - Acceso
    - Modificar
    - Agregar
    - Eliminar
    
    - Iterar

    - Existencia
"""

# Crear
diccionario1 = {
    "Carlos": 1234,
    "Maria": 5678,
    "Jose": 9012
}

persona1 = {
    "Nombre": "Carlos",
    "Apellido": "Lopez",
    "Edad": 25
}

persona2 = {
    "Nombre": "Maria",
    "Apellido": "Del Cerro",
    "Edad": 30
}

# Acceso
print(diccionario1["Carlos"])

# Agregar
diccionario1["Gaston"] = 3457
print(diccionario1)

# Modificar
diccionario1["Gaston"] = 8888
print(diccionario1)

# Eliminar
del diccionario1["Gaston"]
print(diccionario1)

# Iterar
# For each
for clave in diccionario1:
    print(clave, diccionario1[clave])

print("-----------------------------------------")
for clave in diccionario1.keys():
    print(clave, diccionario1[clave])

print("-----------------------------------------")
for valor in diccionario1.values():
    print(valor)
    
print("-----------------------------------------")
for clave, valor in diccionario1.items():
    print(clave, valor)

print("Carlos" in diccionario1)
print("Roberto" in diccionario1)

print(list(diccionario1))