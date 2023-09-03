# Single Page Apps: do you really need so much interactivity?

If you're building a web app today, you're probably using React or Angular (or Vue?) for your frontend development, and most probably using the in-built router so that you don't have to ask for a different page again from the server. Applications like these are called Single Page Apps since the server doesn't need to render another page (you probably knew this already). But do you really need Single Page Applications? Does your app really benefit from not having to call the server to render a
page? Maybe you could start by asking

## How much do components of a single page interact?

Think about the core UI of your application, maybe it's a dashboard, a form, some media display page, a blog/write up, a forum, maybe a grid of photos or products. Now think of how the elements interact with each other on the page, you can skip the singular functions.

So if it's a form, think about validations that might affect more than one element (restricting/ changing values depending on another field, or hiding fields altogether). If a dashboard then maybe if details are shown on hovering over certain sections (or if smaller subsections are opened), for a forum it could be folding/unfolding the reply threads and so on. As I said you can skip individual UI functionalities such as the non-dependent validations in forms, or highlighting line on hover in a graph. In general, anything that does not bring/change data into the users view can be counted out.

Sometimes, it can be hard to define a "page" of your application, usually in cases where components are modular and replaceable on the same screen. If you have an interface which may replace only a part of the screen. What if something on the other part replaces the original part that was not replaced at first (WHAT?!). 

Say you have an app that divides the page into some sections, which might change depending on behaviour of other sections (like rendering images or graphs to replace some components). This could be tricky as you might end up with a different page than the one you started with (if every component can be replaced by another module). In this case the components are highly interactive, and what the "page" consists of is kind of confusing. I think it's better to include all modules that can possibly
on the page in this case.

Once you have figured out how interactive your app page is, the next thing to consider would be 

## How is the state of the app defined?

More precisely, how is the state of this page defined? Is it the fields in inputs, maybe some input from a previous page needs to be kept in it, is it just the id of a blog you're reading, maybe a media playback position. Then there would be the common elements such as user info, amaybe some page specific cached items in local storage (non sensitive information, obviously) or maybe something else, these will usually be 
required, but will be a little different depending on whether you're using SPA or MPA.

On single page applications, the state will be managed on the client side throughout the application and parts can be sent to the server when needed. On a multi page application, the server takes care of the state, and can send only the necessary info to the client page instead of the whole state. So you need to consider if you're going to duplicate the state on both the client and server side (as you would need to send most client side state parameters) in SPA or let the server manage the state in MPA (this could mean more calls to your database since reads would be more frequent). If the state of your page depends heavily on previous pages, SPA would be able to handle it more effectively (specially if you don't need to store the actions of previous pages but just manage them)in MPA (this could mean more calls to your database since reads would be more frequent). If the state of your page depends heavily on previous pages, SPA would be able to handle it more effectively (specially if you don't need to store the actions of previous pages).

This state can also be kept in multi page applications with cookies or local storage, but you might want to watch out for cookie monsters or other attacks that can steal the data. Now you can decide whether your app can seperate the state of your page from the rest of the application.

There are some other things which you might need to consider like

## How fluid would page transitions be ? 

Traditionally a full reload will blank out and load the next page but view transitions might be of some help, though currently only experimental, they are available with [astro][https://astro.build].

## What about app performance?

This will usually be better as you won't need to render on the client side again, although popular frontend frameworks do have server side rendering so the app is compiled beforehand. Hydration will depend on how much ECMAScript you use (MPA) v/s the timeout in ` setTimeout(hydrate,whatever_this_time_is);` for your framework, but since we're talking about ECMAScript, you can't really be sure.

## Bandwidth and user connectivity?

Will your user loose connectivity after the initial app load? No server side calls after the initial page might render a lot of functionalities of your app useless. Server side rendered documents will usually be faster and require less bandwidth since they do not have to send the compiler across. On single page apps bandwidth issues might be mitigated a bit by lazy loading components and modules.

## How is UI managed?

Your existing framework or library can be used to build multi paged apps, although this might not be optimal since the last two points are not so much about SPA but rather the frameworks and libraries they are usually built with. But ECMAScript is still there, so you just would need to write out the things you need on your own.

These are some of the broader things you might need to consider (the finer details can be looked at later since they can be more or less changed). Although this post was mostly centered about considering a single or multi page application design, these are also a little about the frameworks and libraries used to make these apps (as I wrote in the last part), Hopefully this give you a better idea for your application design, and if it doesn't, you can always flip a coin to choose one and change
later when your inevitably lacks the features you want.

#### Next up: It's not impostor syndrome, you're just a bad developer.
