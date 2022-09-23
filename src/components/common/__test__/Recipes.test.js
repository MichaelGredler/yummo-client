import { render, screen } from '@testing-library/react';
import Recipes, {recipeState, tagSearch, userState} from '../../Recipes';
import { BrowserRouter } from 'react-router-dom';

const mockRecipeState = 
[
    {
        "id": 10,
        "title": "Fancy Meatloaf",
        "author": "Hunter Walsh",
        "serves": "12",
        "cookingTimeHrs": "2",
        "cookingTimeMins": "0",
        "image": "/images/meatloaf.webp",
        "difficulty": "Medium",
        "likes": 241,
        "tags": [
            "Main",
            "Classic",
            "Dinner",
            "Famliy",
            "Beef"
        ],
        "ingredients": "4 medium bulbs of fennel|olive oil|2 onions|2 carrots|½ a bunch of fresh sage (15g)|½ a bunch of fresh rosemary (15g)|1 x 125 g ball of mozzarella cheese|200 g sourdough breadcrumbs|1 kg higher-welfare minced pork|1 kg minced beef|2 teaspoons wholegrain mustard|2 large free-range eggs|12 rashers of higher-welfare smoked streaky bacon|500 ml organic chicken stock|2 tablespoons quality blackcurrant jam|1 tablespoon sun-dried tomato purée",
        "method": "Preheat the oven to 180ºC/350ºF/gas 4.|Trim each fennel bulb and chop into eight wedges, then place in a large roasting tray, drizzle with oil, season with sea salt and black pepper and roast for 30 minutes.|Meanwhile, peel and dice the onions and carrots, place in a large pan with 1 tablespoon of oil on a medium-low heat and cook for 20 minutes, stirring occasionally.|Pick the herb leaves, finely chop half of them and add to the veg pan, saving the rest for later.|Leave the veg to cool completely, then tear in the mozzarella and add the breadcrumbs, minced meat, mustard, eggs, and a good pinch of sea salt and black pepper. Scrunch and mix well, then shape into a loaf.|Make a space in the middle of the fennel tray and sit the meatloaf in the centre. Criss-cross the smoky bacon over the meatloaf, drizzle with a little oil, then cover the tray with tin foil.|Roast for 30 minutes, then remove from the oven and discard the foil.|Mix the chicken stock, jam and tomato purée together in a jug until smooth, then pour into the tray. Toss the reserved herbs with a little oil and scatter into the tray, then return to the oven for a final 45 minutes, or until cooked through.|If the juices need thickening at this stage, simply put the tray on the hob to reduce for a few minutes, until they’re the consistency of your liking, skimming away any fat from the surface, if needed.|Serve the meatloaf, sweet fennel and juices with mash and seasonal greens.",
        "createdAt": "2021-10-20T07:18:32.283Z",
        "updatedAt": "2021-11-10T12:25:26.217Z"
    },
    {
        "id": 12,
        "title": "Salted Caramel Brownies",
        "author": "Joanna Schuman",
        "serves": "16",
        "cookingTimeHrs": "0",
        "cookingTimeMins": "55",
        "image": "/images/brownies.webp",
        "difficulty": "Medium",
        "likes": 217,
        "tags": [
            "Dessert",
            "Slice",
            "Chocolate"
        ],
        "ingredients": "225 g butter , plus extra for greasing|250 g dark chocolate (70% cocoa solids)|225 g golden caster sugar|4 large free-range eggs|150 g plain flour|¼ of a vanilla pod|40 ml double cream|15 g salted butter|60 g caster sugar|40 g golden syrup",
        "method": "Start by making your caramel. Split the vanilla pod lengthways, scrape out the seeds, then place into a pan.|Combine with the cream, half of the butter and a good pinch of sea salt. Cook, whisking, over a low heat for about 2 to 3 minutes until it’s just bubbling, then take the pan off the heat and set aside.|Place the caster sugar and golden syrup in a medium heavy-based pan over a low heat. Don’t stir, just gently swirl the pan to help dissolve the sugar.|Turn up the heat to medium and keep swirling until the sugar turns into a golden caramel.|Take the pan off the heat. Discard the vanilla pod from the hot milk, then stir in the caramel with a wooden spoon.|Return it to a low heat while you stir in the remaining butter, then remove from the heat and set aside.|Scrunch up a large piece of greaseproof paper, make it wet (shake off the excess), then use it to line a 20cm x 30cm baking tin.|Pour in the caramel, sprinkle with another pinch of salt, and place it on a tea towel in the fridge for 30 minutes, until you have a thick, gooey caramel.|Once the caramel has been chilling for 15 minutes, start the brownies. Preheat the oven to 180ºC/350ºF/gas 4. Grease and line another 20cm x 30cm baking tin.|Melt the butter in a pan over a low heat. Chop and stir in the chocolate until it’s melted, then remove from the heat and stir in the sugar.|Once cooled slightly, whisk in the eggs, then sift and fold in the flour until incorporated. Pour the mixture into the tin.|Take your caramel from the fridge, scoop out spoonfuls and dot them into the brownie mixture, pressing to submerge. Once you have a third of the caramel left, drizzle it on top, using your spoon to ripple it through.|Bake the brownies in the oven for about 25 minutes, or until cooked but still a bit gooey.|Leave to cool for 1 hour, cut into squares and serve.",
        "createdAt": "2021-10-20T07:18:32.283Z",
        "updatedAt": "2021-11-03T22:24:03.011Z"
    },
    {
        "id": 1,
        "title": "Lamb Shank Tagine",
        "author": "Elizabeth Reed",
        "serves": "4",
        "cookingTimeHrs": "3",
        "cookingTimeMins": "30",
        "image": "/images/lamb-tagine.webp",
        "difficulty": "Medium",
        "likes": 175,
        "tags": [
            "Dinner",
            "Main",
            "Fancy"
        ],
        "ingredients": "4 lamb shanks, French trimmed|olive oil|1 fresh red chilli|1 clove of garlic|1 red onion|1 quince|2 carrots|1 bulb of fennel|2 fresh bay leaves|1 pinch of saffron|2 ripe tomatoes , on the vine|1 preserved lemon|1 litre quality organic chicken stock|200 g couscous|1 bunch of fresh mint , (30g)|1 handful of black olives , (stone in)|½ a bunch of fresh flat-leaf parsley , (15g)|½ a lemon|½ an orange|extra virgin olive oil|50 g rose harissa|4 heaped tablespoons fat-free natural yoghurt|RAS EL-HANOUT|2 cardamon pods|½ teaspoon ground cinnamon|1 teaspoon cayenne pepper|1 heaped teaspoon coriander seeds|½ teaspoon sweet smoked paprika|1 tiny pinch of cumin seeds|½ teaspoon ground turmeric|½ teaspoon ground ginger",
        "method": "Preheat the oven to 160ºC/325ºF/gas 3.|To make the ras el hanout, lightly bash the cardamom pods in a pestle and mortar, then shake out the seeds, discarding the pods. Bash and muddle in the remaining ingredients to form a powder.|Massage into the lamb shanks, then place in a large ovenproof pan on a medium-high heat with ½ a tablespoon of olive oil. Cook for 6 to 8 minutes, or until browned all over, turning regularly.|Prick the chilli and add alongside the lamb until slightly scalded all over, then remove both lamb and chilli to a plate.|Peel and finely slice the garlic. Peel the onion and quince, cutting each into 8 wedges. Peel the carrots and chop at an angle into 4cm chunks. Trim and quarter the fennel bulb.|Wipe out the pan with a ball of kitchen paper, then place on a medium heat with ½ a tablespoon of olive oil, the pricked chilli, bay leaves, garlic, quince and veg. Cook for 10 to 12 minutes, or until softened, stirring occasionally.|In a cup, just cover the saffron with boiling water.|Return the lamb shanks to the pan, then quarter and add the tomatoes along with the saffron mixture, whole preserved lemon and stock. Bring to the boil. Cover the surface with a scrunched-up circular sheet of wet greaseproof paper, then pop a lid on.|Cook in the oven for 2 hours to 2 hours 30 minutes, or until the shanks are soft and delicious and the sauce has reduced.|Use a spoon to skim away any excess fat from the surface, then carefully remove the shanks to a plate.|Place the pan on a medium-high heat for 5 to 10 minutes, or until the sauce has thickened and reduced, stirring occasionally.|Place the couscous and half the mint sprigs in a bowl, just cover with boiling water, pop a plate on top and leave to soak and infuse.|To make a salad, destone the olives and roughly tear into a bowl. Pick in the parsley and remaining mint leaves, squeeze over the lemon and orange juice, add a drizzle of extra virgin olive oil and a pinch of sea salt and black pepper, then toss together.|Swirl the harissa through the yoghurt. Return the lamb shanks to the sauce.|Fluff up the couscous, discarding the mint, then divide between your plates. Spoon over the tagine, sprinkle over the salad, and finish with a dollop of harissa yoghurt.",
        "createdAt": "2021-10-20T07:18:32.282Z",
        "updatedAt": "2021-10-20T07:18:32.282Z"
    },
    {
        "id": 7,
        "title": "Classic Family Lasagne",
        "author": "Felicia Parker",
        "serves": "10",
        "cookingTimeHrs": "4",
        "cookingTimeMins": "30",
        "image": "/images/lasagne.webp",
        "difficulty": "Medium",
        "likes": 123,
        "tags": [
            "Family",
            "Dinner",
            "Main",
            "Comfort Food",
            "Classic"
        ],
        "ingredients": "2 sprigs of fresh rosemary|100 g higher-welfare smoked streaky bacon|olive oil|1 kg quality minced beef|1 kg higher-welfare minced pork|4 carrots|2 onions|4 sticks of celery|2 heaped tablespoons tomato purée|4 x 400 g tins of plum tomatoes|350 g dried lasagne sheets|WHITE SAUCE|150 g mature Cheddar cheese|2 medium leeks|2 fresh bay leaves|4 tablespoons plain flour|1 litre semi-skimmed milk|1 whole nutmeg , for grating",
        "method": "Strip and finely chop the rosemary leaves and finely chop the bacon.|Heat 1 tablespoon of oil in a large casserole pan on a high heat. Once hot, add the rosemary and bacon and fry for 2 minutes, or until the bacon starts to crisp up, stirring regularly.|Add all the minced meat, using a wooden spoon to break it up as you go. Reduce the heat to medium and cook for at least 10 minutes, or until all the liquid has evaporated, stirring occasionally.|Place the coarse grater attachment in your food processor (or you could use a box grater instead) and grate the Cheddar, then tip into a bowl.|Replace the grater with the regular blade. Trim and halve the carrots, then add to the processor and blitz to roughly the same size as the mince. Peel and halve the onions, add them to the carrot and blitz again.|Tip into the pan with the mince while you get on with blitzing and adding the celery. Cook for 15 to 20 minutes, or until the vegetables start to soften, stirring regularly.|Next, add the tomato purée and plum tomatoes, breaking them up with a spoon. Fill each of the tins with water and tip into the pan.| Give everything a good stir and reduce the heat to low. Leave to simmer around 2 hours, or until thickened and reduced, stirring occasionally.|While that ticks away, make your white sauce. Trim, wash and finely slice the leeks, then add to a pan along with 2 tablespoons of oil and the bay leaves. Stir well and season with a tiny pinch of sea salt and black pepper.|Reduce the heat to low and cook for 30 minutes, or until sweet and softened, adding splashes of water, if needed.|Add the flour and stir well to coat, then gradually add the milk, stirring continuously. Turn the heat up to medium, bring to the boil, then reduce to low and cook for 5 to 10 minutes, or until thickened, stirring regularly.|Carefully transfer the sauce to the food processor and blitz until smooth and silky. Add half the grated cheese and finely grate over half the nutmeg and mix well. Season to taste.|Once the ragù is ready, preheat the oven to 190ºC/375ºF/gas 5.|Season the ragù to taste, then transfer half into freezer bags, portioning up as appropriate for your family. Allow to cool to room temperature, then pop in the freezer for another day. It’s a good idea to freeze them flat so that you can reheat them quickly and easily. It’s also a good idea to label and date them to avoid a game of freezer roulette in a few weeks’ time!|To build your lasagne, spoon a quarter of the ragù into a large deep ovenproof dish (roughly 25cm by 30cm) and spread it out evenly.|Spoon over a quarter of the white sauce, then snap over some lasagne sheets, making sure they completely cover the sauce in one layer. Repeat this 3 times, finishing with a layer of white sauce.|Sprinkle over the remaining cheese and bake the lasagne in the oven for 45 minutes or until golden and bubbling.|Remove the lasagne from the oven and leave to sit for 5 to 10 minutes before serving. Delicious served with a fresh green salad.",
        "createdAt": "2021-10-20T07:18:32.283Z",
        "updatedAt": "2021-11-03T00:15:53.927Z"
    },
    {
        "id": 4,
        "title": "Paella",
        "author": "Alex Mccoy",
        "serves": "6",
        "cookingTimeHrs": "1",
        "cookingTimeMins": "30",
        "image": "/images/paella.webp",
        "difficulty": "Medium",
        "likes": 96,
        "tags": [
            "Seafood",
            "Dinner",
            "Main",
            "Gluten-free"
        ],
        "ingredients": "6 free-range chicken thighs, skin on, bone in|plain flour|olive oil|100 g quality chorizo|1 onion|4 cloves of garlic|½ a bunch of fresh flat-leaf parsley|6 rashers of higher-welfare pancetta or smoked streaky bacon|2 litres organic chicken stock|2 large pinches of saffron|1 heaped teaspoon smoked paprika|500 g paella rice|2 small squid , from sustainable sources, optional|2 handfuls of fresh or frozen peas|10 large raw shell-on king prawns , from sustainable sources|500 g mussels , (cleaned) from sustainable sources, optional|1 lemon",
        "method": "Preheat the oven to 190ºC/375ºF/gas 5.|Quarter each piece of chicken, then season with sea salt and black pepper and dust with flour.|Heat a splash of oil in a large, deep pan on a medium heat and fry the chicken until golden brown all over, then transfer to a baking tray and place in the oven for 20 minutes, or until cooked through.|Meanwhile, slice the chorizo, peel and finely chop the onion and garlic, and pick and finely chop the parsley leaves, finely chopping the stalks.|Put the pan back on the heat, add the sliced chorizo and pancetta or bacon and fry until browned and crispy. Add the onion, garlic and parsley stalks, then cook until soft.|Meanwhile, gently heat the chicken stock and infuse half with the saffron.|Add the smoked paprika, the rice and infused stock to the pan and leave to cook on a medium heat for around 20 minutes, stirring occasionally.|Meanwhile, halve the squid and lightly score all over with a regular eating knife (if using).|When the time’s up, add the remaining stock, peas, prawns, and the mussels and squid (if using). Place a lid on the pan and cook for 10 further minutes.|Finally, add the cooked chicken, sprinkle over the chopped parsley and serve with wedges of lemon for squeezing over.",
        "createdAt": "2021-10-20T07:18:32.283Z",
        "updatedAt": "2021-10-20T07:18:32.283Z"
    },
    {
        "id": 14,
        "title": "Sticky Toffee Pudding",
        "author": "Joanna Schuman",
        "serves": "16",
        "cookingTimeHrs": "1",
        "cookingTimeMins": "15",
        "image": "/images/toffee-pudding.webp",
        "difficulty": "Medium",
        "likes": 42,
        "tags": [
            "Dessert",
            "Pudding",
            "Classic"
        ],
        "ingredients": "2 Earl Grey tea bags|200g fresh Medjool dates|1 level teaspoon ground cinnamon|1 level teaspoon ground ginger|1 whole nutmeg , for grating|250 g leftover cooked pumpkin or butternut squash|170 g unsalted butter , plus extra for greasing (at room temperature)|340 g self-raising flour , plus extra for dusting|170 g golden caster sugar|170 g dark muscovado sugar|4 large free-range eggs|Maldon sea salt|CARAMEL SAUCE|250 g unsalted butter|125 g dark muscovado sugar|125 g golden caster sugar|50 ml dark rum|300 ml double cream",
        "method": "Preheat the oven to 180°C/350°F/gas 4.|Put the tea bags into a jug, cover with 150ml of boiling water and leave to steep for 3½ minutes. Meanwhile, destone the dates and put into a food processor with the cinnamon and ginger, then finely grate in half the nutmeg. Scoop out the tea bags and pour the tea over the dates, pushing them down so they’re submerged. Leave them to soak with the lid on for 10 minutes. Add the roasted pumpkin or squash, then blitz to a purée, stopping occasionally to scrape down the sides, which will help it along.|Butter and lightly flour a 26cm Bundt tin or a 20cm x 30cm baking dish. In a large mixing bowl, cream the butter and sugars together using a wooden spoon. Beat in the eggs, one by one then, using a large metal spoon, stir in the flour and fold in the puréed dates. Pour the pudding mixture into your chosen receptacle, then bake for 45 to 50 minutes, or until an inserted skewer comes out clean.|When your pudding is almost ready, make the sauce. Cube the butter and melt in a small pan on a medium heat. Add both the sugars, then, once nicely mixed, carefully add the rum (it may splatter) and double cream. Bring to the boil, then simmer for around 5 minutes, or until a lovely deep golden colour.|As soon as the pudding is out of the oven, if using a Bundt tin, flip out onto a platter and brush all over with enough sauce to form a delicate, crispy surface but also keep your sponge nice and bouncy. Or, if you’re traybaking it in a dish, poke small holes in the top and pour over one-third of the sauce. Sprinkle with a little sea salt for contrast, and serve with the remaining sauce on the side (or save for another day) and a little double cream, Greek yoghurt, ice cream or custard, if you like.",
        "createdAt": "2021-10-20T07:18:32.283Z",
        "updatedAt": "2021-10-20T07:18:32.283Z"
    }
]


