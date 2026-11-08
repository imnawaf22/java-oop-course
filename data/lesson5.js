/* =========================================================
   الدرس 5: OOP Thinking و Relationships و Wrappers و Big Numbers
   (طريقة كتابة البيانات مشروحة في أول data/lesson1.js)
   ========================================================= */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
  id: 5,
  title: 'OOP Thinking و Relationships و Wrappers و Big Numbers',
  description: 'التفكير بطريقة الـ objects، مبادئ OOP، العلاقات بين الـ classes (Association و Aggregation و Composition و Inheritance)، الـ Wrapper classes و ArrayList، و BigInteger و BigDecimal.',
  intro: 'هذا الدرس يعلمك كيف تفكر بطريقة objects، وأنواع العلاقات بين الـ classes، وكيف نحول الأرقام البسيطة لـ objects، وكيف نتعامل مع أرقام ضخمة أو دقيقة جداً. كل مثال من المحاضرة معه مثالين إضافيين.',

  summary: [
    '**Object-Oriented Thinking:** نصمم البرنامج كأشياء من الواقع. كل object عنده fields (بيانات/حالة) و methods (سلوك).',
    'مبادئ OOP الأربعة: **Encapsulation**، **Abstraction**، **Inheritance**، **Polymorphism**.',
    '**Abstraction:** نهتم بـ **وش** يسوي الـ object، مو **كيف** يسويه.',
    '**Encapsulation:** نجمع البيانات والدوال في class، والبيانات `private` مع getters و setters.',
    'العلاقات: **Association** «uses a»، **Aggregation** «has a» ضعيفة، **Composition** «has a» قوية، **Inheritance** «is a».',
    '**Wrapper Classes:** تحول الـ primitive لـ object (`int` ← `Integer`) عشان نستخدمه مع `ArrayList`. التحويل التلقائي اسمه **Autoboxing** و **Unboxing**.',
    '**ArrayList:** مثل المصفوفة بس حجمها يكبر ويصغر وفيها دوال جاهزة.',
    '**BigInteger** للأرقام الضخمة جداً، و **BigDecimal** للكسور الدقيقة (مثل الفلوس).'
  ],

  sections: [
    {
      id: 's1',
      title: '1) Object-Oriented Thinking',
      blocks: [
        ['p', 'بدل ما تفكر «وش الخطوات؟»، فكر «وش الأشياء الموجودة؟ وش عندها؟ ووش تسوي؟».'],
        ['ul', [
          '**Fields (attributes / instance variables):** توصف حالة الـ object. كل object عنده قيمه الخاصة.',
          '**Methods (behaviors):** الأشياء اللي يقدر يسويها.'
        ]],
        ['p', '**مثال Car من المحاضرة:** الـ fields هي `color` و `speed` و `brand` و `fuelLevel`، والـ methods هي `start` و `stop` و `accelerate` و `brake`. سيارة حمراء Toyota سرعتها 80، وسيارة ثانية زرقاء BMW سرعتها 120: نفس الـ class وقيم مختلفة.'],
        ['rule', 'لأنها أقرب للواقع، وتسهل إعادة الاستخدام، وتخلي الكود مقسم وسهل الصيانة.', 'ليش نفكر بهالطريقة؟'],
        ['lec', 'Car'],
        ['code', String.raw`
class Car {
    String model;
    int year;
    int speed;
    Car(String m, int y) { model = m; year = y; speed = 0; }
    void accelerate() { speed += 10; }
    void brake()      { speed -= 10; }
}
// main:
Car c1 = new Car("Toyota", 2021);
Car c2 = new Car("Honda", 2022);
c1.accelerate();
System.out.println(c1.model + " speed: " + c1.speed);   // Toyota speed: 10`],
        ['ex', 1, 'Phone'],
        ['code', String.raw`
class Phone {
    String brand;
    int battery;
    Phone(String b) { brand = b; battery = 50; }
    void charge()   { battery += 20; }
    void use()      { battery -= 10; }
}
// main:
Phone p = new Phone("Samsung");
p.charge();   // 70
p.use();      // 60
System.out.println(p.brand + " battery: " + p.battery);   // Samsung battery: 60`],
        ['ex', 2, 'Fan (مروحة لها 3 سرعات)'],
        ['code', String.raw`
class Fan {
    int level;   // 0 = مطفية
    void up()  { if (level < 3) level++; }
    void off() { level = 0; }
}
// main:
Fan f = new Fan();
f.up(); f.up(); f.up(); f.up();   // الرابعة ما تزيد
System.out.println(f.level);      // 3
f.off();
System.out.println(f.level);      // 0`],
        ['h', 'خطوات التفكير بالـ Objects'],
        ['ol', [
          'حدد الـ **classes** (الأسماء في الوصف): `Car` و `Engine` و `Driver`.',
          'حدد الـ **attributes**: `model` و `year` و `speed`.',
          'حدد الـ **methods** (الأفعال): `accelerate()` و `brake()` و `start()`.',
          'حدد الـ **علاقات**: `Driver` يسوق `Car`.'
        ]],
        ['p', 'نطبق نفس الخطوات على مثالين إضافيين:'],
        ['table', ['الخطوة', 'مثال إضافي 1: نظام مكتبة', 'مثال إضافي 2: نظام مطعم'], [
          ['Classes', 'Library, Book, Member', 'Restaurant, Order, Meal, Customer'],
          ['Attributes', 'Book: title, author / Member: name, id', 'Meal: name, price / Order: number, total'],
          ['Methods', '`borrow()`, `returnBook()`', '`addMeal()`, `calculateTotal()`'],
          ['العلاقات', 'Library عندها Books، Member يستعير Book', 'Customer يسوي Order، Order فيه Meals']
        ]]
      ]
    },
    {
      id: 's2',
      title: '2) Abstraction (التجريد)',
      blocks: [
        ['p', 'نخفي التفاصيل الداخلية ونظهر المهم بس.'],
        ['analogy', '(تشبيه المحاضرة) لما تسوق تستخدم الدركسون والدواسات، وما يهمك كيف يشتغل المحرك من جوه.'],
        ['ex', 1, 'Math.sqrt'],
        ['code', String.raw`System.out.println(Math.sqrt(16));   // 4.0`],
        ['p', 'تستخدم الجذر التربيعي وأنت ما تعرف المعادلة اللي داخلها. هذا abstraction.'],
        ['ex', 2, 'Scanner و ATM'],
        ['p', '`input.nextInt()` تقرأ رقم من الكيبورد وما تشوف الكود اللي يتعامل مع الجهاز. ونفس الشي مكينة الصراف: تضغط «سحب 500» وما تشوف الاتصال بالبنك والتحقق من الرصيد.']
      ]
    },
    {
      id: 's3',
      title: '3) Encapsulation (التغليف)',
      blocks: [
        ['p', 'نجمع البيانات والدوال في class، ونخلي البيانات `private`، ونوصل لها بـ getters و setters.'],
        ['rule', '**Abstraction** يخفي التعقيد، و **Encapsulation** يحمي البيانات.', 'الفرق البسيط:'],
        ['lec', 'Car مع private'],
        ['code', String.raw`
class Car {
    private String model;
    private int speed;
    public Car(String model) { this.model = model; this.speed = 0; }
    public String getModel() { return model; }
    public int getSpeed()    { return speed; }
    public void accelerate() { speed += 10; }
    public void brake()      { speed -= 10; }
    public static void main(String[] args) {
        Car car1 = new Car("Toyota");
        System.out.println("Car model: " + car1.getModel());
        System.out.println("Initial speed: " + car1.getSpeed());
        car1.accelerate();
        System.out.println("After accelerating: " + car1.getSpeed());
        car1.brake();
        System.out.println("After braking: " + car1.getSpeed());
    }
}`],
        ['out', String.raw`
Car model: Toyota
Initial speed: 0
After accelerating: 10
After braking: 0`],
        ['ex', 1, 'فرامل آمن (السرعة ما تنزل تحت الصفر)'],
        ['code', String.raw`
public void brake() {
    if (speed >= 10) speed -= 10;
    else speed = 0;
}
// main:
Car car = new Car("Kia");
car.accelerate();   // 10
car.brake();        // 0
car.brake();        // يبقى 0 بدل -10
System.out.println(car.getSpeed());   // 0`],
        ['p', 'هذي فايدة `private`: ما أحد يقدر يكتب `car.speed = -50` من برا.'],
        ['ex', 2, 'Thermostat (حرارة المكيف من 16 إلى 30)'],
        ['code', String.raw`
class Thermostat {
    private int temp = 22;

    public int getTemp() { return temp; }
    public void setTemp(int t) {
        if (t >= 16 && t <= 30) temp = t;
        else System.out.println("Out of range");
    }
}
// main:
Thermostat th = new Thermostat();
th.setTemp(25);
th.setTemp(50);                       // Out of range
System.out.println(th.getTemp());     // 25`]
      ]
    },
    {
      id: 's4',
      title: '4) Class Relationships (العلاقات بين الـ Classes)',
      blocks: [
        ['table', ['العلاقة', 'المعنى', 'مثال المحاضرة', 'مثال إضافي 1', 'مثال إضافي 2'], [
          ['Association', '«uses a»: يستخدمه وما يملكه', 'Teacher يستخدم Pen', 'Doctor يستخدم Stethoscope', 'Customer يستخدم ATM'],
          ['Aggregation', '«has a» ضعيفة: الجزء يعيش لحاله', 'Library عندها Books', 'Team عنده Players (اللاعب ينتقل لفريق ثاني)', 'Department عنده Professors'],
          ['Composition', '«has a» قوية: الجزء ما يعيش بدون الكل', 'Car عندها Engine', 'House فيه Rooms (لو انهدم البيت تروح الغرف)', 'Human عنده Heart'],
          ['Inheritance', '«is a»: نوع من', 'Student is a Person', 'Dog is an Animal', 'Manager is an Employee']
        ]],
        ['h', 'طريقة سهلة تفرق بينهم'],
        ['ol', [
          'تقدر تقول «X هو نوع من Y»؟ ← **Inheritance**.',
          'X عنده Y كجزء منه؟ اسأل: لو اختفى X هل Y يبقى؟ يبقى ← **Aggregation**. يروح معه ← **Composition**.',
          'X بس يستخدم Y مؤقتاً؟ ← **Association**.'
        ]],
        ['rule', 'عشان نحدد كيف تتعاون الـ objects، ومين يملك مين، ومين يورث من مين، ومتى ينتهي عمر الـ object. هذا يخلي التصميم واضح وسهل الصيانة.', 'ليش نستخدم العلاقات؟'],
        ['h', 'كود أمثلة المحاضرة'],
        ['code', String.raw`
// Association: Teacher يستخدم Pen لما ينرسل له
class Pen { void write() { System.out.println("Writing..."); } }
class Teacher { void usePen(Pen p) { p.write(); } }

// Aggregation: الكتب تنصنع برا وتنضاف للمكتبة
class Book { String title; Book(String t) { title = t; } }
class Library {
    List<Book> books = new ArrayList<>();
    void addBook(Book b) { books.add(b); }
}

// Composition: المحرك ينصنع داخل السيارة
class Engine { void start() { System.out.println("Engine started"); } }
class Car {
    private Engine engine = new Engine();
    void startCar() { engine.start(); }
}

// Inheritance: extends
class Person { String name; }
class Student extends Person { int studentId; }   // Student عنده name بالوراثة`],
        ['note', 'في **Aggregation** الجزء يجي من برا (`addBook(b)`)، وفي **Composition** الجزء ينصنع داخل الـ class (`new Engine()`).', 'ملاحظة مهمة في الكود:'],
        ['ex', 1, '(كود): Team و Player = Aggregation'],
        ['code', String.raw`
class Player { String name; Player(String n) { name = n; } }
class Team {
    ArrayList<Player> players = new ArrayList<>();
    void addPlayer(Player p) { players.add(p); }
}
// main:
Player salem = new Player("Salem");
Team t = new Team();
t.addPlayer(salem);
t = null;                          // الفريق انحل
System.out.println(salem.name);    // Salem  ← اللاعب موجود`],
        ['ex', 2, '(كود): Dog is an Animal = Inheritance'],
        ['code', String.raw`
class Animal {
    String name;
    void eat() { System.out.println(name + " is eating"); }
}
class Dog extends Animal {
    void bark() { System.out.println(name + " says Woof"); }
}
// main:
Dog d = new Dog();
d.name = "Max";
d.eat();    // Max is eating  ← ورثها من Animal
d.bark();   // Max says Woof`]
      ]
    },
    {
      id: 's5',
      title: '5) تصميم Course class',
      blocks: [
        ['lec', ''],
        ['code', String.raw`
class Course {
    private String courseName;
    private int credits;
    public Course(String name, int credits) {
        this.courseName = name;
        this.credits = credits;
    }
    public String getCourseName() { return courseName; }
    public int getCredits()       { return credits; }
}
// main:
Course c = new Course("OOP", 3);
System.out.println(c.getCourseName() + " - " + c.getCredits());   // OOP - 3`],
        ['ex', 1, 'Student عنده مجموعة Courses (Aggregation)'],
        ['code', String.raw`
class Student {
    private String name;
    private ArrayList<Course> courses = new ArrayList<>();
    Student(String name) { this.name = name; }
    void addCourse(Course c) { courses.add(c); }
    int totalCredits() {
        int sum = 0;
        for (Course c : courses) sum += c.getCredits();
        return sum;
    }
}
// main:
Student s = new Student("Sara");
s.addCourse(new Course("OOP", 3));
s.addCourse(new Course("Math", 4));
System.out.println(s.totalCredits());   // 7`],
        ['ex', 2, 'Instructor يدرس Course (Association)'],
        ['code', String.raw`
class Instructor {
    String name;
    Instructor(String n) { name = n; }
    void teach(Course c) {
        System.out.println(name + " teaches " + c.getCourseName());
    }
}
// main:
Instructor dr = new Instructor("Dr. Ali");
dr.teach(new Course("OOP", 3));   // Dr. Ali teaches OOP`]
      ]
    },
    {
      id: 's6',
      title: '6) Wrapper Classes',
      blocks: [
        ['p', 'الـ wrapper class يغلف الـ primitive داخل object.'],
        ['analogy', 'مثل إنك تحط هدية داخل علبة، الهدية نفسها بس صار لها شكل تقدر تشحنه مع الطرود.'],
        ['h', 'ليش نحتاجها؟'],
        ['ol', [
          'الـ collections مثل `ArrayList` و `HashMap` تقبل objects بس: `ArrayList<int>` ✘ لكن `ArrayList<Integer>` ✔.',
          'فيها دوال مفيدة مثل `Integer.parseInt("123")` و `Double.toString(3.14)`.'
        ]],
        ['ul', [
          '**Autoboxing:** primitive ← wrapper تلقائياً.',
          '**Unboxing:** wrapper ← primitive تلقائياً.'
        ]],
        ['table', ['Primitive', 'Wrapper'], [
          ['`int`', '`Integer`'],
          ['`double`', '`Double`'],
          ['`boolean`', '`Boolean`'],
          ['`char`', '`Character`'],
          ['`long`', '`Long`'],
          ['`float`', '`Float`'],
          ['`byte`', '`Byte`'],
          ['`short`', '`Short`']
        ]],
        ['lec', ''],
        ['code', String.raw`
Integer number = 10;          // Autoboxing
int n = number;               // Unboxing

ArrayList<Integer> list = new ArrayList<>();
list.add(5);                  // int → Integer (autoboxing)
int first = list.get(0);      // Integer → int (unboxing)`],
        ['p', 'ومثال WrapperExample في المحاضرة يضيف 10 و 20 و 30 لـ `ArrayList<Integer>` ويطبعهم بـ for-each: `10` ثم `20` ثم `30`.'],
        ['ex', 1, 'تحويل نص لرقم'],
        ['code', String.raw`
String s = "123";
System.out.println(s + 1);                    // 1231  ← دمج نصوص
System.out.println(Integer.parseInt(s) + 1);  // 124   ← جمع أرقام`],
        ['p', 'مفيد لما تقرأ رقم كنص (من ملف أو نموذج) وتبي تحسب فيه.'],
        ['ex', 2, 'Double وحدود int'],
        ['code', String.raw`
double d = Double.parseDouble("3.5");
System.out.println(d * 2);                 // 7.0
System.out.println(Integer.MAX_VALUE);     // 2147483647  ← أكبر رقم يسعه int`]
      ]
    },
    {
      id: 's7',
      title: '7) Array مقابل Array of Objects مقابل ArrayList',
      blocks: [
        ['table', ['', 'Array (Primitive)', 'Array of Objects', 'ArrayList'], [
          ['يخزن', 'قيم primitive', 'objects', 'objects بس'],
          ['الحجم', 'ثابت', 'ثابت', 'يكبر ويصغر'],
          ['دوال جاهزة', '✘ لا', '✘ لا', '`add()` , `remove()` , `get()` , `size()` , `contains()`'],
          ['المرونة', 'قليلة', 'قليلة', 'عالية']
        ]],
        ['h', 'أمثلة المحاضرة'],
        ['code', String.raw`
// Normal Array
int[] numbers = new int[3];
numbers[0] = 10; numbers[1] = 20; numbers[2] = 30;

// Array of Objects
Car[] cars = new Car[2];
cars[0] = new Car("Toyota");
cars[1] = new Car("BMW");
System.out.println(cars[0].getModel());       // Toyota

// ArrayList
import java.util.ArrayList;
ArrayList<Car> carList = new ArrayList<>();
carList.add(new Car("Toyota"));
carList.add(new Car("BMW"));
System.out.println(carList.get(0).getModel()); // Toyota`],
        ['ex', 1, 'دوال ArrayList'],
        ['code', String.raw`
ArrayList<String> names = new ArrayList<>();
names.add("Ali");
names.add("Sara");
names.add("Omar");
names.remove("Sara");
System.out.println(names);                   // [Ali, Omar]
System.out.println(names.size());            // 2
System.out.println(names.contains("Ali"));   // true`],
        ['note', 'المصفوفة العادية ما تقدر تحذف منها عنصر ويصغر حجمها، لكن `ArrayList` تقدر.', 'لاحظ:'],
        ['ex', 2, 'ArrayList من أرقام'],
        ['code', String.raw`
ArrayList<Integer> nums = new ArrayList<>();
nums.add(10);
nums.add(20);
nums.add(30);
System.out.println(nums.get(1));   // 20
int sum = 0;
for (int x : nums) sum += x;       // unboxing تلقائي
System.out.println(sum);           // 60`]
      ]
    },
    {
      id: 's8',
      title: '8) Big Numbers: BigInteger و BigDecimal',
      blocks: [
        ['p', 'الـ primitive له حد أعلى:'],
        ['table', ['النوع', 'الحجم', 'أكبر قيمة'], [
          ['`int`', '32-bit', '2,147,483,647'],
          ['`long`', '64-bit', '9,223,372,036,854,775,807']
        ]],
        ['p', 'للأرقام اللي أكبر من كذا أو تحتاج دقة عالية نستخدم classes من `java.math`:'],
        ['ul', [
          '**BigInteger:** أعداد صحيحة بأي حجم.',
          '**BigDecimal:** كسور عشرية دقيقة بالضبط، مناسبة للفلوس والحسابات العلمية.'
        ]],
        ['h', 'أشياء لازم تنتبه لها'],
        ['ol', [
          'نصنعهم من نص بين علامتي تنصيص: `new BigInteger("123...")`.',
          'ما نستخدم `+` و `*`، نستخدم دوال: `add()` و `subtract()` و `multiply()` و `divide()`.',
          'النتيجة object جديد (هم immutable)، فلازم نخزنها: `sum = a.add(b);`.'
        ]],
        ['lec', '1: BigInteger'],
        ['code', String.raw`
import java.math.BigInteger;

BigInteger a = new BigInteger("12345678901234567890");
BigInteger b = new BigInteger("98765432109876543210");
BigInteger sum = a.add(b);
System.out.println(sum);   // 111111111011111111100`],
        ['p', 'الرقمين أكبر من حد `long`، فما نقدر نجمعهم بالطريقة العادية. ونفس الفكرة في مثال المحاضرة الثاني: رقم من 30 خانة + رقم ثاني بـ `add()`.'],
        ['ex', 1, 'مشكلة الـ overflow وحلها'],
        ['code', String.raw`
int big = Integer.MAX_VALUE;     // 2147483647
System.out.println(big + 1);     // -2147483648  ← لف للسالب! (overflow)

BigInteger safe = BigInteger.valueOf(Integer.MAX_VALUE);
System.out.println(safe.add(BigInteger.ONE));   // 2147483648 ✔`],
        ['ex', 2, 'Factorial 25'],
        ['code', String.raw`
BigInteger fact = BigInteger.ONE;
for (int i = 1; i <= 25; i++) {
    fact = fact.multiply(BigInteger.valueOf(i));
}
System.out.println(fact);   // 15511210043330985984000000`],
        ['p', 'بـ `int` النتيجة بتطلع غلط لأن 25! أكبر بكثير من حده.'],
        ['lec', '2: BigDecimal'],
        ['code', String.raw`
import java.math.BigDecimal;

BigDecimal price = new BigDecimal("19.99");
BigDecimal tax = new BigDecimal("0.05");
BigDecimal total = price.add(price.multiply(tax));
System.out.println(total);   // 20.9895`],
        ['explain', '`19.99 + (19.99 × 0.05) = 19.99 + 0.9995 = 20.9895`. وفي المثال الثاني في المحاضرة الضريبة 0.08 فيطلع 21.5892.', 'الحساب:'],
        ['ex', 1, 'ليش ما نستخدم double مع الفلوس؟'],
        ['code', String.raw`
System.out.println(0.1 + 0.2);   // 0.30000000000000004  ← غير دقيق

BigDecimal x = new BigDecimal("0.1");
BigDecimal y = new BigDecimal("0.2");
System.out.println(x.add(y));    // 0.3  ✔`],
        ['ex', 2, 'سعر × كمية'],
        ['code', String.raw`
BigDecimal unitPrice = new BigDecimal("2.50");
BigDecimal qty = new BigDecimal("3");
System.out.println(unitPrice.multiply(qty));   // 7.50`]
      ]
    },
    {
      id: 's9',
      title: 'الخلاصة',
      blocks: [
        ['ul', [
          'OOP يمثل الواقع بـ classes و objects.',
          'Abstraction و Encapsulation يخفون التفاصيل ويحمون البيانات.',
          'Wrapper classes تخلي الـ primitives تشتغل كـ objects.',
          'BigInteger و BigDecimal للأرقام الضخمة والدقيقة.'
        ]]
      ]
    }
  ],

  quiz: [
    {
      type: 'concept',
      q: 'What is the simple difference between Abstraction and Encapsulation?',
      answer: 'Abstraction hides complexity (we care what it does, not how), while Encapsulation protects data with `private` plus getters and setters',
      wrong: [
        'Abstraction protects data with `private`, while Encapsulation hides how methods work',
        'They are the same principle with different names',
        'Abstraction means inheriting from another class, while Encapsulation means grouping classes into a package'
      ],
      explain: 'Using `Math.sqrt` without knowing the formula is Abstraction (hiding complexity). Making `speed` private and controlling it through methods is Encapsulation (protecting data). Inheriting is a third principle called Inheritance.'
    },
    {
      type: 'concept',
      q: 'We are designing a university system from this description: "A student registers for a course and pays the fees." Following the object-thinking steps, which are the best candidates for classes?',
      answer: '`Student` and `Course`',
      wrong: ['`register()` and `pay()`', '`name` and `credits`', '`main` and `print`'],
      explain: 'Classes are the **nouns** in the description (student, course). The verbs (registers, pays) become methods, and properties (name, credits) become attributes.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
class Fan {
    int level;
    void up()   { if (level < 3) level++; }
    void down() { if (level > 0) level--; }
}
// main:
Fan f = new Fan();
f.up(); f.up(); f.up(); f.up(); f.up();
f.down();
System.out.println(f.level);`,
      answer: String.raw`2`,
      wrong: ['4', '3', '5'],
      explain: '`level` starts at 0. The first three `up()` calls bring it to 3, and the fourth and fifth do nothing because of the `level < 3` check. Then `down()` brings it to 2.'
    },
    {
      type: 'concept',
      q: 'In a shopping app, each `Order` contains `OrderLines`. If an order is deleted, its lines are deleted with it because they mean nothing on their own. What type of relationship is this?',
      answer: 'Composition',
      wrong: ['Aggregation', 'Association', 'Inheritance'],
      explain: 'It is a "has a" relationship where the part cannot live without the whole (if the order disappears, its lines go too), so it is the strong Composition. If the part could survive on its own, it would be Aggregation.'
    },
    {
      type: 'concept',
      q: 'Which statement represents an **Inheritance** relationship?',
      answer: '`Car` is a `Vehicle`',
      wrong: ['`Car` has an `Engine`', '`Driver` uses a `Car`', '`Garage` has `Cars`'],
      explain: 'Inheritance is an "is a" relationship (a kind of): a car is a kind of vehicle. "Has a" is Composition or Aggregation, and "uses a" is Association.'
    },
    {
      type: 'concept',
      q: 'In the code itself, what usually distinguishes Composition from Aggregation?',
      answer: 'In Composition the part is created inside the class (like `new Engine()`); in Aggregation it comes in ready-made from outside (like `addBook(b)`)',
      wrong: [
        'Composition uses `extends`, and Aggregation uses `implements`',
        'In Aggregation all fields must be `private`',
        'There is no difference in the code; only the name differs'
      ],
      explain: 'When the class creates the part itself, the part lives and dies with it (Composition). When the part is created outside and passed in, it can outlive the whole (Aggregation). `extends` is for inheritance.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
class Player {
    String name;
    Player(String n) { name = n; }
}
class Team {
    ArrayList<Player> players = new ArrayList<>();
    void add(Player p) { players.add(p); }
}
// main:
Player p1 = new Player("Fahad");
Team t = new Team();
t.add(p1);
t.add(new Player("Nasser"));
System.out.print(t.players.size() + " ");
t = null;
System.out.println(p1.name);`,
      answer: String.raw`2 Fahad`,
      wrong: ['1 Fahad', '2 null', '0 Fahad'],
      explain: 'The team has two players (2). When `t = null`, the team is gone, but `p1` still points to the player, so the player still exists and `Fahad` is printed. This is the idea of Aggregation: the part lives on its own.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
class Animal {
    String name;
    void eat() { System.out.print(name + " eats. "); }
}
class Cat extends Animal {
    void meow() { System.out.print(name + " meows."); }
}
// main:
Cat c = new Cat();
c.name = "Mishmish";
c.eat();
c.meow();`,
      answer: String.raw`Mishmish eats. Mishmish meows.`,
      wrong: ['null eats. Mishmish meows.', 'Mishmish meows.', 'eats. meows.'],
      explain: '`Cat extends Animal`, so `Cat` inherits `name` and `eat()`. There is one `name` field on the object, so both methods print `Mishmish`.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
String a = "20";
String b = "5";
System.out.println(a + b);
System.out.println(Integer.parseInt(a) + Integer.parseInt(b));
System.out.println(a + Integer.parseInt(b) * 2);`,
      answer: String.raw`205
25
2010`,
      wrong: ['205\n25\n50', '25\n25\n2010', '205\n205\n2010'],
      explain: 'String + String = concatenation (`205`). After `parseInt` they are numbers, so they are added (`25`). On the third line multiplication happens first: `5 * 2 = 10`, then String + number = concatenation: `"20" + 10` = `2010`.'
    },
    {
      type: 'error',
      q: 'Where is the error in this program?',
      code: String.raw`
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<int> nums = new ArrayList<>();
        nums.add(4);
        System.out.println(nums.get(0));
    }
}`,
      answer: 'Line 5: `ArrayList` cannot hold primitives; it must be `ArrayList<Integer>`',
      wrong: [
        'Line 6: you must write `nums.add(new Integer(4))` because Java does not convert automatically',
        'Line 1: the correct import is `java.lang.ArrayList`',
        'Line 7: `get` returns an object that you must convert to `int` yourself'
      ],
      explain: 'Collections hold objects only, so we use the wrapper `Integer`. After that, `add(4)` works through automatic autoboxing, and `get(0)` returns an `Integer` that prints normally.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
ArrayList<String> list = new ArrayList<>();
list.add("A");
list.add("B");
list.add("C");
list.remove("A");
list.add("D");
System.out.println(list + " " + list.size() + " " + list.get(1));`,
      answer: String.raw`[B, C, D] 3 C`,
      wrong: ['[B, C, D] 3 B', '[A, B, C, D] 4 B', '[B, C, D] 4 C'],
      explain: 'After removing `A`, the ArrayList shrinks and the elements shift: `[B, C]`. Then `D` is added = `[B, C, D]`. The size is 3, and `get(1)` is the second slot (counting starts at 0) = `C`.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
int max = Integer.MAX_VALUE;
long big = max;
System.out.println(max + 1);
System.out.println(big + 1);`,
      answer: String.raw`-2147483648
2147483648`,
      wrong: ['2147483648\n2147483648', '-2147483648\n-2147483648', '2147483647\n2147483648'],
      explain: '`max + 1` is an `int` calculation, so it goes past the limit and wraps around to negative (overflow). `big` is a `long`, whose limit is much larger, so `big + 1` is correct.'
    },
    {
      type: 'error',
      q: 'This program does not compile. Why?',
      code: String.raw`
import java.math.BigInteger;

public class Main {
    public static void main(String[] args) {
        BigInteger a = new BigInteger("90000000000000000000");
        BigInteger b = new BigInteger("10000000000000000000");
        BigInteger sum = a + b;
        System.out.println(sum);
    }
}`,
      answer: 'Line 7: you cannot use `+` with `BigInteger`; you must use `a.add(b)`',
      wrong: [
        'Line 5: the number is larger than the limit of `BigInteger`',
        'Line 5: a `BigInteger` must be created from a number, not from a String',
        'Line 8: a `BigInteger` cannot be printed without `toString()`'
      ],
      explain: 'A BigInteger is an object, not a primitive, so arithmetic is done with methods: `add`, `subtract`, `multiply`, and `divide`. It really is created from a String, it has no size limit, and `println` prints it directly.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
BigDecimal price = new BigDecimal("10.25");
price.add(new BigDecimal("5"));
BigDecimal total = price.multiply(new BigDecimal("2"));
System.out.println(price + " " + total);`,
      answer: String.raw`10.25 20.50`,
      wrong: ['15.25 30.50', '10.25 20.5', '15.25 20.50'],
      explain: '`BigDecimal` is immutable: `price.add(...)` returned a new object that was never stored, so `price` stays 10.25. Multiplying `10.25 × 2` gives `20.50` (it keeps two decimal places, just like `2.50 × 3 = 7.50`).'
    },
    {
      type: 'error',
      q: 'This code compiles, but it fails at runtime. Where, and why?',
      code: String.raw`
ArrayList<Integer> scores = new ArrayList<>();
scores.add(90);
scores.add(null);
int total = 0;
for (int s : scores) {
    total += s;
}
System.out.println(total);`,
      answer: 'Line 5: the loop tries to unbox `null` into an `int`, which throws a NullPointerException',
      wrong: [
        'Line 3: `ArrayList<Integer>` does not accept `null`, so it fails when adding',
        'Line 2: you must write `scores.add(Integer.valueOf(90))` or it fails',
        'Line 6: you cannot add an `Integer` to an `int` without converting'
      ],
      explain: '`Integer` is an object, so it can be `null`, and adding it is fine. But `for (int s : scores)` converts each element to `int` automatically (unboxing), and when it reaches `null` there is no number to convert, so a NullPointerException is thrown.'
    }
  ]
});
