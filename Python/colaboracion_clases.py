class Persona:
    mayoria_de_edad = 18 # Atributos de Clase

    def __init__(self, nombre, apellido, edad, dni):
        """
            Constructor
        """

        # Atributos de instancia
        self.nombre = nombre
        self.apellido = apellido
        self.edad = edad
        self.dni = dni
        self.saldo = 0

    def presentar(self):
        print(f"Hola, mi nombre es {self.nombre} {self.apellido}")

    def caminar(self):
        print("caminando")

    def transaccion(self, monto):
        self.saldo += monto

    def esMayorDeEdad(self):
        return self.edad >= Persona.mayoria_de_edad

    def __toString(self): # Metodo privado
        return f"{self.nombre} {self.apellido} {self.dni}"

    def __repr__(self):
        return self.__toString()

    def __str__(self):
        return self.__toString()
    

class Banco:
    def __init__(self, nombre):
        self.nombre = nombre
        self.lista_personas = []

    def registrar_persona(self, persona):
        if not persona.esMayorDeEdad(): # Early return
            raise ValueError("Solo se pueden registrar personas mayores de edad")
        
        self.lista_personas.append(persona)

    def contar_personas(self):
        return len(self.lista_personas)

    def saldo_total(self):
        total = 0

        for persona in self.lista_personas:
            total += persona.saldo

        return total
    
# Instanciando la clase
persona1 = Persona("Carlos", "Lopez", 25, 1234)
persona2 = Persona("Maria", "Del Cerro", 30, 5678)
persona3 = Persona("Roberto", "Perez", 52, 8901)

persona1.transaccion(1500)
persona2.transaccion(3000)
persona3.transaccion(5000)
persona3.transaccion(-1000)

banco1 = Banco("El Banco de Codo a Codo")

banco1.registrar_persona(persona1)
banco1.registrar_persona(persona2)
banco1.registrar_persona(persona3)

print(banco1.contar_personas())
print(banco1.saldo_total())