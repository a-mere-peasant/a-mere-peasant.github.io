#What's a window manager anyway ? 

Maybe you've heard the term *window manager* thrown around by someone who uses one, or maybe you just want to know more about system GUI. In any case, to get some context on window managers, let's first start by asking

### What's on the screen you're looking at ?

If you're on a desktop or a laptop, you're most probably looking at a screen which has some fancy icons on a toolbar, which might hide if it's not focused, then there's a window open with buttons to close and minimize it. Probably some other windows which are open, and some minimized. The toolbar probably has a clock and indicators for volume or brightness or battery or internet connectivity. Or maybe you have a separate toolbar and a dock which implement all that functionality. Most probably, you think that's the OS you're running. Well it's only a part of it called the *desktop environment*. 

The desktop environment (DE) is like the frontend of the OS. As stated earlier it usually consists of a toolbar, maybe a dock, might have some widgets, and of course the ***window manager***. If you're using windows, you most probably cannot change your DE, although there are tools to modify it. The story is a little different for macOS, linux, BSD, solaris or other unix or non-unix based operating systems (although you might miss out on some functionality by changing aqua which is the DE for macOS).


For DEs we have gnome (this is what you get on ubuntu by default), the super customizable KDE which uses Qt, cinnamon, MATE, Budgie, Pantheon, the lightweight but powerful xfce, even more lightweight lxde and lxqt, and a bunch of others. All of these can be customized to your liking.
Now combine these with the number of linux distributions available like arch,manjaro,ubuntu,linux mint,elementaryOS, openSuSE, debian, artix, anarchy, and a lot of other distributions (sorry if I missed your favorite) and you can install a different distro each day with a different DE trying to find the perfect combination until you're pretty deep into the rabbit hole when you realize that you actually need to do some work rather than just changing your system everyday thinking you're learning more about your system and how it works (you do actually learn a lot in this process but it's better to stop earlier cause you can learn it all on a single distro as well)

Anyhow, let's get back to the topic and introduce you to the world of **window managers**.

The window manager is part of the desktop environment which helps to (you guessed it) *manage windows*. This means it takes care of which windows are open, where they are placed on the screen, their size, which windows are minimized, which desktop/workspace they are on, also which windows are on which monitors (if you have a multi monitor setup). Now normally a window manager is only a part of the desktop environment but it is kind of the core component. So what if I told you

### You can make do with just a window manager

That's right, you can, although you might need some form of a bar for a clock and basic indicators. This will more or less give you the core functionality that you need, and if you don't really use all the added functionality, or can learn to live without it or with alternatives (which looks super tough but is surprisingly easy) this might just be better than a DE. 

**But why should you?**     

Well the biggest reason would be performance consideration, using a window manager instead of DE would mean running less background tasks in general, allowing you to free up more ram for your browser to eat. You can also get to know more about your system by using window manager as they will require you to use other tools for tasks like a toolbar, setting these things up can be a great learning experience. Most likely you'll start using the terminal more often and terminal utilities might also improve your understanding of the system you're running. This is most likely useful for software developers or system administrators, devops or appsec or anyone who works in tech in general.  Maybe you just want a minimal system. There's also a point to be made that these can be customized to look pretty cool and might give you a reason to flex on others (*but you wouldn't do it for just that, would you?*).

Now, window managers (WMs) are mainly of two types, floating (stacking) and tiling, although both of these might implement the other's functionality as well (dynamic is usually considered a different category, but most are just going to be used on way 90% of the time). Most DEs use floating window managers which means your windows can float around on the desktop arbitrarily. Tiling window managers places windows similar to tiles on a wall (these are also the ones hackers use in movies). Tiling window managers are usually keyboard driven, and don't have buttons on windows so they have a steeper learning curve but can also make you more productive and make better use of your screen. So after knowing about window managers and that you can just use on instead of a DE, you might ask 

### Which window manager should I use?

If you are going with floating window managers, you can use openbox. There are a bunch of other floating window managers (including the ones that come with a DE, yes you *can* use them as standalone, *but* you might not want to cause *issues*). These can make pretty coll looking setups, which you can use as backgrounds on your lo-fi music videos.

Now comes the interesting part, the **tiling window managers**. These are usually of two types of classifications. Manual or dynamic, based on whether you need to tell the window manager where to open up the next window (or if it opens the next window in a set pattern) and stacking or tree based related to how the WM treats the windows, tree based WMs usually have a parent child type relationship while stacking managers use a stack to manage the windows (not to be confused with the stack data structure, although somewhat similar), moving them up and down the stack depending on size or focus. Now which window manager should you choose?

I have a bias towards dynamic window managers since you don't need to specify where to place windows whenever you open a new one, although I think most people use i3 which is a manual one since it's the most famous one (like ubuntu for distros). Here's a list of use cases for each one:

i3 - "I just use i3, it makes me more productive"

dwm - "What do you mean config files, I just modify the source code to configure mine."

leftWM - "Rust"

xmonad - "It's just functional"

awesomewm - "I just like to write custom widgets and use them cause why not"

bspwm - "What do you mean manual *or** dynamic"

qtile - "What do you mean python is not for low level applications"

Starting out, it won't really matter which one you choose, cause you can switch if you don't like one, even though all of them are just the same cause you'll get used to using them and then changing the workflow is going to be difficult. Also the dynamic ones are basically the same thing written in different languages (please put down your torches and pitchforks, this was just a joke (or was it?)).



#### Next Up : "Oh that systemd crap" and 5 replies to "I use arch BTW"

