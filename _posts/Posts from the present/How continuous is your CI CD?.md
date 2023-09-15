# How continuous is your CI/CD?


I've recently seen the job requirements of a few places having the following point in the description

> Deploying multiple times a day.

Which has left me wondering, how continuous is your CI/CD pipeline? And how continuous does a CI/CD pipeline need to be ? Because this kind of development velocity seems a bit worrying.
Although most of these are startups but still this kind of development/deployment velocity can be really dangerous. This indicates that either

- You have a very robust development deployment pipelines
- Enforce coding standards and best practices pretty rigorously
- Have large teams of engineers who communicate very effectively.

Or

- You have no idea what you are doing
- Insufficient planning and maybe bad application design.
-  Most probably have broken development/deployment pipelines.

There is also the possibility that you're just starting out with the development process(in which case this is probably ok).

The above scenarios are definitely very different, and you'd probably want to have the first one, but unfortunately most places are not. Again since most of these places are startups, the development velocity is their advantage and this might also be their downfall.

Teams that prioritize deploying quickly over planning and designing will more or less have to suffer later on when the changes come back to bite them and the application has grown a lot in size (both the codebase and the users) and the effect of a broken app being deployed is pretty devastating.

> The time and effort you put into designing your application (and SOPs) and enforcing standards early will decide how long your app will hold on when changed before becoming a patched mess that needs to be rewritten.

And it's not like super well planned apps won't ever be bad, they could very well have bugs and inefficient code, but at least with proper planning and design, the base structure of the application would be set properly. Also, those bugs and inefficiencies can most probably be resolved more easily. 

Had a build fail due to a piece of code which nobody knows about? Maybe you deleted the thing because it was probably just dead code and then someone from another team contacts you about their failing integrations after you deployed to production, and now you've single-handedly wiped out this quarter's profit because it was something really important (maybe a financial part of your application that just bled through)?

People usually think that coding standards and best practices can be applied later on (and they can be) but as the application grows, this becomes increasingly difficult and no standards and bad practices become an inherent lock in due to your development process (remember you might also have bad lock ins in terms of your stack, DB, infrastructure and office pets because you didn't plan earlier. Yeah, those hamsters were cute when you first bought them in, but now there's a 100 of them and both your app and your office furniture now has holes in it)

This isn't just limited to the initial design and planning. If you're deploying too frequently just adding features and trying to patch up everything that broke with your last deployment, you might not even have the time to consider refactoring. In this case you either end up with a hot mess that nobody wants to touch, decide to rewrite the app way earlier than you thought you would, or end up changing your identity and move to another country.

## Let's get back to the CI/CD part

Ok, enough badmouthing of superfast unplanned development. Let's get back to CI/CD.

Here is what I understand of CI/CD

**Continuous Integration** : make small feature changes instead of big ones (by breaking them down to smaller parts) which can be tested and integrated into the application easily. This way you can debug the app faster with each integration, and enforce standards more easily (not to mention better code reviews (you can easily find bugs/inefficiencies in smaller diffs, rather than just skipping reading a really long diff)) thereby making the development and integration process **continuous** rather than separate big integrations.

**Continuous deployment** : deploy small feature changes instead of bigger ones that allow for smaller overall effect on the application so even if a bug occurs it doesn't break your application too much (hopefully). This is kind of like an extension of the CI part, as this allows for easier verification (or testing on prod), and faster fixes if something breaks.

Now there could be small changes that could still break your app, but generally they would only affect a small part of your app. 

CI/CD is not developing and deploying frequently.

The CI/CD pipelines allow developers to be more confident in their feature deployment, catch bugs early, and is a good way to enforce some standards and best practices. But

## CI/CD may not be the best way

Sometimes you don't want to ship smaller features, rather just have bigger releases. This may be more true for stuff like mobile apps and desktop applications as the users won't have to update them frequently this way. For building blocks of software such as programming languages, runtimes and devtools (you would not want to release even a new minor version with just a small feature addition). This might also benefit some web apps or services where multiple changes are required for certain integrations/ functionalities to work.

Also, you can have Continuous Integration without the Continuous deployment part. At some point of time, each application will have a big feature change/ addition. It could be replacing some core service stack (network, security, analytics), DB/ORM migration, maybe rewriting some service in another language and obviously adding a big feature. Even changes to become compliant with changed/new laws can have Continuous Integration but need to be deployed all at once. This might also work in some scenarios for web apps that I mentioned earlier which might not require CI/CD at all.

So how continuous should your CI/CD be, should you even have CI/CD? How much time and effort should you spend initially on designing and planning applications? How do you plan and release the feature afterward? 

Remember, sometimes not spending time earlier on design and planning to increase development velocity can increase the time to roll out features afterward.

#### Next Up: We replaced our devops team with a cloud services console. The results are shocking!
