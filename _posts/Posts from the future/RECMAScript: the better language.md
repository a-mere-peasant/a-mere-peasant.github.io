# RECMAScript : the better language

Think you program in the best language out there?   Is it because it runs closer to the metal? Maybe it lets you write super clean code with abstracted abstractions? Or skip classes and  jump directly into work? Skips defining types? Maybe it's super easy to learn or maybe it doesn't require a lot of boilerplate. Maybe it is the perfect language. Maybe, maybe, maybe. Well whatever your language maybe, RECMAScript is better.

## What is RECMAScript

RECMAScript, a statically typed quantum-AI enabled distributed multi-threaded memory independent sis-absolute language which allows you to build apps faster than you can code (literally).
It takes away the tedious work of gathering requirements, designing your application's architecture, and even writing most of the boilerplate code.

Long ago, two factions raged war to decide what language everything would be written in, (the answer was obviously python, but they still fought to prove their language was the only way forward). There were the ECMAScript devs pumping thousands of libraries per second and then there were the Rust developers (rustaceans?) who wanted to rewrite everything in rust.

> Any application that can be written in ECMAScript, will eventually be written in ECMAScript.

- Laws of software (pg 17: law 4)

> It's not written in rust **Yet**

- a Rust developer

Not too long ago though, a truce was made between the two communities, where they decided they would do what every developer thinks of when they see a problem. They created a better programming language to solve all their problems. About 10 days later, RECMAScript was born.

RECrs (the RECMAScript community) have been building fast, performance and safe apps using the features of the better programming language.

RECMAScript programs have the type extension `.recs` and can be run with the intuitive `run` command.

`run myprogram.recs`

Declaring a locally scoped variable is done as

`let type var_name = var_value`

You write a series of run requests (which could be statements or expressions) which have a compiler priority escalation. The default run priority is 1 which is equivalent to using the  `maybe`. So 

`let type var_name = var_value`

Is equivalent to 

`maybe let type var_name = var_value`



## Statically typed 

ECMAScript was a free flowing language, then they tried to put a type system suit on it, this was received pretty well by most of the developers who were tired of calling methods of undefined variables, on the other hand rust had a type system by default and traits that could extend these types in protected accessibility. 

A lot of people did ditch the type system on ECMAScript to get back to the free flowing version, but for RECMAScript the consensus was that it should be statically typed so that bugs are caught early on during development (Do note that there has not been a single bug reported in any application made using RECMAScript). RECMAScript does have type inference so you can also use dynamic types.

## Quantum-AI enabled

This is arguably the best feature of RECMAScript. The quantum-AI compiler can easily determine what your app needs and gets it ready for you before you start to code. The compiler knows what your app will be and exactly what it does. So it takes away the process of gathering requirements, designing the system, and building the application. You can still write code, but the compiler will decide if it wants to run your code or not. You can try to force your code to run by using the `please` arg.

`run myprogram.recs please`

You can also use the `please` keyword to try to force singular statements 

`please let type var_name = var_value`

There is also the `pretty-please` keyword to further escalate your run request.

`pretty-please let type var_name = var_value`

Do note that even this does not guarantee that your code will run, the compiler will decide that.


You can also de-escalate run requests if you want them to be a lower priority with the `don't` keyword.

`don't let type var_name = var_value`

Beware though, this might result in unexpected behavior where the compiler grants it the highest run priority (**if** it thinks the code is worth using).

> Super clean code is no code at all.

## Memory independent 

Managing memory was the biggest debate for the creators of RECMAScript, on one side the ECMAScript developers didn't really understand why memory needed to be managed? After all you could easily hog the memory for your app and be done with thinking about memory. Since it wasn't the size of the application, the memory didn't matter much.

