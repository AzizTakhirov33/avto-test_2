

//Array of Objects

const quiz = [
    
    {
        q: "1. Что понимается под недостаточной видимостью?",
        img: "Question/1/1.jpg",
        answer: 2,
        options: [
            { text: "Видимость менее 150 м.", img: "" },
            { text: "Дождь, снегопад, сумерки.", img: "" },
            { text: "Видимость менее 300 м в условиях тумана, дождя, снегопада и т.п., а также в сумерки.", img: "" },
            { text: "Промежуток времени от конца вечерних сумерек до начала утренних сумерек.", img: "" }
        ]
    },
    {
        q: "2. По какому пути, из числа обозначенных стрелками, разрешено движение?",
        img: "Question/2/2.jpg",
        answer: 2,
        options: [
            { text: "Б и В.", img: "" },
            { text: "А и Б.", img: "" },
            { text: "А и В.", img: "" }
        ]
    },
    {
        q: "3. С каким дорожным знаком может быть применена разметка в виде желтой прерывистой линии?",
        img: "Question/3/3.jpg",
        answer: 0,
        options: [
            { text: "“Стоянка запрещена”.", img: "" },
            { text: "“Стоянка по нечетным числам запрещена”.", img: "" },
            { text: "“Остановка запрещена”.", img: "" }
        ]
    },
    {
        q: "4. На каком наименьшем расстоянии до шлагбаума правила обязывают водителя остановиться у железнодорожного переезда для пропуска приближающегося поезда при отсутствии стоп-линии знака 2,5 'Движение без остановки запрещено' и светофора?",
        img: "Question/4/4.jpg",
        answer: 4,
        options: [
            { text: "15 м.", img: "" },
            { text: "10 м.", img: "" },
            { text: "1 м.", img: "" },
            { text: "20 м.", img: "" },
            { text: "5 м.", img: "" }
        ]
    },
    {
        q: "5. Каким транспортным средствам разрешено движение при этом сигнале светофора?",
        img: "Question/5/5.jpg",
        answer: 0,
        options: [
            { text: "Легковому и грузовому автомобилям.", img: "" },
            { text: "Мотоциклу, легковому и грузовому автомобилям.", img: "" },
            { text: "Всем транспортным средствам.", img: "" },
            { text: "Трамваю и мотоциклу.", img: "" }
        ]
    },
    {
        q: "6. С какой скоростью вне населенных пунктов разрешается движение транспортных средств, осуществляющих перевозки тяжеловесных или негабаритных грузов?",
        img: "Question/6/6.jpg",
        answer: 1,
        options: [
            { text: "Не более 60 км/час.", img: "" },
            { text: "Не более предписанной ГСБДД при согласовании условий перевозки.", img: "" },
            { text: "Не более 40 км/час.", img: "" }
        ]
    },
    {
        q: "7. Каким образом должно быть обозначено гибкое связывающее устройство во время буксировки механического транспортного средства?",
        img: "Question/7/7.jpg",
        answer: 1,
        options: [
            { text: "Транспортное средство, обозначенное спереди фонарями белого, а сзади красного цвета.", img: "" },
            { text: "Сигнальными флажками или щитками с красными и белыми полосами со световозвращающей поверхностью.", img: "" },
            { text: "Знаком аварийной остановки на транспортном средстве, укрепленным на нем сзади.", img: "" }
        ]
    },
    {
        q: "8. Где запрещается остановка и стоянка транспортных средств?",
        img: "Question/8/8.jpg",
        answer: 1,
        options: [
            { text: "В местах с интенсивным движением транспортных средств и пешеходов.", img: "" },
            { text: "На пересечении проезжих частей и ближе 30 м от края пересекаемой проезжей части (за исключением стороны напротив бокового проезда трехсторонних пересечений (перекрестков), имеющих сплошную линию разметки или разделительную полосу).", img: "" }
        ]
    },
    {
        q: "9. Разрешается ли буксировка автомобиля с неисправной тормозной системой?",
        img: "Question/9/9.jpg",
        answer: 3,
        options: [
            { text: "Любым способом, если за рулем буксируемого транспортного средства находится водитель.", img: "" },
            { text: "Только методом его частичной погрузки.", img: "" },
            { text: "Только на жесткой сцепке.", img: "" },
            { text: "На жесткой сцепке, если фактическая масса буксирующего будет в два раза превышать фактическую массу буксируемого.", img: "" }
        ]
    },
    {
        q: "10. При каких условиях запрещается эксплуатация механических транспортных средств?",
        img: "Question/10/10.jpg",
        answer: 0,
        options: [
            { text: "Не прошедших государственный периодический технический осмотр в установленном порядке.", img: "" },
            { text: "Шум в коробке передач.", img: "" },
            { text: "Перебои в работе двигателя.", img: "" }
        ]
    }    
];