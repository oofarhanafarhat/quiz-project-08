import inquirer from "inquirer";
let playquiz = true;
while (playquiz) {
  const quiz = await inquirer.prompt([
    {
      name: "startquiz",
      type: "list",
      message: "do u want to start quiz",
      choices: ["yes", "NO"],
    },
    {
      name: "topic",
      type: "list",
      message: "choose the topic for quiz",
      choices: ["science", "Maths", "Gerenal knowledge"],
    },
  ]);
  if (quiz.startquiz === "yes") {
    if (quiz.topic === "science") {
      const questions = [
        {
          name: "question1",
          type: "list",
          message: "What is the largest planet in our solar system?",
          choices: ["A) Earth", "B) Saturn", "C) Jupiter", "D) Uranus"],
          ANSWER: "C) Jupiter",
        },
        {
          name: "question2",
          type: "list",
          message:
            "Which of the following is the process by which plants make food?",
          choices: [
            "A) Respiration",
            "B) Photosynthesis",
            "C) Decomposition",
            "D) Fermentation",
          ],
          ANSWER: "B) Photosynthesis",
        },
        {
          name: "question3",
          type: "list",
          message:
            " Which of the following types of rocks is formed from the cooling and solidification of magma?",
          choices: [
            "A) Sedimentary",
            "B) Igneous",
            "C) Metamorphic",
            "D) Foliated",
          ],
          ANSWER: "B) Igneous",
        },
        {
          name: "question4",
          type: "list",
          message: " What is the largest living structure on Earth?",
          choices: [
            "A) The Great Barrier Reef",
            "B) The Amazon Rainforest",
            "C) The Grand Canyon",
            "D) The Great Wall of China",
          ],
          ANSWER: "A) The Great Barrier Reef",
        },
        {
          name: "question5",
          type: "list",
          message:
            " Which of the following types of rocks is formed from the cooling and solidification of magma? ",
          choices: [
            "A) Sedimentary",
            "B) Igneous",
            "C) Metamorphic",
            "D) Foliated",
          ],
          ANSWER: "B) Igneous",
        },
        {
          name: "question6",
          type: "list",
          message:
            "What is the scientific term for the building blocks of life?",
          choices: ["A) Cells", "B) Molecules", "C) Tissues", "D) Organisms"],
          ANSWER: "A) Cells",
        },
        {
          name: "question7",
          type: "list",
          message:
            "Which of the following scientists is credited with the discovery of gravity?",
          choices: [
            "A) Galileo Galilei",
            "B) Isaac Newton",
            "C) Albert Einstein",
            "D) Leonardo da Vinci",
          ],
          ANSWER: "B) Isaac Newton",
        },
        {
          name: "question8",
          type: "list",
          message:
            "What is the process by which water moves through a plant, from the roots to the leaves?",
          choices: [
            "A) Respiration",
            "B) Photosynthesis",
            "C) Transpiration",
            "D) Evaporatio",
          ],
          ANSWER: "C) Transpiration",
        },
      ];
    
      for (const que of questions) {
        const reply = await inquirer.prompt([
          {
            name: que.name,
            type: "list",
            message: que.message,
            choices: que.choices,
          },
        ]);
        if (reply[que.name] === que.ANSWER) {
          console.log("your answer is correct");
         
        } else {
          console.log(`wrong the correct answer is ${que.ANSWER}`);
        
                }
      }

      {
      }
    } else if (quiz.topic === "Gerenal knowledge") {
      const questions = [
        {
          name: "question1",
          type: "list",
          message: "Which of the following is the capital of France?",
          choices: ["A) Berlin", "B) Paris", "C) London", "D) Rome"],
          ANSWER: "B) Paris",
        },
        {
          name: "question2",
          type: "list",
          message: "Who painted the famous painting The Starry Night?",
          choices: [
            "A) Leonardo da Vinci",
            "B) Vincent van Gogh",
            "C) Pablo Picasso",
            "D) Claude Monet",
          ],
          ANSWER: "B) Vincent van Gogh",
        },
        {
          name: "question3",
          type: "list",
          message:
            " Which of the following rivers is the longest in the world?",
          choices: ["A) Nile", "B) Amazon", "C) Mississippi", "D) Yangtz"],
          ANSWER: "A) Nile",
        },
        {
          name: "question4",
          type: "list",
          message: " Who wrote the famous book To Kill a Mockingbird?",
          choices: [
            "A) F. Scott Fitzgerald",
            "B) Harper Lee",
            "C) Jane Austen",
            "D) J.K. Rowling",
          ],
          ANSWER: "B) Harper Lee",
        },
        {
          name: "question5",
          type: "list",
          message:
            "Which of the following countries is the largest in the world by population?",
          choices: ["A) China", "B) India", "C) United States", "D) Indonesia"],
          ANSWER: "A) China",
        },
        {
          name: "question6",
          type: "list",
          message: " Who was the first President of the United States?",
          choices: [
            "A) George Washington",
            "B) Thomas Jefferson",
            "C) Abraham Lincoln",
            "D) Franklin D. Roosevelt",
          ],
          ANSWER: "A) George Washington",
        },
        {
          name: "question7",
          type: "list",
          message:
            "Which of the following cities is known as the City of Light?",
          choices: ["A) Paris", "B) Rome", "C) London", "D) Berlin"],
          ANSWER: "A) Paris",
        },
        {
          name: "question8",
          type: "list",
          message:
            " Who was the famous scientist who developed the theory of gravity?",
          choices: [
            "A) Galileo Galilei",
            "B) Isaac Newton",
            "C) Albert Einstein",
            "D) Leonardo da Vinci",
          ],
          ANSWER: "B) Isaac Newton",
        },
      ];
    

      for (const que of questions) {
        const reply = await inquirer.prompt([
          {
            name: que.name,
            type: "list",
            message: que.message,
            choices: que.choices,
          },
        ]);
        if (reply[que.name] === que.ANSWER) {
          console.log("your answer is correct");
        
        
        } else {
          console.log(`wrong the correct answer is ${que.ANSWER}`);
          
        }
      }

      {
      }
      {
      }
    } else if (quiz.topic === "Maths") {
      const questions = [
        {
          name: "question1",
          type: "list",
          message: " What is 5 x 6?",
          choices: ["A) 20", "B) 25", "C) 30", "D) 35"],
          ANSWER: ": C) 30",
        },
        {
          name: "question2",
          type: "list",
          message: "What is 7 - 3?",
          choices: ["A) 4", "B) 5", "C) 6", "D) 8"],
          ANSWER: "A) 4",
        },
        {
          name: "question3",
          type: "list",
          message: "What is 9 x 8?",
          choices: ["A) 60", "B) 70", "C) 72", "D) 80"],
          ANSWER: "C) 72",
        },
        {
          name: "question4",
          type: "list",
          message: " What is 24 / 4?",
          choices: ["A) 4", "B) 6", "C) 8", "D) 10"],
          ANSWER: "B) 6",
        },
        {
          name: "question5",
          type: "list",
          message: "What is 8 x 9?",
          choices: ["A) 60", "B) 70", "C) 72", "D) 80"],
          ANSWER: "C) 72",
        },
        {
          name: "question6",
          type: "list",
          message: ". What is 7 x 3?",
          choices: ["A) 20", "B) 21", "C) 22", "D) 24"],
          ANSWER: "B) 21",
        },
        {
          name: "question7",
          type: "list",
          message: "What is 90 - 40?",
          choices: ["A) 40", "B) 45", "C) 48", "D) 50"],
          ANSWER: "D) 50",
        },
        {
          name: "question8",
          type: "list",
          message: " What is 66 / 6?",
          choices: ["A) 8", "B) 7", "C) 5", "D) 11"],
          ANSWER: "D) 11",
        },
        {
          name: "question9",
          type: "list",
          message: "what is 1000 / 10",
          choices: ["200", "500", "100", "700"],
          ANSWER: "100",
        },
      ];
    

      for (const que of questions) {
        const reply = await inquirer.prompt([
          {
            name: que.name,
            type: "list",
            message: que.message,
            choices: que.choices,
          },
        ]);
        if (reply[que.name] === que.ANSWER) {
          console.log("your answer is correct");
       
        } else {
          console.log(`wrong the correct answer is ${que.ANSWER}`);
        
        }
      }
    } else {
      console.log(`sorry quiz ${quiz.topic} is not availiable`);
    }
  } else {
    console.log("quiz cancelled");
  }


  const play = await inquirer.prompt([
    {
      name: "playagain",
      type: "list",
      message: "Do u want to play again",
      choices: ["yes", "NO"],
    },
  ]);

  playquiz = play.playagain === "yes";
}
