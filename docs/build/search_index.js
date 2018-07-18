var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#Julia-0.7-中文文档-1",
    "page": "Home",
    "title": "Julia 0.7 中文文档",
    "category": "section",
    "text": "<!-- Welcome to the documentation for Julia 0.7. -->欢迎来到Julia 0.7中文文档。<!-- Please read the [release notes](NEWS.md) to see what has changed since the last release. -->请阅读发行通知来查看最新的改变。<!-- ### [Introduction](@id man-introduction) -->"
},

{
    "location": "index.html#man-introduction-1",
    "page": "Home",
    "title": "简介",
    "category": "section",
    "text": "<!-- Scientific computing has traditionally required the highest performance, yet domain experts have\nlargely moved to slower dynamic languages for daily work. We believe there are many good reasons\nto prefer dynamic languages for these applications, and we do not expect their use to diminish.\nFortunately, modern language design and compiler techniques make it possible to mostly eliminate\nthe performance trade-off and provide a single environment productive enough for prototyping and\nefficient enough for deploying performance-intensive applications. The Julia programming language\nfills this role: it is a flexible dynamic language, appropriate for scientific and numerical computing,\nwith performance comparable to traditional statically-typed languages. -->科学计算对性能一直有着最高的需求， 但现在这个领域的专家开始大量使用比较慢的动态语言来完成日常工作。 我们相信有很多使用动态语言的理由， 所以我们不会舍弃这样的特性。幸运的是，现代语言设计和编译器技术使得为原型设计提供单一的高效开发环境， 并且配置高性能的应用成为可能。Julia 语言在这其中扮演了这样一个角色：作为灵活的动态语言，适合科学和数值计算，性能可与传统静态类型语言媲美。<!-- Because Julia\'s compiler is different from the interpreters used for languages like Python or\nR, you may find that Julia\'s performance is unintuitive at first. If you find that something is\nslow, we highly recommend reading through the [Performance Tips](@ref man-performance-tips) section before trying anything\nelse. Once you understand how Julia works, it\'s easy to write code that\'s nearly as fast as C. -->由于 Julia 的编译器和其它语言比如 Python 或 R 有所不同，一开始您或许会觉得 Julia 中什么样的代码运行效率高，什么样的代码运行效率低似乎并不很直观。 如果您发现 Julia 变慢了，我们非常建议您在尝试其它功能前读一下提高性能的窍门 。只要您理解 Julia 的工作方式， 就会很容易地写出运行效率甚至可以和 C 相媲美的代码。<!-- Julia features optional typing, multiple dispatch, and good performance, achieved using type inference\nand [just-in-time (JIT) compilation](https://en.wikipedia.org/wiki/Just-in-time_compilation),\nimplemented using [LLVM](https://en.wikipedia.org/wiki/Low_Level_Virtual_Machine). It is multi-paradigm,\ncombining features of imperative, functional, and object-oriented programming. Julia provides\nease and expressiveness for high-level numerical computing, in the same way as languages such\nas R, MATLAB, and Python, but also supports general programming. To achieve this, Julia builds\nupon the lineage of mathematical programming languages, but also borrows much from popular dynamic\nlanguages, including [Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language)), [Perl](https://en.wikipedia.org/wiki/Perl_(programming_language)),\n[Python](https://en.wikipedia.org/wiki/Python_(programming_language)), [Lua](https://en.wikipedia.org/wiki/Lua_(programming_language)),\nand [Ruby](https://en.wikipedia.org/wiki/Ruby_(programming_language)). -->Julia 具有通过类型推倒和即时编译（JIT）在LLVM上实现的可选类型标注，多重派发，良好的性能。它是一个支持过程式，函数式 面向对象编程的多范式语言。它提供了简易和简洁的高等数值计算，它类似于 R 、 MATLAB 和 Python ，支持一般用途的编程。为了达到这个目的 Julia 在数学编程语言的基础上，参考了不少流行动态语言，例如Lisp, Perl, Python, Lua, 和 Ruby。<!-- The most significant departures of Julia from typical dynamic languages are:\n\n  * The core language imposes very little; Julia Base and the standard library is written in Julia itself, including\n    primitive operations like integer arithmetic\n  * A rich language of types for constructing and describing objects, that can also optionally be\n    used to make type declarations\n  * The ability to define function behavior across many combinations of argument types via [multiple dispatch](https://en.wikipedia.org/wiki/Multiple_dispatch)\n  * Automatic generation of efficient, specialized code for different argument types\n  * Good performance, approaching that of statically-compiled languages like C -->Julia 与传统动态语言最大的区别是：核心语言很小；标准库是用 Julia 本身写的，如整数运算在内的基础运算\n完善的类型，方便构造对象和做类型声明\n基于多重派发通过很多不同的参数类型来定义函数行为的能力\n为不同类型自动生成高效，专用的代码\n接近C语言的，良好的性能<!-- Although one sometimes speaks of dynamic languages as being \"typeless\", they are definitely not:\nevery object, whether primitive or user-defined, has a type. The lack of type declarations in\nmost dynamic languages, however, means that one cannot instruct the compiler about the types of\nvalues, and often cannot explicitly talk about types at all. In static languages, on the other\nhand, while one can -- and usually must -- annotate types for the compiler, types exist only at\ncompile time and cannot be manipulated or expressed at run time. In Julia, types are themselves\nrun-time objects, and can also be used to convey information to the compiler. -->尽管，一些人有时说动态语言是“无类型的”，但实际上他们并不是这样：每一个对象，无论是基础的还是用户自己定义的，都有一个类型。 在大多数动态语言中都缺乏类型声明，而这往往意味着无法指示编译器值的类型，也就无法显示地讨论类型。另一方面，静态语言中，虽然可以标记类型 （往往也必须这么做），但是类型只在编译时期才存在，而无法在运行时进行操作和表达。在 Julia 里，类型是它们自己的动态对象，也可以 被用来给编译器提供相应的信息。<!-- While the casual programmer need not explicitly use types or multiple dispatch, they are the core\nunifying features of Julia: functions are defined on different combinations of argument types,\nand applied by dispatching to the most specific matching definition. This model is a good fit\nfor mathematical programming, where it is unnatural for the first argument to \"own\" an operation\nas in traditional object-oriented dispatch. Operators are just functions with special notation\n-- to extend addition to new user-defined data types, you define new methods for the `+` function.\nExisting code then seamlessly applies to the new data types. -->类型系统和多重派发式 Julia 语言最主要的特征（尽管类型和多重派发并不必要被显式使用）：函数通过函数名称和不同类型变量的组合进行定义，然后在调用时会派发 最接近（most specific）的定义上去。这样的编程模型非常适合数学化的编程，尤其是在传统的面向对象派发中，一些函数的第一个变量理论上并不“拥有”这样一个操作时。 而在Julia中运算符只是函数的一个特殊标记——例如，为用户定义的新类型添加加法运算，你只要为+函数定义一个新的方法就可以了。 已有的代码就可以无缝接入这个新的类型。<!-- Partly because of run-time type inference (augmented by optional type annotations), and partly\nbecause of a strong focus on performance from the inception of the project, Julia\'s computational\nefficiency exceeds that of other dynamic languages, and even rivals that of statically-compiled\nlanguages. For large scale numerical problems, speed always has been, continues to be, and probably\nalways will be crucial: the amount of data being processed has easily kept pace with Moore\'s Law\nover the past decades. -->一部分是因为动态类型推导（可以被可选的类型标注增强），另一部分是因为在这个语言建立之初就对性能非常看重，Julia 的计算性能超过了其它的 动态语言，甚至能够与静态编译语言竞争。对于大型数值问题，速度一直都是，也一直会是一个重要的关注点：这些年以来，被处理的数据量的增长有 着Moore定律。<!-- Julia aims to create an unprecedented combination of ease-of-use, power, and efficiency in a single\nlanguage. In addition to the above, some advantages of Julia over comparable systems include:\n\n  * Free and open source ([MIT licensed](https://github.com/JuliaLang/julia/blob/master/LICENSE.md))\n  * User-defined types are as fast and compact as built-ins\n  * No need to vectorize code for performance; devectorized code is fast\n  * Designed for parallelism and distributed computation\n  * Lightweight \"green\" threading ([coroutines](https://en.wikipedia.org/wiki/Coroutine))\n  * Unobtrusive yet powerful type system\n  * Elegant and extensible conversions and promotions for numeric and other types\n  * Efficient support for [Unicode](https://en.wikipedia.org/wiki/Unicode), including but not limited\n    to [UTF-8](https://en.wikipedia.org/wiki/UTF-8)\n  * Call C functions directly (no wrappers or special APIs needed)\n  * Powerful shell-like capabilities for managing other processes\n  * Lisp-like macros and other metaprogramming facilities -->Julia 的目标是创建一个前所未有的集易用、强大、高效于一体的语言。除此之外，Julia 的优势还在于：免费开源（MIT协议）\n用户定义的类型和内建类型一样快和兼容\n无需特意编写向量化的代码；非向量化的代码就很快\n为并行计算和分布式计算设计\n轻量级的“绿色”线程（(协程)）\n低调又牛逼的类型系统\n优雅、可扩展的类型转换\n高效支持Unicode，包括但不限于UTF-8\n直接调用 C 函数（不需封装或调用特别的 API）\n像 Shell 一样强大的管理其他进程的能力\n像 Lisp 一样的宏和其他元编程工具"
},

]}
