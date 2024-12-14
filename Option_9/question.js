

//Array of Objects

const quiz = [
    
    {
        q: "1. Каким транспортным средствам разрешается движение в указанных направлениях?",
        img: "Question/1/1.jpg",
        answer: 0,
        options: [
            { text: 'Водителям трамвая и автомобиля', img: '' },
            { text: 'Водителю автомобиля', img: '' },
            { text: 'Водителям автомобиля и мотоцикла', img: '' }
        ],
        // solutionText: "Question/1/1.0.jpg"
    },
    {
        q: "2. В каком направлении разрешается движение автомобилям?",
        img: "Question/2/2.jpg",
        answer: 0,
        options: [
            { text: 'Красному автомобилю –прямо, синему- налево или обратно', img: '' },
            { text: 'Красному автомобилю –прямо, синему автомобилю- прямо и налево', img: '' },
            { text: 'Красному и синему автомобилям-прямо', img: '' }
        ],
        // solutionText: "Question/2/2.0.jpg"
        
    },
    {
        q: "3. Разрешается ли обгон в данной ситуации?",
        img: "Question/3/3.jpg",
        answer: 0,
        options: [
            { text: 'Запрещается', img: '' },
            { text: 'Разрешается, если обгоняемый автомобиль движется со скоростью меньше 40 км/ч.', img: '' },
            { text: 'Разрешается', img: '' },
        ],
        // solutionText: "Question/3/3.0.jpg"
    },
    {
        q: "4. Данный светофор используется для регулирования движения?",
        img: "Question/4/4.jpg",
        answer: 0,
        options: [
            { text: 'По полосам проезжей части, где движение меняется в противоположную сторону', img: '' },
            { text: 'По всей ширине проезжей части дороги', img: '' },
            { text: 'Только на тех участках дороги, которые предназначены для маршрутных транспортных средств', img: '' }
        ],
        // solutionText: "Question/4/4.0.jpg"
    },
    {
        q: "5. Транспортные средства проедут перекресток в следующем порядке:",
        img: "Question/5/5.jpg",
        answer: 0,
        options: [
            { text: 'Трамвай, красный, зеленый, синий автомобили', img: '' },
            { text: 'Трамвай, красный, синий, зеленый автомобили', img: '' },
            { text: 'Красный автомобиль, трамвай, зеленый, синий автомобиль', img: '' }
        ],
        // solutionText: "Question/5/5.0.jpg"
    },
    {
        q: "6. Какая из показанных автоцистерн более устойчива при повороте?",
        img: "Question/6/6.jpg",
        answer: 0,
        options: [
            { text: 'Наполненная жидкостью полностью', img: '' },
            { text: 'Наполненная жидкостью на 75%', img: '' }
        ],
        // solutionText: "Question/6/6.0.jpg"
    },
    {
        
        q: "7. На участке дороги с данным знаком с какой максимальной скоростью должны двигаться грузовые автомобили, разрешенная максимальная масса которых не более 3,5 т.?",
        img: "Question/7/7.jpg",
        answer: 0,
        options: [
            { text: '100 км/ч', img: '' },
            { text: '110 км/ч.', img: '' },
            { text: '90 км/ч.', img: '' },
            { text: '70 км/ч.', img: '' },
            { text: '60 км/ч.', img: '' }
        ],
        // solutionText: "Question/7/7.0.jpg"
    },
    {
        
        q: "8. При каком расстоянии между остановившемся автомобилем и сплошной линией разметки запрещается остановка?",
        answer: 0,
        options: [
            { text: '2,5 м.', img: '' },
            { text: '6 м.', img: '' },
            { text: '5,5 м.', img: '' },
            { text: '4 м.', img: '' },
            { text: '3,5 м.', img: '' }
        ],
        // solutionText: "Question/8/8.0.jpg"
    },
    {
        q: "9. Во сколько раз увеличивается длина тормозного пути, если скорость движения увеличивается в два раза?",
        img: 'Question/9/9.jpg',
        answer: 0,
        options: [
            { text: 'В четыре раза', img: '' },
            { text: 'В три раза', img: '' },
            { text: 'В два раза', img: '' },
            { text: 'Длина тормозного пути не зависит от скорости движения', img: '' }
        ],
        // solutionText: "Question/9/9.0.jpg"
    },
    {
        q: "10. При какой наибольшей длине автопоезда с одним прицепом допускается движение без разрешения ГСБДД?",
        img: "Question/10/10.jpg",
        answer: 0,
        options: [
            { text: '20 м', img: '' },
            { text: '16 м.', img: '' },
            { text: '18 м.', img: '' },
            { text: '24 м.', img: '' },
            { text: '22 м.', img: '' }
        ],
        // solutionText: "Question/10/10.0.jpg"
    }
];