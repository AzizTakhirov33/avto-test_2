

//Array of Objects

const quiz = [
    
    {
        q: "1. Могут ли пешеходы двигаться по велосипедным дорожкам при отсутствии тротуара или пешеходной дорожки?",
        img: "Question/1/1.jpg",
        answer: 0,
        options: [
            { text: "Могут.", img: "" },
            { text: "Не могут.", img: "" },
            { text: "Могут, если это не затрудняет движение велосипедов.", img: "" }
        ]
    },
    {
        q: "2. Разрешается ли такому автопоезду проехать по мосту?",
        img: "Question/2/2.jpg",
        answer: 0,
        options: [
            { text: "Запрещается.", img: "" },
            { text: "Разрешается.", img: "" }
        ]
    },
    {
        q: "3. Какой из знаков указывает протяженность опасного участка дороги?",
        img: "Question/3/3.jpg",
        answer: 4,
        options: [
            { text: "1", img: "" },
            { text: "2", img: "" },
            { text: "3", img: "" },
            { text: "5", img: "" },
            { text: "4", img: "" }
        ]
    },
    {
        q: "4. Красный автомобиль проедет перекресток:",
        img: "Question/4/4.jpg",
        answer: 0,
        options: [
            { text: "Вторым, одновременно с синим.", img: "" },
            { text: "Третьим, после зеленого и желтого.", img: "" },
            { text: "Вторым, после желтого.", img: "" }
        ]
    },
    {
        q: "5. Данный светофор применяется для регулирования движения:",
        img: "Question/5/5.jpg",
        answer: 2,
        options: [
            { text: "Трамваев и троллейбусов.", img: "" },
            { text: "Только трамваев.", img: "" },
            { text: "Трамваев, а также других маршрутных транспортных средств, следующих по обособленной полосе.", img: "" }
        ]
    },
    {
        q: "6. В каких случаях Правила разрешают применять задние противотуманные фонари?",
        img: "Question/6/6.jpg",
        answer: 3,
        options: [
            { text: "При движении в составе колонны.", img: "" },
            { text: "При буксировке транспортным средством.", img: "" },
            { text: "Во всех перечисленных случаях.", img: "" },
            { text: "В условиях недостаточной видимости.", img: "" },
            { text: "В темное время суток.", img: "" }
        ]
    },
    {
        q: "7. Что должен сделать водитель грузового автомобиля в случае, когда он слышит специальный звуковой сигнал и видит проблесковый маячок?",
        img: "Question/7/7.jpg",
        answer: 0,
        options: [
            { text: "Водитель при приближении специального транспортного средства с включенными проблесковым маячком и специальным звуковым сигналом, обязан уступить им дорогу, при необходимости остановиться у правого края проезжей части.", img: "" },
            { text: "Продолжать свое движение по полосе.", img: "" }
        ]
    },
    {
        q: "8. Разрешается ли стоянка на краю тротуара, прилегающего непосредственно к проезжей части с полным или частичным заездом на него?",
        img: "Question/8/8.jpg",
        answer: 0,
        options: [
            { text: "Разрешается только легковым автомобилям и мотоциклам при условии, что это не создаст помех движению пешеходов.", img: "" },
            { text: "Запрещается всем транспортным средствам.", img: "" },
            { text: "Запрещается только грузовым автомобилям с разрешенной максимальной массой более 3,5 т.", img: "" }
        ]
    },
    {
        q: "9. Как влияет изношенный протектор шин на коэффициент сцепления?",
        img: "Question/9/9.jpg",
        answer: 2,
        options: [
            { text: "Коэффициент сцепления повышается.", img: "" },
            { text: "Коэффициент сцепления не изменяется.", img: "" },
            { text: "Коэффициент сцепления снижается.", img: "" }
        ]
    },
    {
        q: "10. В каких случаях разрешено управлять транспортными средствами?",
        img: "Question/10/10.jpg",
        answer: 1,
        options: [
            { text: "Если на поверхности транспортного средства имеются различные изображения, которые не соответствуют закону и могут оказать негативное влияние на безопасность движения.", img: "" },
            { text: "Технические параметры, указанные на внешней стороне автобуса и автомобильных газовых баллонов, оборудованных системой газоснабжения, соответствуют данным в техническом паспорте, если дата последних и запланированных проверок.", img: "" },
            { text: "Если иное не предусмотрено производителем, кузов окрашивается в несколько цветов (кроме специальных транспортных средств).", img: "" }
        ]
    }    
];