// Funksiya yozing, u berilgan sonning juft yoki toq ekanligini aniqlasin.
alert("1-vazifa")
let num1 = +prompt("son")

function check() {
    if (num1 % 2 == 0) {
        console.log("juft son")
    } else {
        console.log("toq son")
    }
}

check()

// Funksiya yozing, u berilgan sonning musbat, manfiy yoki nol ekanligini aniqlasin.
alert("2-vazifa")
let num2 = +prompt("son")

function musbat() {
    if (num2 > 0) {
        console.log("berilgan son musbat")
    } else {
        if (num2 < 0) {
            console.log("berilgan son manfiy")
        }
    }

    if (num2 === 0) {
        console.log("berilgan son 0 ga teng")
    }
}

musbat()

// Funksiya yozing, u berilgan ikki sondan kattasini qaytarsin.
alert("3-vazifa")
let num3 = +prompt("1-son")
let num4 = +prompt("2-son")
let max

function max_min() {
    if (num3 > num4) {
        max = num3
    } else {
        max = num4
    }
    console.log(max)
}

max_min()

// Funksiya yozing, u uchta sondan eng kattasini aniqlasin.
alert("4-vazifa")
let num5 = +prompt("1-son")
let num6 = +prompt("2-son")
let num7 = +prompt("3-son")
let max_2

function the_Largest_Of_The_Three() {
    if (num5 > num6) {
        max_2 = num5
    } else {
        max_2 = num6
    }

    if (num7 > num6) {
        max_2 = num7
    }
    console.log(max_2)
}

the_Largest_Of_The_Three()

// Funksiya yozing, u berilgan sonning 3 ga bo‘linishini aniqlasin.
alert("5-vazifa")
let num8 = +prompt("son")

function divide_Number_By3() {
    if (num8 % 3 === 0) {
        console.log("berilgan son 3 ga bo'linadi")
    } else {
        console.log("berilgan son 3 ga bo'linmaydi")
    }
}

divide_Number_By3()

// Funksiya yozing, u berilgan sonning kvadratini qaytarsin.
alert("6-vazifa")
let num9 = +prompt("son")

function square() {
    let main_square = num9 * num9
    console.log(main_square)
}

square()

// Funksiya yozing, u ikki sonning ko‘paytmasini hisoblasin.
alert("7-vazifa")
let num10 = +prompt("1-son")
let num11 = +prompt("2-son")

function multiplication() {
    let main_Multiplication = num10 * num11
    console.log(main_Multiplication)
}

multiplication()

// Funksiya yozing, u berilgan sonni 1 dan boshlab o‘sha songacha bo‘lgan barcha sonlarning yig‘indisini hisoblasin.
alert("8-vazifa")
let num12 = +prompt("son")
let sum = 0

function number_To_Number() {
    for (let i = 1; i <= num12; i++) {
        sum += i
    }
    console.log(sum)
}

number_To_Number()

// Funksiya yozing, u 1 dan 10 gacha bo‘lgan sonlarning ko‘paytmasini qaytarsin.
alert("9-vazifa")
function product() {
    let main_product = 1
    for (let i_2 = 1; i_2 <= 10; i_2++) {
        main_product *= i_2
    }
    console.log(main_product)
}

product()

// Funksiya yozing, u berilgan sondan boshlab 1 ga kamaytirib chiqaradi.
alert("10-vazifa")
let num13 = +prompt("son")

function subtract() {
    for (num13 = num13; num13 >= 1; num13--) {
        console.log(num13)
    }
}

subtract()

// step-2 - 11–20: Shart operatorlari va sikllar

// Funksiya yozing, u berilgan sonni faqat juft bo‘lsa ekranga chiqaradi.
alert("11-vazifa")
let num14 = +prompt("son")

function juft_Son() {
    if (num14 % 2 === 0) {
        console.log(num14)
    }
}

juft_Son()

// Funksiya yozing, u berilgan ikki sondan kattasini ternary operator yordamida aniqlasin.
alert("12-vazifa")
let num15 = +prompt("1-son")
let num16 = +prompt("2-son")
let max_3

function kattasini() {
    num15 > num16 ? max_3 = num15 : max_3 = num16
    console.log(max_3)
}

kattasini()

// Funksiya yozing, u berilgan son 5 ga va 3 ga bo‘linishini tekshiradi.
alert("13-vazifa")
let num17 = +prompt("son")

function divide() {
    if (num17 % 5 === 0 && num17 % 3 === 0) {
        console.log("berilgan son 5 ga va 3 ga bo'linadi")
    }
}

divide()

