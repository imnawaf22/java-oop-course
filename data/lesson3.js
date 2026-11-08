/* =========================================================
   الدرس 3: References و Static و Modifiers و Encapsulation
   (طريقة كتابة البيانات مشروحة في أول data/lesson1.js)
   ========================================================= */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
  id: 3,
  title: 'References و Static و Modifiers و Encapsulation',
  description: 'وين تعيش الـ objects في الذاكرة (Stack و Heap)، الـ references و null، المقارنة بـ == و equals، مكتبة Java، static و final، مستويات الوصول، والتغليف.',
  intro: 'هذا الدرس يشرح وين تعيش الـ objects في الذاكرة، ومعنى static، ومين يقدر يشوف بياناتك (public / private)، وكيف نحمي البيانات بالـ Encapsulation. كل مثال من المحاضرة معه مثالين إضافيين.',

  summary: [
    'الذاكرة قسمين: **Stack** (المتغيرات البسيطة والعناوين) و **Heap** (الـ objects اللي نصنعها بـ `new`).',
    'الـ **reference variable** يخزن **عنوان** الـ object مو الـ object نفسه. لو نسخناه (`c2 = c1`) الاثنين يأشرون على نفس الـ object.',
    '`null` = المتغير فاضي ما يأشر على شي. لو استخدمناه يطلع خطأ **NullPointerException**.',
    '`==` مع الـ objects يقارن **العناوين**، و `.equals()` (في String مثلاً) يقارن **المحتوى**.',
    '**Java Library:** classes جاهزة مثل `Scanner` (إدخال) و `Random` (أرقام عشوائية)، نستخدمها بـ `import`.',
    '`static` = يخص الـ class نفسه ومشترك بين كل الـ objects، ونوصل له باسم الـ class.',
    '`static final` = ثابت ما يتغير، واسمه ينكتب كابتل مثل `GRAVITY`.',
    'مستويات الوصول من الأوسع للأضيق: `public` ← `protected` ← (default) ← `private`.',
    '**Encapsulation** = نخلي البيانات `private` ونوصل لها بـ getters و setters عشان نتحكم ونتحقق من القيم.',
    'Java دايماً **pass by value**: مع الـ objects تنرسل نسخة من العنوان، فنقدر نغير بيانات الـ object لكن ما نقدر نغير المتغير الأصلي يأشر على object ثاني.'
  ],

  sections: [
    {
      id: 's1',
      title: '1) Stack و Heap',
      blocks: [
        ['table', ['', 'Stack', 'Heap'], [
          ['وش يخزن؟', 'المتغيرات البسيطة (`int` , `char` , `boolean`) + عناوين الـ objects', 'الـ objects نفسها (كل شي مصنوع بـ `new`)'],
          ['الترتيب', 'LIFO: آخر واحد يدخل أول واحد يطلع', 'بدون ترتيب'],
          ['مين ينظفه؟', 'ينمسح لما تخلص الدالة', 'Garbage Collector']
        ]],
        ['analogy', '(تشبيه المحاضرة) الـ Stack مثل كومة أوراق على المكتب، كل ورقة = استدعاء دالة، مكتوب فيها المتغيرات وعناوين الـ objects. والـ Heap مستودع ضخم، كل object صندوق فيه، والورقة بس مكتوب فيها رقم الصندوق.']
      ]
    },
    {
      id: 's2',
      title: '2) Reference Variables',
      blocks: [
        ['p', 'المتغير اللي نوصل فيه للـ object ما يخزن الـ object، يخزن **عنوانه**. فلو عندنا متغيرين بنفس العنوان، أي تغيير من واحد يبان في الثاني. مثل شخصين معهم مفتاح نفس البيت.'],
        ['lec', ''],
        ['code', String.raw`
class Car {
    String model;
}
// main:
Car c1 = new Car();
c1.model = "Toyota";
Car c2 = c1;            // ما صنعنا سيارة جديدة! بس نسخنا العنوان
c2.model = "Honda";
System.out.println(c1.model);   // Honda`],
        ['explain', '(1) انصنعت سيارة في الـ Heap و `c1` فيه عنوانها. (2) `model = Toyota`. (3) `c2` أخذ نفس العنوان. (4) غيرنا من خلال `c2` فتغيرت نفس السيارة فطبع `Honda`.', 'التتبع:'],
        ['ex', 1, 'لما نصنع object جديد ما يتأثرون'],
        ['code', String.raw`
Car c1 = new Car();
c1.model = "Toyota";
Car c2 = new Car();     // سيارة ثانية مستقلة
c2.model = "Honda";
System.out.println(c1.model);   // Toyota`],
        ['ex', 2, 'ثلاث متغيرات و object واحد'],
        ['code', String.raw`
Car a = new Car();
a.model = "Kia";
Car b = a;
Car c = b;
c.model = "BMW";
System.out.println(a.model + " " + b.model);   // BMW BMW`],
        ['explain', 'فيه `new` وحدة بس، يعني سيارة وحدة، والثلاثة يأشرون عليها.'],
        ['rule', 'عدد الـ objects = عدد مرات `new`.', 'قاعدة سهلة:']
      ]
    },
    {
      id: 's3',
      title: '3) null و Garbage Collection',
      blocks: [
        ['p', '`null` يعني المتغير ما يأشر على أي object. لو حاولنا نوصل لبياناته يطلع خطأ **NullPointerException**. والـ object اللي ما أحد يأشر عليه يصير جاهز للحذف بالـ **Garbage Collector**.'],
        ['lec', ''],
        ['code', String.raw`
Car c1 = new Car();
c1.model = "Ford";
c1 = null;   // c1 ما عاد يأشر على السيارة ← السيارة جاهزة للحذف
Car c2;      // متغير محلي بدون قيمة: استخدامه قبل التعيين = خطأ ترجمة`],
        ['ex', 1, 'الـ object ما ينحذف إذا فيه متغير ثاني يأشر عليه'],
        ['code', String.raw`
Car c = new Car();
c.model = "Ford";
Car d = c;
c = null;
System.out.println(d.model);   // Ford`],
        ['ex', 2, 'NullPointerException وكيف نتجنبه'],
        ['code', String.raw`
Car c = null;
// System.out.println(c.model);   ← NullPointerException
if (c != null) {
    System.out.println(c.model);
} else {
    System.out.println("No car");    // يطبع هذا
}`]
      ]
    },
    {
      id: 's4',
      title: '4) المقارنة: `==` مقابل `.equals()`',
      blocks: [
        ['table', ['', 'مع الـ objects', 'مع `int` و `double`'], [
          ['`==`', 'يقارن العناوين (هل هو نفس الـ object؟)', 'يقارن القيم'],
          ['`.equals()`', 'الأصل يقارن العناوين، لكن `String` و `Integer` معدلينها عشان تقارن المحتوى', 'ما تنفع']
        ]],
        ['lec', ''],
        ['code', String.raw`
String s1 = new String("Java");
String s2 = new String("Java");
String s3 = s1;
System.out.println(s1 == s2);        // false (عناوين مختلفة)
System.out.println(s1.equals(s2));   // true  (نفس المحتوى)
System.out.println(s1 == s3);        // true  (نفس العنوان)
System.out.println(s3.equals(s1));   // true`],
        ['ex', 1, 'equals تفرق بين الحروف الكبيرة والصغيرة'],
        ['code', String.raw`
String a = new String("Java");
String b = new String("java");
System.out.println(a.equals(b));   // false (J كبيرة و j صغيرة)
int x = 5, y = 5;
System.out.println(x == y);        // true  (قيم بسيطة)`],
        ['ex', 2, 'class حقنا ما عدل equals'],
        ['code', String.raw`
Car x = new Car(); x.model = "Kia";
Car y = new Car(); y.model = "Kia";
Car z = x;
System.out.println(x == y);        // false
System.out.println(x.equals(y));   // false ← لأن Car ما عدل equals، فهي تقارن عناوين
System.out.println(x == z);        // true`]
      ]
    },
    {
      id: 's5',
      title: '5) مكتبة Java (Java Class Library)',
      blocks: [
        ['p', 'Java جايبة لك آلاف الـ classes الجاهزة، مرتبة في packages مثل `java.util`. تستخدمها بـ `import` بدل ما تكتب الكود من الصفر.'],
        ['lec', 'Scanner (الإدخال من المستخدم)'],
        ['code', String.raw`
import java.util.Scanner;
public class ScannerExample {
    public static void main(String[] args) {
        Scanner inputReader = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = inputReader.nextLine();
        System.out.println("Hello, " + name + "!");
        inputReader.close();
    }
}`],
        ['p', 'لو كتب المستخدم `Ali` يطبع: `Hello, Ali!`'],
        ['ex', 1, 'قراءة رقم صحيح'],
        ['code', String.raw`
Scanner in = new Scanner(System.in);
System.out.print("Enter your age: ");
int age = in.nextInt();
System.out.println("Next year you will be " + (age + 1));
in.close();`],
        ['p', 'إذا دخل 20 يطبع: `Next year you will be 21`'],
        ['ex', 2, 'مجموع رقمين عشريين'],
        ['code', String.raw`
Scanner in = new Scanner(System.in);
double a = in.nextDouble();
double b = in.nextDouble();
System.out.println("Sum = " + (a + b));
in.close();`],
        ['p', 'إذا دخل 2.5 ثم 4 يطبع: `Sum = 6.5`'],
        ['table', ['الدالة', 'تقرأ'], [
          ['`nextLine()`', 'سطر نص كامل'],
          ['`nextInt()`', 'رقم صحيح'],
          ['`nextDouble()`', 'رقم عشري']
        ]],
        ['lec', 'Random (أرقام عشوائية)'],
        ['code', String.raw`
import java.util.Random;

Random dice = new Random();
int roll = dice.nextInt(6) + 1;          // من 1 إلى 6
System.out.println("You rolled a " + roll);
double randomDouble = dice.nextDouble(); // من 0.0 إلى أقل من 1.0`],
        ['p', '**الفكرة:** `nextInt(6)` تعطي من 0 إلى 5، ولما نزيد 1 تصير من 1 إلى 6 مثل الزاهر.'],
        ['ex', 1, 'رقم من 1 إلى 100'],
        ['code', String.raw`
Random r = new Random();
int n = r.nextInt(100) + 1;   // من 1 إلى 100
System.out.println("Lucky number: " + n);`],
        ['ex', 2, 'رمي عملة'],
        ['code', String.raw`
Random r = new Random();
int coin = r.nextInt(2);      // 0 أو 1
if (coin == 0) System.out.println("Heads");
else           System.out.println("Tails");`],
        ['p', 'المخرج يتغير كل مرة تشغل البرنامج.']
      ]
    },
    {
      id: 's6',
      title: '6) static',
      blocks: [
        ['p', '`static` يعني المتغير أو الدالة **يخص الـ class نفسه** مو object معين.'],
        ['analogy', 'في الفصل، كل طالب عنده دفتره (instance)، لكن **السبورة وحدة ومشتركة** للكل (static).'],
        ['table', ['', 'Static', 'Instance'], [
          ['يخص', 'الـ class', 'كل object لحاله'],
          ['النسخ', 'نسخة وحدة مشتركة', 'نسخة لكل object'],
          ['الوصول', '`ClassName.member`', '`objectName.member`'],
          ['الذاكرة', 'مرة وحدة لما ينحمل الـ class', 'مع كل `new`'],
          ['يقدر يستخدم', 'static بس (مباشرة)', 'static و non-static']
        ]],
        ['rule', 'لأنها نقطة بداية البرنامج. لو ما كانت static، الـ JVM بيحتاج يصنع object أول عشان يستدعيها، وهذا مستحيل لأن البرنامج ما بدأ. هي مثل **زر التشغيل** موجود على الجهاز قبل ما يشتغل.', 'ليش main لازم static؟'],
        ['lec', 'عداد الزوار'],
        ['code', String.raw`
class VisitorCounter {
    static int visitors = 0;    // مشترك بين الكل
    String visitorName;         // لكل زائر اسمه
    VisitorCounter(String name) {
        this.visitorName = name;
        visitors++;             // يزيد العداد المشترك
    }
    static int getVisitorCount() { return visitors; }
}
// main:
new VisitorCounter("Alice");
new VisitorCounter("Bob");
new VisitorCounter("Charlie");
System.out.println("Total visitors: " + VisitorCounter.visitors);        // 3
System.out.println("Current count: " + VisitorCounter.getVisitorCount()); // 3`],
        ['explain', 'لو `visitors` مو static، كل زائر بيكون عنده عداد لحاله = 1. لكن لأنه static، العداد واحد ووصل 3.'],
        ['ex', 1, 'عدد الطلاب'],
        ['code', String.raw`
class Student {
    static int count = 0;
    String name;
    Student(String name) {
        this.name = name;
        count++;
    }
}
// main:
Student s1 = new Student("Ali");
Student s2 = new Student("Sara");
System.out.println(s1.name + " " + s2.name);   // Ali Sara  ← كل واحد اسمه
System.out.println(Student.count);             // 2         ← عداد واحد للكل`],
        ['ex', 2, 'دالة static بدون object'],
        ['code', String.raw`
class MathHelper {
    int lastResult;                      // instance
    static int square(int n) {
        return n * n;
        // lastResult = n;   ← خطأ: static ما تقدر توصل لـ instance مباشرة
    }
}
// main:
System.out.println(MathHelper.square(5));   // 25  ← بدون new`]
      ]
    },
    {
      id: 's7',
      title: '7) الثوابت static final',
      blocks: [
        ['ul', [
          '`static` : يخص الـ class.',
          '`final` : قيمته ما تتغير بعد أول تعيين.'
        ]],
        ['p', 'الاسم كابتل وبين الكلمات `_` مثل `APP_NAME`. مثال جاهز في Java: `Math.PI`.'],
        ['lec', ''],
        ['code', String.raw`
public class Constants {
    public static final double GRAVITY = 9.81;
    public static final String APP_NAME = "My Awesome App";
    public static void main(String[] args) {
        System.out.println("Gravity is: " + Constants.GRAVITY + " m/s^2");
    }
}
// المخرج: Gravity is: 9.81 m/s^2`],
        ['ex', 1, 'ضريبة ثابتة'],
        ['code', String.raw`
public static final double TAX_RATE = 0.15;
// main:
double price = 200;
System.out.println(price + price * TAX_RATE);   // 230.0`],
        ['ex', 2, 'محاولة تغيير ثابت'],
        ['code', String.raw`
public static final int MAX_STUDENTS = 30;
// main:
// MAX_STUDENTS = 40;   ← خطأ: cannot assign a value to final variable
System.out.println(MAX_STUDENTS);   // 30`]
      ]
    },
    {
      id: 's8',
      title: '8) Visibility Modifiers (مستويات الوصول)',
      blocks: [
        ['p', 'تحدد مين يقدر يشوف المتغير أو الدالة. الـ **package** هو مجلد فيه مجموعة classes.'],
        ['table', ['Modifier', 'نفس الـ class', 'نفس الـ package', 'subclass في package ثاني', 'أي مكان', 'تشبيه المحاضرة'], [
          ['`public`', '✔', '✔', '✔', '✔', 'الباب المفتوح'],
          ['`protected`', '✔', '✔', '✔', '✘', 'العائلة والأصدقاء'],
          ['بدون كلمة (default)', '✔', '✔', '✘', '✘', 'النادي الخاص'],
          ['`private`', '✔', '✘', '✘', '✘', 'حافظ الأسرار']
        ]],
        ['h', 'أمثلة المحاضرة (مختصرة)'],
        ['code', String.raw`
// public: ينشاف من أي package
package com.company.utils;
public class PublicExample { public String message = "Hello from public!"; }

package com.app.main;                       // package ثاني
import com.company.utils.PublicExample;
... System.out.println(new PublicExample().message);   // ✔ Works

// protected: الـ subclass يشوفه حتى لو في package ثاني
public class Parent { protected String protectedMessage = "Shared secret."; }
public class Child extends Parent {
    public void testAccess() { System.out.println(protectedMessage); }   // ✔ Works
}

// default: بس نفس الـ package
class PrivateClub { String message = "Club member only."; }
// SamePackage (نفس الـ package) يقدر يقرأ member.message  ✔

// private: بس داخل نفس الـ class
public class MySecretClass {
    private String secret = "My eyes only!";
    public void revealSecret() { System.out.println(secret); }   // ✔ داخل نفس الـ class
}
// أي class ثاني: obj.secret  ← ✘ خطأ`],
        ['ex', 1, 'الأربعة من class في نفس الـ package'],
        ['code', String.raw`
package school;
public class Data {
    public    int a = 1;
    protected int b = 2;
              int c = 3;   // default
    private   int d = 4;
}

package school;            // نفس الـ package
public class Test {
    void run() {
        Data x = new Data();
        System.out.println(x.a);   // ✔
        System.out.println(x.b);   // ✔ (نفس الـ package)
        System.out.println(x.c);   // ✔ (نفس الـ package)
        // System.out.println(x.d); ✘ private
    }
}`],
        ['ex', 2, 'نفس الـ class لكن من package ثاني (مو subclass)'],
        ['code', String.raw`
package shop;
import school.Data;
public class Other {
    void run() {
        Data x = new Data();
        System.out.println(x.a);   // ✔ public بس
        // x.b  ✘ protected (مو subclass)
        // x.c  ✘ default (package ثاني)
        // x.d  ✘ private
    }
}`]
      ]
    },
    {
      id: 's9',
      title: '9) Encapsulation (التغليف)',
      blocks: [
        ['p', '**الفكرة:** نجمع البيانات والدوال داخل class، ونخفي البيانات بـ `private`، ونخلي الوصول لها عن طريق:'],
        ['ul', [
          '**getter:** يقرأ القيمة (`getAge()`).',
          '**setter:** يغير القيمة بعد ما يتحقق منها (`setAge()`).'
        ]],
        ['analogy', '(تشبيه المحاضرة) محرك السيارة. أنت تتعامل مع الدركسون والبنزين والفرامل، وما تلمس المكابس والبواجي مباشرة.'],
        ['lec', 'Student والعمر'],
        ['p', '**التصميم السيئ:** `public int age;` أي أحد يقدر يحط عمر سالب. **التصميم الصح:**'],
        ['code', String.raw`
public class Student {
    private int age;
    public int getAge() { return age; }
    public void setAge(int age) {
        if (age > 0) {
            this.age = age;
        } else {
            System.err.println("Error: Age cannot be negative or zero.");
        }
    }
}
// main:
Student s = new Student();
s.setAge(25);
System.out.println("Age: " + s.getAge());                  // Age: 25
s.setAge(-5);                                              // رسالة خطأ
System.out.println("Age after invalid set: " + s.getAge()); // 25`],
        ['explain', 'الـ setter رفض -5 فبقي العمر 25.'],
        ['ex', 1, 'رصيد البنك'],
        ['code', String.raw`
public class Wallet {
    private double balance;
    public void deposit(double amount) {
        if (amount > 0) balance += amount;
        else System.out.println("Invalid amount");
    }
    public double getBalance() { return balance; }
}
// main:
Wallet w = new Wallet();
w.deposit(500);
w.deposit(-50);                       // Invalid amount
System.out.println(w.getBalance());   // 500.0`],
        ['ex', 2, 'درجة من 0 إلى 100'],
        ['code', String.raw`
public class Exam {
    private int grade;
    public void setGrade(int g) {
        if (g >= 0 && g <= 100) grade = g;
        else System.out.println("Grade must be 0-100");
    }
    public int getGrade() { return grade; }
}
// main:
Exam e = new Exam();
e.setGrade(95);
e.setGrade(150);                     // Grade must be 0-100
System.out.println(e.getGrade());    // 95
// e.grade = 150;   ← ✘ خطأ، private`]
      ]
    },
    {
      id: 's10',
      title: '10) تمرير الـ Objects للدوال',
      blocks: [
        ['rule', 'Java دايماً **pass by value**، يعني ترسل نسخة.', 'القاعدة الذهبية:'],
        ['table', ['لما ترسل', 'النسخة هي', 'تقدر تغير الأصل؟'], [
          ['primitive (`int`)', 'نسخة من القيمة', '✘ لا'],
          ['object', 'نسخة من العنوان', 'تقدر تغير بيانات الـ object، لكن ما تقدر تخلي المتغير الأصلي يأشر على object ثاني']
        ]],
        ['lec', '1: primitive'],
        ['code', String.raw`
public static void modify(int number) {
    number = 100;    // يغير النسخة
}
// main:
int x = 50;
modify(x);
System.out.println("After modify, x is: " + x);   // 50`],
        ['lec', '2: object'],
        ['code', String.raw`
class Person { String name; }
public static void modifyObject(Person p) {
    p.name = "Ali";       // يغير الـ object الأصلي
    p = new Person();     // p صار يأشر على object جديد (بس النسخة)
    p.name = "New Person";
}
// main:
Person person1 = new Person();
person1.name = "Initial Name";
modifyObject(person1);
System.out.println(person1.name);   // Ali`],
        ['explain', '`p` و `person1` يأشرون على نفس الـ object ← الاسم صار `Ali` ← `p` انتقل لـ object جديد، و `person1` ما تحرك ← يطبع `Ali`.', 'التتبع:'],
        ['ex', 1, 'زيادة راتب موظف'],
        ['code', String.raw`
class Employee { double salary; }
public static void raise(Employee e) {
    e.salary += 1000;
}
// main:
Employee emp = new Employee();
emp.salary = 5000;
raise(emp);
System.out.println(emp.salary);   // 6000.0`],
        ['ex', 2, 'استبدال الـ object ما يأثر'],
        ['code', String.raw`
public static void replace(Employee e) {
    e = new Employee();   // النسخة راحت لـ object جديد
    e.salary = 9999;
}
// main:
Employee emp = new Employee();
emp.salary = 5000;
replace(emp);
System.out.println(emp.salary);   // 5000.0`]
      ]
    },
    {
      id: 's11',
      title: '11) حل الـ Challenge Task: BankAccount',
      blocks: [
        ['p', '**المطلوب:** حقول `private` (`accountNumber` و `balance`)، مع getters و setters بتحقق، متغير `static` يعد الحسابات، ودوال إيداع وسحب.'],
        ['code', String.raw`
public class BankAccount {
    private String accountNumber;
    private double balance;
    private static int count = 0;          // عدد الحسابات

    public BankAccount(String accountNumber, double balance) {
        this.accountNumber = accountNumber;
        setBalance(balance);
        count++;
    }
    public String getAccountNumber() { return accountNumber; }
    public double getBalance()       { return balance; }
    public void setBalance(double balance) {
        if (balance >= 0) this.balance = balance;
        else System.out.println("Balance cannot be negative");
    }
    public void deposit(double amount) {
        if (amount > 0) balance += amount;
        else System.out.println("Invalid deposit");
    }
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) balance -= amount;
        else System.out.println("Invalid withdraw");
    }
    public static int getCount() { return count; }
}

public class TestBank {
    public static void main(String[] args) {
        BankAccount a1 = new BankAccount("A100", 1000);
        BankAccount a2 = new BankAccount("A200", 500);
        a1.deposit(250);    // 1250
        a2.withdraw(800);   // مرفوض: أكثر من الرصيد
        a2.withdraw(200);   // 300
        System.out.println(a1.getAccountNumber() + ": " + a1.getBalance());
        System.out.println(a2.getAccountNumber() + ": " + a2.getBalance());
        System.out.println("Total accounts: " + BankAccount.getCount());
    }
}`],
        ['out', String.raw`
Invalid withdraw
A100: 1250.0
A200: 300.0
Total accounts: 2`],
        ['explain', '`private` + setters بتحقق = Encapsulation، و `count` الـ `static` يعد كل الحسابات لأنه مشترك.', 'وين طبقنا كل فكرة؟']
      ]
    }
  ],

  quiz: [
    {
      type: 'concept',
      q: 'Where is an object created with `new` stored?',
      answer: 'On the Heap; the variable on the Stack holds only its address',
      wrong: [
        'On the Stack, together with the primitive variables',
        'On the Heap, and the variable holds a full copy of the object',
        'Inside the class file itself'
      ],
      explain: 'Everything created with `new` lives on the Heap. The variable (the reference) lives on the Stack and holds the object\'s address, like a slip of paper with a box number written on it.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
class Car { String model; }
// main:
Car a = new Car();
a.model = "Kia";
Car b = a;
b.model = "Lexus";
System.out.println(a.model + " " + b.model);`,
      answer: String.raw`Lexus Lexus`,
      wrong: ['Kia Lexus', 'Kia Kia', 'Lexus Kia'],
      explain: '`Car b = a;` did not create a new car; it only copied the address. So `a` and `b` point to the same car, and any change through `b` is visible through `a`.'
    },
    {
      type: 'concept',
      q: 'How many objects exist in memory after this code runs?',
      code: String.raw`
Car c1 = new Car();
Car c2 = new Car();
Car c3 = c1;
Car c4 = c3;
c2 = c4;`,
      answer: '2',
      wrong: ['4', '3', '1'],
      explain: 'Number of objects = number of times `new` runs, which is twice here. The other lines only copy addresses. (After `c2 = c4`, nothing points to the second car anymore, so it becomes eligible for the Garbage Collector, but it was still created.)'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
String s1 = new String("OOP");
String s2 = new String("OOP");
String s3 = s2;
System.out.println(s1 == s2);
System.out.println(s1.equals(s2));
System.out.println(s2 == s3);`,
      answer: String.raw`false
true
true`,
      wrong: ['true\ntrue\ntrue', 'false\nfalse\ntrue', 'false\ntrue\nfalse'],
      explain: '`s1` and `s2` are two different objects (each made with `new`), so `==` compares addresses = false. `equals` in String compares the content = true. `s3` has the same address as `s2`, so `==` = true.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
class Ticket {
    static int sold = 0;
    int number;
    Ticket() {
        sold++;
        number = sold;
    }
}
// main:
Ticket t1 = new Ticket();
Ticket t2 = new Ticket();
Ticket t3 = new Ticket();
System.out.println(t1.number + " " + t3.number + " " + Ticket.sold);`,
      answer: String.raw`1 3 3`,
      wrong: ['1 1 3', '3 3 3', '1 3 1'],
      explain: '`sold` is static, so there is one shared counter that reaches 3. `number` is an instance field: each ticket saved the counter\'s value at the moment it was created, so `t1` got 1 and `t3` got 3.'
    },
    {
      type: 'error',
      q: 'Where is the error in this class?',
      code: String.raw`
class Calculator {
    int memory;
    static int add(int a, int b) {
        memory = a + b;
        return memory;
    }
}`,
      answer: 'Line 4: a `static` method cannot directly access an instance variable like `memory`',
      wrong: [
        'Line 3: `static` methods cannot take parameters',
        'Line 2: an instance variable must be given an initial value',
        'Line 5: you cannot return a variable from a `static` method'
      ],
      explain: 'A static method belongs to the class and runs without any object, so it does not know which object\'s `memory` you mean. Fix: make `memory` static, or remove `static` from the method.'
    },
    {
      type: 'concept',
      q: 'Why must the `main` method be `static`?',
      answer: 'Because it is the program\'s starting point, and the JVM must call it before any object exists',
      wrong: [
        'So it runs faster than the other methods',
        'So no other class can call it',
        'Because `static` automatically makes a method `public`'
      ],
      explain: 'If it were not static, the JVM would have to create an object first in order to call it, which is impossible before the program has started. It is like the power button that exists on a device before it is turned on.'
    },
    {
      type: 'error',
      q: 'What is the problem with this code?',
      code: String.raw`
class Car { String model; }
// main:
Car c;
c.model = "BMW";
System.out.println(c.model);`,
      answer: 'Line 4: compile error, because the local variable `c` was never given a value before being used',
      wrong: [
        'Line 4: it compiles, but throws a NullPointerException at runtime',
        'Line 1: the class must be `public`',
        'Line 5: `model` must be `private` to be printed'
      ],
      explain: 'A local variable (inside a method) does not get `null` automatically like instance variables do, so the compiler refuses to use it before assignment (variable might not have been initialized). If we wrote `Car c = null;`, it would compile and then throw a NullPointerException.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
class Car { String model; }
// main:
Car x = new Car();
x.model = "Audi";
Car y = x;
x = null;
if (x == null) System.out.print("gone ");
System.out.println(y.model);`,
      answer: String.raw`gone Audi`,
      wrong: ['gone null', 'NullPointerException', 'Audi'],
      explain: '`x = null` only disconnects `x`. The car itself still exists because `y` points to it (it is not deleted). So `gone` is printed because `x` is null, and then `y.model` = `Audi`.'
    },
    {
      type: 'error',
      q: 'Where is the error in this program?',
      code: String.raw`
public class Config {
    public static final int MAX_USERS = 50;
    public static void main(String[] args) {
        System.out.println(MAX_USERS);
        MAX_USERS = MAX_USERS + 10;
        System.out.println(MAX_USERS);
    }
}`,
      answer: 'Line 5: `MAX_USERS` is `final`, so its value cannot change after the first assignment',
      wrong: [
        'Line 2: constants must be `private`',
        'Line 4: you must write `Config.MAX_USERS` or it will not be found',
        'Line 6: you cannot print the same constant twice'
      ],
      explain: '`final` means the value is fixed, so any new assignment is a compile error (cannot assign a value to final variable). Inside the same class, a static variable can be used by its name alone, without the class name.'
    },
    {
      type: 'concept',
      q: 'Given `Random r = new Random();`, which values can `r.nextInt(10) + 5` return?',
      answer: 'From 5 to 14',
      wrong: ['From 5 to 15', 'From 0 to 15', 'From 6 to 15'],
      explain: '`nextInt(10)` returns 0 to 9 (10 itself is excluded). Adding 5 shifts the range to 5 to 14.'
    },
    {
      type: 'concept',
      q: 'Class `Data` in package `school` has `protected int b`. We write `new Data().b` inside class `Other` in package `shop`, and `Other` is **not** a subclass. What happens?',
      answer: 'Compile error, because `protected` is visible only in the same package and in subclasses',
      wrong: [
        'It works, because `protected` is wider than default access',
        'It works, because the class `Data` itself is declared `public`',
        'It works, but returns 0 instead of 2'
      ],
      explain: '`protected` = same class + same package + subclasses, even in another package. `Other` is neither in the same package nor a subclass, so it cannot see `b`. (Default access is narrower: same package only.)'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
class Exam {
    private int grade = 50;
    public void setGrade(int g) {
        if (g >= 0 && g <= 100) grade = g;
    }
    public int getGrade() { return grade; }
}
// main:
Exam e = new Exam();
e.setGrade(120);
System.out.print(e.getGrade() + " ");
e.setGrade(80);
e.setGrade(-5);
System.out.println(e.getGrade());`,
      answer: String.raw`50 80`,
      wrong: ['120 -5', '100 0', '50 -5'],
      explain: 'The setter validates: 120 is rejected, so the value stays 50. Then 80 is accepted, and -5 is rejected, so it stays 80. This is the benefit of encapsulation: nobody can store an invalid value.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
class Person { String name; }

static void rename(Person p) {
    p.name = "Omar";
    p = new Person();
    p.name = "Khalid";
}
// main:
Person a = new Person();
a.name = "Ali";
rename(a);
System.out.println(a.name);`,
      answer: String.raw`Omar`,
      wrong: ['Khalid', 'Ali', 'null'],
      explain: '`p` is a copy of `a`\'s address, so `p.name = "Omar"` changes the original object. Then `p = new Person()` makes only the copy point to a new object, so `Khalid` goes to the new one and `a` is unaffected.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
static void swap(int[] arr, int x) {
    int temp = arr[0];
    arr[0] = x;
    x = temp;
}
// main:
int[] a = {1, 2};
int b = 9;
swap(a, b);
System.out.println(a[0] + " " + b);`,
      answer: String.raw`9 9`,
      wrong: ['9 1', '1 9', '1 1'],
      explain: 'The array is passed by address, so `arr[0] = 9` changes the original `a[0]`. `x` is only a copy of `b`, so changing it to 1 does not affect `b`, which stays 9.'
    }
  ]
});
