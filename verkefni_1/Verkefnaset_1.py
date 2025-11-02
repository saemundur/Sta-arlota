def verkefni_1():
    celsius = int(input("Sláðu inn hitastig í Celsius: "))
    print(celsius * (9/5) + 32)
    


def verkefni_2():
    number = int(input("Sláðu inn tölu: "))
    if number % 2 == 0:
        print("Talan er slétt")
    else:
        print("Talan er oddatala")


def verkefni_3():
    num1 = int(input("Fyrri tala: "))
    num2 = int(input("Seinni tala: "))
    operation = input("Veldu aðgerð (+, -, *, /): ")
    if operation == '+':
        print(num1 + num2)
    elif operation == '-':
        print(num1 - num2)
    elif operation == '*':
        print(num1 * num2)
    elif operation == '/':
        print(num1 / num2)



def verkefni_4():
    number = int(input("Sláðu inn tölu: "))
    for i in range(1, 11):
        print(i * number)


def verkefni_5():
    target = 27
    gisk = -1
    while gisk != target:
        gisk = int(input("Sláðu inn gisk: "))
        if gisk > target:
            print("Of stór tala")
        elif gisk < target:
            print("Of lítil tala")
    print("Þú vannast!")


def verkefni_6():
    number = input("Sláðu inn tvístafa tölu: ")
    # Lausn hér


def verkefni_7():
    grade = input("Sláðu inn einkunn: ")
    # Lausn hér


def verkefni_8():
    limit = input("Sláðu inn efri mörk: ")
    # Lausn hér


def verkefni_9():
    username = input("Notandanafn: ")
    password = input("Lykilorð: ")
    # Lausn hér


def verkefni_10():
    first_number = input("Fyrsta talan: ")
    second_number = input("Önnur talan: ")
    third_number = input("Þriðja talan: ")
    # Lausn hér


def birta_valmynd():
    print("\nVerkefnasett 1 - veldu verkefni:")
    print("  1) Hitastig (C í F)")
    print("  2) Slétt eða oddatala")
    print("  3) Einföld reiknivél")
    print("  4) Margföldunartafla")
    print("  5) Giskleikur")
    print("  6) Summa stafa")
    print("  7) Einkunnapróf")
    print("  8) Telja sléttar tölur")
    print("  9) Einföld auðkenning")
    print(" 10) Stærsta talan")
    print("  q) Hætta")


def main():
    while True:
        birta_valmynd()
        val = input("Veldu verkefni (1-10 eða q): ").strip().lower()
        if val == "q":
            break
        elif val == "1":
            verkefni_1()
        elif val == "2":
            verkefni_2()
        elif val == "3":
            verkefni_3()
        elif val == "4":
            verkefni_4()
        elif val == "5":
            verkefni_5()
        elif val == "6":
            verkefni_6()
        elif val == "7":
            verkefni_7()
        elif val == "8":
            verkefni_8()
        elif val == "9":
            verkefni_9()
        elif val == "10":
            verkefni_10()
        else:
            print("Ógilt val.")

if __name__ == "__main__":
    main()
