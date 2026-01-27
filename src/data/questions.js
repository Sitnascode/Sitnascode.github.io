export const quizQuestions = [
  {
    id: 1,
    question: "What is the primary purpose of version control systems like Git?",
    options: [
      "To compile code faster",
      "To track changes in code and collaborate with others",
      "To optimize database queries",
      "To design user interfaces"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which software development methodology emphasizes working software over comprehensive documentation?",
    options: [
      "Waterfall",
      "Agile",
      "Spiral",
      "V-Model"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "What does SOLID stand for in software design principles?",
    options: [
      "Single responsibility, Open-closed, Liskov substitution, Interface segregation, Dependency inversion",
      "Secure, Organized, Logical, Integrated, Dependable",
      "System, Object, Language, Interface, Development",
      "Simple, Optimized, Lightweight, Integrated, Deployable"
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "What is the main purpose of unit testing?",
    options: [
      "To test the entire application flow",
      "To test individual components or functions in isolation",
      "To test user interface interactions",
      "To test database performance"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Which design pattern is used to create objects without specifying their exact classes?",
    options: [
      "Singleton",
      "Observer",
      "Factory",
      "Decorator"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "What is technical debt in software development?",
    options: [
      "The cost of fixing bugs after deployment",
      "The implied cost of rework caused by choosing an easy solution now instead of a better approach",
      "The money spent on software licenses",
      "The time spent in meetings"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Which principle states that 'software entities should be open for extension but closed for modification'?",
    options: [
      "Single Responsibility Principle",
      "Open/Closed Principle",
      "Liskov Substitution Principle",
      "Interface Segregation Principle"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "What is the primary benefit of continuous integration (CI)?",
    options: [
      "Reduced code size",
      "Early detection of integration issues and automated testing",
      "Faster user interface rendering",
      "Better database performance"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "Which testing approach involves testing the application without knowledge of its internal structure?",
    options: [
      "Unit testing",
      "Integration testing",
      "Black-box testing",
      "White-box testing"
    ],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "What is the main purpose of code reviews in software development?",
    options: [
      "To count lines of code",
      "To improve code quality, share knowledge, and catch defects early",
      "To measure developer productivity",
      "To generate documentation"
    ],
    correctAnswer: 1
  }
];

export const quizConfig = {
  title: "Software Engineering Quiz",
  description: "Test your knowledge of software development principles, design patterns, and best practices.",
  timeLimit: 30, // 30 seconds per question
  passingScore: 70
};
