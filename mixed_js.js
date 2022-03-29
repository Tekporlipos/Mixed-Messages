//types of Sentence
var sentences = ["Conditional Sentences","Simple Sentence","Declarative Sentence","Compound-Complex Sentence","Interrogative Sentence","Imperative Sentence","Compound Sentence","Complex Sentence"]

//definition to the sentences 

var definitions = ["A conditional sentence tells the “conditions” in which something happens. It shows a possible cause and effect situation in the form of an “if…then” statement—in fact, every conditional sentence has a clause beginning with “if.” Conditional sentences let us express things that might or could have happened, could still happen, we wish could happen, or always happen in specific circumstances.",

"A simple sentence is the most basic sentence that we have in English. It has just one independent clause, which means only one subject and one predicate. A simple sentence is also the shortest possible sentence; it can have as little as two words!",

"A declarative sentence is a sentence that makes a statement – in other words, it declares something. This kind of sentence is used to share information – for instance, stating your point of view or a fact. Of the four kinds of sentences (declarative, interrogative, imperative, exclamatory), it is by far the most common.",

"Compound-complex sentences are the most complicated sentences, as their name implies. A compound-complex sentence has at least two independent clauses and at least one dependent clause. In simple terms, an independent clause can be a sentence on its own while a dependent clause cannot.",

"An interrogative sentence is a sentence that asks something. In other words, it’s a question! An interrogative sentence will always end with a question mark (?) and this makes them easy to spot. Along with the other types of sentences, like declarative and exclamatory sentences, interrogative sentences make up the common parts of conversations.",

"An imperative sentence gives requests, demands, or instructions; or, shares wishes or invitations for others. Basically, they tell someone what to do! As one of the four main types of sentences, they have an important role in both speaking and writing.",

"A compound sentence allows us to share a lot of information by combining two or more related thoughts into one sentence.",

"A complex sentence is a sentence with an independent clause and a dependent clause. It is one of the four main types of sentence structures."]

var petNames = ["dear","sweetie","there","honey","smart","dude"];
var greetings = ["Hello","Hola","Hi","salute","Greetings","welcome"]
var surprise = ["Good","Nice job","Excellent","Interesting","wow","wonderful"]

//Examples
var examples = [["If you love me, let me go!","I wouldn't be here if I had never met you.","If opportunity knocks, open the door.","You can't be shy if you want to make friends.","If you want, I can go with you to the store.","If I am late to school, I will get detention.","If I don't do my homework, the teacher yells","If I hadn't eaten so much candy, I might be hungry."],


["I ate.","I ate dinner.","I ate dinner with my brother and sister.","Last night, I ate dinner at a restaurant with my brother and sister.","The cat ate.","He ate ice cream.","He went to the beach.","The wolf ate steak at the zoo.","I see you behind the cotton candy machine!","He ran to the fair as fast as possible.","We ate buttery corn at the famous farmer's market.","They prepared cotton candy in an old-fashioned machine."],


["The dog is sleeping on the couch.","Studying makes taking a test easier.Amphibians spend part of their lives in the water and part on land.","Please don’t give the dog chocolate.","Penelope is from a small town.","Horses are valuable animals to have on a farm.","Please be quiet in the library","Thor and Odin are two major gods in Norse mythology."],



["Kate doesn’t like cartoons because they are loud, so she doesn’t watch them.","The dog started barking so the cat ran away and I couldn’t keep up, so I stopped.","Even though she was tired, Abby knew she had to finish the race and she ran to meet her team.","Usually I take a walk every day while the sun sets, but it was raining today.","She likes to sleep in but she can get up early if she has work.","Usually I take a walk every day while the sun sets, but it was raining today.","She likes to sleep in but she can get up early if she has work.","The cat jumped onto the couch."],

["Dude, where’s my car?","Are you ready to leave?","Is she awake?","Am I too early?","Did you read?","When do you want to go to bed?","Have you brushed your teeth?","Can they come downstairs?"],

["Do Not Enter","Please be quiet in the library.","Let’s eat.","Come with me.","Be nice!","Help me!","Please be quiet.","Let me help you."],


["I drove to the park, and then I walked to the beach.","Mike drove to the park, and I walked to the beach.","The parrot ate popcorn.","The wolf ran quickly.","He ate candy apples.","He went to the mall.","The boy ran to the park then he ate a hotdog.","The boy ran to the park, and then he ate a hotdog."],

["When the dog went to the county fair, he ate popcorn.","If the dog goes to the county fair, he will eat popcorn.","The dog went to the county fair after he smelled popcorn.","The dog went to the county fair when he smelled the popcorn.","When he was at the county fair, the dog ate popcorn.","Though he likes cotton candy, the dog loves popcorn.","The dog gets a stomachache if he eats popcorn.","The dog went to the county fair when he smelled the popcorn."]];


//get the sencetece we are going to talk about.
var chance  = Math.ceil(Math.random()*sentences.length-1);

function leasonTime() {
    console.log(`${greetings[Math.ceil(Math.random()*greetings.length-1)]} ${petNames[Math.ceil(Math.random()*petNames.length-1)]}!, we are going to learn ${sentences[chance]}\n\n`);
    console.log(`Okay, so what is a ${sentences[chance]}?\n${definitions[chance]}\n\n`);
    console.log(`${surprise[Math.ceil(Math.random()*surprise.length-1)]}!, You nailed it. Now you understand ${sentences[chance]} let look at \nExample: ${ examples[chance][Math.ceil(Math.random()*sentences.length-1)]}`);
}

leasonTime();