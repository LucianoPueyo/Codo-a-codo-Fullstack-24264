class Persona:
    def __init__(self, nombre, apellido, dni):
        """
            Constructor
        """
        self.nombre = nombre
        self.apellido = apellido
        self.dni = dni

    def presentar(self):
        print(f"Hola, mi nombre es {self.nombre} {self.apellido}")

    def caminar(self):
        print("caminando")

    def __toString(self):
        return f"{self.nombre} {self.apellido} {self.dni}"

    def __repr__(self):
        return self.__toString()

    def __str__(self):
        return self.__toString()


# Instanciando la clase
persona1 = Persona("Carlos", "Lopez", 1234)
persona2 = Persona("Maria", "Del Cerro", 5678)

# Invoco metodos de las instancias
persona1.presentar()
persona1.caminar()

persona2.presentar()
persona2.caminar()

lista1 = [persona1, persona2]
print(lista1)

print(persona1)
print(persona2)
