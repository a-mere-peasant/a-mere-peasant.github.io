# Quantum Browsing : serve all your content at once!

It's been a few years since quantum desktops launched and a few months since we developed the quantum Web APIs to take advantage of quantum computing straight in our browsers. Announcing the new way of delivering content to consumers.

## Blazingly fast is too slow

Long time ago, web frameworks tried to be blazingly fast, but the travel time between client and servers with requests bouncing back and forth was always a bottleneck for web applications. With quantum Web APIs, forget blazingly fast, introducing already there. A way to deliver all the content your user will ever need, including all the possible results for all the possible actions the user can take. No need to get a request from the client anymore.

To know how this is done, first we start with

## A little introduction to quantum computing 

So quantum computing basically takes advantage of two quantum phenomena to do stuff not really possible with conventional computing. The first is quantum superposition which means that every qubit (quantum bit) is not necessarily bound to be 0 or 1, it is a combination of all possible states between 0 and 1 (like a point on a sphere). So the qubit is in a "superposition" of all these possible states until it is **measured**. 

### What does measuring mean? 

It basically means interacting. So when you look at a subatomic particle, you measure it (it interacts with photons so as long as there is a photon touching it, it's being measured). There are a lot of ways to measure qubits depending on what you are using as a qubit.

For classical bits, it doesn't matter if you're not looking at the
bits, they are going to be either a 0 or a 1. They can chill around between circuits without being "measured" and you can be sure of their value (excluding cosmic ray interference, hardware issues and ECMAScript). But since qubits are in a superposition, you cannot be sure what value they yield when measured with each outcome having a probability of occurring and you get different results on different measurements.(This is also the famous Schrödinger's cat thought experiment)
Now the second quantum phenomenon that quantum computing takes advantage of is quantum entanglement. I won't go into detail here except that it's what makes teleportation possible.

This superposition can be represented as points on a sphere, with a state |x> = a |0> + b |1> with a and b representing the square root of probability of 0 or 1 occurring and also as a unit vector which points to this superposition state.

We can apply various quantum gates to these qubits (like the classical and, or, not gates for bits). These can have the effect of rotating the unit vectors which can be really useful. As an example, let's go over

## Grover's search algorithm

What is the fastest search algorithm you have seen in classical computation (yes linear search for the first element is fastest, but I'm talking about average time). Maybe a binary search which needs your data to be sorted, or some other method which works by using the bounds of your data? What if you did not get any additional info but the data itself.

Well you're no longer bound by classical computing with CPU threads only being able to handle multiple states all at once. Run 10 threads in parallel ? **WHY?** Just use a n-qubit gate to transform n qubits at once.

Grovers algorthim searches in a time complexity of O(√n). It does so by applying a gate to the n-qubit superposition which rotates all other states except the one we are looking for. At the end, the state we are looking for becomes orthogonal (at 90°) to all others. This happens in the magnitude of √n tries at most.

Now since we know we can apply quantum gates to rotate the vectors however we want for our use. So we can now

## Serve all our content at once!

and then depending on user interaction, change the state to be whatever you want, obviously after you have made a clone of this state (since measuring the state will make it fall to a collection of 0s and 1s). What kinds of functions could you use? How would you go about cloning the states? What about authentication? Storing user data? Initial load times? are all questions that you might be asking right now. All those seem like the problem for another time, so we won't really worry about that right now.

#### Next up: The 150 **Essential** frontend frameworks to know to get started with your web development journey.
