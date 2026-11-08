/* =========================================================
   الدرس 1: مراجعة الدوال (Methods) ومقدمة في OOP
   ---------------------------------------------------------
   طريقة الكتابة في ملفات الدروس:
   - النصوص تدعم: `كود قصير`  و  **عريض**  و \n لسطر جديد.
   - كل قسم فيه blocks، وكل block مصفوفة أول عنصر فيها نوعه:
     ['p', نص]                فقرة
     ['h', نص]                عنوان فرعي
     ['lec', عنوان]           عنوان "مثال المحاضرة"
     ['ex', رقم, عنوان]       عنوان "مثال إضافي"
     ['code', String.raw`...`]  كود Java ملوّن مع زر نسخ
     ['out', String.raw`...`]   مخرجات البرنامج
     ['analogy', نص] ['rule', نص, عنوان؟] ['note', نص, عنوان؟]
     ['explain', نص, عنوان؟] ['danger', نص, عنوان؟]
     ['ul', [..]] ['ol', [..]]
     ['table', [العناوين], [[صف], [صف]]]
   - الكويز (بالإنجليزي): type = 'concept' | 'output' | 'error'
     q السؤال، code (اختياري)، answer الإجابة الصحيحة،
     wrong ثلاث إجابات غلط، explain الشرح.
   ========================================================= */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
  id: 1,
  title: 'مراجعة الدوال (Methods) ومقدمة في OOP',
  description: 'كيف نكتب الدوال، الفرق بين Call by value و Call by reference، تتبع الاستدعاءات، الـ Recursion، وليش نحتاج البرمجة الكائنية.',
  intro: 'هذا الدرس يراجع كيف نكتب الدوال في Java وكيف تنتقل لها القيم، ثم يشرح ليش نحتاج البرمجة الكائنية (OOP). كل مثال من المحاضرة معه مثالين إضافيين.',

  summary: [
    '**Method (دالة):** مجموعة أوامر نكتبها مرة وحدة عشان تسوي مهمة معينة، ونستدعيها كل ما احتجناها.',
    'الدالة تاخذ **صفر أو أكثر مدخلات** (اسمها parameters)، وترجع **ناتج واحد أو ولا شي** (اسمه return value). إذا ما ترجع شي نكتب `void`.',
    '**Call by value:** المتغيرات البسيطة مثل `int` و `double` تنرسل **نسخة** منها، فأي تغيير داخل الدالة ما يأثر على الأصل.',
    '**Call by reference:** المصفوفات (Arrays) والكائنات (Objects) ينرسل **عنوانها**، فأي تغيير داخل الدالة يبان براها.',
    'لما دالة تستدعي دالة ثانية، البرنامج يروح للثانية، ولما تخلص **يرجع لنفس المكان** ويكمل.',
    '**Recursion (الاستدعاء الذاتي):** دالة تستدعي نفسها، ولازم يكون فيها **شرط توقف** وإلا تشتغل للأبد ويصير stack overflow.',
    '**OOP:** بدل ما تكون البيانات لحال والدوال لحال، نجمعهم في شي واحد اسمه **class**، ونصنع منه **objects**.'
  ],

  sections: [
    {
      id: 's1',
      title: '1) الدالة (Method) وطريقة كتابتها',
      blocks: [
        ['analogy', 'تخيل الدالة مثل **آلة عصير**: تحط فيها فواكه (المدخلات)، تشتغل، وتطلع لك عصير (الناتج).'],
        ['p', 'تفكيك سطر الدالة `public static int MethodA(int x, int y)`:'],
        ['table', ['الجزء', 'معناه'], [
          ['`public`', 'أي أحد يقدر يستخدمها'],
          ['`static`', 'نقدر نستدعيها مباشرة بدون ما نصنع object'],
          ['`int`', 'نوع الناتج اللي ترجعه (`void` = ما ترجع شي)'],
          ['`MethodA`', 'اسم الدالة'],
          ['`(int x, int y)`', 'المدخلات (parameters)'],
          ['`return x + y;`', 'القيمة اللي ترجعها للي استدعاها']
        ]],
        ['lec', ''],
        ['code', String.raw`
public static int MethodA(int x, int y) {
    return x + y;
}
public static void main(String[] args) {
    int z = MethodA(5, 3);
    System.out.println(z);   // 8
}`],
        ['explain', 'أرسلنا 5 و 3، فصار `x = 5` و `y = 3`. الدالة رجعت 8 وتخزنت في `z`.'],
        ['ex', 1, '(دالة ترجع قيمة)'],
        ['code', String.raw`
public static int multiply(int a, int b) {
    return a * b;
}
// main:
int r = multiply(4, 6);
System.out.println(r);   // 24`],
        ['ex', 2, '(دالة void ما ترجع شي)'],
        ['code', String.raw`
public static void greet(String name) {
    System.out.println("Hello " + name);
}
// main:
greet("Sara");   // Hello Sara`],
        ['note', '`greet` ما فيها `return`، هي بس تطبع. عشان كذا ما نقدر نكتب `int r = greet("Sara");`.', 'لاحظ:']
      ]
    },
    {
      id: 's2',
      title: '2) Call by value مقابل Call by reference',
      blocks: [
        ['p', '**القاعدة ببساطة:**'],
        ['table', ['النوع', 'وش ينرسل للدالة؟', 'هل يتغير الأصل؟'], [
          ['`int` , `double` , `char` ...', 'نسخة من القيمة', '✘ لا'],
          ['Arrays و Objects', 'عنوان المكان في الذاكرة', '✔ نعم']
        ]],
        ['analogy', 'الـ value مثل إنك تعطي صاحبك صورة من ورقة، لو كتب عليها ورقتك ما تتغير. الـ reference مثل إنك تعطيه عنوان بيتك، لو دخل وغير أثاث أنت بتشوف التغيير.'],
        ['lec', 'Call by value'],
        ['code', String.raw`
public static int subtract(int x, int y) {
    int z = x - y;
    return z;
}
public static void main(String[] args) {
    int a;
    a = subtract(5, 3);
    System.out.println(a);   // 2
}`],
        ['ex', 1, '(النسخة تتغير والأصل لا)'],
        ['code', String.raw`
public static void change(int x) {
    x = 100;          // يغير النسخة فقط
}
// main:
int a = 5;
change(a);
System.out.println(a);   // 5`],
        ['ex', 2, ''],
        ['code', String.raw`
public static int doubleIt(int n) {
    n = n * 2;
    return n;
}
// main:
int a = 7;
int b = doubleIt(a);
System.out.println(a + " " + b);   // 7 14`],
        ['explain', '`a` بقيت 7 لأن الدالة اشتغلت على نسخة. الطريقة الوحيدة عشان ناخذ النتيجة هي `return`.'],
        ['lec', 'Arrays by reference'],
        ['code', String.raw`
public static void main(String[] args) {
    int[] iq = {126, 167, 95};
    increase(iq);
    System.out.println(Arrays.toString(iq));   // [252, 334, 190]
}
public static void increase(int[] a) {
    for (int i = 0; i < a.length; i++) {
        a[i] = a[i] * 2;
    }
}`],
        ['explain', '`a` و `iq` يأشرون على نفس المصفوفة، فالمضاعفة بانت في `main`.'],
        ['ex', 1, ''],
        ['code', String.raw`
public static void resetFirst(int[] arr) {
    arr[0] = 0;
}
// main:
int[] nums = {5, 6, 7};
resetFirst(nums);
System.out.println(Arrays.toString(nums));   // [0, 6, 7]`],
        ['ex', 2, '(الفرق في نفس البرنامج)'],
        ['code', String.raw`
public static void addOne(int x, int[] arr) {
    x++;        // نسخة ← ما يأثر
    arr[0]++;   // عنوان ← يأثر
}
// main:
int x = 10;
int[] arr = {10};
addOne(x, arr);
System.out.println(x + " " + arr[0]);   // 10 11`]
      ]
    },
    {
      id: 's3',
      title: '3) تتبع استدعاء الدوال',
      blocks: [
        ['p', '**الفكرة:** لما دالة تستدعي دالة، البرنامج يوقف مكانه ويروح ينفذ الدالة الجديدة كلها، وبعدين يرجع للسطر اللي بعد الاستدعاء. مثل لما تقرأ كتاب وتفتح هامش، تقرأه وترجع تكمل من نفس السطر.'],
        ['lec', 'm1 ← m2 ← m3'],
        ['code', String.raw`
static void m1() {
    System.out.println("I am inside the m1 method and going to call the m2 method.");
    m2();
    System.out.println("The control has returned to the m1 method.");
}
static void m2() {
    System.out.println("I am inside the m2 method and going to call the m3 method");
    m3();
    System.out.println("The control has returned to m2");
}
static void m3() {
    System.out.println("I am inside the m3 method.");
}
public static void main(String[] args) {
    m1();
}`],
        ['p', '**المخرجات بالترتيب:** أول سطر من m1 ← أول سطر من m2 ← m3 ← آخر سطر من m2 ← آخر سطر من m1.'],
        ['out', String.raw`
I am inside the m1 method and going to call the m2 method.
I am inside the m2 method and going to call the m3 method
I am inside the m3 method.
The control has returned to m2
The control has returned to the m1 method.`],
        ['ex', 1, ''],
        ['code', String.raw`
static void a() {
    System.out.println("A start");
    b();
    System.out.println("A end");
}
static void b() {
    System.out.println("B");
}
// main:  a();`],
        ['p', '**المخرجات:** `A start` ثم `B` ثم `A end`.'],
        ['ex', 2, '(ثلاث مستويات)'],
        ['code', String.raw`
static void first()  { System.out.println("1"); second(); System.out.println("5"); }
static void second() { System.out.println("2"); third();  System.out.println("4"); }
static void third()  { System.out.println("3"); }
// main:  first();`],
        ['p', '**المخرجات:** 1 2 3 4 5 (كل رقم في سطر). رقمتها بهالشكل عشان تشوف ترتيب التنفيذ بعينك.'],
        ['lec', 'تتبع القيم بين الدوال'],
        ['code', String.raw`
public static void main(String[] args) {
    int x = 3;
    int y = m1(x);
    System.out.println(y);   // 8
}
public static int m1(int n) {
    n++;               // n = 4
    int z = m2(n);     // z = 8
    return z;
}
public static int m2(int m) {
    m *= 2;            // m = 8
    return m;
}`],
        ['explain', '`x = 3` ← داخل m1 صار `n = 3` ثم 4 ← داخل m2 صار `m = 4` ثم 8 ← رجعت 8 لـ m1 ← رجعت 8 لـ main. و `x` نفسه بقي 3.', 'التتبع:'],
        ['ex', 1, ''],
        ['code', String.raw`
public static int f(int n) { n = n + 2; return g(n); }
public static int g(int m) { return m * 3; }
// main:
int x = 5;
int y = f(x);
System.out.println(y);   // 21`],
        ['explain', '`n = 5` ← 7 ← `g(7) = 21`.', 'التتبع:'],
        ['ex', 2, ''],
        ['code', String.raw`
public static int p(int n) { n--; return q(n) + 1; }
public static int q(int m) { return m / 3; }
// main:
int x = 10;
int y = p(x);
System.out.println(x + " " + y);   // 10 4`],
        ['explain', '`n = 10` ← 9 ← `q(9) = 3` ← `3 + 1 = 4`. و `x` بقي 10 لأنه call by value.', 'التتبع:']
      ]
    },
    {
      id: 's4',
      title: '4) Recursion (الاستدعاء الذاتي)',
      blocks: [
        ['p', 'أي دالة recursive لازم يكون فيها جزئين:'],
        ['ol', [
          'استدعاء لنفسها بمشكلة أصغر.',
          'شرط توقف (base case)، وبدونه الدالة تستدعي نفسها للأبد ويصير stack overflow.'
        ]],
        ['analogy', 'مثل الدمى الروسية، تفتح وحدة تلقى أصغر منها، لين توصل لأصغر وحدة وتوقف (هذا شرط التوقف).'],
        ['lec', 'Factorial'],
        ['code', String.raw`
static int factorial(int n) {
    if (n != 0)
        return n * factorial(n - 1);   // recursive call
    else
        return 1;                      // شرط التوقف
}
// main:  factorial(4)  ←  "4 factorial = 24"`],
        ['explain', '`factorial(4) = 4 × factorial(3) = 4 × 3 × factorial(2) = 4 × 3 × 2 × factorial(1) = 4 × 3 × 2 × 1 × factorial(0) = 4 × 3 × 2 × 1 × 1 = 24`', 'التتبع:'],
        ['ex', 1, '(مجموع الأرقام من 1 إلى n)'],
        ['code', String.raw`
static int sum(int n) {
    if (n == 0) return 0;      // شرط التوقف
    return n + sum(n - 1);
}
// sum(4) = 4 + 3 + 2 + 1 + 0 = 10`],
        ['ex', 2, '(الأُس)'],
        ['code', String.raw`
static int power(int b, int e) {
    if (e == 0) return 1;      // أي رقم أس صفر = 1
    return b * power(b, e - 1);
}
// power(2, 3) = 2 × 2 × 2 × 1 = 8`]
      ]
    },
    {
      id: 's5',
      title: '5) من Structured Programming إلى OOP',
      blocks: [
        ['p', '**مصطلحات لازم تحفظها:**'],
        ['ul', [
          '**Class:** القالب أو المخطط. فيه متغيرات (بيانات) و methods (أفعال). وهو مجموعة objects متشابهة.',
          '**Object:** شي حقيقي مصنوع من القالب، وهو اللي ينبني عليه البرنامج.'
        ]],
        ['lec', 'Student'],
        ['ul', [
          '**البيانات:** Student ID, Name, GPA',
          '**الدوال:** register (التسجيل في مادة)، print (طباعة الدرجات)، pay (دفع الرسوم)'
        ]],
        ['p', 'في Structured بتكون هذي أشياء متفرقة، وفي OOP كلها داخل `class Student`.'],
        ['ex', 1, 'Car'],
        ['code', String.raw`
class Car {
    String color;      // بيانات
    int speed;
    void accelerate() { speed += 10; }   // أفعال
    void brake()      { speed -= 10; }
}`],
        ['p', 'كل سيارة (object) لها لونها وسرعتها، لكن كلهم يقدرون يسرعون ويفرملون.'],
        ['ex', 2, 'BankAccount'],
        ['code', String.raw`
class BankAccount {
    String owner;      // بيانات
    double balance;
    void deposit(double amount)  { balance += amount; }   // أفعال
    void withdraw(double amount) { balance -= amount; }
}`],
        ['p', 'حساب أحمد وحساب سارة objects من نفس الـ class، كل واحد له رصيد مختلف.'],
        ['table', ['', 'Structured Programming', 'Object Oriented Programming'], [
          ['التنظيم', 'حول الأفعال (دوال تاخذ بيانات وتطلع نتائج)', 'حول الأشياء (objects فيها بيانات وتسوي أفعال)'],
          ['البيانات والدوال', 'منفصلة', 'مجموعة داخل class واحد'],
          ['مثال', 'بيانات الطالب بمكان، ودوال التسجيل والطباعة بمكان', 'class اسمه Student فيه البيانات والدوال مع بعض']
        ]],
        ['h', 'ليش OOP؟'],
        ['ol', [
          '**أقرب للواقع:** نقسم البرنامج لأشياء مثل العالم الحقيقي.',
          '**سهولة اكتشاف الأخطاء:** لأن الكود مقسم classes، تعرف وين تدور المشكلة.',
          '**إعادة الاستخدام:** نفس الـ class تستخدمه في أكثر من برنامج.'
        ]]
      ]
    }
  ],

  quiz: [
    {
      type: 'concept',
      q: 'What does the keyword `void` mean in a method header?',
      answer: 'The method does not return any value to its caller',
      wrong: [
        'The method takes no parameters',
        'The method always returns `null`',
        'The method can only be called from `main`'
      ],
      explain: '`void` sits in the return-type position and means the method does its job (for example, printing) without returning a value. The number of parameters has nothing to do with `void`.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
public static int add3(int n) {
    return n + 3;
}
// main:
int r = add3(4) * 2;
System.out.println(r);`,
      answer: String.raw`14`,
      wrong: ['10', '11', '8'],
      explain: 'The method call is evaluated first: `add3(4)` returns 7, then `7 * 2 = 14`. You get 10 only if you compute `4 + 3 * 2`, but the `+ 3` inside the method is already finished before the multiplication outside.'
    },
    {
      type: 'concept',
      q: 'When you pass an **array** (`int[]`) to a method in Java, what is actually passed?',
      answer: 'The array\'s address, so changes to its elements inside the method are visible outside',
      wrong: [
        'A full copy of the array, so the original never changes',
        'Only its first element',
        'The array is passed read-only, so its elements cannot be changed inside the method'
      ],
      explain: 'Arrays (and objects) are passed by their address, so the parameter inside the method and the variable outside point to the same array. That is why changing elements is visible outside.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
public static void triple(int x) {
    x = x * 3;
    System.out.print(x + " ");
}
// main:
int a = 4;
triple(a);
System.out.println(a);`,
      answer: String.raw`12 4`,
      wrong: ['12 12', '4 4', '4 12'],
      explain: 'Inside the method, `x` is a copy of `a`, so it becomes 12 and is printed. The original `a` is not affected (call by value), so it stays 4.'
    },
    {
      type: 'error',
      q: 'Where is the error in this code?',
      code: String.raw`
public static void show(int n) {
    System.out.println("n = " + n);
}
public static void main(String[] args) {
    int result = show(5);
    System.out.println(result);
}`,
      answer: 'Line 5: `show` is `void` and returns nothing, so its result cannot be stored in an `int`',
      wrong: [
        'Line 2: you cannot join a String and an `int` with `+`',
        'Line 1: the method needs a `return` because it takes a parameter',
        'Line 6: `result` has no initial value, so it cannot be printed'
      ],
      explain: 'A `void` method returns nothing, so `int result = show(5);` is a compile error. Call it on its own: `show(5);`. `"n = " + n` is normal string concatenation and is allowed.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
public static void fill(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + i;
    }
}
// main:
int[] nums = {5, 5, 5};
fill(nums);
System.out.println(Arrays.toString(nums));`,
      answer: String.raw`[5, 6, 7]`,
      wrong: ['[5, 5, 5]', '[6, 7, 8]', '[0, 1, 2]'],
      explain: 'The array is passed by address, so the change shows up in `main`. Each element gets its index added: 5+0, 5+1, 5+2 = `[5, 6, 7]`.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
static void x() {
    System.out.print("X1 ");
    y();
    System.out.print("X2 ");
}
static void y() {
    System.out.print("Y ");
}
public static void main(String[] args) {
    System.out.print("M1 ");
    x();
    System.out.print("M2");
}`,
      answer: String.raw`M1 X1 Y X2 M2`,
      wrong: ['M1 X1 X2 Y M2', 'M1 M2 X1 Y X2', 'X1 Y X2 M1 M2'],
      explain: '`main` prints M1, then jumps into `x`. `x` prints X1 and jumps into `y`, which prints Y. When `y` finishes, control returns to the same spot in `x`, which prints X2. Then control returns to `main`, which prints M2.'
    },
    {
      type: 'error',
      q: 'This code does not compile. Why?',
      code: String.raw`
public static int max(int a, int b) {
    if (a > b) {
        return a;
    }
}`,
      answer: 'Line 5: there is no `return` for the case where `a` is not greater than `b` (error: missing return statement)',
      wrong: [
        'Line 3: you cannot write `return` inside an `if`',
        'Line 1: the method must be `void` because it contains an `if`',
        'Line 2: parameters cannot be compared with each other inside a method'
      ],
      explain: 'The method returns `int`, so it must return a value on **every** path. If `a > b` is false, there is no `return`, so the compiler rejects it. Fix: add `return b;` after the `if`.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
public static int f(int n) {
    n = n * 2;
    return g(n) - 1;
}
public static int g(int m) {
    return m + 5;
}
// main:
int x = 3;
int y = f(x);
System.out.println(x + " " + y);`,
      answer: String.raw`3 10`,
      wrong: ['6 10', '3 11', '6 11'],
      explain: 'Trace: `n = 3` → 6 → `g(6) = 11` → `11 - 1 = 10`. `x` stays 3 because only the copy `n` changed (call by value).'
    },
    {
      type: 'concept',
      q: 'What happens if you write a recursive method **without** a base case and run it?',
      answer: 'It keeps calling itself until a stack overflow error happens at runtime',
      wrong: [
        'The compiler rejects the code with a compile error',
        'It runs only once and returns 0',
        'Java stops it automatically after a fixed number of calls and returns the last value'
      ],
      explain: 'The code compiles fine because the compiler does not detect this problem. At runtime, every call takes space on the stack, and with no stopping point the stack fills up and a `StackOverflowError` is thrown.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
static int sumDigits(int n) {
    if (n == 0) return 0;
    return n % 10 + sumDigits(n / 10);
}
// main:
System.out.println(sumDigits(472));`,
      answer: String.raw`13`,
      wrong: ['2', '274', '12'],
      explain: '`n % 10` takes the last digit and `n / 10` removes it: `2 + sumDigits(47)` = `2 + 7 + sumDigits(4)` = `2 + 7 + 4 + sumDigits(0)` = `2 + 7 + 4 + 0 = 13`.'
    },
    {
      type: 'error',
      q: 'This code compiles without problems, but it fails at runtime. What is wrong?',
      code: String.raw`
static int countDown(int n) {
    System.out.println(n);
    return countDown(n - 1);
}
public static void main(String[] args) {
    countDown(3);
}`,
      answer: 'It has no base case, so it calls itself forever until a StackOverflowError is thrown',
      wrong: [
        'Line 3: Java does not allow a method to call itself',
        'Line 6: the result of `countDown(3)` must be stored in a variable',
        'Line 1: the method must be `void` because it prints'
      ],
      explain: 'The method prints 3, 2, 1, 0, -1, ... and never stops, because there is no `if` that returns without making another call. A fix is `if (n == 0) return 0;` at the top. Calling a method without storing its result is allowed.'
    },
    {
      type: 'output',
      q: 'What is the output of this code?',
      code: String.raw`
static int mystery(int n) {
    if (n <= 1) return 1;
    return n * mystery(n - 2);
}
// main:
System.out.println(mystery(7));`,
      answer: String.raw`105`,
      wrong: ['5040', '35', '21'],
      explain: 'Each call subtracts 2, not 1: `7 × mystery(5)` = `7 × 5 × mystery(3)` = `7 × 5 × 3 × mystery(1)` = `7 × 5 × 3 × 1 = 105`. 5040 is the regular `7!`.'
    },
    {
      type: 'concept',
      q: 'What is the main difference between Structured Programming and OOP?',
      answer: 'In OOP, data and the methods that work on it are grouped inside one class; in Structured Programming they are kept separate',
      wrong: [
        'OOP has no methods; everything in it is variables and data',
        'In Structured Programming the whole program must be inside one `main` method, but not in OOP',
        'Structured Programming uses classes, while OOP uses only static methods'
      ],
      explain: 'Structured Programming is organized around actions (methods that take data and produce results), with data in one place and methods in another. OOP is organized around things: a class groups data (like GPA) and actions (like register) together.'
    },
    {
      type: 'concept',
      q: 'We have `class BankAccount` with `balance` and `deposit()`, and we created one account for Ahmed and one for Sara. Which statement is **true**?',
      answer: 'Both accounts are objects of the same class, and each one has its own `balance`',
      wrong: [
        '`BankAccount` is the object, and Ahmed\'s and Sara\'s accounts are the classes',
        'If Ahmed calls `deposit`, Sara\'s balance also increases because they share the same class',
        'We need to write a new class for each account so each one has its own balance'
      ],
      explain: 'A class is the template, and many objects can be created from it. Each object has its own copy of the data, so Ahmed\'s deposit changes only his balance. No new class is needed per account.'
    }
  ]
});
