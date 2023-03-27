const questionsDB = [
    {
        question : "Identify the incorrect HTML tag among the following",
        a: "<input>",
        b: "<select>",
        c: "<list>",
        d: "<textarea>",
        answer: "option3"
    },
    {
        question : "Full form of W3C is _____________",
        a: "World Wide Websites community",
        b: "World Wide Web community",
        c: "World Wide Websites consortium",
        d: "World Wide Web consortium",
        answer: "option4"
    },
    {
        question : "Choose the port number of FTP.",
        a: "21",
        b: "8080",
        c: "121",
        d: "25",
        answer: "option1"
    },
    {
        question : "A website is a _______  cookie.",
        a: "volatile",
        b: "transient",
        c: "non-volatile",
        d: "in-transient",
        answer: "option2"
    },
    {
        question : "Which of the following is not a Javascript framework?",
        a: "Angular",
        b: "Tailwind",
        c: "React",
        d: "Next",
        answer: "option2"
    }
]

let questionno = 0;
let score = 0;

const question = document.getElementById("question")
const option1 = document.getElementById("lbl-option1")
const option2 = document.getElementById("lbl-option2")
const option3 = document.getElementById("lbl-option3")
const option4 = document.getElementById("lbl-option4")
const submitbtn = document.getElementById("btnsubmit")
const options = document.querySelectorAll("input")
const result = document.querySelector("#resultarea")


const loadQuestion = () => {
    const questionlist = questionsDB[questionno]

    question.innerText = questionlist.question;
    option1.innerText = questionlist.a;
    option2.innerText = questionlist.b;
    option3.innerText = questionlist.c;
    option4.innerText = questionlist.d;
}

loadQuestion()

const getoption = () => {

    let answer;

    options.forEach((currAns) => {
        if(currAns.checked)
        {
            answer = currAns.id
        }
    });

    return answer;
}

const uncheck = () =>{
    options.forEach((currAns) => {
        currAns.checked = false
    });
}

submitbtn.addEventListener("click",() => {
    const selectedoption = getoption()
    console.log(selectedoption);
    if(selectedoption === questionsDB[questionno].answer)
    {
        score++;
    }
    questionno++;

    uncheck()

    if(questionno < questionsDB.length)
    {
        loadQuestion();
    }
    else{
        result.innerHTML = `
        <h2>Score is ${score}/${questionsDB.length}</h2>
        <button class="btn btn-success py-2 px-4 rounded-pill" onclick="location.reload()">Attempt Again</button>`

        result.classList.remove("hide")
    }
})