// Funksiya yozing, u berilgan sonning kvadrati va kubini qaytaradi.
alert("14-vazifa")
let num18 = +prompt("son")
let kv = 0
let kub = 0

function kvadrat() {
    kv = num18 * num18
    kub = num18 * num18 * num18
    console.log("berilgan sonning kvadrati", kv, "berilgan sonning kubi", kub)
}

kvadrat()

// Funksiya yozing, u 1 dan 100 gacha bo‘lgan faqat juft sonlarni ekranga chiqaradi.
alert("15-vazifa")
function dan_100gacha() {
    for (let i_3 = 1; i_3 <= 100; i_3++) {
        if (i_3 % 2 === 0) {
            console.log(i_3)
        }
    }
}

dan_100gacha()

// Funksiya yozing, u 1 dan n gacha bo‘lgan toq sonlarni ekranga chiqaradi.
alert("16-vazifa")
let number = +prompt("son")

function dan_100gacha_2() {
    for (let i_4 = 1; i_4 <= number; i_4++) {
        if (i_4 % 2 === 1) {
            console.log(i_4)
        }
    }
}

dan_100gacha_2()

// Funksiya yozing, u kiritilgan sonning faktorialini hisoblaydi.
alert("17-vazifa")
let num19 = +prompt("son")
let main_faktorial = 1

function faktorial() {
    for (num19 = num19; num19 >= 1; num19--) {
        main_faktorial *= num19
    }
    console.log(main_faktorial)
}

faktorial()

// Funksiya yozing, u kiritilgan sonni 10 ga bo‘lgandagi qoldiqni qaytaradi.
alert("18-vazifa")
let num20 = +prompt("son")

function qoldiq() {
    console.log(num20 % 10)
}

qoldiq()

// Funksiya yozing, u ikki sonni o‘zaro solishtirib, qaysi biri katta ekanligini ekranga chiqaradi.
alert("19-vazifa")
let num21 = +prompt("1-son")
let num22 = +prompt("2-son")
let max_4

function max_min_2() {
    if (num21 > num22) {
        max_4 = num21
    } else {
        max_4 = num22
    }
    console.log(max_4)
}

max_min_2()

// Funksiya yozing, u 1 dan 50 gacha bo‘lgan barcha sonlarning yig‘indisini qaytaradi.
alert("20-vazifa")
let main_yigindi = 0

function yigindi() {
    for (let i_5 = 1; i_5 <= 50; i_5++) {
        main_yigindi += i_5
    }
    console.log(main_yigindi)
}

yigindi()

// step-3 - 21–30: Matematik masalalar

// Funksiya yozing, u berilgan sonning kvadrat ildizini hisoblaydi (math metodlari ishlatilmasin).
alert("21-vazifa") // yaxshi tushunmadim

// Funksiya yozing, u ikkita sonning o‘rta arifmetik qiymatini hisoblaydi.
alert("22-vazifa")
let num23 = +prompt("1-son")
let num24 = +prompt("2-son")
let qiymat = 0

function arifmetik() {
    let plus = num23 + num24
    qiymat = plus / 2
    console.log(qiymat)
}

arifmetik()

// Funksiya yozing, u berilgan son musbatmi yoki manfiy ekanligini if orqali aniqlasin.
alert("23-vazifa")
let num25 = +prompt("son")

function musbat_m() {
    if (num25 > 0) {
        console.log("berilgan son musbat")
    } else {
        console.log("berilgan son manfiy")
    }
}

musbat_m()

// Funksiya yozing, u berilgan sonni juft sonlar yig‘indisini hisoblaydi.
alert("24-vazifa")
let num26 = +prompt("son")
let yigindi_2 = 0

function juft_Y() {
    if (num26 % 2 === 0) {
        yigindi_2 += num26
    }
    console.log(yigindi_2)
}

juft_Y()

// Funksiya yozing, u ikki sonni qo‘shadi, lekin agar sonlardan biri manfiy bo‘lsa, natijaga 10 qo‘shadi.
alert("25-vazifa")
let num27 = +prompt("1-son")
let num28 = +prompt("2-son")
let yigindi_3 = 0

function misol() {
    yigindi_3 = num27 + num28
    if (num27 < 0 || num28 < 0) {
        yigindi_3 += 10
    }
    console.log(yigindi_3)
}

misol()

// Funksiya yozing, u berilgan ikkita sonni qo‘shadi va ko‘paytiradi, natijalarni alohida qaytaradi.
alert("26-vazifa")
let num29 = +prompt("1-son")
let num30 = +prompt("2-son")

function func_1() {
    let yigindi_4 = num29 + num30
    let kopaytma = num29 * num30
    console.log(yigindi_4, kopaytma)
}

func_1()

