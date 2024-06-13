class Perro:
    def sonido(self):
        print("GUAU")


class Gato:
    def sonido(self):
        print("MIAU")


class Pato:
    def sonido(self):
        print("CUACK")


perro1 = Perro()
gato1 = Gato()
pato1 = Pato()

lista_animales = [perro1, gato1, pato1]

for animal in lista_animales:
    animal.sonido()