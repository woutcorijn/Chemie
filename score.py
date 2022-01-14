Partieel = int(input("Score partieel op 20: "))
Organisch = int(input("Score organisch op 35: "))
Anorganisch = int(input("Score anorganisch op 20: "))
Labo = int(input("Gemiddelde Score op labo op 20: "))

Result = 20*(5/6*(1/10*Partieel/20 + 9/10*(1/3*Organisch/35 + 2/3*Anorganisch/20)) + 1/6*Labo/20)

print(round(Result, 2),"/20")
