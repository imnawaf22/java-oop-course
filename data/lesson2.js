/* =========================================================
   الدرس 2: Classes و Objects و Constructors
   (طريقة كتابة البيانات مشروحة في أول data/lesson1.js)
   ========================================================= */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
  id: 2,
  title: 'Classes و Objects و Constructors',
  description: 'كيف نصمم class ونصنع منه objects، الوصول للبيانات بالنقطة، private مع get و set، الـ constructors بأنواعها، والـ Overloading.',
  intro: 'هذا الدرس يشرح كيف نصمم class، وكيف نصنع منه objects، وكيف نعطيهم قيم من أول لحظة باستخدام constructor. كل مثال من المحاضرة معه مثالين إضافيين.',

  summary: [
    '**Class:** مخطط (blueprint) يوصف نوع من الأشياء: وش عنده من بيانات (attributes) ووش يقدر يسوي (methods).',
    '**Object:** نسخة حقيقية مصنوعة من الـ class. مثال: `Person` هو class، و Alice و Bob هم objects.',
    'نصنع object بالكلمة `new` : `Circle myCircle = new Circle();`',
    'نوصل للبيانات والدوال بالنقطة: `myCircle.radius` و `myCircle.findArea()`.',
    '**private:** المتغير ما ينشاف إلا داخل نفس الـ class، ونوصل له من برا عن طريق `set` و `get`.',
    '**Constructor:** دالة خاصة تشتغل تلقائياً لما نصنع object، اسمها نفس اسم الـ class، وما ترجع أي قيمة.',
    'نوعين: **Default** (بدون مدخلات) و **Parameterized** (بمدخلات).',
    'نقدر نكتب أكثر من constructor بشرط تختلف مدخلاتهم، وهذا اسمه **Overloading**.'
  ],

  sections: [
    {
      id: 's1',
      title: '1) Class و Object',
      blocks: [
        ['analogy', 'الـ class مثل مخطط بيت عند المهندس، والـ object هو البيت الحقيقي اللي انبنى منه. من نفس المخطط نبني بيوت كثيرة، كل واحد لونه وعنوانه مختلف.'],
        ['p', 'الـ class فيه شيئين:'],
        ['ul', [
          '**Attributes (البيانات):** مثل `name` و `address`. اسمها **instance variables** لأن قيمتها تختلف من object لثاني.',
          '**Methods (الأفعال):** مثل `changeAddress()`.'
        ]],
        ['h', 'الخطوات الثلاث'],
        ['table', ['الخطوة', 'الشكل العام', 'مثال'], [
          ['1. تعريف متغير يأشر على object', '`ClassName ref;`', '`Circle myCircle;`'],
          ['2. إنشاء الـ object', '`ref = new ClassName();`', '`myCircle = new Circle();`'],
          ['أو الاثنين في سطر واحد', '`ClassName ref = new ClassName();`', '`Circle myCircle = new Circle();`'],
          ['3. الوصول للبيانات', '`ref.data`', '`myCircle.radius`'],
          ['4. استدعاء دالة', '`ref.method()`', '`myCircle.findArea()`']
        ]],
        ['rule', 'أي class يبدأ بـ `public` لازم ينحفظ في ملف بنفس اسمه وينتهي بـ `.java`، مثل `Circle.java`.'],
        ['lec', '1: Circle'],
        ['code', String.raw`
public class Circle {
    double radius = 1.0;
    double findArea() {
        return radius * radius * 3.14159;
    }
}
public class TestCircle {
    public static void main(String[] args) {
        Circle myCircle = new Circle();
        double circleArea;
        circleArea = myCircle.findArea();
        System.out.println("Area of circle is:" + circleArea);
    }
}`],
        ['out', String.raw`Area of circle is:3.14159`],
        ['explain', 'صنعنا دائرة نصف قطرها 1.0، ونادينا `findArea()` من خلالها فرجعت `1 × 1 × 3.14159`. الـ class اللي فيه `main` اسمه **Driver class**.'],
        ['ex', 1, 'Rectangle'],
        ['code', String.raw`
public class Rectangle {
    double width = 4.0;
    double height = 2.5;
    double findArea() {
        return width * height;
    }
}
// main:
Rectangle r = new Rectangle();
System.out.println("Area: " + r.findArea());   // Area: 10.0`],
        ['ex', 2, 'كل object له بياناته'],
        ['code', String.raw`
Circle c1 = new Circle();
Circle c2 = new Circle();
c2.radius = 2.0;                    // غيرنا c2 بس
System.out.println(c1.findArea());   // 3.14159
System.out.println(c2.findArea());   // 12.56636`],
        ['explain', 'تغيير `c2.radius` ما أثر على `c1`، لأن كل object عنده نسخته الخاصة من المتغيرات.'],
        ['lec', '2: Account مع private و set و get'],
        ['p', 'أغلب المتغيرات نخليها `private`، يعني ما تنشاف إلا من داخل الـ class. ونسوي دالة `set` للكتابة ودالة `get` للقراءة.'],
        ['code', String.raw`
public class Account {
    private String name;                 // instance variable
    public void setName(String name) {   // تخزين الاسم
        this.name = name;
    }
    public String getName() {            // إرجاع الاسم
        return name;
    }
}
// AccountTest (main):
Account myAccount = new Account();
System.out.printf("Initial name is: %s%n%n", myAccount.getName());   // Initial name is: null`],
        ['explain', 'أول ما نصنع الـ object الاسم ما فيه قيمة، فيطبع `null`. بعدين البرنامج ياخذ اسم من المستخدم بـ `Scanner`، يخزنه بـ `setName`، ويطبعه بـ `getName`. و `this.name` يعني متغير الـ object، أما `name` لحالها فهي الـ parameter.'],
        ['ex', 1, 'Book'],
        ['code', String.raw`
public class Book {
    private String title;
    public void setTitle(String title) { this.title = title; }
    public String getTitle() { return title; }
}
// main:
Book b = new Book();
System.out.println(b.getTitle());   // null
b.setTitle("Java Basics");
System.out.println(b.getTitle());   // Java Basics`],
        ['ex', 2, 'ليش ما نقدر نوصل لـ private مباشرة؟'],
        ['code', String.raw`
public class Phone {
    private int price;
    public void setPrice(int p) { price = p; }
    public int getPrice() { return price; }
}
// main:
Phone ph = new Phone();
System.out.println(ph.getPrice());   // 0   (القيمة الافتراضية لـ int)
ph.setPrice(3000);
System.out.println(ph.getPrice());   // 3000
// ph.price = 5;   ← خطأ في الترجمة: price has private access`],
        ['note', 'القيم الافتراضية للـ instance variables هي: `0` للأرقام، `false` لـ `boolean`، و `null` للـ `String` والـ objects.']
      ]
    },
    {
      id: 's2',
      title: '2) Constructors',
      blocks: [
        ['h', 'المشكلة اللي يحلها الـ constructor'],
        ['p', 'بدون constructor، عشان نصنع نقطة ونعطيها قيم نحتاج 3 أسطر (متعب):'],
        ['code', String.raw`
Point p = new Point();
p.x = 3;
p.y = 8;`],
        ['p', 'ونبيها في سطر واحد: `Point p = new Point(3, 8);` وهذا يصير ممكن لما نكتب constructor.'],
        ['h', 'قواعد الـ constructor'],
        ['ol', [
          'يشتغل تلقائياً لحظة `new`، ما نستدعيه بنفسنا.',
          'اسمه نفس اسم الـ class بالضبط.',
          'ما يرجع أي قيمة، وما نكتب قبله نوع (ولا حتى `void`).',
          'وظيفته إعطاء قيم بدائية للـ object.',
          'نقدر نكتب أكثر من واحد بشرط تختلف المدخلات.',
          'إذا ما كتبنا ولا constructor، Java تسوي واحد فاضي من ورا الكواليس.'
        ]],
        ['lec', '1: Point مع constructor'],
        ['code', String.raw`
public class Point {
    double x, y;
    public Point(double x, double y) {   // constructor
        this.x = x;
        this.y = y;
    }
    double cirEqn() {
        return ((x + y) / (x * y));
    }
}
// main:
Point p = new Point(14, 4);
double output = p.cirEqn();
System.out.println("The output of circle Equation: " + output);`],
        ['out', String.raw`The output of circle Equation: 0.32142857142857145`],
        ['explain', 'لأن `(14 + 4) ÷ (14 × 4) = 18 ÷ 56`.'],
        ['ex', 1, 'Student'],
        ['code', String.raw`
public class Student {
    String name;
    int age;
    public Student(String n, int a) {
        name = n;
        age = a;
    }
}
// main:
Student s = new Student("Sara", 20);
System.out.println(s.name + " - " + s.age);   // Sara - 20`],
        ['ex', 2, 'الـ constructor يشتغل لحاله'],
        ['code', String.raw`
public class Lamp {
    boolean isOn;
    public Lamp() {
        isOn = false;
        System.out.println("Lamp created");
    }
}
// main:
Lamp l = new Lamp();          // يطبع: Lamp created
System.out.println(l.isOn);   // false`],
        ['note', 'ما كتبنا `l.Lamp()`، الـ constructor اشتغل مباشرة مع `new`.', 'لاحظ:'],
        ['h', 'أنواع الـ constructor'],
        ['table', ['النوع', 'شكله', 'متى نستخدمه'], [
          ['Default (بدون مدخلات)', '`public Counter() { ... }`', 'لما نبي قيم ثابتة من البداية'],
          ['Parameterized (بمدخلات)', '`public Counter(int initValue) { ... }`', 'لما المستخدم يحدد القيم']
        ]],
        ['lec', '2: Counter بـ constructorين'],
        ['code', String.raw`
public class Counter {
    int CounterIndex;
    public Counter()              { CounterIndex = 0; }           // Default
    public Counter(int InitValue) { CounterIndex = InitValue; }   // Parameterized
    public void increase() { CounterIndex = CounterIndex + 1; }
    public void decrease() { CounterIndex = CounterIndex - 1; }
    int getCounterIndex()  { return CounterIndex; }
}
// main:
Counter counter1 = new Counter();     // يبدأ من 0
Counter counter2 = new Counter(10);   // يبدأ من 10`],
        ['ex', 1, 'نشغل العدادين'],
        ['code', String.raw`
Counter counter1 = new Counter();
Counter counter2 = new Counter(10);
counter1.increase();
counter1.increase();
counter2.decrease();
System.out.println(counter1.getCounterIndex());   // 2
System.out.println(counter2.getCounterIndex());   // 9`],
        ['ex', 2, 'Timer بـ constructorين'],
        ['code', String.raw`
public class Timer {
    int minutes;
    public Timer()          { minutes = 5; }   // افتراضي 5 دقائق
    public Timer(int m)     { minutes = m; }
}
// main:
Timer t1 = new Timer();
Timer t2 = new Timer(25);
System.out.println(t1.minutes + " " + t2.minutes);   // 5 25`],
        ['lec', '3: Circle بثلاث constructors'],
        ['code', String.raw`
public class Circle {
    public double x, y, r;
    public Circle(double centreX, double centreY, double radius) {
        x = centreX; y = centreY; r = radius;
    }
    public Circle(double radius) { x = 0; y = 0; r = radius; }
    public Circle()              { x = 0; y = 0; r = 1.0; }
    public double circumference() { return 2 * 3.14 * r; }
    public double area()          { return 3.14 * r * r; }
}
// main:
Circle circleA = new Circle(10.0, 12.0, 20.0);
Circle circleB = new Circle(10.0);
Circle circleC = new Circle();`],
        ['table', ['الـ object', 'أي constructor اشتغل؟', 'المركز', 'نصف القطر'], [
          ['circleA', 'اللي ياخذ 3 أرقام', '(10, 12)', '20'],
          ['circleB', 'اللي ياخذ رقم واحد', '(0, 0)', '10'],
          ['circleC', 'اللي بدون مدخلات', '(0, 0)', '1']
        ]],
        ['p', 'Java تختار الـ constructor من **عدد المدخلات ونوعها**.'],
        ['ex', 1, 'Box'],
        ['code', String.raw`
public class Box {
    double w, h;
    public Box()                   { w = 1; h = 1; }
    public Box(double side)        { w = side; h = side; }   // مربع
    public Box(double w, double h) { this.w = w; this.h = h; }
    double area() { return w * h; }
}
// main:
System.out.println(new Box().area());       // 1.0
System.out.println(new Box(3).area());      // 9.0
System.out.println(new Box(2, 5).area());   // 10.0`],
        ['ex', 2, 'غلطة مشهورة'],
        ['code', String.raw`
public class Point {
    double x, y;
    public Point(double x, double y) { this.x = x; this.y = y; }
}
// main:
Point p1 = new Point(3, 8);   // ✔ يشتغل
Point p2 = new Point();       // ✘ خطأ: ما فيه constructor بدون مدخلات`],
        ['explain', 'لما تكتب أنت أي constructor، Java توقف عن إنشاء الـ default التلقائي. إذا تبيه لازم تكتبه بنفسك.']
      ]
    },
    {
      id: 's3',
      title: 'Overloading',
      blocks: [
        ['p', 'كل الـ constructors لهم نفس الاسم، فكيف Java تفرق بينهم؟ بالـ **signature**: عدد المدخلات، نوعها، وترتيبها. ونفس الشي ينطبق على الدوال العادية. ولا تخلطه مع **Overriding** (بيجينا لاحقاً).'],
        ['ex', 1, 'دالة add بثلاث أشكال'],
        ['code', String.raw`
static int add(int a, int b)          { return a + b; }
static int add(int a, int b, int c)   { return a + b + c; }
static double add(double a, double b) { return a + b; }
// main:
System.out.println(add(2, 3));       // 5    ← رقمين int
System.out.println(add(1, 2, 3));    // 6    ← ثلاثة أرقام
System.out.println(add(2.5, 1.5));   // 4.0  ← double`],
        ['ex', 2, 'نفس الاسم ونوع مختلف'],
        ['code', String.raw`
static void show(int n)    { System.out.println("Number: " + n); }
static void show(String s) { System.out.println("Text: " + s); }
// main:
show(7);        // Number: 7
show("Hi");     // Text: Hi`]
      ]
    },
    {
      id: 's4',
      title: 'أسئلة المراجعة (Self Test) مع الإجابة',
      blocks: [
        ['rule', 'اكتب class اسمه `Car` فيه `model` و `year`، و constructorين (واحد default يخلي `model = "Unknown"` و `year = 2020`، وواحد ياخذ القيمتين)، واطبع بيانات سيارتين.', 'تمرين لك:'],
        ['table', ['السؤال', 'الإجابة المختصرة'], [
          ['كيف نوصل لـ attribute من خلال object؟', 'بالنقطة: `objectName.attribute` مثل `myCircle.radius`'],
          ['كيف نستدعي method من خلال object؟', '`objectName.method()` مثل `myCircle.findArea()`'],
          ['وش هو الـ constructor؟', 'دالة خاصة بنفس اسم الـ class، ما ترجع شي، وتشتغل تلقائياً مع `new` لإعطاء قيم بدائية'],
          ['ليش نستخدم constructors؟', 'عشان نعطي الـ object قيمه في سطر واحد وقت إنشائه بدل أسطر كثيرة'],
          ['كيف تفرق Java بين الـ constructors؟', 'بالـ signature: عدد المدخلات ونوعها وترتيبها'],
          ['وش هو constructor overloading؟', 'أكثر من constructor بنفس الاسم ومدخلات مختلفة'],
          ['أنواع الـ constructors؟', 'Default (بدون مدخلات) و Parameterized (بمدخلات)']
        ]]
      ]
    }
  ],

  quiz: [
    {
      type: 'concept',
      q: 'Which statement correctly describes the relationship between a class and an object?',
      answer: 'A class is a blueprint, and an object is a real instance created from it with `new`',
      wrong: [
        'An object is the blueprint, and a class is an instance created from it',
        'A class and an object are the same thing with different names',
        'You can create only one object from each class'
      ],
      explain: 'A class is like a house plan, and an object is the house built from it. You can create many objects from the same class, each with its own data.'
    },
    {
      type: 'concept',
      q: 'You wrote `public class Student { ... }`. What must the file be named?',
      answer: '`Student.java`',
      wrong: ['`student.java`', '`Student.class`', 'Any name, as long as it ends with `.java`'],
      explain: 'A `public` class must be saved in a file with exactly the same name as the class (uppercase and lowercase matter), ending in `.java`. A `.class` file is what the compiler produces, not the file you write.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
class Item {
    String name;
    int qty;
    boolean ready;
}
// main:
Item it = new Item();
System.out.println(it.name + " " + it.qty + " " + it.ready);`,
      answer: String.raw`null 0 false`,
      wrong: [' 0 false', 'null null false', '0 0 false'],
      explain: 'Instance variables get default values: `null` for a String (not an empty string), `0` for numbers, and `false` for `boolean`.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
class Box {
    int size = 2;
}
// main:
Box a = new Box();
Box b = new Box();
a.size = 5;
b.size = b.size + a.size;
System.out.println(a.size + " " + b.size);`,
      answer: String.raw`5 7`,
      wrong: ['5 10', '2 7', '5 5'],
      explain: 'Each object has its own copy of `size`. `a.size` becomes 5, and `b.size` was 2, so it becomes `2 + 5 = 7`. Changing `a` does not change `b`\'s original value.'
    },
    {
      type: 'concept',
      q: 'Which of these is **not** a rule of constructors?',
      answer: 'You must write `void` before its name because it returns nothing',
      wrong: [
        'Its name is exactly the same as the class name',
        'It runs automatically at the moment of `new`',
        'You can write more than one, as long as their parameters differ'
      ],
      explain: 'A constructor has no return type at all, **not even** `void`. If you write `void`, it becomes a regular method, not a constructor. The other statements are all true rules.'
    },
    {
      type: 'error',
      q: 'Where is the error in this program?',
      code: String.raw`
class Phone {
    private int price;
    public int getPrice() { return price; }
}
public class Main {
    public static void main(String[] args) {
        Phone p = new Phone();
        p.price = 2000;
        System.out.println(p.getPrice());
    }
}`,
      answer: 'Line 8: `price` is `private`, so it cannot be accessed directly from another class',
      wrong: [
        'Line 3: a getter cannot return a `private` variable',
        'Line 7: a value must be passed to `new Phone()` because there is no constructor',
        'Line 2: a `private` variable must be given an initial value'
      ],
      explain: '`private` means it is visible only inside `Phone`. The getter is inside the class, so it can return it. The right fix is to add a `setPrice` method and use it. Since no constructor was written, Java adds an empty one, so `new Phone()` is fine.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
class Lamp {
    boolean on;
    Lamp() {
        on = true;
        System.out.print("created ");
    }
}
// main:
Lamp a = new Lamp();
Lamp b = new Lamp();
System.out.println(a.on);`,
      answer: String.raw`created created true`,
      wrong: ['true', 'created true', 'created created false'],
      explain: 'The constructor runs automatically with every `new`, so `created` is printed twice (once per object). Then `a.on` is `true` because the constructor set it.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
class Account {
    private String name;
    public void setName(String name) { this.name = name; }
    public String getName() { return name; }
}
// main:
Account acc = new Account();
System.out.print(acc.getName() + " ");
acc.setName("Huda");
System.out.println(acc.getName());`,
      answer: String.raw`null Huda`,
      wrong: [' Huda', 'Huda Huda', 'null null'],
      explain: 'Before `setName`, `name` has its default value `null`. Then `this.name = name` stores `Huda` in the object\'s field, so the second print shows `Huda`.'
    },
    {
      type: 'error',
      q: 'Where is the error in this code?',
      code: String.raw`
class Point {
    double x, y;
    Point(double x, double y) {
        this.x = x;
        this.y = y;
    }
}
// main:
Point p1 = new Point(2, 3);
Point p2 = new Point();`,
      answer: 'Line 10: there is no no-argument constructor, because once we wrote a constructor Java stopped creating the default one',
      wrong: [
        'Line 9: you cannot pass `int` values to a constructor that takes `double`',
        'Line 3: a constructor must have `void` before its name',
        'Line 2: you cannot declare two variables on the same line'
      ],
      explain: 'Java creates an empty constructor automatically **only** if you write none. Here we wrote one that takes two values, so `new Point()` is a compile error. The values 2 and 3 are converted to `double` automatically.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
class Counter {
    int value;
    Counter()          { value = 1; }
    Counter(int start) { value = start; }
    void up()          { value += 2; }
}
// main:
Counter c1 = new Counter();
Counter c2 = new Counter(10);
c1.up();
c2.up();
c2.up();
System.out.println(c1.value + " " + c2.value);`,
      answer: String.raw`3 14`,
      wrong: ['2 12', '3 12', '1 14'],
      explain: '`c1` starts from the default constructor (1) and goes up by 2 once = 3. `c2` starts at 10 and goes up by 2 twice = 14. Each `up()` adds 2, not 1.'
    },
    {
      type: 'concept',
      q: 'If a class has several constructors with the same name, how does Java decide which one to run?',
      answer: 'By the signature: the number, types, and order of the parameters',
      wrong: [
        'By the names of the parameters',
        'By the return type of each constructor',
        'It always runs the first constructor written in the class'
      ],
      explain: 'This is overloading: Java matches the values you pass (how many, their types, and their order) against each constructor. Parameter names do not matter, and constructors have no return type.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
static int calc(int a, int b)          { return a * b; }
static double calc(double a, double b) { return a + b; }
// main:
System.out.println(calc(3, 4));
System.out.println(calc(3.0, 4));`,
      answer: String.raw`12
7.0`,
      wrong: ['12\n12.0', '7\n7.0', '12.0\n7.0'],
      explain: '`calc(3, 4)` uses only `int` values, so the multiplying version runs = 12. `calc(3.0, 4)` contains a `double`, so it cannot match the `int` version; 4 is converted to 4.0 and the adding `double` version runs = 7.0.'
    },
    {
      type: 'error',
      q: 'This code does not compile. Why?',
      code: String.raw`
class Car {
    String model;
    public void Car(String m) {
        model = m;
    }
}
// main:
Car c = new Car("Kia");`,
      answer: 'Line 3: writing `void` turned it into a regular method, not a constructor, so `new Car("Kia")` on line 8 finds no constructor that takes a String',
      wrong: [
        'Line 3: a constructor name must start with a lowercase letter',
        'Line 2: the field `model` must be `private`',
        'Line 8: you cannot pass text directly inside `new`'
      ],
      explain: 'Anything with a return type (even `void`) is a method, even if it has the class name. So the class only has the empty default constructor, and `new Car("Kia")` finds no matching constructor.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
class Rect {
    double w, h;
    Rect()                   { w = 2; h = 2; }
    Rect(double side)        { w = side; h = side; }
    Rect(double w, double h) { this.w = w; this.h = h; }
    double area() { return w * h; }
}
// main:
System.out.println(new Rect(3).area() + new Rect().area());`,
      answer: String.raw`13.0`,
      wrong: ['9.04.0', '13', '10.0'],
      explain: '`new Rect(3)` runs the one-parameter constructor (a 3×3 square = 9.0), and `new Rect()` runs the default (2×2 = 4.0). Both are `double`, so they are added as numbers = 13.0 (not joined as text, because there is no String).'
    },
    {
      type: 'output',
      q: 'What is the output of this code? (Look closely at the constructor.)',
      code: String.raw`
class Student {
    String name;
    int age;
    Student(String name, int a) {
        name = name;
        age = a;
    }
}
// main:
Student s = new Student("Sara", 20);
System.out.println(s.name + " - " + s.age);`,
      answer: String.raw`null - 20`,
      wrong: ['Sara - 20', 'null - 0', 'Sara - 0'],
      explain: 'Inside the constructor, `name` alone means the parameter, so `name = name` copies the parameter onto itself and never touches the object\'s field, which stays `null`. Fix: `this.name = name;`. `age = a` works because the names are different.'
    }
  ]
});
