const quizData= [
    {
        question: 'İstanbulu 1453 te fetheden Osmanlı padişah kimdir?',
        a: 'Yavuz Sultan Selim',
        b: 'Fatih Sultan Mehmet',
        c: 'II. Murat',
        d: 'Kanuni Sultan Süleyman',
        e: 'Orhan Bey',
        correct: 'b',
    },
    {
        question: 'Cumhuriyet ne zaman ilan edilmiştir?',
        a: '29 Ekim 1923',
        b: '19 Mayıs 1919',
        c: '23 Nisan 1920',
        d: '30 Ağustos 1922',
        e: '10 Kasım 1938',
        correct: 'a',
    },
    {
        question: 'Güneş Sisteminin 7. gezegeni aşağıdakilerden hangisidir?',
        a: 'Merkür',
        b: 'Dünya',
        c: 'Jupiter',
        d: 'Uranüs',
        e: 'Pluton',
        correct: 'd',
    },
    {
        question: 'Periyodik Tablodaki ilk element aşağıdakilerden hangisidir?',
        a: 'Karbon',
        b: 'Oksijen',
        c: 'Kükürt',
        d: 'Lityum',
        e: 'Hidrojen',
        correct: 'e',
    },
    {
        question: 'HTMLde kapsayıcı etiket olarak geçen etiket aşağıdakilerden hangisidir?',
        a: '<h1>',
        b: '<p>',
        c: '<div>',
        d: '<span>',
        e: '<a>',
        correct: 'c',
    },
]
const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const e_text = document.getElementById("e_text")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

LoadQuiz()
function LoadQuiz() {
    const currentQuizData = quizData[currentQuiz]
    deselectedAnswers()
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}
function deselectedAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    
    answerEls.forEach((answerEl) =>{
        if (answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    //console.log(answer)

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++

        if (currentQuiz<quizData.length){
            LoadQuiz()
        }
        else{
            quiz.innerHTML = `<h2> Test tamamlandı, ${score * 20} puan aldınız. </h2> 
            <button class="submit" onClick="location.reload()"> Tekrar Dene </button>`
        }
    }
})