// Funksiya yozing, u foydalanuvchi kiritgan son 7 ga bo‘linishini aniqlaydi.
alert("27-vazifa")
let num31 = +prompt("son")

function func_2() {
    if (num31 % 7 === 0) {
        console.log("berilgan son 7 ga bo'linadi")
    } else {
        console.log("berilgan son 7 ga bo'linmaydi")
    }
}

func_2()

// Funksiya yozing, u berilgan sonni xuddi shu tartibda 10 marta ko‘paytirib chiqaradi.
alert("28-vazifa")
let num32 = +prompt("son")

function func_3() {
    for (let i_6 = 1; i_6 <= 10; i_6++) {
        num32 *= i_6
        console.log(i_6)
    }
}

func_3()

// Funksiya yozing, u ikki sonni ko‘paytiradi, lekin agar sonlardan biri 0 bo‘lsa, natija 1 bo‘ladi.
alert("29-vazifa")
let num33 = +prompt("1-son")
let num34 = +prompt("2-son")
let natija = 0

function func_4() {
    num33 *= num34
    if (num33 === 0 || num34 === 0) {
        natija++
    }
    console.log(natija)
}

func_4()

// Funksiya yozing, u foydalanuvchi kiritgan ikkita sonning modulini hisoblaydi.
alert("30-vazifa")
let num35 = +prompt("1-son")
let num36 = +prompt("2-son")

function func_5() {
    let modul_1 = Math.abs(num35)
    let modul_2 = Math.abs(num36)
    console.log(modul_1, modul_2)
}

// step-1 31–40: Sonlar bilan ishlash

// Funksiya yozing, u foydalanuvchi kiritgan sonni faqat manfiy bo‘lsa ekranga chiqaradi.
alert("31-vazifa")
let num37 = +prompt("son")

function func_6() {
    if (num37 < 0) {
        console.log(num37)
    }
}

func_6()

// Funksiya yozing, u 1 dan 100 gacha bo‘lgan sonlardan faqat 5 ga karrali bo‘lganlarni ekranga chiqaradi.
alert("32-vazifa")
function func_7() {
    for (let i_7 = 1; i_7 <= 100; i_7++) {
        if (i_7 % 5 === 0) {
            console.log(i_7)
        }
    }
}

func_7()

// Funksiya yozing, u berilgan ikki sonning yig‘indisini hisoblaydi, agar natija juft bo‘lsa, "Juft" deb qaytaradi.
alert("33-vazifa")
let num38 = +prompt("1-son")
let num39 = +prompt("2-son")

function func_8() {
    let yigindi_5 = num38 + num39
    if (yigindi_5 % 2 === 0) {
        console.log("Juft")
    }
}

func_8()

// Funksiya yozing, u foydalanuvchi kiritgan sonning bo‘luvchilarini ekranga chiqaradi.
alert("34-vazifa")
let num40 = +prompt("son")

function func_9() {
    let generator = 1
    while (generator <= num40) {
        if (num40 % generator === 0) {
            console.log(generator)
        }
        generator++
    }
}

func_9()

// Funksiya yozing, u berilgan sondan kattalik bo‘yicha kichik bo‘lgan barcha toq sonlarni chiqaradi.
alert("35-vazifa")
let num41 = +prompt("son")

function func_10() {
    let generator_2 = 1
    while (generator_2 <= num41) {
        if (generator_2 % 2 === 1) {
            console.log(generator_2)
        }
        generator_2++
    }
}

// Funksiya yozing, u berilgan sonni 1 dan 20 gacha bo‘lgan sonlarga bo‘lib, har birining qoldig‘ini chiqaradi.
alert("36-vazifa")
let num42 = +prompt("son")
let yigindi_6 = 0

function func_11() {
    let generator_3 = 1
    do {
        console.log(num42 % generator_3)
        generator_3++
    } while (generator_3 <= 20)
}

func_11()

// Funksiya yozing, u foydalanuvchi kiritgan sonning barcha bo‘luvchilarini hisoblaydi va yig‘indisini qaytaradi.
alert("37-vazifa")
let num43 = +prompt("son")
let yigindi_7 = 0

function func_12() {
    let generator_4 = 1
    do {
        if (num43 % generator_4 === 0) {
            yigindi_7 += generator_4
        }
        generator_4++
    } while (generator_4 <= num43)
    console.log(yigindi_7)
}

func_12()

// Funksiya yozing, u foydalanuvchi kiritgan sonni faqat juft bo‘lsa kvadratini hisoblaydi.
alert("38-vazifa")
let num44 = +prompt("son")
let kv_2 = 0

function func_13() {
    if (num44 % 2 === 0) {
        kv_2 = num44 * num44
    }
    console.log(kv_2)
}