const mockTagSearch = jest.fn();
const mockUserState = {
    "user": {
        "id": 11,
        "email": "test11@gmail.com",
        "password": "$2b$10$eexJv7h6Jl2ho8E/gkPom.0eJfuQYXnpzt3PIEjJFDUzSw4QetVbq",
        "createdAt": "2021-10-27T23:27:57.697Z",
        "updatedAt": "2021-10-27T23:27:57.697Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImVtYWlsIjoidGVzdDExQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGVleEp2N2g2SmwyaG84RS9na1BvbS4wZUpmdVFZWG5wenQzUElFakpGRFV6U3c0UWV0VmJxIiwiY3JlYXRlZEF0IjoiMjAyMS0xMC0yN1QyMzoyNzo1Ny42OTdaIiwidXBkYXRlZEF0IjoiMjAyMS0xMC0yN1QyMzoyNzo1Ny42OTdaIiwiaWF0IjoxNjM2NTkzMzk1LCJleHAiOjE2Mzc4MDI5OTV9.AzMQu1IN9Ix5bD3_zxuLxBxKyfOMm-P2j55kQbuHcC8"
}

const MockRecipe = ({ mockRecipeState, mockTagSearch, mockUserState }) => {
    return (
        <BrowserRouter>
            <Recipes recipeState={mockRecipeState} tagSearch={mockTagSearch} userState={mockUserState}/>
        </BrowserRouter>
    )
}

test('Should check if Recipe title is displayed', async () => {
    await render(<MockRecipe mockRecipeState={mockRecipeState} mockTagSearch={mockTagSearch} mockUserState={mockUserState}/>);
    const parElement = await screen.findByText("Fancy Meatloaf");
    expect(parElement).toBeInTheDocument();
})