Rust had the concept of "borrowing" for memory management, but as we all know borrowing all the time and being dependent on it can become a bad habit and how important memorial independence is for one's application. `Own, don't borrow` by Seg F. is a great guide to achieving memorial independece, as it talks about the dangers of borrowing, how most people think it's absolutely safe, and how it can lead to memory leaks leaving developers dumbfounded. 

At the end, the compiler was chosen to take care of memory management and RECMAScript became a memory independent language. Since the compiler is quantum-AI enabled, it generates all possible ways that a user can interact with the app and reserves the maximum amount of memory required. This had a small problem which was identified in the beta version. What if the system did not have enough memory? Would the app reserve a smaller space? Would it not run? Would it start using swap memory?
Or would it just run as usual and if it runs out of memory then just take the whole system out with itself? 

The ECMAScript community could not take having low memory for an answer, so they suggested a failsafe to the compiler. Lo and behold the solution that had existed from the beginning of the internet. If the available RAM was less than what was required, the compiler would just download more RAM from the internet. What if the system ran on a machine which did not have internet? Well the compiler doesn't allow such a machine to exist, so you don't have to worry about it. Also it has an ace up its sleeve for the off chance it cannot obtain the required memory.

This makes RECMAScript memory independent as it is no longer bound by availability. Some people would now start to wonder **if** all that memory allocation is necessary as allocating the maximum required memory can be really inefficient. This is a valid question, but the next feature remedies this ( and is also responsible for the ace I talked about earlier).

## Distributed 

This was a new feature of the language and was kind of influenced by a few crypto bros (and their generous donations). RECMAScript is a distributed language which means the executable can run different parts of the app on different systems.

This allows it to distribute the application where the workload is sharded between systems, and they can all contribute to some process of your app. 

RECMAScript is globally distributed which means any machine running some RECMAScript code can run workload of another RECMAScript app,
This allows an app to be run on other machines and use their memory to fulfil its needs which can be used when enough memory is not available quickly. The compiler already packs in a distribution mechanism which handles the workload sharding and distribution process. The exact benefit or use case for this feature is still a mystery to many, but nonetheless it's great to have.

## Multithreaded

RECMAScript is a multithreaded language but not just in the traditional sense. There is concurrency not just at the functional level but also at the application level.

RECMAScript has multiple entry and exit points, unlike traditional apps with a single entry and exit(many possibilities but one exit ends the app)

The run requests are written within the `vain` (vein) block, and there can be multiple `vain` blocks within an application, each one being assigned to a thread and starting concurrently, and when one block exits, the app does not stop the other threads, you can even design you app to fire off new blocks depending on how the last block exited. This allows for mini applications to be built with better concurrency.

You write all your code in` vain` like

```vain
{
// all your code here 

// also this is how you comment 
}
```

Do remember you can write all the run requests you want but the compiler decides whether your code will be used or not.

This multi threaded ness also allows for speeding up vector computations which is useful in graphic processing as well as AI applications.


## Set in stone absolute

RECMAScript is a set in stone absolute language which means nothing is mutable. This allows programmers to write code without worrying about forgetting to put const before immutable values. This is similar to rust which has `const` by default, but the `mut` keyword is also not present since RECrs only write absolute code. It works on the principle. Although all units are called variables,  none of them actually vary.

> If the value is correct, then why would you ever need to change it.

This is possible because the quantum-AI compiler already knows how the application will execute at the time of compilation, including user inputs, when hardware failure occurs, as well as when a cosmic ray might change the value of a bit.

This means there are no null values unless you specifically assign `null` to something and no out of bounds and missing key exceptions. The compiler also eliminates the possibility of other exceptions, so there is no `Exception` type (and the `try` ,`catch` and `finally`  keywords are also not reserved). This also makes conditionals obsolete so RECMAScript does not have a reserved `if` and `else` keyword. You can thus define variables such as 

`let type if = true` 

You might now think, what about iterators, surely you would need to repeat a bunch of steps for different values somewhere. The compiler takes care of this by internally splitting the for loop into different safe to execute blocks corresponding to each iteration (although in the first draft it was suggested that the developers write each block themselves, but was later discarded for the `for` syntactic sugar due to better judgement)

The compiler throws out any iteration it does not seem fit, so developers don't have to worry about having to handle null value, out of bounds exceptions. If anyone uses the app in any other way and complains of it being broken, just tell them they're doing it wrong.

> In programs there are no bugs, only features.
    - Master Callaway

These features make RECMAScript a better programming language than whatever you are using right now, no errors, no bugs, no code, absolutely nothing, the most beautiful (or stressful) sight a developer can look at, just a blank canvas that still compiles to a working application.

#### Next up : How letting everyone push to master increased development speed by 984%