func_13()

// Funksiya yozing, u berilgan son 100 dan katta bo‘lsa, uni ikki barobar oshiradi, aks holda 10 qo‘shadi.
alert("39-vazifa")
let num45 = +prompt("son")

function func_14() {
    if (num45 > 100) {
        num45 * 2
        console.log(num45)
    } else {
        num45 += 10
        console.log(num45)
    }
}

func_14()

// Funksiya yozing, u foydalanuvchi kiritgan sonning barcha raqamlarini birma-bir chiqaradi.
alert("40-vazifa") // menimcha bu string holatda bo'lsa kerak qilolmadim ustoz


// 41–50: Murakkabroq masalalar

// Funksiya yozing, u foydalanuvchi kiritgan ikki sonning o‘zaro karrali ekanligini aniqlaydi.
alert("41-vazifa")
let num46 = +prompt("1-son")
let num47 = +prompt("2-son")

function func_15() {
    if (num46 % num47 === 0) {
        console.log("berilgan ikki son o'zaro karrali")
    } else {
        console.log("berilgan ikki son o'zari karrali emas")
    }
}

func_15()

// Funksiya yozing, u foydalanuvchi kiritgan sonning raqamlari yig‘indisini hisoblaydi.
alert("42-vazifa")
let num48 = +prompt("son") // xato ishlayapti faqat 2 xonali sonlarni topyapti

function func_16() {
    let one = Math.trunc(num48 % 10)
    let two = Math.trunc(num48 / 10)
    console.log(one + two)
}

func_16()

// Funksiya yozing, u 1 dan foydalanuvchi kiritgan sondan katta bo‘lgan barcha sonlarni ekranga chiqaradi.
alert("43-vazifa")
let num49 = +prompt("son") // bu savolda son cheksiz bo'lib qolishi kerak shekili

function func_17() {
    for(let i_8 = 1; i_8 <= 250; i_8++) {
        console.log(i_8)
    }
}

// Funksiya yozing, u foydalanuvchi kiritgan ikkita sonning bo‘linmasini hisoblaydi (qoldiqsiz).
alert("44-vazifa")
let num50 = +prompt("1-son")
let num51 = +prompt("2-son")

function func_18() {
    if (num50 > num51) {
        let bolinma = num50 / num51
        console.log(bolinma)
    }

    if (num51 > num50) {
        let bolinma_2 = num51 / num50
        console.log(bolinma_2)
    }
}

func_18()

// Funksiya yozing, u 1 dan n gacha bo‘lgan barcha sonlarning kvadratlarini ekranga chiqaradi.
alert("45-vazifa")
let num52 = +prompt("son")

function func_19() {
    for(let i_9 = 1; i_9 <= num52; i_9++) {
        let kopaytma_3 = i_9 * i_9
        console.log(kopaytma_3)
    }
}

func_19()

// Funksiya yozing, u foydalanuvchi kiritgan sonning o‘z-o‘ziga karraligini aniqlaydi.
alert("46-vazifa")
let num53 = +prompt("son")

function func_20() {
    if (num53 % num53 === 0) {
        console.log("berilgan son o'ziga karrali")
    } else {
        console.log("berilgan son o'ziga karrali emas")
    }
}

func_20()

// Funksiya yozing, u foydalanuvchi kiritgan sonning har bir raqamini alohida kvadratga oshiradi va chiqaradi.
alert("47-vazifa") // ustoz buham o'sha raqamlar yigindisiday ekan darsda domladan soragandim bu mavzuga endi otamiz deb ihtiyoriy qilib ketgandi

// Funksiya yozing, u 1 dan 50 gacha bo‘lgan barcha sonlarning faqat toqlari yig‘indisini hisoblaydi.
alert("48-vazifa")
let yigindi_8 = 0

function func_21() {
    for(let i_10 = 1; i_10 <= 50; i_10++) {
        if (i_10 % 2 === 1) {
            yigindi_8 += i_10
        }
    }
    console.log(yigindi_8)
}

func_21()

// Funksiya yozing, u foydalanuvchi kiritgan sonni teskari tartibda chiqaradi.
alert("49-vazifa")
let num54 = +prompt("son")
let reverse = 0

function func_22() {
    let raqam = num54 % 10
    reverse = reverse * 10 + raqam
    num54 = Math.trunc(num54 / 10)
}

console.log(reverse)

// Funksiya yozing, u foydalanuvchi kiritgan sonning raqamlari yig‘indisi 10 dan katta yoki kichikligini aniqlaydi.
alert("50-vazifa") // bu ham raqamlar yigindisi bolib ketyapti ustoz