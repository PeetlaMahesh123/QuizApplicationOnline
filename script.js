const questions = [
/* ================= JAVA (25) ================= */
{ q: "What is JVM?", options: ["Java Virtual Machine","Java Variable Method","Java Visual Model","None"], answer: 0 },
{ q: "Which keyword is used to inherit a class?", options: ["this","super","extends","implements"], answer: 2 },
{ q: "Which method starts a Java program?", options: ["start()","run()","main()","init()"], answer: 2 },
{ q: "Which is not OOP concept?", options: ["Encapsulation","Polymorphism","Compilation","Inheritance"], answer: 2 },
{ q: "What is method overloading?", options: ["Same name diff params","Same params diff return","Same method twice","None"], answer: 0 },
{ q: "Which keyword is used for abstraction?", options: ["abstract","final","static","volatile"], answer: 0 },
{ q: "Which exception is unchecked?", options: ["IOException","SQLException","NullPointerException","FileNotFound"], answer: 2 },
{ q: "Which collection allows duplicates?", options: ["Set","Map","List","None"], answer: 2 },
{ q: "HashMap allows?", options: ["Duplicate keys","Duplicate values","No null","Thread-safe"], answer: 1 },
{ q: "Which loop executes at least once?", options: ["for","while","do-while","foreach"], answer: 2 },
{ q: "Which keyword prevents inheritance?", options: ["final","static","private","const"], answer: 0 },
{ q: "Which package contains Scanner?", options: ["java.io","java.util","java.lang","java.sql"], answer: 1 },
{ q: "What is constructor?", options: ["Method","Block","Class","Special method"], answer: 3 },
{ q: "Which operator compares objects?", options: ["=","==","equals()","compare()"], answer: 2 },
{ q: "Which is immutable?", options: ["String","StringBuilder","Array","List"], answer: 0 },
{ q: "Which keyword is used to create object?", options: ["class","new","this","create"], answer: 1 },
{ q: "Which access modifier is most restrictive?", options: ["public","protected","default","private"], answer: 3 },
{ q: "Which interface allows functional programming?", options: ["Runnable","Serializable","Comparator","Functional Interface"], answer: 3 },
{ q: "Which Java version introduced lambda?", options: ["Java 6","Java 7","Java 8","Java 9"], answer: 2 },
{ q: "Which block always executes?", options: ["try","catch","finally","throw"], answer: 2 },
{ q: "What is boxing?", options: ["Primitive → Object","Object → Primitive","Casting","None"], answer: 0 },
{ q: "Which keyword is used to call parent constructor?", options: ["this()","super()","parent()","base()"], answer: 1 },
{ q: "Which class is root of Java?", options: ["String","Object","Class","Main"], answer: 1 },
{ q: "Which is thread safe?", options: ["ArrayList","Vector","HashMap","HashSet"], answer: 1 },
{ q: "Which keyword handles exception?", options: ["throw","throws","try-catch","error"], answer: 2 },

/* ================= SQL (20) ================= */
{ q: "What does SQL stand for?", options: ["Structured Query Language","Simple Query Language","Standard Query List","None"], answer: 0 },
{ q: "Which command retrieves data?", options: ["INSERT","UPDATE","SELECT","DELETE"], answer: 2 },
{ q: "Which clause filters rows?", options: ["WHERE","GROUP BY","ORDER BY","HAVING"], answer: 0 },
{ q: "Primary key allows?", options: ["Duplicates","Null","Unique + Not Null","Foreign"], answer: 2 },
{ q: "Which join returns common records?", options: ["LEFT","RIGHT","INNER","FULL"], answer: 2 },
{ q: "Which function counts rows?", options: ["SUM()","COUNT()","AVG()","TOTAL()"], answer: 1 },
{ q: "Which keyword sorts result?", options: ["GROUP BY","SORT","ORDER BY","ALIGN"], answer: 2 },
{ q: "Which command removes table?", options: ["DELETE","DROP","TRUNCATE","REMOVE"], answer: 1 },
{ q: "Which normal form removes redundancy?", options: ["1NF","2NF","3NF","BCNF"], answer: 2 },
{ q: "Foreign key references?", options: ["Same table","Primary key","Unique key","Index"], answer: 1 },
{ q: "Which is DDL?", options: ["SELECT","INSERT","CREATE","UPDATE"], answer: 2 },
{ q: "Which clause groups data?", options: ["WHERE","HAVING","GROUP BY","ORDER"], answer: 2 },
{ q: "Which command removes all rows?", options: ["DELETE","DROP","TRUNCATE","REMOVE"], answer: 2 },
{ q: "Which operator checks pattern?", options: ["LIKE","IN","BETWEEN","ANY"], answer: 0 },
{ q: "Which constraint ensures uniqueness?", options: ["PRIMARY","FOREIGN","UNIQUE","CHECK"], answer: 2 },
{ q: "Which keyword is used with aggregate filter?", options: ["WHERE","HAVING","ORDER","GROUP"], answer: 1 },
{ q: "Which join returns all records?", options: ["INNER","LEFT","RIGHT","FULL"], answer: 3 },
{ q: "Which is TCL?", options: ["COMMIT","SELECT","CREATE","DROP"], answer: 0 },
{ q: "Which clause limits rows?", options: ["LIMIT","TOP","ROWNUM","All"], answer: 3 },
{ q: "Index improves?", options: ["Storage","Insertion","Retrieval","Security"], answer: 2 },

/* ================= HIBERNATE (15) ================= */
{ q: "Hibernate is?", options: ["Framework","Library","Language","Tool"], answer: 0 },
{ q: "Hibernate is based on?", options: ["ORM","MVC","DAO","JDBC"], answer: 0 },
{ q: "Which file configures Hibernate?", options: ["web.xml","hibernate.cfg.xml","pom.xml","context.xml"], answer: 1 },
{ q: "Which annotation defines entity?", options: ["@Table","@Entity","@Column","@Id"], answer: 1 },
{ q: "Which annotation defines primary key?", options: ["@Column","@Key","@Id","@Primary"], answer: 2 },
{ q: "Which session method saves object?", options: ["insert()","save()","persist()","Both b & c"], answer: 3 },
{ q: "HQL stands for?", options: ["Hibernate Query Language","High Query Language","Hybrid Query","None"], answer: 0 },
{ q: "Which cache is mandatory?", options: ["First","Second","Query","None"], answer: 0 },
{ q: "Which annotation maps table?", options: ["@Entity","@Column","@Table","@Map"], answer: 2 },
{ q: "Which relationship uses @OneToMany?", options: ["1–1","1–M","M–1","M–M"], answer: 1 },
{ q: "Which fetch type loads immediately?", options: ["LAZY","EAGER","AUTO","DEFAULT"], answer: 1 },
{ q: "Which transaction method commits?", options: ["start()","save()","commit()","end()"], answer: 2 },
{ q: "Which annotation defines column?", options: ["@Id","@Column","@Join","@Map"], answer: 1 },
{ q: "Which API replaces Criteria?", options: ["JPA","JPQL","HQL","CriteriaBuilder"], answer: 3 },
{ q: "Hibernate is alternative to?", options: ["JDBC","Servlet","JSP","Spring"], answer: 0 }
];

const quizContainer = document.getElementById("quiz-container");
const resultDiv = document.getElementById("result");

questions.forEach((q, index) => {
  const div = document.createElement("div");
  div.className = "question";

  div.innerHTML = `
    <h3>${index + 1}. ${q.q}</h3>
    ${q.options.map((opt, i) => `
      <label>
        <input type="radio" name="q${index}" value="${i}">
        ${opt}
      </label><br>
    `).join("")}
  `;
  quizContainer.appendChild(div);
});

document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let score = 0;

  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && parseInt(selected.value) === q.answer) {
      score++;
    }
  });

  resultDiv.innerHTML = `✅ You scored <b>${score}</b> out of <b>${questions.length}</b>`;
});
