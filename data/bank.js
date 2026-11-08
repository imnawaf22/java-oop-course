// بنك أسئلة Java OOP - محلول مع الشرح
// كل سؤال: id, number, question, code (اختياري), options[4], answer (0-3), explanation, note (اختياري)
// أسئلة المخرجات كلها تم التحقق منها بتشغيلها بـ Java.
var QUESTION_BANK = (typeof window !== 'undefined' ? window : globalThis).QUESTION_BANK = {
  "title": "بنك أسئلة Java OOP - محلول",
  "description": "كل الأسئلة MCQ. answer هو رقم الخيار الصحيح ويبدأ من 0 (0=A, 1=B, 2=C, 3=D). explanation شرح الحل، و note ملاحظة إضافية على بعض الأسئلة.",
  "sections": [
    {
      "id": "A",
      "title": "المجموعة الأولى: أساسيات Java والـ OOP",
      "questions": [
        {
          "id": "A1",
          "number": 1,
          "question": "Which of the following is NOT a characteristic of an abstract class?",
          "options": [
            "Cannot be instantiated",
            "Can contain concrete methods",
            "Must have at least one abstract method",
            "Can have constructors"
          ],
          "answer": 2,
          "explanation": "الـ abstract class ممكن يكون ما فيه ولا abstract method وبرضو يكون abstract. أما الباقي فكله صحيح: ما نقدر نسوي منه object، وفيه دوال عادية، وفيه constructors."
        },
        {
          "id": "A2",
          "number": 2,
          "question": "What is the purpose of the final keyword when applied to a class?",
          "options": [
            "To make all methods abstract",
            "To prevent the class from being extended",
            "To make the class thread-safe",
            "To require implementation of all methods"
          ],
          "answer": 1,
          "explanation": "final class ما أحد يقدر يورث منه (extends). مثال: String في Java عبارة عن final class."
        },
        {
          "id": "A3",
          "number": 3,
          "question": "Which of the following best describes an interface in Java?",
          "options": [
            "A class with only static methods",
            "A blueprint for a class that specifies a set of methods to be implemented",
            "A class that cannot be extended",
            "A way to store constants only"
          ],
          "answer": 1,
          "explanation": "الـ interface عقد يحدد الدوال اللي لازم الـ class ينفذها لما يكتب implements."
        },
        {
          "id": "A4",
          "number": 4,
          "question": "In Java, how many interfaces can a class implement?",
          "options": [
            "Only one",
            "At most two",
            "Multiple interfaces",
            "None"
          ],
          "answer": 2,
          "explanation": "الـ class يقدر يورث (extends) من class واحد بس، لكن يقدر ينفذ (implements) أكثر من interface، مثل: class C implements A, B."
        },
        {
          "id": "A5",
          "number": 5,
          "question": "What will happen if you try to instantiate an abstract class directly?",
          "options": [
            "It will create an instance with null values",
            "Compilation error",
            "Runtime error",
            "It will work fine"
          ],
          "answer": 1,
          "explanation": "new على abstract class يطلع خطأ وقت الترجمة: is abstract; cannot be instantiated. الخطأ يطلع قبل ما يشتغل البرنامج، فهو مو runtime error."
        },
        {
          "id": "A6",
          "number": 6,
          "question": "Which keyword is used to prevent a method from being overridden in a subclass?",
          "options": [
            "abstract",
            "static",
            "final",
            "protected"
          ],
          "answer": 2,
          "explanation": "final method ما يقدر الـ subclass يعيد كتابته (override)."
        },
        {
          "id": "A7",
          "number": 7,
          "question": "Which of the following is the correct signature for the main method (the entry point) of a Java program?",
          "options": [
            "public static void main()",
            "public void main(String[] args)",
            "public static void main(String[] args)",
            "public static main(String[] args)"
          ],
          "answer": 2,
          "explanation": "لازم تكون public و static و void، وتاخذ String[] args. لو نقص أي جزء ما تعتبرها الـ JVM نقطة بداية البرنامج."
        },
        {
          "id": "A8",
          "number": 8,
          "question": "Which keyword is used to include classes from another package into your current file?",
          "options": [
            "include",
            "package",
            "uses",
            "import"
          ],
          "answer": 3,
          "explanation": "import تجيب class من package ثاني، مثل import java.util.Scanner;. أما package فهي تحدد الـ package اللي فيه الملف نفسه."
        },
        {
          "id": "A9",
          "number": 9,
          "question": "Which of the following is not a primitive data type in Java?",
          "options": [
            "int",
            "boolean",
            "String",
            "char"
          ],
          "answer": 2,
          "explanation": "String عبارة عن class، يعني نوع non-primitive. وعشان كذا يبدأ بحرف كبير وعنده methods مثل length()."
        },
        {
          "id": "A10",
          "number": 10,
          "question": "What symbol is used to terminate a statement in Java?",
          "options": [
            "Colon (:)",
            "Period (.)",
            "Comma (,)",
            "Semicolon (;)"
          ],
          "answer": 3,
          "explanation": "كل أمر في Java ينتهي بفاصلة منقوطة ;"
        },
        {
          "id": "A11",
          "number": 11,
          "question": "Which operator is used to perform a logical AND operation between two boolean expressions?",
          "options": [
            "&",
            "&&",
            "||",
            "|"
          ],
          "answer": 1,
          "explanation": "&& هي AND المنطقية، و || هي OR. أما & و | فهي عمليات على مستوى البت (bitwise)، وما توقف التقييم بدري (no short-circuit)."
        },
        {
          "id": "A12",
          "number": 12,
          "question": "What is the output of the following statement?",
          "code": "System.out.println(\"Java\" + 10 + 20);",
          "options": [
            "Java30",
            "Java1020",
            "Compilation Error",
            "Java 30"
          ],
          "answer": 1,
          "explanation": "الجمع يتنفذ من اليسار لليمين. \"Java\" + 10 يعطي النص \"Java10\"، وبعدها \"Java10\" + 20 يعطي \"Java1020\". لما يكون أول طرف String، كل + بعده يصير دمج نصوص (تم التحقق بالتشغيل)."
        },
        {
          "id": "A13",
          "number": 13,
          "question": "Which type of loop is guaranteed to execute its body at least once?",
          "options": [
            "for loop",
            "while loop",
            "do-while loop",
            "for-each loop"
          ],
          "answer": 2,
          "explanation": "do-while تنفذ الجسم أول، وبعدين تفحص الشرط. عشان كذا تشتغل مرة وحدة على الأقل."
        },
        {
          "id": "A14",
          "number": 14,
          "question": "What is the purpose of the `new` keyword in Java?",
          "options": [
            "Creates a new primitive variable",
            "Deletes an object to free memory",
            "Allocates memory and creates a new object",
            "Creates a new comment in the code"
          ],
          "answer": 2,
          "explanation": "new تحجز مكان في الـ Heap وتسوي object جديد وتشغل الـ constructor."
        },
        {
          "id": "A15",
          "number": 15,
          "question": "Which of the following is a valid syntax for declaring an array of integers?",
          "options": [
            "int arr[];",
            "int[] arr;",
            "Both A and B are valid",
            "arr int[];"
          ],
          "answer": 2,
          "explanation": "الطريقتين صحيحتين في Java، بس int[] arr هي المفضلة."
        },
        {
          "id": "A16",
          "number": 16,
          "question": "What is the default value of a boolean variable declared at the class level (an instance variable)?",
          "options": [
            "true",
            "false",
            "2",
            "null"
          ],
          "answer": 1,
          "explanation": "القيم الافتراضية للـ instance variables: الأرقام 0، و boolean قيمته false، والـ objects قيمتها null."
        },
        {
          "id": "A17",
          "number": 17,
          "question": "Which access modifier makes a member (field or method) accessible from anywhere in the program?",
          "options": [
            "private",
            "protected",
            "default (no modifier)",
            "public"
          ],
          "answer": 3,
          "explanation": "public ينشاف من أي مكان، من أي class وأي package."
        },
        {
          "id": "A18",
          "number": 18,
          "question": "What will be the output of the following statement?",
          "code": "System.out.println(10 / 3);",
          "options": [
            "3.333",
            "3.0",
            "3",
            "Compilation Error"
          ],
          "answer": 2,
          "explanation": "قسمة int على int تعطي int وتنحذف الكسور، فالنتيجة 3. لو كتبنا 10.0 / 3 بتطلع 3.3333333333333335 (تم التحقق بالتشغيل)."
        },
        {
          "id": "A19",
          "number": 19,
          "question": "How do you create a single-line comment in Java?",
          "options": [
            "// This is a comment",
            "# This is a comment",
            "' This is a comment",
            "<!-- This is a comment -->"
          ],
          "answer": 0,
          "explanation": "// للتعليق على سطر واحد. # تستخدم في Python، و <!-- --> في HTML."
        },
        {
          "id": "A20",
          "number": 20,
          "question": "Which package contains the `Scanner` class, commonly used for getting user input?",
          "options": [
            "java.util",
            "java.lang",
            "java.io",
            "java.scanner"
          ],
          "answer": 0,
          "explanation": "import java.util.Scanner;"
        },
        {
          "id": "A21",
          "number": 21,
          "question": "Which of the following is a correct way to create an object in Java?",
          "options": [
            "ClassName obj = ClassName();",
            "obj = new ClassName;",
            "ClassName obj = new ClassName();",
            "new obj = ClassName();"
          ],
          "answer": 2,
          "explanation": "الشكل الصحيح: النوع، ثم اسم المتغير، ثم = new ثم اسم الـ class والأقواس ()."
        },
        {
          "id": "A22",
          "number": 22,
          "question": "What will be the output from the equals() Method?",
          "code": "String s1 = new String(\"Java\");\nString s2 = new String(\"Java\");\nSystem.out.println(s1.equals(s2));",
          "options": [
            "Not Equal",
            "s1 equal of s2",
            "Compilation error",
            "Runtime error"
          ],
          "answer": 1,
          "explanation": "equals في String تقارن المحتوى، والمحتوى نفسه \"Java\"، فالنتيجة true. والخيار اللي معناه إنهم متساويين هو B.",
          "note": "تنبيه: الكود يطبع فعلياً true، وما فيه خيار مكتوب فيه true بالضبط، فـ B أقرب خيار للمعنى. وفي نسخة البنك مكتوب خطأ مطبعي new, String، ولو انكتب كذا حرفياً بيطلع Compilation error (تم التحقق بالتشغيل). الأكيد إن المقصود بدون الفاصلة."
        },
        {
          "id": "A23",
          "number": 23,
          "question": "What is the default implementation of the equals() method in the Object class?",
          "options": [
            "Compares the field values of two objects",
            "Always returns true",
            "Compares the class names of two objects",
            "Compares the memory addresses of two objects"
          ],
          "answer": 3,
          "explanation": "equals الأصلية في Object تشتغل مثل ==، يعني تقارن العناوين. String و Integer عدلوها عشان تقارن المحتوى."
        },
        {
          "id": "A24",
          "number": 24,
          "question": "Suppose you have a class BankAccount with a private field balance. If you only provide a public getter for balance but no setter, what does this enforce?",
          "options": [
            "The balance can only be read, not modified from outside the class, but internal methods can still update it.",
            "The balance becomes completely immutable and cannot be changed even inside the class.",
            "The balance can be modified directly using the field name from outside the class.",
            "It breaks encapsulation because the balance is not fully hidden."
          ],
          "answer": 0,
          "explanation": "من برا الـ class نقدر نقرأ الرصيد بس، لأن الحقل private وما فيه setter. لكن دوال الـ class نفسه، مثل deposit، تقدر تعدله. وما يصير immutable لأنه مو final."
        },
        {
          "id": "A25",
          "number": 25,
          "question": "In a Vehicle class, marking the engineSerialNumber as private final and only setting it in the constructor suggests:",
          "options": [
            "The field can be changed later using a setter.",
            "The field is a constant that is assigned once and cannot be changed, ensuring immutability for that attribute.",
            "The field does not need encapsulation.",
            "The field must be accessed directly from subclasses."
          ],
          "answer": 1,
          "explanation": "final معناها تنعطى قيمة مرة وحدة بس (في الـ constructor) وما تتغير بعدها."
        },
        {
          "id": "A26",
          "number": 26,
          "question": "Which Java keyword is commonly used to implement encapsulation by restricting direct access to a class's fields?",
          "options": [
            "protected",
            "private",
            "public",
            "final"
          ],
          "answer": 1,
          "explanation": "private تخفي الحقل عن أي class ثاني، وهذا أساس الـ encapsulation."
        },
        {
          "id": "A27",
          "number": 27,
          "question": "What is the primary purpose of \"this\" keyword in Java?",
          "options": [
            "To create a new instance of the class",
            "To refer to the current object instance within instance methods or constructors",
            "To access static methods of the class",
            "To improve the performance of the program"
          ],
          "answer": 1,
          "explanation": "this تأشر على الـ object الحالي، مثل this.name = name."
        },
        {
          "id": "A28",
          "number": 28,
          "question": "What is the scope of a local variable declared inside a method in Java?",
          "options": [
            "Throughout the entire class",
            "Only within the block (pair of curly braces) where it is declared",
            "Throughout the entire package",
            "Throughout the entire program"
          ],
          "answer": 1,
          "explanation": "المتغير المحلي يعيش داخل الأقواس { } اللي انعرف فيها، ويختفي بعدها."
        },
        {
          "id": "A29",
          "number": 29,
          "question": "Which of the following is a correct way to design a Course class with encapsulation?",
          "options": [
            "public class Course { public String name; }",
            "public class Course { private String name; public String getName() { return name; } }",
            "public class Course { String name; }",
            "public class Course { private String name; }"
          ],
          "answer": 1,
          "explanation": "الـ encapsulation يحتاج حقل private ودالة public نوصل فيها له. D مخفي بس ما نقدر نوصل له أبداً، و A و C مكشوفين."
        },
        {
          "id": "A30",
          "number": 30,
          "question": "Which of the following is NOT a fundamental principle of Object-Oriented Programming?",
          "options": [
            "Encapsulation",
            "Polymorphism",
            "Recursion",
            "Inheritance"
          ],
          "answer": 2,
          "explanation": "مبادئ OOP الأربعة هي Encapsulation و Abstraction و Inheritance و Polymorphism. أما Recursion فهو أسلوب برمجة عام."
        },
        {
          "id": "A31",
          "number": 31,
          "question": "Which of the following follows proper encapsulation for Vehicle's fuel level?",
          "code": "class Vehicle {\n    private int fuel;\n    public int getFuel() { return fuel; }\n    public void setFuel(int fuel) {\n        if(fuel >= 0 && fuel <= 100)\n            this.fuel = fuel;\n    }\n}",
          "options": [
            "vehicle.fuel = 50;",
            "vehicle.setFuel(120);",
            "vehicle.setFuel(80);",
            "Vehicle.fuel = 50;"
          ],
          "answer": 2,
          "explanation": "A و D يطلعون خطأ لأن fuel نوعه private. وB يترجم عادي بس 120 أكبر من 100، فالـ setter يرفضها وما تتغير القيمة. C هو الاستخدام الصحيح بقيمة مقبولة."
        },
        {
          "id": "A32",
          "number": 32,
          "question": "What is the primary function of the JVM (Java Virtual Machine)?",
          "options": [
            "To compile Java code into machine code",
            "To execute Java bytecode on any platform",
            "To edit Java source files",
            "To manage database connections"
          ],
          "answer": 1,
          "explanation": "javac هو اللي يحول الكود لـ bytecode، والـ JVM يشغل الـ bytecode على أي نظام. وعشان كذا يقولون عن Java: Write once, run anywhere."
        },
        {
          "id": "A33",
          "number": 33,
          "question": "What is a constructor in Java?",
          "options": [
            "A method that destroys objects",
            "A special method that initializes objects when they are created",
            "A regular method that performs calculations",
            "A variable that stores object data"
          ],
          "answer": 1,
          "explanation": "دالة خاصة بنفس اسم الـ class، تشتغل تلقائياً مع new وتعطي القيم البدائية."
        },
        {
          "id": "A34",
          "number": 34,
          "question": "Which of the following correctly demonstrates encapsulation?",
          "options": [
            "public int age;",
            "private int age; public int getAge() { return age; }",
            "int age = 25;",
            "static int age;"
          ],
          "answer": 1,
          "explanation": "حقل private ومعه getter من نوع public."
        },
        {
          "id": "A35",
          "number": 35,
          "question": "What is the purpose of a constructor?",
          "options": [
            "To delete objects from memory",
            "To initialize the state of an object when it is created",
            "To compile the Java code",
            "To import libraries"
          ],
          "answer": 1,
          "explanation": "يعطي الـ object قيمه الأولى وقت ما ينصنع."
        },
        {
          "id": "A36",
          "number": 36,
          "question": "What is a default constructor?",
          "options": [
            "A constructor that takes no parameters and is automatically provided if no constructor is defined",
            "A constructor that must be written manually",
            "A constructor with default parameter values",
            "A constructor that cannot be accessed"
          ],
          "answer": 0,
          "explanation": "إذا ما كتبت أي constructor، تسوي Java واحد بدون مدخلات تلقائياً."
        },
        {
          "id": "A37",
          "number": 37,
          "question": "What will happen if you don't define any constructor in a Java class?",
          "options": [
            "The class will not compile",
            "Java automatically provides a default no-argument constructor",
            "The class cannot create objects",
            "The compiler throws an error"
          ],
          "answer": 1,
          "explanation": "الـ compiler يضيف default constructor فاضي، وتقدر تكتب new ClassName() عادي."
        },
        {
          "id": "A38",
          "number": 38,
          "question": "Which statement about static variables is TRUE?",
          "options": [
            "Each object has its own copy of a static variable",
            "Static variables are shared among all instances of a class",
            "Static variables cannot be accessed in static methods",
            "Static variables must be private"
          ],
          "answer": 1,
          "explanation": "الـ static variable نسخة وحدة يتشاركها كل الـ objects، مثل عداد الزوار."
        },
        {
          "id": "A39",
          "number": 39,
          "question": "Which constructor is called when an object is created without arguments?",
          "options": [
            "Copy constructor",
            "Default constructor",
            "Parameterized constructor",
            "Static constructor"
          ],
          "answer": 1,
          "explanation": "new ClassName() بدون مدخلات تستدعي الـ constructor اللي ما ياخذ مدخلات (default/no-arg)."
        },
        {
          "id": "A40",
          "number": 40,
          "question": "What is the relationship between a parent class and a child class that extends it?",
          "options": [
            "Child has IS-A relationship with Parent",
            "Child has HAS-A relationship with Parent",
            "Child has USES-A relationship with Parent",
            "There is no relationship"
          ],
          "answer": 0,
          "explanation": "الوراثة علاقة IS-A، مثل: Dog is an Animal."
        },
        {
          "id": "A41",
          "number": 41,
          "question": "Which of the following statements about the Object class is true?",
          "options": [
            "It is an abstract class",
            "It is the superclass of all classes in Java",
            "It cannot be extended",
            "It only contains abstract methods"
          ],
          "answer": 1,
          "explanation": "كل class في Java يورث من Object، حتى لو ما كتبنا extends."
        },
        {
          "id": "A42",
          "number": 42,
          "question": "What does the term \"method resolution\" mean in the context of polymorphism?",
          "options": [
            "The process of finding which method to call based on the object type",
            "The process of fixing syntax errors",
            "The process of creating a new method",
            "The process of caching method calls"
          ],
          "answer": 0,
          "explanation": "وقت التشغيل تحدد Java أي نسخة من الدالة تشتغل حسب نوع الـ object الحقيقي (dynamic binding)."
        },
        {
          "id": "A43",
          "number": 43,
          "question": "Which of the following correctly demonstrates interface implementation?",
          "options": [
            "class MyClass extends MyInterface { }",
            "class MyClass implements MyInterface { }",
            "interface MyClass implements MyInterface { }",
            "MyClass extends implements MyInterface { }"
          ],
          "answer": 1,
          "explanation": "الـ class ينفذ الـ interface بكلمة implements. وextends تستخدم بين class و class، أو بين interface و interface."
        },
        {
          "id": "A45",
          "number": 45,
          "question": "Can an interface extend another interface in Java?",
          "options": [
            "No, interfaces can only be implemented",
            "Yes, using the extends keyword",
            "Only if both interfaces are abstract",
            "Only if one interface is final"
          ],
          "answer": 1,
          "explanation": "interface B extends A. والـ interface يقدر يورث من أكثر من interface."
        }
      ]
    },
    {
      "id": "B",
      "title": "المجموعة الثانية: Inheritance و Polymorphism و Interfaces",
      "questions": [
        {
          "id": "B12",
          "number": 12,
          "question": "What is the primary difference between an abstract class and a concrete class?",
          "options": [
            "Abstract classes have more methods",
            "Concrete classes cannot be extended",
            "Abstract classes cannot be instantiated",
            "There is no difference"
          ],
          "answer": 2,
          "explanation": "الـ abstract class ما نقدر نسوي منه object بـ new، أما الـ concrete class فنقدر."
        },
        {
          "id": "B13",
          "number": 13,
          "question": "Which of the following is true about constructor inheritance?",
          "options": [
            "Constructors are always inherited by subclasses",
            "Constructors are never inherited by subclasses",
            "Subclasses inherit constructors from parent only if they don't define their own",
            "All classes share the same constructor"
          ],
          "answer": 1,
          "explanation": "الـ constructors ما تنورث أبداً. الـ subclass يقدر يستدعي constructor الأب بـ super()، لكن ما يصير له."
        },
        {
          "id": "B14",
          "number": 14,
          "question": "What is the output of the following code?",
          "code": "class A { public void display() { System.out.print(\"A\"); } }\nclass B extends A { public void display() { System.out.print(\"B\"); } }\npublic class Test {\n    public static void main(String[] args) {\n        A obj = new B();\n        obj.display();\n    }\n}",
          "options": [
            "A",
            "B",
            "Compilation error",
            "Runtime error"
          ],
          "answer": 1,
          "explanation": "المتغير نوعه A، بس الـ object الحقيقي B. والـ overriding يتحدد وقت التشغيل حسب الـ object، فيطبع B (تم التحقق بالتشغيل)."
        },
        {
          "id": "B15",
          "number": 15,
          "question": "Which access modifier allows access only within the same package?",
          "options": [
            "public",
            "private",
            "protected",
            "default (no modifier)"
          ],
          "answer": 3,
          "explanation": "لما ما نكتب أي modifier يصير package-private، يعني ينشاف داخل نفس الـ package بس. أما protected فتسمح كمان للـ subclasses برا الـ package."
        },
        {
          "id": "B16",
          "number": 16,
          "question": "What is the purpose of getter and setter methods in encapsulation?",
          "options": [
            "To make the code longer",
            "To provide controlled access to private data",
            "To prevent inheritance",
            "To increase code complexity"
          ],
          "answer": 1,
          "explanation": "نوصل للبيانات الـ private بطريقة منظمة، والـ setter يتحقق من القيمة قبل ما يقبلها."
        },
        {
          "id": "B17",
          "number": 17,
          "question": "Which of the following violates the principle of encapsulation?",
          "options": [
            "Providing public getter and setter methods",
            "Making all instance variables public",
            "Using private variables with accessor methods",
            "Validating data in setter methods"
          ],
          "answer": 1,
          "explanation": "لما تكون الحقول public أي أحد يقدر يغيرها بدون تحقق، وهذا عكس الـ encapsulation."
        },
        {
          "id": "B18",
          "number": 18,
          "question": "What will be the output?",
          "code": "class Parent { protected int x = 10; }\nclass Child extends Parent {\n    void display() { System.out.println(x); }\n}\npublic class Test {\n    public static void main(String[] args) { new Child().display(); }\n}",
          "options": [
            "10",
            "null",
            "Compilation error",
            "Runtime error"
          ],
          "answer": 0,
          "explanation": "الـ subclass يشوف الحقل protected اللي ورثه، فيطبع 10 (تم التحقق بالتشغيل)."
        },
        {
          "id": "B19",
          "number": 19,
          "question": "Which of the following is NOT a valid reason to use inheritance?",
          "options": [
            "Code reusability",
            "To establish a relationship between classes",
            "To create multiple copies of a class",
            "To create a hierarchy of classes"
          ],
          "answer": 2,
          "explanation": "الوراثة هدفها إعادة استخدام الكود وبناء تسلسل بين الـ classes، مو إننا ننسخ الـ class."
        },
        {
          "id": "B20",
          "number": 20,
          "question": "What does the keyword \"implements\" indicate?",
          "options": [
            "The class is inheriting from another class",
            "The class is implementing an interface",
            "The class is abstract",
            "The class is final"
          ],
          "answer": 1,
          "explanation": "implements معناها إن الـ class ينفذ interface. أما الوراثة من class فتكون بـ extends."
        },
        {
          "id": "B21",
          "number": 21,
          "question": "Which method is called when an object is created?",
          "options": [
            "main()",
            "init()",
            "constructor",
            "initialize()"
          ],
          "answer": 2,
          "explanation": "الـ constructor يشتغل تلقائياً مع new."
        },
        {
          "id": "B22",
          "number": 22,
          "question": "Can a subclass have a different return type for an overridden method?",
          "options": [
            "Yes, always",
            "No, never",
            "Yes, if it is a subtype of the parent's return type (covariant return type)",
            "Only for primitive types"
          ],
          "answer": 2,
          "explanation": "يسمى covariant return type. مثلاً لو الأب يرجع Animal، الابن يقدر يرجع Dog. ومع الـ primitives لازم يكون النوع نفسه بالضبط."
        },
        {
          "id": "B23",
          "number": 23,
          "question": "Which of the following statements about static methods is true?",
          "options": [
            "They can be overridden by subclasses",
            "They cannot be overloaded",
            "They belong to the class, not to objects",
            "They can access instance variables"
          ],
          "answer": 2,
          "explanation": "الـ static method تخص الـ class. ما ينفع لها override (يصير hiding)، وينفع لها overload، وما تقدر توصل لمتغيرات الـ instance مباشرة."
        },
        {
          "id": "B24",
          "number": 24,
          "question": "What is method shadowing?",
          "options": [
            "When a static method in a subclass has the same name as a static method in the superclass",
            "When a method is hidden by another method",
            "When a method is declared as private",
            "When a method is abstract"
          ],
          "answer": 0,
          "explanation": "لما الأب والابن عندهم static method بنفس الـ signature، دالة الابن تخفي دالة الأب. الاسم الرسمي لها method hiding."
        },
        {
          "id": "B25",
          "number": 25,
          "question": "Which of the following is a valid abstract method declaration?",
          "options": [
            "abstract void myMethod() { }",
            "abstract void myMethod();",
            "abstract int myMethod() { return 5; }",
            "abstract final void myMethod();"
          ],
          "answer": 1,
          "explanation": "الـ abstract method ما لها جسم وتنتهي بـ ;. وما ينفع تكون final، لأن abstract لازم تنكتب في الابن وfinal تمنع هذا."
        },
        {
          "id": "B26",
          "number": 26,
          "question": "Can an abstract class have a main() method?",
          "options": [
            "No, abstract classes cannot have any methods",
            "Yes, and it can be used to create instances",
            "Yes, and it cannot be used to create instances",
            "Only if it extends another class"
          ],
          "answer": 2,
          "explanation": "main دالة static وتشتغل عادي داخل abstract class (تم التحقق بالتشغيل)، لكن ما نقدر نكتب new على الـ abstract class نفسه."
        },
        {
          "id": "B27",
          "number": 27,
          "question": "What will happen if a concrete class implements an interface but doesn't implement all its methods?",
          "options": [
            "It will compile successfully",
            "Compilation error",
            "Runtime error",
            "The interface methods will be inherited as empty methods"
          ],
          "answer": 1,
          "explanation": "الـ class العادي لازم ينفذ كل دوال الـ interface الـ abstract، وإلا يطلع خطأ ترجمة. الحل الثاني إنه يكون abstract."
        },
        {
          "id": "B28",
          "number": 28,
          "question": "Which of the following best describes the Liskov Substitution Principle?",
          "options": [
            "Objects of a subclass should be substitutable for objects of the superclass",
            "All classes must extend the Object class",
            "Subclasses must have fewer methods than superclasses",
            "Interfaces cannot have method implementations"
          ],
          "answer": 0,
          "explanation": "المبدأ يقول: أي مكان يقبل object من الأب، لازم يقبل object من الابن ويشتغل صح."
        },
        {
          "id": "B29",
          "number": 29,
          "question": "What is the output?",
          "code": "interface I { void show(); }\nclass A implements I { public void show() { System.out.print(\"A\"); } }\nclass B implements I { public void show() { System.out.print(\"B\"); } }\npublic class Test {\n    public static void main(String[] args) {\n        I obj1 = new A(); I obj2 = new B();\n        obj1.show(); obj2.show();\n    }\n}",
          "options": [
            "AB",
            "AA",
            "BB",
            "Compilation error"
          ],
          "answer": 0,
          "explanation": "كل object يشغل نسخته من show: obj1 من A وobj2 من B، فيطبع AB (تم التحقق بالتشغيل)."
        },
        {
          "id": "B30",
          "number": 30,
          "question": "Which keyword is used to call a parent class method from a child class?",
          "options": [
            "parent",
            "super",
            "this",
            "extends"
          ],
          "answer": 1,
          "explanation": "super.methodName() تستدعي دالة الأب."
        },
        {
          "id": "B31",
          "number": 31,
          "question": "Can you declare an interface method as static?",
          "options": [
            "No, interface methods are always abstract",
            "Yes, and they must be implemented",
            "Yes, starting from Java 8 with static keyword",
            "No, static methods cannot be in interfaces"
          ],
          "answer": 2,
          "explanation": "من Java 8 صار الـ interface يقبل دوال static لها جسم، ونستدعيها باسم الـ interface."
        },
        {
          "id": "B32",
          "number": 32,
          "question": "What is the purpose of the toString() method in the Object class?",
          "options": [
            "To convert an object to a string representation",
            "To compare two objects",
            "To destroy an object",
            "To create a copy of an object"
          ],
          "answer": 0,
          "explanation": "ترجع نص يمثل الـ object، وتشتغل تلقائياً لما نكتب System.out.println(obj)."
        },
        {
          "id": "B33",
          "number": 33,
          "question": "Which of the following is true about private constructors?",
          "options": [
            "They prevent instantiation of the class",
            "They are used for singleton pattern implementation",
            "Both A and B",
            "They are not allowed in Java"
          ],
          "answer": 2,
          "explanation": "الـ private constructor يمنع إنشاء objects من برا الـ class، ويستخدم في نمط Singleton."
        },
        {
          "id": "B34",
          "number": 34,
          "question": "What will be the output?",
          "code": "class A { A() { System.out.print(\"A\"); } }\nclass B extends A { B() { super(); System.out.print(\"B\"); } }\npublic class Test {\n    public static void main(String[] args) { new B(); }\n}",
          "options": [
            "AB",
            "BA",
            "A",
            "B"
          ],
          "answer": 0,
          "explanation": "super() تشغل constructor الأب أول فيطبع A، وبعدها يكمل constructor الابن فيطبع B (تم التحقق بالتشغيل)."
        },
        {
          "id": "B35",
          "number": 35,
          "question": "Can an interface have instance variables?",
          "options": [
            "Yes, all variables are static and final",
            "No, interfaces cannot have variables",
            "Yes, they behave like instance variables",
            "Only if they are inherited from a superclass"
          ],
          "answer": 0,
          "explanation": "أي متغير في الـ interface يكون تلقائياً public static final، يعني ثابت. فهي مو instance variables حقيقية، والخيار A هو اللي يوصف هذا صح."
        },
        {
          "id": "B36",
          "number": 36,
          "question": "Which of the following is NOT a benefit of using polymorphism?",
          "options": [
            "Code flexibility",
            "Better maintainability",
            "Increased memory usage",
            "Code reusability"
          ],
          "answer": 2,
          "explanation": "زيادة استهلاك الذاكرة مو فائدة أصلاً."
        },
        {
          "id": "B37",
          "number": 37,
          "question": "What does the instanceof operator do?",
          "options": [
            "Creates a new instance of a class",
            "Checks if an object is an instance of a class",
            "Compares two objects",
            "Casts an object to a different type"
          ],
          "answer": 1,
          "explanation": "تفحص إذا الـ object من نوع معين وترجع true أو false."
        },
        {
          "id": "B38",
          "number": 38,
          "question": "Which of the following is true about method overloading and overriding?",
          "options": [
            "Overloading occurs at runtime, overriding at compile time",
            "Overloading is in the same class, overriding is in different classes",
            "They are the same thing",
            "Overriding cannot change the return type"
          ],
          "answer": 1,
          "explanation": "الـ overloading يكون عادةً في نفس الـ class بمدخلات مختلفة، والـ overriding يكون في الابن. A عكس الصح، وD غلط لأن الـ covariant return type مسموح."
        },
        {
          "id": "B39",
          "number": 39,
          "question": "What will be the output?",
          "code": "class Test {\n    public static void display(int x) { System.out.print(\"int: \" + x); }\n    public static void display(double x) { System.out.print(\"double: \" + x); }\n    public static void main(String[] args) { display(10); display(10.5); }\n}",
          "options": [
            "int: 10 double: 10.5",
            "double: 10 int: 10.5",
            "int: 10 int: 10.5",
            "Compilation error"
          ],
          "answer": 0,
          "explanation": "10 نوعها int فتروح لدالة int، و10.5 نوعها double فتروح لدالة double.",
          "note": "ملاحظة: المخرج الفعلي بدون مسافة بينهم: int: 10double: 10.5، لأن print ما تنزل سطر ولا تحط مسافة (تم التحقق بالتشغيل). بس A هو الخيار الصحيح."
        },
        {
          "id": "B40",
          "number": 40,
          "question": "Can an abstract class have a private method?",
          "options": [
            "No, all methods must be public or protected",
            "Yes, private methods are allowed",
            "Only if they are final",
            "Only if they are static"
          ],
          "answer": 1,
          "explanation": "الـ abstract class يقبل دوال private عادية لها جسم. الممنوع إن الدالة تكون private و abstract مع بعض."
        },
        {
          "id": "B41",
          "number": 41,
          "question": "What is the relationship between composition and inheritance?",
          "options": [
            "They are the same thing",
            "Composition is a stronger relationship than inheritance",
            "Composition is an alternative to inheritance (HAS-A vs IS-A)",
            "Inheritance is less important than composition"
          ],
          "answer": 2,
          "explanation": "الـ Composition علاقة HAS-A والوراثة IS-A، وكثير نستخدم الأولى بدل الثانية."
        },
        {
          "id": "B42",
          "number": 42,
          "question": "Which of the following correctly demonstrates downcasting?",
          "options": [
            "Animal a = new Dog();",
            "Dog d = (Dog) a;",
            "Object o = new Animal();",
            "All of the above"
          ],
          "answer": 1,
          "explanation": "Downcasting يعني نحول من الأب للابن، ولازم نكتب التحويل (Dog). أما A و C فهي upcasting وتصير تلقائياً."
        },
        {
          "id": "B43",
          "number": 43,
          "question": "What will be the output?",
          "code": "interface A { void method(); }\ninterface B extends A { void method2(); }\nclass C implements B {\n    public void method() { System.out.print(\"A\"); }\n    public void method2() { System.out.print(\"B\"); }\n}\npublic class Test {\n    public static void main(String[] args) { C c = new C(); c.method(); c.method2(); }\n}",
          "options": [
            "AB",
            "BA",
            "A",
            "Compilation error"
          ],
          "answer": 0,
          "explanation": "B ورث method من A، وC نفذ الدالتين. نادينا method بعدين method2 فطبع AB (تم التحقق بالتشغيل)."
        },
        {
          "id": "B44",
          "number": 44,
          "question": "Which access modifier is the most restrictive?",
          "options": [
            "public",
            "protected",
            "private",
            "default"
          ],
          "answer": 2,
          "explanation": "الترتيب من الأضيق للأوسع: private ثم default ثم protected ثم public."
        },
        {
          "id": "B45",
          "number": 45,
          "question": "What is the diamond problem in multiple inheritance?",
          "options": [
            "A situation where a class needs to inherit from multiple sources",
            "The problem that occurs when two parent classes have methods with the same name",
            "An error in Java's garbage collection",
            "A problem with final classes"
          ],
          "answer": 1,
          "explanation": "لو فيه أبين عندهم نفس الدالة، ما يعرف الابن أي وحدة يورث. عشان كذا Java تمنع الوراثة المتعددة بين الـ classes."
        },
        {
          "id": "B46",
          "number": 46,
          "question": "Can an interface be declared as final?",
          "options": [
            "Yes, to prevent implementation",
            "No, interfaces are meant to be implemented",
            "Only if it has no methods",
            "Only in older Java versions"
          ],
          "answer": 1,
          "explanation": "final تمنع الوراثة، والـ interface ما له فايدة إذا ما أحد نفذه، فكتابة final interface خطأ."
        },
        {
          "id": "B47",
          "number": 47,
          "question": "What will be the output?",
          "code": "class Test {\n    static void print(Object o) { System.out.print(\"Object\"); }\n    static void print(String s) { System.out.print(\"String\"); }\n    public static void main(String[] args) { print(\"Hello\"); }\n}",
          "options": [
            "Object",
            "String",
            "ObjectString",
            "Compilation error"
          ],
          "answer": 1,
          "explanation": "Java تختار أدق دالة تناسب النوع، و\"Hello\" نوعها String فتطبع String (تم التحقق بالتشغيل)."
        },
        {
          "id": "B48",
          "number": 48,
          "question": "Which of the following statements about encapsulation is false?",
          "options": [
            "It hides internal implementation details",
            "It allows indirect access through methods",
            "It makes direct access to variables faster",
            "It enables data validation"
          ],
          "answer": 2,
          "explanation": "الـ encapsulation يمنع الوصول المباشر للمتغيرات أصلاً، فما له علاقة بإنه يخليه أسرع."
        },
        {
          "id": "B49",
          "number": 49,
          "question": "Can an abstract method have a body?",
          "options": [
            "Yes, always",
            "No, never",
            "Yes, if it has the default keyword (Java 8+)",
            "Only in static methods"
          ],
          "answer": 1,
          "explanation": "تعريف الـ abstract method إنها بدون جسم. الدالة الـ default في الـ interface لها جسم، لكنها أصلاً مو abstract."
        },
        {
          "id": "B50",
          "number": 50,
          "question": "What will be the output?",
          "code": "class A { public int x = 10; }\nclass B extends A { public int x = 20; }\npublic class Test {\n    public static void main(String[] args) { A a = new B(); System.out.println(a.x); }\n}",
          "options": [
            "10",
            "20",
            "Compilation error",
            "30"
          ],
          "answer": 0,
          "explanation": "الحقول (fields) ما فيها polymorphism. Java تاخذ الحقل حسب نوع المتغير وهو A، فيطبع 10 (تم التحقق بالتشغيل). الـ polymorphism يشتغل على الدوال بس."
        },
        {
          "id": "B51",
          "number": 51,
          "question": "Which of the following is the correct syntax for creating a parameterized interface (generic interface)?",
          "options": [
            "interface MyInterface<T> { void method(T t); }",
            "interface<T> MyInterface { void method(T t); }",
            "interface MyInterface { <T> void method(T t); }",
            "interface MyInterface { void method(T t); }"
          ],
          "answer": 0,
          "explanation": "الـ <T> ينكتب بعد اسم الـ interface. أما C فهي generic method داخل interface عادي، مو generic interface."
        },
        {
          "id": "B52",
          "number": 52,
          "question": "What is the purpose of the clone() method?",
          "options": [
            "To create a shallow or deep copy of an object",
            "To delete an object",
            "To compare two objects",
            "To serialize an object"
          ],
          "answer": 0,
          "explanation": "clone تسوي نسخة من الـ object."
        },
        {
          "id": "B53",
          "number": 53,
          "question": "Can a class be both abstract and final?",
          "options": [
            "Yes, and it is commonly done",
            "No, because abstract classes must be subclassed",
            "Yes, only if it has no abstract methods",
            "Only in Java 9+"
          ],
          "answer": 1,
          "explanation": "abstract تحتاج أحد يورث منه، وfinal تمنع الوراثة، فما يجتمعون. الـ compiler يرفضها."
        },
        {
          "id": "B54",
          "number": 54,
          "question": "What will be the output?",
          "code": "String s1 = new String(\"Java\");\nString s2 = new String(\"Java\");\nSystem.out.println(s1 == s2);\nSystem.out.println(s1.equals(s2));",
          "options": [
            "true true",
            "false false",
            "true false",
            "false true"
          ],
          "answer": 3,
          "explanation": "== تقارن العناوين، وكل new يسوي object جديد، فالنتيجة false. وequals تقارن المحتوى فالنتيجة true (تم التحقق بالتشغيل)."
        },
        {
          "id": "B55",
          "number": 55,
          "question": "Which method must every class override from the Object class?",
          "options": [
            "toString() and equals()",
            "getClass() and hashCode()",
            "None, they have default implementations",
            "Only toString()"
          ],
          "answer": 2,
          "explanation": "كل دوال Object لها تنفيذ جاهز، فما فيه دالة لازم نعيد كتابتها."
        },
        {
          "id": "B56",
          "number": 56,
          "question": "What is the output?",
          "code": "abstract class Animal { abstract void sound(); }\nclass Dog extends Animal { void sound() { System.out.print(\"Bark\"); } }\nclass Cat extends Animal { void sound() { System.out.print(\"Meow\"); } }\npublic class Test {\n    public static void main(String[] args) {\n        Animal[] animals = {new Dog(), new Cat()};\n        for(Animal a : animals) a.sound();\n    }\n}",
          "options": [
            "BarkMeow",
            "DogCat",
            "AnimalAnimal",
            "Compilation error"
          ],
          "answer": 0,
          "explanation": "كل object يشغل sound حقته، فيطبع BarkMeow. هذا polymorphism مع array (تم التحقق بالتشغيل)."
        },
        {
          "id": "B57",
          "number": 57,
          "question": "Which of the following about the @Override annotation is true?",
          "options": [
            "It is mandatory to use when overriding",
            "It provides compile-time checking that a method is overriding a parent method",
            "It prevents the method from being overridden",
            "It makes the method abstract"
          ],
          "answer": 1,
          "explanation": "اختيارية، لكن لو كتبتها والدالة ما تعيد كتابة دالة من الأب، الـ compiler يطلع لك خطأ."
        },
        {
          "id": "B58",
          "number": 58,
          "question": "Can an interface have a constructor?",
          "options": [
            "Yes, but it's never called",
            "No, interfaces cannot have constructors",
            "Yes, and it's called before implementing classes' constructors",
            "Only default constructors"
          ],
          "answer": 1,
          "explanation": "الـ interface ما فيه constructors لأنه ما ينصنع منه objects."
        },
        {
          "id": "B59",
          "number": 59,
          "question": "Which of the following best describes method binding?",
          "options": [
            "The connection between a method call and the actual method implementation",
            "The process of creating a new method",
            "The process of extending a class",
            "The connection between a variable and its value"
          ],
          "answer": 0,
          "explanation": "الـ binding هو ربط استدعاء الدالة بالكود اللي بيتنفذ، ويكون static وقت الترجمة أو dynamic وقت التشغيل."
        },
        {
          "id": "B60",
          "number": 60,
          "question": "What is the output?",
          "code": "interface I1 { default void display() { System.out.print(\"I1\"); } }\ninterface I2 { default void display() { System.out.print(\"I2\"); } }\nclass C implements I1, I2 {\n    public void display() { I1.super.display(); }\n}\npublic class Test {\n    public static void main(String[] args) { new C().display(); }\n}",
          "options": [
            "I1",
            "I2",
            "I1I2",
            "Compilation error"
          ],
          "answer": 0,
          "explanation": "فيه تعارض بين الـ interfaces، وC حله بإنه أعاد كتابة display واستدعى نسخة I1 بس، فيطبع I1 (تم التحقق بالتشغيل)."
        },
        {
          "id": "B61",
          "number": 61,
          "question": "Which keyword is used to restrict access to a method within the same package?",
          "options": [
            "public",
            "private",
            "protected",
            "No keyword needed (default)"
          ],
          "answer": 3,
          "explanation": "لما ما نكتب أي modifier يصير الوصول داخل نفس الـ package بس."
        },
        {
          "id": "B62",
          "number": 62,
          "question": "What is the purpose of the \"this\" keyword in a constructor?",
          "options": [
            "To refer to the parent class",
            "To call another constructor in the same class",
            "To refer to the current object",
            "All of the above"
          ],
          "answer": 1,
          "explanation": "داخل الـ constructor نستخدم this(...) عشان نستدعي constructor ثاني في نفس الـ class. وD غلط لأن this ما تأشر على الأب.",
          "note": "ملاحظة: الخيار C صحيح بعد، لأن this.x = x تأشر على الـ object الحالي. والسؤال ما فيه خيار يجمع B و C، فاخترنا B لأنه الاستخدام الخاص بالـ constructor. راجع الجواب المعتمد مع الدكتور."
        },
        {
          "id": "B63",
          "number": 63,
          "question": "Can you override a static method?",
          "options": [
            "Yes, and it's called overriding",
            "No, static methods cannot be overridden (method hiding instead)",
            "Only if it's declared as final",
            "Only in subclasses"
          ],
          "answer": 1,
          "explanation": "الـ static method ما تنعاد كتابتها، الابن يخفيها بس (hiding). شوف السؤال 64."
        },
        {
          "id": "B64",
          "number": 64,
          "question": "What will be the output?",
          "code": "class A { public static void display() { System.out.print(\"A\"); } }\nclass B extends A { public static void display() { System.out.print(\"B\"); } }\npublic class Test {\n    public static void main(String[] args) { A a = new B(); a.display(); }\n}",
          "options": [
            "A",
            "B",
            "Compilation error",
            "Runtime error"
          ],
          "answer": 0,
          "explanation": "الدالة static، فتنحدد حسب نوع المتغير (A) مو حسب الـ object. فيطبع A، وهذا هو الـ hiding (تم التحقق بالتشغيل)."
        },
        {
          "id": "B65",
          "number": 65,
          "question": "Which of the following statements about static methods is correct?",
          "options": [
            "Static methods can be inherited",
            "Static methods cannot be called from instance methods",
            "Static methods belong to the class, not instances",
            "Static methods can access private instance variables"
          ],
          "answer": 2,
          "explanation": "التعريف الأساسي للـ static إنها تخص الـ class.",
          "note": "ملاحظة: A صحيحة تقنياً بعد، لأن الابن يقدر يستدعي static method حق الأب (تم التحقق بالتشغيل). بس الجواب المقصود C لأنه تعريف الـ static."
        },
        {
          "id": "B66",
          "number": 66,
          "question": "What is the purpose of the super keyword?",
          "options": [
            "It refers to the current object",
            "It refers to the parent class",
            "It creates a new instance",
            "It prevents inheritance"
          ],
          "answer": 1,
          "explanation": "super تأشر على الأب: super() للـ constructor و super.method() للدوال."
        },
        {
          "id": "B67",
          "number": 67,
          "question": "What is the output?",
          "code": "class A { A() { System.out.print(\"A\"); } }\nclass B extends A { B() { System.out.print(\"B\"); } }\nclass C extends B { C() { System.out.print(\"C\"); } }\npublic class Test {\n    public static void main(String[] args) { new C(); }\n}",
          "options": [
            "ABC",
            "CBA",
            "A",
            "CAB"
          ],
          "answer": 0,
          "explanation": "كل constructor يستدعي constructor الأب أول حتى لو ما كتبنا super()، فالترتيب من الجد للحفيد: ABC (تم التحقق بالتشغيل)."
        },
        {
          "id": "B68",
          "number": 68,
          "question": "Can you call a non-static method from a static method?",
          "options": [
            "Yes, directly",
            "No, without creating an object instance",
            "Only if the object is passed as a parameter",
            "Only if it's final"
          ],
          "answer": 1,
          "explanation": "ما ينفع مباشرة، لازم نسوي object أول: new Test().display(). وهذا اللي يقصده B."
        },
        {
          "id": "B69",
          "number": 69,
          "question": "What will be the output?",
          "code": "class Test {\n    int x = 10;\n    static int y = 20;\n    void display() { System.out.println(x + y); }\n    public static void main(String[] args) { new Test().display(); }\n}",
          "options": [
            "10",
            "20",
            "30",
            "Compilation error"
          ],
          "answer": 2,
          "explanation": "الدالة العادية (instance method) تقدر توصل للـ instance و الـ static، فيطبع 10 + 20 = 30 (تم التحقق بالتشغيل)."
        },
        {
          "id": "B70",
          "number": 70,
          "question": "Which of the following is true about the protected keyword?",
          "options": [
            "It restricts access to the same class only",
            "It allows access in the same package and subclasses",
            "It makes the variable public",
            "It prevents inheritance"
          ],
          "answer": 1,
          "explanation": "protected تنشاف داخل نفس الـ package، وعند الـ subclasses حتى لو كانوا في package ثاني."
        },
        {
          "id": "B71",
          "number": 71,
          "question": "What is the purpose of the package statement?",
          "options": [
            "To organize classes into namespaces",
            "To import external libraries",
            "To declare variables",
            "To define inheritance"
          ],
          "answer": 0,
          "explanation": "package ترتب الـ classes في مجموعات (مجلدات)."
        },
        {
          "id": "B72",
          "number": 72,
          "question": "Which of the following is a valid way to create an object?",
          "options": [
            "ClassName obj = new ClassName();",
            "ClassName obj = ClassName();",
            "new ClassName() obj;",
            "ClassName = new obj();"
          ],
          "answer": 0,
          "explanation": "نفس الشكل: Type name = new Type();"
        },
        {
          "id": "B73",
          "number": 73,
          "question": "What is the difference between a class and an object?",
          "options": [
            "A class is a blueprint, an object is an instance of a class",
            "They are the same thing",
            "A class is used only in static methods",
            "An object can only be created from an interface"
          ],
          "answer": 0,
          "explanation": "الـ class هو المخطط، والـ object هو النسخة الحقيقية اللي تنصنع منه."
        },
        {
          "id": "B74",
          "number": 74,
          "question": "Can a method be both static and abstract?",
          "options": [
            "Yes, always",
            "No, this is not allowed",
            "Only if it's in an interface",
            "Only in Java 8+"
          ],
          "answer": 1,
          "explanation": "abstract تحتاج override، والـ static ما ينفع لها override، فالـ compiler يرفضهم مع بعض."
        },
        {
          "id": "B75",
          "number": 75,
          "question": "What is the output?",
          "code": "int[] arr = {1, 2, 3, 4, 5};\nfor(int i : arr) System.out.print(i);",
          "options": [
            "12345",
            "54321",
            "0 1 2 3 4",
            "Compilation error"
          ],
          "answer": 0,
          "explanation": "الـ for-each تمر على القيم بالترتيب، وprint ما تحط مسافات، فيطبع 12345 (تم التحقق بالتشغيل)."
        },
        {
          "id": "B76",
          "number": 76,
          "question": "Which of the following is a valid array declaration?",
          "options": [
            "int arr[] = new int[];",
            "int[] arr = new int[5];",
            "int arr[5] = new int[5];",
            "int arr = new int[5];"
          ],
          "answer": 1,
          "explanation": "A ما فيه حجم، وC ما ينفع نكتب الحجم في التعريف، وD المتغير مو array."
        },
        {
          "id": "B77",
          "number": 77,
          "question": "Can you change the size of an array after creation?",
          "options": [
            "Yes, by reassigning",
            "No, array size is fixed",
            "Yes, using the resize() method",
            "Only with ArrayList"
          ],
          "answer": 1,
          "explanation": "حجم الـ array ثابت. لو أعطينا المتغير array ثانية، فهي array جديدة مو القديمة نفسها كبرت."
        },
        {
          "id": "B78",
          "number": 78,
          "question": "What will be the output?",
          "code": "int[] arr = new int[5];\nSystem.out.println(arr[0]);",
          "options": [
            "0",
            "null",
            "Compilation error",
            "Runtime error"
          ],
          "answer": 0,
          "explanation": "عناصر array الـ int قيمتها الافتراضية 0 (تم التحقق بالتشغيل)."
        },
        {
          "id": "B79",
          "number": 79,
          "question": "Which of the following best describes the difference between an array and ArrayList?",
          "options": [
            "Arrays are fixed size, ArrayList is dynamic",
            "ArrayList can only store objects, arrays can store primitives",
            "Arrays are faster than ArrayList",
            "All of the above"
          ],
          "answer": 3,
          "explanation": "الثلاث جمل كلها صحيحة: الـ array حجمها ثابت والـ ArrayList يتغير، والـ ArrayList يخزن objects بس (مثل Integer)، والـ array عادةً أسرع."
        },
        {
          "id": "B80",
          "number": 80,
          "question": "Can you create an array of interfaces?",
          "options": [
            "No, interfaces cannot be used as array types",
            "Yes, to hold references to implementing classes",
            "Only for abstract interfaces",
            "Only in Java 8+"
          ],
          "answer": 1,
          "explanation": "مثل Shape[] shapes = {new Circle(), new Square()}; وكل عنصر object من class ينفذ الـ interface."
        },
        {
          "id": "B81",
          "number": 81,
          "question": "What will be the output?",
          "code": "int[][] arr = {{1, 2}, {3, 4}};\nSystem.out.println(arr[0][1]);",
          "options": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": 1,
          "explanation": "arr[0] هو الصف الأول {1, 2}، والعنصر [1] منه هو 2 (تم التحقق بالتشغيل)."
        },
        {
          "id": "B82",
          "number": 82,
          "question": "Which method is used to get the length of an array?",
          "options": [
            "arr.length()",
            "arr.size()",
            "arr.length",
            "arr.getLength()"
          ],
          "answer": 2,
          "explanation": "مع الـ array نكتب length بدون أقواس لأنه حقل مو دالة. مع String نكتب length()، ومع ArrayList نكتب size()."
        },
        {
          "id": "B83",
          "number": 83,
          "question": "Can you store different types of objects in an Object array?",
          "options": [
            "No, all elements must be the same type",
            "Yes, because all objects inherit from Object",
            "Only if they implement the same interface",
            "Only primitive types"
          ],
          "answer": 1,
          "explanation": "كل الـ classes تورث من Object، فـ Object[] تقبل أي object."
        },
        {
          "id": "B84",
          "number": 84,
          "question": "What will be the output?",
          "code": "String[] arr = {\"A\", \"B\", \"C\"};\nfor(String s : arr) System.out.print(s);",
          "options": [
            "ABC",
            "A B C",
            "0 1 2",
            "Compilation error"
          ],
          "answer": 0,
          "explanation": "print ما تحط مسافات، فيطبع ABC (تم التحقق بالتشغيل)."
        },
        {
          "id": "B85",
          "number": 85,
          "question": "What is the purpose of a default constructor?",
          "options": [
            "To initialize object state with default values",
            "To prevent object creation",
            "To enforce inheritance",
            "To create static variables"
          ],
          "answer": 0,
          "explanation": "يعطي الـ object قيم افتراضية."
        },
        {
          "id": "B86",
          "number": 86,
          "question": "Which of the following is true about method overloading?",
          "options": [
            "Methods must have the same number of parameters",
            "Methods must have different parameter types or counts",
            "Methods must be in different classes",
            "Methods must have the same return type"
          ],
          "answer": 1,
          "explanation": "الـ overloading يعني نفس الاسم ومدخلات مختلفة (العدد أو النوع أو الترتيب). نوع الإرجاع لحاله ما يكفي."
        },
        {
          "id": "B87",
          "number": 87,
          "question": "Can a subclass override a private method of the parent class?",
          "options": [
            "Yes, always",
            "No, because it's not visible in the subclass",
            "Only if it's declared as protected",
            "Only in the same package"
          ],
          "answer": 1,
          "explanation": "الـ private ما يشوفها الابن، فلو كتب دالة بنفس الاسم تعتبر دالة جديدة مو override."
        },
        {
          "id": "B88",
          "number": 88,
          "question": "What is the purpose of inheritance?",
          "options": [
            "To create multiple instances of a class",
            "To promote code reuse and create a hierarchy",
            "To prevent method overriding",
            "To make classes abstract"
          ],
          "answer": 1,
          "explanation": "الوراثة هدفها إعادة استخدام الكود وبناء تسلسل بين الـ classes."
        },
        {
          "id": "B89",
          "number": 89,
          "question": "Which keyword indicates that a method will be overridden?",
          "options": [
            "abstract",
            "final",
            "static",
            "@Override"
          ],
          "answer": 3,
          "explanation": "@Override تبين إن الدالة تعيد كتابة دالة من الأب، وهي تقنياً annotation مو keyword."
        },
        {
          "id": "B90",
          "number": 90,
          "question": "What is an interface used for?",
          "options": [
            "To provide a complete implementation of a class",
            "To define a contract that implementing classes must follow",
            "To create instance variables",
            "To prevent inheritance"
          ],
          "answer": 1,
          "explanation": "الـ interface عقد يحدد الدوال اللي لازم الـ class ينفذها."
        },
        {
          "id": "B91",
          "number": 91,
          "question": "What is the difference between HAS-A and IS-A relationships?",
          "options": [
            "HAS-A is composition, IS-A is inheritance",
            "IS-A is composition, HAS-A is inheritance",
            "They are the same relationship",
            "HAS-A is only used for static variables"
          ],
          "answer": 0,
          "explanation": "Car HAS-A Engine هذي composition، وDog IS-A Animal هذي inheritance."
        },
        {
          "id": "B92",
          "number": 92,
          "question": "Can an abstract class have concrete methods?",
          "options": [
            "No, all methods must be abstract",
            "Yes, it can have both abstract and concrete methods",
            "Only static concrete methods",
            "Only if it has no abstract methods"
          ],
          "answer": 1,
          "explanation": "يقدر يجمع الاثنين: دوال abstract ودوال عادية."
        },
        {
          "id": "B93",
          "number": 93,
          "question": "What is the purpose of the final keyword on a method?",
          "options": [
            "To make the method abstract",
            "To prevent the method from being overridden",
            "To make the method static",
            "To improve performance"
          ],
          "answer": 1,
          "explanation": "final method ما ينفع الابن يعيد كتابتها."
        },
        {
          "id": "B94",
          "number": 94,
          "question": "Which of the following describes polymorphism?",
          "options": [
            "The ability to create multiple classes with the same name",
            "The ability of an object to take multiple forms",
            "The ability to inherit from multiple classes",
            "The ability to create abstract classes"
          ],
          "answer": 1,
          "explanation": "Poly تعني متعدد وmorph تعني شكل، يعني نفس الاستدعاء يتصرف بأكثر من شكل."
        },
        {
          "id": "B95",
          "number": 95,
          "question": "What is method overriding?",
          "options": [
            "Providing a different implementation of a method in a subclass",
            "Having multiple methods with the same name in the same class",
            "Hiding a method from a parent class",
            "Creating a new method in the parent class"
          ],
          "answer": 0,
          "explanation": "الابن يعيد كتابة دالة الأب بنفس الـ signature. أما B فهو تعريف الـ overloading."
        },
        {
          "id": "B96",
          "number": 96,
          "question": "Which access modifier provides the most freedom?",
          "options": [
            "private",
            "protected",
            "public",
            "default"
          ],
          "answer": 2,
          "explanation": "public ينشاف من أي مكان."
        },
        {
          "id": "B97",
          "number": 97,
          "question": "What is the purpose of the final keyword on a class?",
          "options": [
            "To make the class abstract",
            "To prevent the class from being extended",
            "To require implementation of all methods",
            "To create static variables"
          ],
          "answer": 1,
          "explanation": "final class ما أحد يقدر يورث منه."
        },
        {
          "id": "B98",
          "number": 98,
          "question": "Can you instantiate an interface?",
          "options": [
            "Yes, like any other class",
            "No, interfaces are not instantiable",
            "Only with anonymous classes",
            "Only with abstract classes"
          ],
          "answer": 1,
          "explanation": "ما ينفع new Interface(). حتى الـ anonymous class هو class جديد ينفذ الـ interface، مو الـ interface نفسه."
        },
        {
          "id": "B99",
          "number": 99,
          "question": "What is the difference between a class variable and an instance variable?",
          "options": [
            "Class variables are shared among all instances, instance variables are unique to each object",
            "Instance variables are shared among all classes",
            "They are the same thing",
            "Class variables cannot be accessed from instance methods"
          ],
          "answer": 0,
          "explanation": "الـ class variable هو الـ static، نسخة وحدة للكل. والـ instance variable لكل object نسخته."
        },
        {
          "id": "B100",
          "number": 100,
          "question": "Which of the following is a characteristic of polymorphism?",
          "options": [
            "Multiple methods in the same class with different names",
            "A single interface being used for different data types",
            "Creating multiple classes with the same name",
            "Preventing inheritance between classes"
          ],
          "answer": 1,
          "explanation": "واجهة وحدة تتعامل مع أنواع مختلفة، مثل Animal a تقدر تكون Dog أو Cat."
        }
      ]
    },
    {
      "id": "C",
      "title": "المجموعة الثالثة: Abstract و Polymorphism و Encapsulation و Wrappers",
      "questions": [
        {
          "id": "C1",
          "number": 1,
          "question": "Which of the following is a correct way to create an object in Java?",
          "options": [
            "ClassName obj = ClassName();",
            "obj = new ClassName;",
            "ClassName obj = new ClassName();",
            "new obj = ClassName();"
          ],
          "answer": 2,
          "explanation": "الشكل الصحيح: Type name = new Type();"
        },
        {
          "id": "C2",
          "number": 2,
          "question": "Which statement about Java inheritance is FALSE?",
          "options": [
            "A class can extend only one superclass (single inheritance)",
            "All classes implicitly inherit from the Object class",
            "Private members of a superclass are directly accessible in a subclass",
            "A subclass can be a superclass for another class"
          ],
          "answer": 2,
          "explanation": "أعضاء الأب الـ private ما يقدر الابن يوصل لها مباشرة، يوصل لها عن طريق getters أو setters. وباقي الجمل صحيحة."
        },
        {
          "id": "C3",
          "number": 3,
          "question": "Which keyword is used to declare an abstract class?",
          "options": [
            "virtual",
            "interface",
            "final",
            "abstract"
          ],
          "answer": 3,
          "explanation": "abstract class Shape { }"
        },
        {
          "id": "C4",
          "number": 4,
          "question": "When should you use an abstract class instead of an interface?",
          "options": [
            "When all methods are abstract",
            "When multiple inheritance is required",
            "When some methods have implementations",
            "When no methods are needed"
          ],
          "answer": 2,
          "explanation": "إذا تبي تشارك كود جاهز (دوال لها جسم) أو حقول بين classes بينهم علاقة، استخدم abstract class. أما الوراثة المتعددة فتحتاج interface."
        },
        {
          "id": "C5",
          "number": 5,
          "question": "In the Abstract Number class case study, why is Number declared abstract?",
          "options": [
            "It contains only static methods",
            "It defines common methods for numeric types",
            "It cannot be extended",
            "It stores primitive data types"
          ],
          "answer": 1,
          "explanation": "Number هو الأب لـ Integer و Double وغيرهم، ويعرف دوال مشتركة مثل intValue() و doubleValue()، وكل class ينفذها بطريقته."
        },
        {
          "id": "C6",
          "number": 6,
          "question": "Which class provides a concrete implementation of the Calendar class?",
          "options": [
            "Date",
            "TimeZone",
            "GregorianCalendar",
            "Locale"
          ],
          "answer": 2,
          "explanation": "Calendar عبارة عن abstract class، وGregorianCalendar هو الـ class العادي اللي ينفذه."
        },
        {
          "id": "C7",
          "number": 7,
          "question": "What happens if a subclass does not implement all abstract methods of its abstract superclass?",
          "options": [
            "The program runs normally",
            "The subclass must also be declared abstract",
            "The compiler ignores missing methods",
            "The JVM throws a runtime exception"
          ],
          "answer": 1,
          "explanation": "إذا ما نفذ كل الدوال لازم يكون هو بعد abstract، وإلا يطلع خطأ ترجمة."
        },
        {
          "id": "C8",
          "number": 8,
          "question": "Which of the following statements is TRUE about abstract classes and interfaces in Java?",
          "options": [
            "Interfaces can have constructors, while abstract doesn't",
            "Abstract classes cannot have instance variables",
            "Abstract classes can have both abstract and concrete methods",
            "Interfaces can extend classes"
          ],
          "answer": 2,
          "explanation": "A عكس الصح، لأن الـ abstract class عنده constructors والـ interface لا. وB غلط، وD غلط لأن الـ interface يورث من interface بس."
        },
        {
          "id": "C9",
          "number": 9,
          "question": "If a class contains at least one abstract method, what must be true about the class?",
          "options": [
            "It must be declared as final",
            "It must be declared as abstract",
            "It cannot have any non-abstract methods",
            "It must implement an interface"
          ],
          "answer": 1,
          "explanation": "أي class فيه abstract method لازم ينكتب abstract."
        },
        {
          "id": "C10",
          "number": 10,
          "question": "When should you choose an interface over an abstract class in Java?",
          "options": [
            "When classes are closely related and need to share common code",
            "When you need constructors and instance variables",
            "When you want to create a single, standalone class",
            "When different types of objects share the same capability or feature"
          ],
          "answer": 3,
          "explanation": "الـ interface يوصف قدرة مشتركة بين أنواع ما بينها علاقة، مثل Flyable لـ Bird و Airplane. أما A و B فهي أسباب نختار فيها abstract class."
        },
        {
          "id": "C11",
          "number": 11,
          "question": "What is the primary characteristic of polymorphism in object-oriented programming?",
          "options": [
            "It allows a class to implement multiple interfaces.",
            "It enables methods to perform different tasks based on the object that invokes them.",
            "It restricts access to certain class members.",
            "It allows a subclass to inherit fields from a superclass."
          ],
          "answer": 1,
          "explanation": "نفس الاستدعاء يتصرف بشكل مختلف حسب نوع الـ object."
        },
        {
          "id": "C12",
          "number": 12,
          "question": "Which of the following best describes method overloading?",
          "options": [
            "Having multiple methods with the same name but different return types.",
            "Having multiple methods with the same name and same parameters but in different classes.",
            "Having multiple methods with the same name but different parameter lists.",
            "Redefining a method in a subclass with the same signature."
          ],
          "answer": 2,
          "explanation": "الـ overloading نفس الاسم ومدخلات مختلفة. أما D فهو تعريف الـ overriding."
        },
        {
          "id": "C13",
          "number": 13,
          "question": "Which of the following statements is true regarding polymorphism in Java?",
          "options": [
            "Method overloading is an example of runtime polymorphism.",
            "Method overriding is determined at compile time.",
            "Method overloading is determined at compile time, while method overriding is determined at runtime.",
            "Both method overloading and overriding are determined at runtime."
          ],
          "answer": 2,
          "explanation": "الـ overloading يتحدد وقت الترجمة (static)، والـ overriding يتحدد وقت التشغيل (dynamic)."
        },
        {
          "id": "C14",
          "number": 14,
          "question": "In Java, method overriding allows a subclass to provide a specific implementation of a method already defined in its superclass. Which of the following must be true for method overriding?",
          "options": [
            "The method in the subclass must have a different name.",
            "The method in the subclass must have the same signature as the method in the superclass.",
            "The method in the subclass must have a different number of parameters.",
            "The method in the subclass must be declared as private."
          ],
          "answer": 1,
          "explanation": "لازم يكون نفس الاسم ونفس المدخلات بالضبط."
        },
        {
          "id": "C15",
          "number": 15,
          "question": "Which statement about upcasting is TRUE?",
          "options": [
            "Upcasting converts a subclass reference to a superclass reference",
            "Upcasting converts a superclass reference to a subclass reference",
            "Upcasting allows access to subclass-specific methods",
            "Upcasting is not allowed in Java"
          ],
          "answer": 0,
          "explanation": "Animal a = new Dog(); هذا upcasting، يعني من الابن للأب ويصير تلقائياً."
        },
        {
          "id": "C16",
          "number": 16,
          "question": "Which of the following statements correctly describes upcasting and downcasting?",
          "options": [
            "Upcasting is implicit; downcasting requires explicit casting",
            "Upcasting is slower than downcasting",
            "Downcasting is safe and implicit",
            "Upcasting prevents access to superclass methods"
          ],
          "answer": 0,
          "explanation": "الـ upcasting يصير تلقائياً، والـ downcasting لازم نكتب له (Dog) a، وممكن يطلع ClassCastException لو النوع غلط."
        },
        {
          "id": "C17",
          "number": 17,
          "question": "What will be the output from the equals() Method?",
          "code": "String s1 = new String(\"Java\");\nString s2 = new String(\"Java\");\nSystem.out.println(s1.equals(s2));",
          "options": [
            "Not Equal",
            "s1 equal of s2",
            "Compilation error",
            "Runtime error"
          ],
          "answer": 1,
          "explanation": "equals تقارن المحتوى وهو نفسه، فالنتيجة true، وB هو الخيار اللي يعني إنهم متساويين.",
          "note": "تنبيه: المخرج الفعلي هو الكلمة true (تم التحقق بالتشغيل). ما فيه خيار مكتوب فيه true، فـ B أقرب خيار للمعنى."
        },
        {
          "id": "C18",
          "number": 18,
          "question": "What is the default implementation of the equals() method in the Object class?",
          "options": [
            "Compares the field values of two objects",
            "Always returns true",
            "Compares the class names of two objects",
            "Compares the memory addresses of two objects"
          ],
          "answer": 3,
          "explanation": "equals الأصلية في Object تقارن العناوين مثل ==."
        },
        {
          "id": "C19",
          "number": 19,
          "question": "Which of the following is the correct syntax for implementing inheritance in Java?",
          "options": [
            "class Child extends Parent { }",
            "class Child inherits Parent { }",
            "class Child implements Parent { }",
            "class Child derives Parent { }"
          ],
          "answer": 0,
          "explanation": "الوراثة بين classes تكون بـ extends."
        },
        {
          "id": "C20",
          "number": 20,
          "question": "Which of the following statements about superclasses and subclasses is true?",
          "options": [
            "A superclass can inherit from multiple subclasses",
            "A subclass can inherit from multiple superclasses directly",
            "A subclass inherits all public and protected members of its superclass",
            "A superclass cannot have any fields or methods"
          ],
          "answer": 2,
          "explanation": "الابن يورث الأعضاء الـ public والـ protected، وما يوصل للـ private مباشرة. وما فيه وراثة متعددة بين الـ classes."
        },
        {
          "id": "C21",
          "number": 21,
          "question": "What is the primary purpose of the super keyword?",
          "options": [
            "To call the subclass constructor",
            "To refer to the superclass's constructors, methods, or variables",
            "To create a new superclass object",
            "To prevent inheritance"
          ],
          "answer": 1,
          "explanation": "super() للـ constructor، و super.method() و super.field للدوال والحقول."
        },
        {
          "id": "C22",
          "number": 22,
          "question": "Suppose you have a class BankAccount with a private field balance. If you only provide a public getter for balance but no setter, what does this enforce?",
          "options": [
            "The balance can only be read, not modified from outside the class, but internal methods can still update it.",
            "The balance becomes completely immutable and cannot be changed even inside the class.",
            "The balance can be modified directly using the field name from outside the class.",
            "It breaks encapsulation because the balance is not fully hidden."
          ],
          "answer": 0,
          "explanation": "نقرأ الرصيد من برا بس، ودوال الـ class نفسه مثل deposit تقدر تعدله."
        },
        {
          "id": "C23",
          "number": 23,
          "question": "In a Vehicle class, marking the engineSerialNumber as private final and only setting it in the constructor suggests:",
          "options": [
            "The field can be changed later using a setter.",
            "The field is a constant that is assigned once and cannot be changed, ensuring immutability for that attribute.",
            "The field does not need encapsulation.",
            "The field must be accessed directly from subclasses."
          ],
          "answer": 1,
          "explanation": "final معناها تنعطى قيمة مرة وحدة وما تتغير."
        },
        {
          "id": "C24",
          "number": 24,
          "question": "Data Validation in setter methods is crucial because:",
          "options": [
            "It makes the code longer and more complex.",
            "It ensures the object always remains in a valid state by rejecting invalid data.",
            "It helps in hiding the implementation details.",
            "It is required for the Java compiler to execute the program."
          ],
          "answer": 1,
          "explanation": "الـ setter يرفض القيم الغلط، مثل عمر سالب، فيبقى الـ object دايماً صحيح."
        },
        {
          "id": "C25",
          "number": 25,
          "question": "Which Java keyword is commonly used to implement encapsulation by restricting direct access to a class's fields?",
          "options": [
            "protected",
            "private",
            "public",
            "final"
          ],
          "answer": 1,
          "explanation": "private."
        },
        {
          "id": "C26",
          "number": 26,
          "question": "What is the primary purpose of this keyword in Java?",
          "options": [
            "To create a new instance of the class",
            "To refer to the current object instance within instance methods or constructors",
            "To access static methods of the class",
            "To improve the performance of the program"
          ],
          "answer": 1,
          "explanation": "this = الـ object الحالي."
        },
        {
          "id": "C27",
          "number": 27,
          "question": "What is the scope of a local variable declared inside a method in Java?",
          "options": [
            "Throughout the entire class",
            "Only within the block (pair of curly braces) where it is declared",
            "Throughout the entire package",
            "Throughout the entire program"
          ],
          "answer": 1,
          "explanation": "المتغير المحلي يعيش داخل أقواسه { } بس."
        },
        {
          "id": "C28",
          "number": 28,
          "question": "Which approach best demonstrates \"thinking in objects\"?",
          "options": [
            "Writing all code in the main method",
            "Breaking the program into classes and objects based on real-world entities",
            "Using only primitive data types",
            "Ignoring class design"
          ],
          "answer": 1,
          "explanation": "نقسم البرنامج لـ classes و objects تمثل أشياء من الواقع."
        },
        {
          "id": "C29",
          "number": 29,
          "question": "If class Course contains a reference to a list of Student objects, what type of relationship does this represent?",
          "options": [
            "Inheritance",
            "Association",
            "Aggregation/Composition",
            "Polymorphism"
          ],
          "answer": 2,
          "explanation": "Course عنده Students، وهذي علاقة HAS-A، يعني Aggregation لأن الطالب يبقى موجود حتى لو انحذفت المادة."
        },
        {
          "id": "C30",
          "number": 30,
          "question": "Which wrapper class should you use to store a very large integer exceeding long capacity in Java?",
          "options": [
            "Integer",
            "Long",
            "BigInteger",
            "Double"
          ],
          "answer": 2,
          "explanation": "BigInteger يخزن عدد صحيح بأي حجم. أما Double فيقرب الرقم ويضيع الدقة.",
          "note": "ملاحظة: BigInteger تقنياً مو wrapper class (هو class من java.math)، لكنه الجواب الصحيح الوحيد هنا."
        },
        {
          "id": "C31",
          "number": 31,
          "question": "When designing a Library system, which principle suggests that Book and Magazine should extend a common LibraryItem class?",
          "options": [
            "Encapsulation",
            "Abstraction",
            "Polymorphism",
            "Inheritance"
          ],
          "answer": 3,
          "explanation": "extends = Inheritance، لأن Book IS-A LibraryItem."
        },
        {
          "id": "C32",
          "number": 32,
          "question": "What is the main advantage of using ArrayList<String> over String[]?",
          "options": [
            "ArrayList has better performance for all operations",
            "ArrayList can only store objects, not primitives",
            "ArrayList can dynamically resize, while arrays have fixed size",
            "ArrayList uses less memory than arrays"
          ],
          "answer": 2,
          "explanation": "الـ ArrayList يكبر ويصغر. وB صحيحة كمعلومة لكنها مو ميزة، بل قيد."
        },
        {
          "id": "C33",
          "number": 33,
          "question": "Which of the following is a correct way to design a Course class with encapsulation?",
          "options": [
            "public class Course { public String name; }",
            "public class Course { private String name; public String getName() { return name; } }",
            "public class Course { String name; }",
            "public class Course { private String name; }"
          ],
          "answer": 1,
          "explanation": "حقل private ومعه getter من نوع public."
        },
        {
          "id": "C34",
          "number": 34,
          "question": "Which of the following best describes \"Abstraction\" in Object-Oriented Programming?",
          "options": [
            "Hiding the implementation details and showing only essential features",
            "Writing code without comments",
            "Making all methods and variables public",
            "Creating multiple classes with the same name"
          ],
          "answer": 0,
          "explanation": "نهتم بوش يسوي الشي، مو كيف يسويه."
        },
        {
          "id": "C35",
          "number": 35,
          "question": "Which of the following is NOT a fundamental principle of Object-Oriented Programming?",
          "options": [
            "Encapsulation",
            "Polymorphism",
            "Recursion",
            "Inheritance"
          ],
          "answer": 2,
          "explanation": "Recursion مو من مبادئ OOP الأربعة."
        },
        {
          "id": "C36",
          "number": 36,
          "question": "What is a fundamental difference between primitive and non-primitive data types in Java?",
          "options": [
            "Primitive types start with an uppercase letter",
            "Non-primitive types have associated methods and can be null, while primitive types do not.",
            "Primitive types are stored in the heap",
            "Non-primitive types are always immutable"
          ],
          "answer": 1,
          "explanation": "الـ non-primitive، مثل String، عنده methods ويقدر يكون null. والـ primitive لا. وA عكس الصح، لأن الـ primitive يبدأ بحرف صغير."
        },
        {
          "id": "C37",
          "number": 37,
          "question": "Which of the following statements is TRUE about primitive and non-primitive data types in Java?",
          "options": [
            "Primitive data types can call methods",
            "Non-primitive data types store actual values",
            "Primitive data types store simple values directly",
            "Non-primitive data types cannot be null"
          ],
          "answer": 2,
          "explanation": "الـ primitive يخزن القيمة مباشرة. والـ non-primitive يخزن عنوان."
        },
        {
          "id": "C38",
          "number": 38,
          "question": "Which method is not defined in the java.lang.Number abstract class?",
          "options": [
            "intValue()",
            "doubleValue()",
            "floatValue()",
            "compareTo()"
          ],
          "answer": 3,
          "explanation": "compareTo تجي من interface اسمه Comparable، اللي تنفذه Integer و Double، مو من Number."
        },
        {
          "id": "C39",
          "number": 39,
          "question": "Which of the following is a necessary characteristic of a correctly implemented immutable class in Java?",
          "options": [
            "All fields must be declared private and static.",
            "The class must contain at least one final instance field.",
            "The class must be declared final to prevent subclassing.",
            "Methods that modify state must return this."
          ],
          "answer": 2,
          "explanation": "نخلي الـ class نفسه final عشان ما يجي ابن يضيف حالة تتغير. A غلط لأن الحقول private final مو static، وD عكس الفكرة."
        },
        {
          "id": "C40",
          "number": 40,
          "question": "Which of the following is the main purpose of encapsulation in Java?",
          "options": [
            "To make all class variables public",
            "To restrict direct access to class data and provide controlled access",
            "To increase program runtime",
            "To allow multiple inheritance"
          ],
          "answer": 1,
          "explanation": "نمنع الوصول المباشر للبيانات، ونخلي الوصول لها عن طريق دوال نتحكم فيها."
        },
        {
          "id": "C41",
          "number": 41,
          "question": "What will be the output of the following code?",
          "code": "import java.util.Calendar;\nimport java.util.GregorianCalendar;\npublic class Test {\n    public static void main(String[] args) {\n        Calendar cal = new GregorianCalendar();\n        System.out.println(cal instanceof Calendar);\n    }\n}",
          "options": [
            "false",
            "true",
            "Compilation error",
            "Runtime error"
          ],
          "answer": 1,
          "explanation": "GregorianCalendar ابن لـ Calendar، فالـ object من نوع Calendar والنتيجة true (تم التحقق بالتشغيل)."
        },
        {
          "id": "C42",
          "number": 42,
          "question": "What is the output of the following Java code?",
          "code": "class Calculator {\n    public int calculate(int a, int b) { return a + b; }\n    public double calculate(double a, double b) { return a * b; }\n}\nclass ScientificCalculator extends Calculator {\n    @Override\n    public int calculate(int a, int b) { return a - b; }\n    public int calculate(int a, int b, int c) { return a + b + c; }\n}\npublic class TestOverloading {\n    public static void main(String[] args) {\n        ScientificCalculator calc = new ScientificCalculator();\n        System.out.println(calc.calculate(10, 5));\n        System.out.println(calc.calculate(10.0, 5.0));\n        System.out.println(calc.calculate(10, 5, 2));\n    }\n}",
          "options": [
            "15 50.0 17",
            "5 50.0 17",
            "5 50.0 7",
            "Compilation error"
          ],
          "answer": 1,
          "explanation": "(10, 5): الابن أعاد كتابة دالة int فيطلع 10 − 5 = 5. (10.0, 5.0): الابن ورث دالة double من الأب فيطلع 10 × 5 = 50.0. (10, 5, 2): دالة جديدة بثلاث مدخلات فيطلع 17 (تم التحقق بالتشغيل، وكل رقم في سطر)."
        },
        {
          "id": "C43",
          "number": 43,
          "question": "What will be the output of the following code?",
          "code": "interface Shape { void draw(); }\nclass Circle implements Shape {\n    public void draw() { System.out.println(\"Circle\"); }\n}\npublic class Test {\n    public static void main(String[] args) { Shape s = new Circle(); s.draw(); }\n}",
          "options": [
            "Circle",
            "Shape",
            "Compilation error",
            "Runtime error"
          ],
          "answer": 0,
          "explanation": "الـ object الحقيقي Circle، فيشغل draw حقه (تم التحقق بالتشغيل)."
        },
        {
          "id": "C44",
          "number": 44,
          "question": "What does this program demonstrate?",
          "code": "interface A { void show(); }\ninterface B { void show(); }\nclass Test implements A, B {\n    public void show() { System.out.println(\"Hello\"); }\n    public static void main(String[] args) { new Test().show(); }\n}",
          "options": [
            "Multiple inheritance is not allowed",
            "Interface conflict error",
            "Multiple inheritance using interfaces",
            "Runtime polymorphism"
          ],
          "answer": 2,
          "explanation": "الـ class ينفذ interfaceين، وهذي طريقة Java للوراثة المتعددة. وما فيه تعارض لأن الدالتين abstract ونفذناهم مرة وحدة، فيطبع Hello (تم التحقق بالتشغيل)."
        },
        {
          "id": "C45",
          "number": 45,
          "question": "Choose the correct output from the following:",
          "code": "class Animal { void sound() { System.out.print(\"Cows sound\"); } }\nclass Dog extends Animal { void sound() { System.out.print(\"Dog Sound\"); } }\npublic class Main {\n    public static void main(String[] args) { Animal a = new Dog(); a.sound(); }\n}",
          "options": [
            "Cows sound",
            "Runtime error",
            "Compilation error",
            "Dog Sound"
          ],
          "answer": 3,
          "explanation": "الـ object الحقيقي Dog، والـ overriding يتحدد وقت التشغيل، فيطبع Dog Sound (تم التحقق بالتشغيل)."
        },
        {
          "id": "C46",
          "number": 46,
          "question": "Choose the correct answer (output):",
          "code": "class Calculator {\n    int add(int a, int b) { return a + b; }\n    double add(double a, double b) { return a + b; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Calculator c = new Calculator();\n        System.out.print(c.add(5, 10.5));\n    }\n}",
          "options": [
            "15",
            "15.0",
            "Compilation error",
            "15.5"
          ],
          "answer": 3,
          "explanation": "المدخلات 5 (int) و 10.5 (double). دالة int ما تقبل double، فـ Java تختار دالة double وتحول 5 إلى 5.0. النتيجة 5.0 + 10.5 = 15.5 (تم التحقق بالتشغيل)."
        },
        {
          "id": "C47",
          "number": 47,
          "question": "Choose the correct output:",
          "code": "class Parent { void show() { System.out.print(\"Mom\"); } }\nclass Child extends Parent { void show() { System.out.print(\"Baby\"); } }\npublic class Main {\n    public static void main(String[] args) { Parent p = new Child(); p.show(); }\n}",
          "options": [
            "Mom",
            "Baby",
            "Compilation error",
            "Both Parent and Child"
          ],
          "answer": 1,
          "explanation": "الـ object الحقيقي Child، فيطبع Baby (تم التحقق بالتشغيل)."
        },
        {
          "id": "C48",
          "number": 48,
          "question": "Using the concept of Overloading vs. Overriding, choose the correct output:",
          "code": "class Vehicle { void run() { System.out.print(\"Vehicle can run\"); } }\nclass Car extends Vehicle { void run(String msg) { System.out.print(\"Car can run \" + msg); } }\npublic class Main {\n    public static void main(String[] args) { Car c = new Car(); c.run(); }\n}",
          "options": [
            "Vehicle can run",
            "Car can run",
            "Compilation error",
            "Runtime error"
          ],
          "answer": 0,
          "explanation": "run(String) في Car هي overloading مو overriding لأن مدخلاتها مختلفة. وc.run() بدون مدخلات تشغل النسخة اللي ورثها من Vehicle (تم التحقق بالتشغيل)."
        },
        {
          "id": "C49",
          "number": 49,
          "question": "What is the output of the following Java code?",
          "code": "class Vehicle {}\nclass Car extends Vehicle {}\npublic class Test {\n    public static void main(String[] args) { Car c = new Car(); System.out.println(c instanceof Vehicle); }\n}",
          "options": [
            "true",
            "false",
            "Compile-time error",
            "Runtime error"
          ],
          "answer": 0,
          "explanation": "Car IS-A Vehicle، فالنتيجة true (تم التحقق بالتشغيل)."
        },
        {
          "id": "C50",
          "number": 50,
          "question": "Given the code below, what is the output?",
          "code": "class Parent { void display() { System.out.print(\"Parent \"); } }\nclass Child extends Parent {\n    void display() {\n        super.display();\n        System.out.print(\"Child\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) { Child c = new Child(); c.display(); }\n}",
          "options": [
            "Parent Child",
            "Child Parent",
            "Parent",
            "Child"
          ],
          "answer": 0,
          "explanation": "super.display() تطبع \"Parent \" أول، وبعدها \"Child\" (تم التحقق بالتشغيل)."
        },
        {
          "id": "C51",
          "number": 51,
          "question": "What will be the output?",
          "code": "int a = 10;\nInteger b = a;\na = 20;\nSystem.out.println(b);",
          "options": [
            "10",
            "20",
            "Compilation error",
            "Runtime error"
          ],
          "answer": 0,
          "explanation": "Integer b = a ينسخ القيمة 10 (autoboxing). وتغيير a بعدها ما يأثر على b، لأن الـ Integer نوعه immutable وa نوعه primitive منفصل (تم التحقق بالتشغيل)."
        },
        {
          "id": "C52",
          "number": 52,
          "question": "In the Student class, which method correctly sets the student's age?",
          "code": "class Student {\n    private int age;\n    public void setAge(int age) { this.age = age; }\n}",
          "options": [
            "student.setAge(20);",
            "student.age = 20;",
            "Student.setAge(20);",
            "setAge(student, 20);"
          ],
          "answer": 0,
          "explanation": "نستدعي الـ setter من الـ object. B ممنوع لأن age نوعه private، وC غلط لأن setAge مو static، وD شكلها غلط."
        },
        {
          "id": "C53",
          "number": 53,
          "question": "Using the Encapsulation concept: Consider the Teacher class. Which statement is valid?",
          "code": "class Teacher {\n    private String name;\n    private double salary;\n    public String getName() { return name; }\n    public void setName(String name) { this.name = name; }\n}",
          "options": [
            "teacher.name = \"John\";",
            "setName(teacher, \"John\");",
            "Teacher.name = \"John\";",
            "teacher.setName(\"John\");"
          ],
          "answer": 3,
          "explanation": "name نوعه private، فلازم نغيره عن طريق setName من الـ object."
        },
        {
          "id": "C54",
          "number": 54,
          "question": "Which of the following follows proper encapsulation for Vehicle's fuel level?",
          "code": "class Vehicle {\n    private int fuel;\n    public int getFuel() { return fuel; }\n    public void setFuel(int fuel) {\n        if(fuel >= 0 && fuel <= 100)\n            this.fuel = fuel;\n    }\n}",
          "options": [
            "vehicle.fuel = 50;",
            "vehicle.setFuel(120);",
            "vehicle.setFuel(80);",
            "Vehicle.fuel = 50;"
          ],
          "answer": 2,
          "explanation": "setter بقيمة داخل المدى من 0 إلى 100. أما 120 فالـ setter يرفضها."
        },
        {
          "id": "C55",
          "number": 55,
          "question": "Complete the Student class setter to allow only ages between 5 and 25:",
          "code": "class Student {\n    private int age;\n    public void setAge(int age) {\n        // Fill in the condition\n    }\n}",
          "options": [
            "if(age >= 5 && age <= 25) this.age = age;",
            "this.age = age;",
            "if(age < 5 || age > 25) this.age = age;",
            "if(age > 25) this.age = age;"
          ],
          "answer": 0,
          "explanation": "الشرط لازم يكون العمر 5 أو أكثر و25 أو أقل، مع بعض (&&). وC عكس المطلوب، لأنه يقبل القيم الغلط بس."
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined') { module.exports = QUESTION_BANK; }
