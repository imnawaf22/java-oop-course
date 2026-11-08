/* =========================================================
   الدرس 4: Array of Objects و Immutable و Scope و this
   (طريقة كتابة البيانات مشروحة في أول data/lesson1.js)
   ========================================================= */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
  id: 4,
  title: 'Array of Objects و Immutable و Scope و this',
  description: 'الفرق بين الأنواع البسيطة والـ objects، تخزين objects في مصفوفة، for-each، الـ objects الثابتة (Immutable)، نطاق المتغيرات، وكلمة this.',
  intro: 'هذا الدرس يشرح الفرق بين الأنواع البسيطة والـ objects، وكيف نخزن مجموعة objects في مصفوفة، ومعنى الـ object اللي ما يتغير، ووين ينشاف المتغير، وكلمة this. كل مثال من المحاضرة معه مثالين إضافيين.',

  summary: [
    '**Primitive** (`int` , `double` , `char` , `boolean` ...): يخزن القيمة مباشرة، حجمه ثابت، سريع، وما له methods.',
    '**Non-Primitive** (`String` , Arrays, classes): يخزن عنوان الـ object، وله methods.',
    '**Array of Objects:** مصفوفة كل خانة فيها عنوان object. لازم نصنع كل object بـ `new` لحاله.',
    '**for-each:** `for (Type x : array)` يمر على كل العناصر بدون عداد.',
    '**Immutable Object:** object ما تتغير بياناته بعد ما ينصنع (مثل `String`). الحقول `private final` وما فيه setters.',
    '**Scope:** المكان اللي ينشاف فيه المتغير: local، instance، static، block.',
    '`this`: يعني «الـ object الحالي». نستخدمه لما اسم الـ parameter نفس اسم المتغير، أو عشان نستدعي constructor ثاني.'
  ],

  sections: [
    {
      id: 's1',
      title: '1) Primitive مقابل Non-Primitive',
      blocks: [
        ['analogy', 'الـ primitive مثل فلوس في جيبك، والـ non-primitive مثل بطاقة بنك تأشر على حساب موجود بمكان ثاني.'],
        ['table', ['', 'Primitive', 'Non-Primitive (Reference)'], [
          ['أمثلة', '`int` , `double` , `char` , `boolean` , `byte` , `short` , `long` , `float`', '`String` , Arrays, Classes, Interfaces'],
          ['وش يخزن؟', 'القيمة نفسها', 'عنوان الـ object'],
          ['الحجم', 'ثابت', 'متغير'],
          ['عنده methods؟', '✘ لا', '✔ نعم']
        ]],
        ['lec', ''],
        ['code', String.raw`
int x = 10;                    // Primitive
double y = 20.5;
String name = "Ali";           // Non-Primitive (object من String)
int[] numbers = {1, 2, 3};     // Non-Primitive (array)
System.out.println("x = " + x);                    // x = 10
System.out.println("y = " + y);                    // y = 20.5
System.out.println("name = " + name);              // name = Ali
System.out.println("numbers[0] = " + numbers[0]);  // numbers[0] = 1`],
        ['ex', 1, ''],
        ['code', String.raw`
char grade = 'A';          // Primitive
boolean passed = true;     // Primitive
String course = "OOP";     // Non-Primitive
System.out.println(grade + " " + passed + " " + course);   // A true OOP`],
        ['ex', 2, 'String عنده methods و int لا'],
        ['code', String.raw`
String name = "Ali";
System.out.println(name.length());        // 3
System.out.println(name.toUpperCase());   // ALI
int x = 10;
// x.length();   ← ✘ خطأ: int cannot be dereferenced`]
      ]
    },
    {
      id: 's2',
      title: '2) Normal Array مقابل Array of Objects',
      blocks: [
        ['analogy', '`new Student[3]` مثل إنك جبت رف فيه 3 أماكن فاضية، لازم تحط في كل مكان طالب بـ `new Student(...)`.'],
        ['table', ['', 'Normal Array', 'Array of Objects'], [
          ['كل خانة فيها', 'قيمة مباشرة', 'عنوان object'],
          ['مثال', '`int[] nums = {1, 2, 3};`', '`Student[] list = new Student[3];`'],
          ['بعد الإنشاء', 'جاهزة', 'الخانات `null` لين نصنع كل object بـ `new`']
        ]],
        ['lec', 'Normal Array'],
        ['code', String.raw`
int[] nums = {1, 2, 3};
for (int i = 0; i < nums.length; i++) {
    System.out.println("nums[" + i + "] = " + nums[i]);
}
// nums[0] = 1
// nums[1] = 2
// nums[2] = 3`],
        ['ex', 1, 'نغير قيمة مباشرة'],
        ['code', String.raw`
int[] nums = {1, 2, 3};
nums[0] = 10;
for (int i = 0; i < nums.length; i++) System.out.print(nums[i] + " ");
// 10 2 3`],
        ['ex', 2, 'مجموع أسعار'],
        ['code', String.raw`
double[] prices = {10.5, 20.0, 4.5};
double total = 0;
for (int i = 0; i < prices.length; i++) total += prices[i];
System.out.println(total);   // 35.0`],
        ['lec', 'Array of Objects (Student)'],
        ['code', String.raw`
class Student {
    String name;
    int age;
    Student(String n, int a) { name = n; age = a; }
    void display() { System.out.println(name + " - " + age); }
}
// main:
Student[] students = new Student[3];       // 3 أماكن فاضية (null)
students[0] = new Student("Ali", 20);
students[1] = new Student("Sara", 22);
students[2] = new Student("Omar", 21);
for (Student s : students) {
    s.display();
}
// Ali - 20
// Sara - 22
// Omar - 21`],
        ['p', 'ومثله مثال Car في المحاضرة: `Car[] cars = new Car[3];` ثم Toyota و Honda و Ford، والـ for-each يطبع `c.model` لكل وحدة.'],
        ['ex', 1, 'مصفوفة كتب'],
        ['code', String.raw`
class Book {
    String title;
    double price;
    Book(String t, double p) { title = t; price = p; }
}
// main:
Book[] books = new Book[2];
books[0] = new Book("Java", 50);
books[1] = new Book("Python", 40);
for (Book b : books) {
    System.out.println(b.title + ": " + b.price);
}
// Java: 50.0
// Python: 40.0`],
        ['ex', 2, 'الغلطة المشهورة (نسينا new)'],
        ['code', String.raw`
Student[] list = new Student[2];
list[0] = new Student("Ali", 20);
list[0].display();   // Ali - 20
// list[1].display();   ✘ NullPointerException لأن list[1] لسا null`]
      ]
    },
    {
      id: 's3',
      title: '3) Enhanced For Loop (for-each)',
      blocks: [
        ['p', '**الشكل:** `for (Type element : array) { ... }` وتقرأها «لكل element في array».'],
        ['ul', [
          'ما تحتاج عداد `i`.',
          'يمر من أول عنصر لآخر عنصر لحاله.',
          'ممتاز للقراءة واستدعاء دوال كل object. لكن إذا تحتاج رقم الخانة استخدم `for` العادي.'
        ]],
        ['lec', ''],
        ['code', String.raw`
int[] marks = {80, 90, 100};
for (int m : marks) {
    System.out.println(m);
}
// 80
// 90
// 100`],
        ['ex', 1, 'مجموع الدرجات'],
        ['code', String.raw`
int[] marks = {80, 90, 100};
int total = 0;
for (int m : marks) total += m;
System.out.println("Total: " + total);   // Total: 270`],
        ['ex', 2, 'متوسط أعمار الطلاب'],
        ['code', String.raw`
int sum = 0;
for (Student s : students) sum += s.age;   // 20 + 22 + 21
System.out.println(sum / 3.0);             // 21.0`],
        ['rule', 'لأنها تخزن مجموعة objects من نفس النوع (طلاب فصل، سيارات معرض، موظفين شركة) ونقدر نمر عليهم بـ loop.', 'ليش Array of Objects؟']
      ]
    },
    {
      id: 's4',
      title: '4) Immutable Objects (الـ Objects الثابتة)',
      blocks: [
        ['p', 'الـ immutable object بياناته **ما تتغير أبداً** بعد ما ينصنع.'],
        ['analogy', 'مثل شهادة ميلاد مطبوعة، ما تقدر تعدل فيها، لو بغيت تغيير تطلع وحدة جديدة.'],
        ['p', '**شروطه:**'],
        ['ol', [
          'كل الحقول `private final`.',
          'ما فيه setters.',
          'الـ constructor هو اللي يعطي القيم.',
          '(والـ class نفسه غالباً `final`).'
        ]],
        ['p', '**فايدته:** أمان، وموثوقية، ومناسب للـ threads. مثال جاهز في Java: `String`.'],
        ['lec', ''],
        ['code', String.raw`
public final class ImmutablePerson {
    private final String name;
    private final int age;
    public ImmutablePerson(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public String getName() { return name; }
    public int getAge()     { return age; }
}
// main:
ImmutablePerson p = new ImmutablePerson("Ali", 30);
System.out.println(p.getName() + " - " + p.getAge());   // Ali - 30
// p.age = 35;   ← ✘ خطأ ترجمة`],
        ['ex', 1, '«التغيير» يرجع object جديد'],
        ['code', String.raw`
public final class Money {
    private final double amount;
    public Money(double amount) { this.amount = amount; }
    public double getAmount()   { return amount; }
    public Money add(double extra) {
        return new Money(amount + extra);   // ما نغير القديم
    }
}
// main:
Money m1 = new Money(100);
Money m2 = m1.add(50);
System.out.println(m1.getAmount() + " " + m2.getAmount());   // 100.0 150.0`],
        ['ex', 2, 'String نفسه immutable'],
        ['code', String.raw`
String s = "hello";
s.toUpperCase();            // يرجع String جديد وما خزناه
System.out.println(s);      // hello
s = s.toUpperCase();        // خزنا الجديد في s
System.out.println(s);      // HELLO`]
      ]
    },
    {
      id: 's5',
      title: '5) Scope of Variables (نطاق المتغيرات)',
      blocks: [
        ['p', 'الـ scope يعني: وين أقدر أستخدم المتغير؟ **القاعدة:** المتغير يعيش داخل الأقواس `{ }` اللي انعرف فيها.'],
        ['lec', ''],
        ['code', String.raw`
class ScopeExample {
    int instanceVar = 10;          // instance
    static int staticVar = 20;     // static
    void showScope() {
        int localVar = 5;          // local
        if (localVar > 0) {
            int blockVar = 7;      // block
            System.out.println(blockVar);   // 7
        }
        // blockVar ما ينشاف هنا
        System.out.println(localVar);       // 5
    }
}`],
        ['ex', 1, 'متغير الـ loop'],
        ['code', String.raw`
for (int i = 0; i < 3; i++) {
    System.out.println(i);    // 0 ثم 1 ثم 2
}
// System.out.println(i);   ← ✘ خطأ: i انتهى مع الـ loop`],
        ['table', ['النوع', 'وين ينعرف؟', 'وين ينشاف؟'], [
          ['Local', 'داخل method', 'داخل الـ method بس'],
          ['Instance', 'داخل الـ class (برا الدوال)', 'كل object عنده نسخة'],
          ['Static', 'داخل الـ class مع `static`', 'مشترك بين كل الـ objects'],
          ['Block', 'داخل `if` أو loop', 'داخل أقواس الـ block بس']
        ]],
        ['ex', 2, 'local بنفس اسم instance'],
        ['code', String.raw`
class Test {
    int x = 10;                      // instance
    void show() {
        int x = 99;                  // local بنفس الاسم
        System.out.println(x);       // 99  ← الـ local يغطي
        System.out.println(this.x);  // 10  ← الـ instance
    }
}`]
      ]
    },
    {
      id: 's6',
      title: '6) كلمة this',
      blocks: [
        ['p', '`this` = الـ object الحالي (اللي الدالة شغالة عليه). **استخداماتها:**'],
        ['ol', [
          'نفرق بين متغير الـ object والـ parameter لما يكون لهم نفس الاسم.',
          'نرسل الـ object الحالي كـ parameter.',
          'نستدعي constructor ثاني في نفس الـ class: `this(...)`.'
        ]],
        ['lec', ''],
        ['code', String.raw`
class Student {
    String name;
    int age;
    Student(String name, int age) {
        this.name = name;   // this.name = متغير الـ object، name = الـ parameter
        this.age = age;
    }
    void printInfo() {
        System.out.println("Name: " + this.name + ", Age: " + this.age);
    }
}
// main:
Student s = new Student("Ali", 25);
s.printInfo();   // Name: Ali, Age: 25`],
        ['ex', 1, 'وش يصير لو نسينا this؟'],
        ['code', String.raw`
class Box {
    int size;
    Box(int size) {
        size = size;   // الـ parameter أخذ قيمة نفسه! متغير الـ object ما تغير
    }
}
// main:
System.out.println(new Box(5).size);   // 0  ← غلط
// الحل: this.size = size;  ← يطبع 5`],
        ['ex', 2, 'this() تستدعي constructor ثاني'],
        ['code', String.raw`
class Rectangle {
    int w, h;
    Rectangle() {
        this(1, 1);   // يستدعي الـ constructor الثاني
    }
    Rectangle(int w, int h) {
        this.w = w;
        this.h = h;
    }
}
// main:
Rectangle r = new Rectangle();
System.out.println(r.w + " x " + r.h);   // 1 x 1`]
      ]
    },
    {
      id: 's7',
      title: '7) الكويزات',
      blocks: [
        ['p', 'حاول تحل كل كويز بنفسك قبل ما تشوف الجواب.'],
        ['qz', 'كويز 1', '(من المحاضرة)'],
        ['code', String.raw`
class Person {
    String name;
    int age;
    void setData(String n, int a) { name = n; age = a; }
    void display() { System.out.println(name + " - " + age); }
}
// main:
Person p1 = new Person();
p1.setData("Ali", 25);
p1.display();
Person p2 = new Person();
p2.setData("Sara", 30);
p2.display();`],
        ['explain', '`Ali - 25` ثم `Sara - 30`. كل object عنده بياناته، و `setData` تعطي القيم و `display` تطبعها.', 'الجواب:'],
        ['qz', 'كويز 2', '(من المحاضرة)'],
        ['code', String.raw`
class Car {
    String model;
    int year;
    Car(String m, int y) { model = m; year = y; }
    void showInfo() { System.out.println("Car: " + model + ", Year: " + year); }
}
// main:
Car c1 = new Car("Toyota", 2020);
Car c2 = new Car("Honda", 2022);
c1.showInfo();
c2.showInfo();`],
        ['explain', '`Car: Toyota, Year: 2020` ثم `Car: Honda, Year: 2022`. هنا الـ constructor هو اللي أعطى القيم بدل `setData`.', 'الجواب:'],
        ['qz', 'كويز إضافي 3', ''],
        ['code', String.raw`
class Counter {
    int count;
    void add() { count++; }
}
// main:
Counter a = new Counter();
Counter b = new Counter();
a.add();
a.add();
b.add();
System.out.println(a.count + " " + b.count);`],
        ['explain', '`2 1`. لأن `count` مو static، فكل object عنده عداده. (لو كان `static int count` بيطبع `3 3`).', 'الجواب:'],
        ['qz', 'كويز إضافي 4', ''],
        ['code', String.raw`
class Dog {
    String name;
    Dog(String name) { this.name = name; }
    void bark() { System.out.println(name + " says Woof"); }
}
// main:
Dog[] dogs = { new Dog("Max"), new Dog("Luna") };
for (Dog d : dogs) {
    d.bark();
}`],
        ['explain', '`Max says Woof` ثم `Luna says Woof`. هذا array of objects + for-each + this في كويز واحد.', 'الجواب:']
      ]
    }
  ],

  quiz: [
    {
      type: 'concept',
      q: 'Which of these types is **non-primitive**?',
      answer: '`String`',
      wrong: ['`char`', '`boolean`', '`double`'],
      explain: '`String` is a class, so a String variable holds an object\'s address and has methods like `length()`. `char`, `boolean`, and `double` are all primitives that store the value directly.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
String city = "Riyadh";
System.out.println(city.length() + " " + city.toUpperCase());`,
      answer: String.raw`6 RIYADH`,
      wrong: ['6 Riyadh', '5 RIYADH', '7 RIYADH'],
      explain: '`length()` returns the number of characters: R-i-y-a-d-h = 6. `toUpperCase()` returns an uppercase copy. These methods exist because `String` is non-primitive.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
class Student {
    String name;
    Student(String n) { name = n; }
}
// main:
Student[] list = new Student[3];
list[0] = new Student("Ali");
System.out.println(list[0].name + " " + list[1]);`,
      answer: String.raw`Ali null`,
      wrong: ['Ali ', 'Ali Ali', 'NullPointerException'],
      explain: '`new Student[3]` creates 3 slots that are all `null`, and we created an object only for the first slot. Printing `list[1]` itself just prints `null`; an error happens only if you try to reach something inside it, like `list[1].name`.'
    },
    {
      type: 'concept',
      q: 'When is a regular `for` loop a better choice than for-each?',
      answer: 'When you need the index, for example to print each slot\'s number next to its value',
      wrong: [
        'When the array holds objects instead of numbers',
        'When you want to go through every element from first to last',
        'When you want to call a method on every object in the array'
      ],
      explain: 'for-each is great for reading, going through every element, and calling methods on objects, but it does not give you the counter `i`. If you need the index, use a regular `for`.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
int[] marks = {70, 85, 90};
int total = 0;
for (int m : marks) {
    total += m;
}
System.out.println(total / marks.length);`,
      answer: String.raw`81`,
      wrong: ['81.66666666666667', '82', '245'],
      explain: 'The total is 245 and `marks.length` is 3. Dividing an `int` by an `int` gives an `int` and cuts off the fraction (it does not round), so the result is 81. To keep the fraction, divide by `3.0` like the average-age example.'
    },
    {
      type: 'error',
      q: 'This code compiles, but it fails at runtime. Why?',
      code: String.raw`
class Book {
    String title;
    Book(String t) { title = t; }
}
// main:
Book[] books = new Book[2];
books[0] = new Book("Java");
for (Book b : books) {
    System.out.println(b.title.length());
}`,
      answer: 'Line 9: slot `books[1]` is still `null`, so when the loop reaches it a NullPointerException is thrown',
      wrong: [
        'Line 8: for-each does not work with an array of objects',
        'Line 6: `new Book[2]` creates two books whose titles are `null`, so `length()` fails on the first pass',
        'Line 9: `length()` cannot be used on object fields'
      ],
      explain: '`new Book[2]` creates no books, only a shelf with two `null` slots. The first pass prints 4 (the length of "Java"), and on the second pass `b` is `null`, so `b.title` throws a NullPointerException. Fix: create `books[1]` with `new`.'
    },
    {
      type: 'concept',
      q: 'Which of these is **not** a requirement of an immutable class?',
      answer: 'It has a setter for every field so values can be changed safely',
      wrong: [
        'All fields are `private final`',
        'The constructor is what sets the values',
        'The class itself is usually `final`'
      ],
      explain: 'An immutable object has **no setters** at all, because its data never changes after it is created. To "change" it, you return a new object, like `add` in `Money`.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
String s = "java";
s.toUpperCase();
s.concat("!");
System.out.println(s);`,
      answer: String.raw`java`,
      wrong: ['JAVA!', 'JAVA', 'java!'],
      explain: '`String` is immutable: any method that "changes" it returns a new String and leaves the original alone. The results were never stored back in `s`, so it stays `java`. Writing `s = s.toUpperCase();` would change it.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
final class Score {
    private final int value;
    Score(int value) { this.value = value; }
    int getValue() { return value; }
    Score plus(int n) { return new Score(value + n); }
}
// main:
Score a = new Score(10);
Score b = a.plus(5);
a.plus(100);
System.out.println(a.getValue() + " " + b.getValue());`,
      answer: String.raw`10 15`,
      wrong: ['110 15', '115 115', '10 115'],
      explain: '`plus` does not change `a`; it returns a new object. `b` stored the new one (15), and `a.plus(100)` returned an object that was never stored, so it is lost. `a` stays 10 because it is immutable.'
    },
    {
      type: 'error',
      q: 'Where is the error in this class?',
      code: String.raw`
public final class Person {
    private final String name;
    public Person(String name) { this.name = name; }
    public void setName(String newName) {
        this.name = newName;
    }
}`,
      answer: 'Line 5: `name` is `final`, so it cannot be given a new value after the constructor',
      wrong: [
        'Line 1: a `final` class cannot have a constructor',
        'Line 3: a `final` field cannot be assigned even inside the constructor',
        'Line 2: a `final` variable must also be `static`'
      ],
      explain: 'A `final` field gets its value exactly once (assigning it in the constructor is allowed), and any later assignment is a compile error. That is why an immutable class has no setters. A `final class` simply cannot be inherited from, and it can have constructors.'
    },
    {
      type: 'error',
      q: 'Where is the error in this code?',
      code: String.raw`
int sum = 0;
for (int i = 1; i <= 3; i++) {
    int square = i * i;
    sum += square;
}
System.out.println(sum + " " + square);`,
      answer: 'Line 6: `square` is declared inside the loop\'s braces, so it is not visible outside them',
      wrong: [
        'Line 3: you cannot declare a variable inside a loop because it would be declared more than once',
        'Line 4: `sum` is not visible inside the loop because it is declared outside it',
        'Line 2: you cannot declare `i` inside the `for` parentheses'
      ],
      explain: 'A variable lives inside the braces `{ }` where it is declared. `square` is a block variable that ends when the loop ends. `sum` is declared outside, so it is visible both inside and outside the loop.'
    },
    {
      type: 'concept',
      q: 'Inside a non-static method, what does `this` refer to?',
      answer: 'The current object the method is running on',
      wrong: [
        'The class itself',
        'The first object ever created from this class',
        'The parameter that has the same name as the field'
      ],
      explain: 'If you call `s1.printInfo()`, then `this` inside it is `s1`; if you call `s2.printInfo()`, then `this` is `s2`. That is why `this.name` means the object\'s field, while `name` alone (when a parameter has the same name) means the parameter.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
class Test {
    int x = 5;
    void show() {
        int x = 20;
        x++;
        this.x += x;
        System.out.println(x + " " + this.x);
    }
}
// main:
new Test().show();`,
      answer: String.raw`21 26`,
      wrong: ['21 6', '6 26', '26 26'],
      explain: '`x` alone inside the method is the local variable (it hides the field), so it becomes 21. `this.x` is the field (5), and 21 is added to it, so it becomes 26.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
class Box {
    int size = 1;
    Box(int size) {
        size = size * 2;
    }
}
// main:
Box b = new Box(4);
System.out.println(b.size);`,
      answer: String.raw`1`,
      wrong: ['8', '2', '0'],
      explain: 'Inside the constructor, `size` alone is the parameter, so only the parameter became 8. The object\'s field was never touched and keeps its initial value of 1. Fix: `this.size = size * 2;`.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
class Rect {
    int w, h;
    Rect() {
        this(3);
        h = h + 1;
    }
    Rect(int side) {
        this(side, side);
    }
    Rect(int w, int h) {
        this.w = w;
        this.h = h;
    }
}
// main:
Rect r = new Rect();
System.out.println(r.w + " x " + r.h);`,
      answer: String.raw`3 x 4`,
      wrong: ['3 x 3', '0 x 1', '1 x 1'],
      explain: '`new Rect()` calls `this(3)`, which calls `this(3, 3)`, so `w = 3` and `h = 3`. Then control returns to the first constructor and runs the line after `this(3)`: `h = 3 + 1 = 4`.'
    }
  ]
});
