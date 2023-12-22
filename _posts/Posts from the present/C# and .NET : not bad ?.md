# C# and .NET : not bad ?


This is going to be a short one. If you've heard about C# , it would mostly be in one of two contexts, game dev with unity and kind of everything else with .NET, Let's focus on the latter cause C# is kind of underrated there.

## Why is C# underrated?

This mostly has to do with the history of C# and .NET,

.NET basically has two flavours, .NET framework which is older, and .NET Core which is more modern, open source, cross platform and the way forward with .NET with .NET 8 being the latest release.

.NET framework was a windows server only kind of thing, so you had a vendor lock in with Microsoft.A lot of people thus decided to use other things that didn't have such a vendor lock in, and gave them more freedom over their choice of infrastructure as well. This vendor lock-in was also enhanced virtually by people choosing Microsoft SQL server over other database engines, so this basically became the Microsoft tech stack.

Some people also don't generally like or abstain from using tech associated with Microsoft ( although they kind of are taking over the dev ex marketplace with a good chunk of developers using their products daily)

This has led to a lot of legacy applications being run on windows servers and being vendor locked, which has propagated the perception of .NET= Microsoft only, while other languages and frameworks such as django and python, nodejs with Ecmascript, and now go and rust as well along with the already existing Java, groovy, C++ provided better cross platform support and were generally more exciting, so people chose them over .NET. Even today, a lot of .NET applications are either legacy apps running only on windows servers or windows applications themselves, this continues to fuel the vendor lock in and bad dev ex perception of .NET.

## What's different now ?

.NET Core has changed a lot of this now (especially since .NET Core 3.1), it can run cross platform so no more Windows server only ( and great support for Docker as well for containerization), and C# and .NET adding and improving some greater features such as LINQ, top level statements (.NET 6 and above), a great way to switch, Entity Framework ( for those who like ORMs, this is a pretty good one) and now great Aot support ( with .NET 8, there was some support in .NET 7 as well) it has become a pretty nice way to develop web applications ( and for other platforms as well, that too without having to learn another language).

Looking at C# and .NET's future

I think they are going to have better adoption in the near future, specially with small to midsize companies which need to develop things fast and may try to do it with lesser resources on multiple platforms, or maybe just use it on servers, although most people who have already settled their differences with their current tech stack might not switch as I don't see any major breakthroughs coming to the C# world, with the syntax and base features mimicking a lot of other C based languages  so not really exciting to pick up if you're already coming from one). It will keep on adding new and great features, but the possibility of a big differentiator is low, with other languages and frameworks being able to catch up soon, or maybe blazor (WASM W btw)  will become the next front end framework, eliminating the ECMAScript regime. The biggest hurdle is going to be the relatively smaller developer base which means even lesser packages, integrations, jobs and whatnot, even with their parent organisation being associated with the package repository for ES.

So what may have started out as a Java competitor, C# has grown to be quite nice, there is still a lot of things wrong with C# and .NET, but that's probably for another time. You might be looking at C# and .NET in more of a positive light than before, upgrading it to an "okayishly okay" ( which is pretty much what I'd rate it as, sometimes it's surprisingly pleasant, other times not so much)  from a "do not touch" or "old"  tier.

#### Next Up: LOGO the next big UI framework
