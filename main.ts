input.onButtonPressed(Button.A, function () {
    Roule_le_dé = randint(1, 9)
    basic.showNumber(Roule_le_dé)
    Total_des_points += Roule_le_dé
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Total_des_points)
})
let Roule_le_dé = 0
let Total_des_points = 0
Total_des_points = 0
