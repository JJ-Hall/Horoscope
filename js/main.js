document.querySelector('#bDayButton').addEventListener('click', dateConverter)

const Capricorn = {
    name: "Capricorn",
    description: "Responsible Capricorn‘s animal is the mountain goat, and its glyph—showing a goat’s hoof and the tail of a fish—is one of the most interesting of the zodiac signs. As a grounded earth sign, Capricorn is one of the hardest workers. They’re always looking to climb to the next rung on the ladder of success. That’s the determined goat part. The fishtail represents Capricorn’s Greek mythology roots as the Sea-goat. A creature that represents the watery, emotional undercurrent of Capricorn’s sometimes unexpected nature.  ",
    famous: "LeBron James, Meghan Trainor, Timothee Chalamet"
}

const Aquarius = {
    name: "Aquarius",
    description: "An air sign represented by the Water Bearer? Somewhat confusing. When you investigate the symbol a little deeper, it all makes sense. The water flowing from the Water Bearer’s pitcher represents the stream of Aquarius’ thoughts. This air sign is incredibly mental-oriented and, although stubborn, can be open-minded. The Aquarius glyph also resembles an equal sign. A clear representation of this sign’s humanitarianism, and lifelong quest to advocate equality for all humankind.",
    famous: "The Weekend, Jennifer Aniston, Michael B. Jordan"
}

const Pisces = {
    name: "Pisces",
    description: "Featuring Two Fish linked together, Pisces’ symbol is easily recognizable. The Two Fish remind us that Pisces are often are living “in-between” reality and their dreams. The fish are connected to each other, and so is Pisces to two different worlds. The Fish are often said to be swimming in two different directions, which is a nod to Pisces’ indecisiveness. But although the Fish are trying to move in opposite directions, they are connected by a chord. An obvious representation of Pisces’ inability of moving away from people who need them. Even when they know they should walk away, their kindness and compassion can often keep them tethered to people or situations that might ultimately weigh them down.",
    famous: "Millie Bobby Brown, Rihanna, Albert Einstein"
}

const Aries = {
    name: "Aries",
    description: "Strong and assertive fire sign, it’s fitting that Aries‘ zodiac symbol is the Ram. The horns of a ram signify their physical strength, and their fearlessness and willingness to fight for what they want. Like a ram, Aries are competitive, enthusiastic, and energetic. This animal and zodiac sign commit to moving forward despite the obstacles in their way. As the first set of horoscope dates in the zodiac, Aries is the leader. It’s important that Aries represents a powerful symbol of strength. Aries are no stranger to powering ahead and forging their own place in the world.",
    famous: "Elton John, Lady Gaga, Reese Witherspoon"
}

const Taurus = {
    name: "Taurus",
    description: "The stubborn Bull is the zodiac symbol for earth sign Taurus. It’s easy to distinguish because it looks like the head of a bull with large horns protruding from each side. When most people think of a bull, they think of a strong, sturdy, and sometimes immovable animal. And if this doesn’t describe the Taurus personality perfectly, we’re not really sure what does. Stubbornness, persistence, and hard work are all associated with both Taurus and a bull, as both move at a slow pace and persevere despite the odds. Neither the animal nor the zodiac sign is likely to win any races, but they both know that they’ll cross the finish line eventually. And all by moving at a steady and determined pace.",
    famous: "Adele, Dwayne “the Rock” Johnson, Lizzo"
}

const Gemini = {
    name: "Gemini",
    description: "It’s hard not to double the fun with Gemini. This zodiac sign is represented by the Twins, but their symbol is more symbolic of the Roman numeral II. The Roman numeral represents Gemini’s infamous dual nature. Curiosity, collaboration, and versatility are some of the traits associated with Gemini. And let’s not forget their advanced ability to communicate and be inventive. Represented by the Twins, Gemini’s “other side” appears often. Gemini’s dual nature sometimes gives them a reputation for being two-faced, flaky, or fake. As with identical twins, who like to fool people by switching places from time to time, with the ever-changing Gemini personality you never know which side you’re going to get!",
    famous: "Kanye West, Angelina Jolie, Marilyn Monroe"
}

const Cancer = {
    name: "Cancer",
    description: "Water sign Cancer is represented by the Crab, but their symbol looks like the number 69. Cancer’s zodiac symbol is often thought to represent a set of the crab’s claws. This zodiac sign can “strike out” at anyone who tries to interfere with the security of their tight-knit family or group of friends. Because of their nurturing ways, Cancer’s glyph is also sometimes said to be representative of a woman’s breasts. In astrology, each zodiac sign is associated with a body part, and Cancer rules the chest, which are the ultimate symbol of femininity and motherhood.",
    famous: "Ariana Grande, Will Ferrell, Selena Gomez"
}

const Leo = {
    name: "Leo",
    description: "Represented by the fearless lion, Leos are one confident zodiac sign. When you look at the Leo glyph, you see a lion’s head and mane. (Many Leos are actually noted for their hair, or mane!) Leos are passionate, dramatic, and expressive individuals, much like their King of the Jungle animal counterparts. Lions are also bold yet playful, which are two of Leo’s main characteristics. Some believe Leo’s symbol is two halves of a heart, representing this zodiac sign’s warmth and desire to take care of the people they love.",
    famous: "Kylie Jenner, Barack Obama, Jennifer Lopez"
}

