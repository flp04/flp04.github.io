import math

class Ponto:
  def __init__ (self, input):
    # tratamento do input recebido para separar os pontos
    input = input.strip()
    array = input.split(',')
    self.x = float(array[0])
    self.y = float(array[1])

class Triangulo:
  def __init__ (self, p1, p2, p3):
    self.a = p1
    self.b = p2
    self.c = p3

  def isTriangulo (self):
    ab = math.sqrt(((self.a.x - self.b.x) ** 2) + ((self.a.y - self.b.y) ** 2))
    bc = math.sqrt(((self.b.x - self.c.x) ** 2) + ((self.b.y - self.c.y) ** 2))
    ca = math.sqrt(((self.c.x - self.a.x) ** 2) + ((self.c.y - self.a.y) ** 2))
    return (ab < bc + ca) and (bc < ca + ab) and (ca < ab + bc) if 'true' else 'false'

p1 = Ponto(input('Informe um ponto x e um ponto y para a coordenada P1 separados por virgula: '))
p2 = Ponto(input('Informe um ponto x e um ponto y para a coordenada P2 separados por virgula: '))
p3 = Ponto(input('Informe um ponto x e um ponto y para a coordenada P3 separados por virgula: '))

triangulo = Triangulo(p1, p2, p3)

print(triangulo.isTriangulo())

# matriz = [['x'],['x'],['x'],['x'],['x']]
# print(matriz[0][0])