const Virgo = {
    name: "Virgo",
    description: "Earth sign Virgo‘s symbol is the Virgin, and is one of a few zodiac signs that isn’t an animal. Virgo’s zodiac symbol looks like an “M,” which represents the first letter of the word “maiden.” The symbol also has a loop that crosses back onto itself, like a set of closed legs. This refers to Virgo’s pure nature and represents their tendency to discern between right and wrong. It also alludes to their tendency to close themselves off to anything they deem impure. Their standards and morals for others are high, but are even higher for themselves.",
    famous: "Beyoncé, Nick Jonas, Adam Sandler"
}

const Libra = {
    name: "Libra",
    description: "Always wanting to keep the peace, Libra‘s symbol is the Scales of Justice. It’s fitting that Libra’s symbol is an equally balanced scale. It also represents the sun on top of the horizon, which is a highly balanced depiction of life. The “in-between” phase of the sun rising and setting is often where Libra lives. As the only non-living symbol of the zodiac, the Scales represent Libra’s quest for fairness and equality. It also highlights their indecisiveness, swinging from one side of an issue to another while searching for the truth.",
    famous: "Zac Efron, Kim Kardashian, Will Smith"
}

const Scorpio = {
    name: "Scorpio",
    description: "Everyone has heard about Scorpio’s stinger. Scorpio‘s animal counterpart is the Scorpion. Some see the zodiac glyph as resembling the letter “M.” It’s said that this shape also is a nod to the Scorpion itself. Others believe it touches on the reproductive organs, or an arrow representing the Scorpio’s stinger. Whichever version you choose, the power symbolized in both scenarios is undeniable. Intimacy, intensity, power, control and obsessiveness are all Scorpio traits. Their highly sexual, dangerous yet irresistible qualities act as both a warning and a magnet to those who encounter this alluring sign!",
    famous: "Drake, Future, Ryan Reynolds"
}

const Sagittarius = {
    name: "Sagittarius",
    description: "The Archer and its arrow shoot for the sky, and represent Sagittarius‘ optimistic nature. Could it get more straightforward? The symbol is a literal representation of the Archer’s arrow. Sagittarius is known as an expansive, adventurous zodiac sign who has greater ideals than most. The representation of an upwardly pointing arrow is a perfect illustration of Sagittarius’ desire to move on to bigger and better things in life. The arrow also reveals Sagittarius’ optimistic attitude (always looking up) and their desire to aim higher in all areas of their life.",
    famous: "Billie Eilish, Nicki Minaj, Brad Pitt"
}

function dateConverter() {
    let reading = document.querySelector('#bDay').value 
    let dateSlice1 = reading.slice(5,7)
    let dateSlice2 = reading.slice(8,10)
    let convertedDate = dateSlice1 + dateSlice2
    horoscopeReading(Number(convertedDate));
}

function horoscopeReading(date) {
    let title = document.querySelector('#title')
    let description = document.querySelector('#description')
    let famous = document.querySelector('#famous')
    document.querySelector("#errorHandle").style.display = "none"
    document.querySelector("#descriptions").style.display = "block"
    if(date === 0) {
        document.querySelector("#errorHandle").style.display = "block"
        document.querySelector("#descriptions").style.display = "none";
    } else if (date >= 1222 || date <= 0119) {
        title.innerHTML = Capricorn.name
        description.innerHTML = Capricorn.description
        famous.innerHTML = Capricorn.famous;
    } else if (date >= 120 && date <= 218) {
        title.innerHTML = Aquarius.name
        description.innerHTML = Aquarius.description
        famous.innerHTML = Aquarius.famous
    } else if (date >= 219 && date <= 320) {
        title.innerHTML = Pisces.name
        description.innerHTML = Pisces.description
        famous.innerHTML = Pisces.famous
    } else if (date >= 321 && date <= 419) {
        title.innerHTML = Aries.name
        description.innerHTML = Aries.description
        famous.innerHTML = Aries.famous
    } else if (date >= 420 && date <= 520) {
        title.innerHTML = Taurus.name
        description.innerHTML = Taurus.description
        famous.innerHTML = Taurus.famous
    } else if (date >= 521 && date <= 620) {
        title.innerHTML = Gemini.name
        description.innerHTML = Gemini.description
        famous.innerHTML = Gemini.famous
    } else if (date >= 621 && date <= 722) {
        title.innerHTML = Cancer.name
        description.innerHTML = Cancer.description
        famous.innerHTML = Cancer.famous
    } else if (date >= 723 && date <= 822) {
        title.innerHTML = Leo.name
        description.innerHTML = Leo.description
        famous.innerHTML = Leo.famous
    } else if (date >= 823 && date <= 922) {
        title.innerHTML = Virgo.name
        description.innerHTML = Virgo.description
        famous.innerHTML = Virgo.famous
    } else if (date >= 923 && date <= 1022) {
        title.innerHTML = Libra.name
        description.innerHTML = Libra.description
        famous.innerHTML = Libra.famous
    } else if (date >= 1023 && date <= 1121) {
        title.innerHTML = Scorpio.name
        description.innerHTML = Scorpio.description
        famous.innerHTML = Scorpio.famous
    } else if (date >= 1122 && date <= 1221) {
        title.innerHTML = Sagittarius.name
        description.innerHTML = Sagittarius.description
        famous.innerHTML = Sagittarius.famous
    }
}