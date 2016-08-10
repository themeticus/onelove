/*if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./sw.js', {scope: './'})
        .then(function (registration) {
            console.log(registration);
        })
        .catch(function (e) {
            console.error(e);
        })
} else {
    console.log('haaties-brudder')
}*/

 var stories = [
  {title:"tomorrow was never part of the deal", story:"", size:"s", data:"earth"},
  {title:"if you must fight, try to love with the same conviction", story:"", size:"s", data:"conviction"},
  {title:"cells divide without your permission", story:"", size:"s", data:"permission"},
  {title:"there's nothing happening to you... its just happening", story:"", size:"s", data:"happening"},
  {title:"space is skin deep", story:"", size:"s", data:"deep"},
  {title:"smoking weed isn't legal, its natural ", story:"", size:"s", data:"natural"},
  {title:"cleanse us with your perspective", story:"", size:"s", data:"cleanse"},
  {title:"life will knock the wind out of your sales", story:"", size:"s", data:"life"},
  {title:"having any measure of power is secondary to the capacity of your mind to be able to wield it", story:"", size:"s", data:"mind"},
  {title:"passing judgement on the singular asserts your disconnectedness from the whole", story:"", size:"s", data:"whole"},
  {title:"when you love, like becomes a thing of the past", story:"", size:"s", data:"becomes"},
  {title:"nothing is personal<br/>everything is energy...", story:"", size:"s", data:"energy"},
  {title:"I see through you &amp; that's only because I see through me", story:"", size:"s", data:"i-and-i"},
  {title:"without space and time, imaginations roam free", story:"", size:"s", data:"free"},
  {title:"every need has an ego to feed... let&nbsp;it&nbsp;starve", story:"", size:"s", data:"feed"},
  {title:"mark your territory with love", story:"", size:"s", data:"love"},
  {title:"there's a reason for the rhythm in the rhyme", story:"", size:"s", data:"reason"},
  {title:"weave the words that wield the oneness", story:"", size:"s", data:"oneness"},
  {title:"if quality is easily identified, why is it not as easily created?", story:"", size:"s", data:"created"},
  {title:"for who's lesson was my form shaped... for who's lust was the one divided... maybe yours", story:"", size:"s", data:"shaped"},
  {title:"religion creates the death of oneness", story:"", size:"s", data:"death"},
  {title:"when wisdom contradicts lifestyle, reason is abandoned", story:"", size:"s", data:"wisdom"},
  {title:"love is the new creativity", story:"", size:"s", data:"creativity"},
  {title:"what came first,<br/>the human or the thought?", story:"", size:"s", data:"human"},
  {title:"what are you trying to say with your life", story:"", size:"s", data:"say"},
  {title:"you only pay for what you don’t know... everything else is free", story:"", size:"s", data:"freedom"},
  {title:"love isn’t taught, it’s remembered... what else have we maybe forgotten?", story:"", size:"s", data:"remember"},
  {title:"collective consideration", story:"<p>when a thought I create, causes you to pause &amp; think, causes you to spend your own thought energy on that thought, <strong>there</strong> is my victory... because I have had a hand in shaping, even for a second, what gets ploughed back into the infinite thought pool of the all</p>", size:"m", data:"collective-consideration"},
  {title:"family ties", story:"<p>while some of my favourite hearts beat in the 021, one love knows no favourites</p>", size:"m", data:"family-ties"},
  {title:"henosis", story:"<p>if a dwarf can be mapped from the same gene as a giant, surely age and even vitality can also inherit elasticity in its capacity as a trait... </p>", size:"m", data:"henosis"},
  {title:"can you dig", story:"<p><strong>rise up brothers... </strong> build shit that lasts, and forces the centuries to pass before any improvement can cast a shadow on your design</p>", size:"m", data:"can-you-dig"},
  {title:"a wave of smiles", story:"<p>I thought it was somebody I knew... but it was only someone I didn't yet know. so I smiled and waved still the same, because the next time our paths cross, that tiny gesture might have transformed that nobody into a somebody I do know, simply by raising my hand, cheeks and vibration</p>", size:"m", data:"a-wave-of-smiles"},
  {title:"the ashes", story:"<p>some humans who envision their empires, fail to envision its end</p>", size:"m", data:"the-ashes"},
  {title:"cordless", story:"<p>my naval connects me to every human that has ever lived</p>", size:"m", data:"cordless"},
  {title:"true story", story:"<p>some of the best lives lived are the ones where the story we tell others and ourselves are the same</p>", size:"m", data:"true-story"},
  {title:"volition", story:"<p>we all get our chance to be a dick...  skipping your turn is an art form</p>", size:"m", data:"volition"},
  {title:"create love", story:"<p>did you know, that one and a half billion humans, live on less than one original or loving thought per day?</p>", size:"m", data:"create-love"},
  {title:"truth be told", story:"<p>these pixels know how to lie, but not the trees... when a forest grows, its like a giant truth made of love</p>", size:"m", data:"truth-be-told"},
  {title:"the beast", story:"<p><em>\"I'll kill you\"</em> &nbsp;the neighbour remembered her shouting frantically... but little would the police suspect, of marriage as the murder weapon</p>", size:"m", data:"the beast"},
  {title:"one love", story:"<p>all the love in me, is the same love found in you, when you see another human, you're just seeing another version of yourself, everything from the very best to the very worst. we are all on the same path, as a single entity, separated only by our perspectives</p>", size:"m", data:"onelove"},
  {title:"old school", story:"<p>I am humbled by your false sense of entitlement, it is forever a reminder, that I am but a thought</p>", size:"m", data:"old-school"},
  {title:"english flavoured water", story:"<p>the sun laughs at our dates &amp; times &amp; numbers, and everyday more words come and still more... when will one be enough</p>", size:"m", data:"english-flavoured-water"},
  {title:"distractionless", story:"<p>any so-called privelage, is a decadent short story at best... put it in a box labelled distractions and get on with your love, you will have the rest of forever to fill that box with more stuff</p>", size:"m", data:"distractionless"},
  {title:"onesies", story:"<p><em>\"and then... the whole world was filled with love\"</em></p><br /><p>if your story doesn’t end this way, keep writing...</p>", size:"m", data:"onesies"},
  {title:"in tonight's headlines", story:"<p>sometimes you are who you think you are, and sometimes you are not... you are caught <em>\"out of character\"</em>, as if you are <em>acting</em> for the better part of your life, its almost as if you're trying to be who you think you should be or maybe you're trying to be who you want to be perceived as? either way, you're trying to be more you... and every episode of your favourite series, or every repeat of your favourite track is either inspiring your soul, or quietly ushering you into distracted directions, mapping your mind to content that numbs the soul. the predominant quality of mainstream media is not designed to inspire, it is to distract, <em>but a distraction from what?... </em></p><br/><p><strong>value your thoughtspace</strong></em></p>", size:"l", data:"in-tonights-headlines"},
  {title:"the somethingverse", story:"<p><small><em>we are the keepers of the flame, from where mind can be lit while singing still your own heart ~ <span class=\"uc\">sretsis</span></em></small></p><br /><p><strong>ancient thoughts ago...</strong> the followers of the great <small class=\"uc\">sretsis</small> fought the ethereal war against the <em>reapers of the same</em>, led by the vile <small class=\"uc\">rehtorb</small>... the start of the never end was marked by the coming of the seven sisters, who together reflected the face of one love, though revealing themselves only as thought. <small class=\"uc\">silatnem</small> could change not only the shape of things, but the minds of men, <small class=\"uc\">tiralop</small>, <small class=\"uc\">itarbiv</small>, <small class=\"uc\">tyhr</small>, <small class=\"uc\">itasuac</small>, <small class=\"uc\">opserroc</small> &amp; <small class=\"uc\">endeg</small>, each gifted... but the cosmic cleansing had separated the sisters of one love, and so to entwine their intentions with timelessness, the siblings merged themselves into every soulful atom across the somethingverse... a dance had begun, one that will last for all human heartbeats, seeking to reunite the sisters &amp; reignite the memory of <a href=\"#shorts/air-to-the-throne\" class=\"rng\">the legendary eson, son of jam</a></p>", size:"l", data:"the-somethingverse"},
  {title:"air to the throne", story:"<p>during the great gathering on mars in 2718, the fate of earth was decided in a game of rock paper scissors. the interplanetary delegates assembled had been in talks for days prior to the final clinch fisted blow</p><br/><p>eson, son of jam, was at the time the most respected interplanetary explorer and the long standing ambassador of earth to the furthest galaxies. to humans he was the invisible ether that bound entire systems together by his very name. such was the power of eson, son of jam. when the final fist had fallen, eson, son of jam, stood victorious, but not relishing in his victory, he took to his knee, bowed his head and said \"<em>to none... but all... <strong>forever</strong></em>\" </p><br/><p>these words marked the end of a love story in the solar season. earth was evacuated under a new intergalactic treaty and declared an h-free system. for the next 10 000 years, no human being would inhabit the earth, all other lifeforms would be left to flourish by the will of time and any manner of structure or system would remain as they lay. religion's final tombstone, laid to rest</p>", size:"l", data:"air-to-the-throne"},
  {title:"a day to remember", story:"<p>he picked me up just before lunch, we were headed to the beach, he needed someone to offload to again... the water looked amazing, we pulled off just to the side of the road a few meters from the shore and once the ignition was off I slowly rolled down my window to better whiff the sea air. I didn't see him pull out the gun, but I heard the shot and felt his hand drop to my right leg and the gun on the floor at my feet... all his worries dissipated in that one instant, his calm body had found what he was looking for, freedom from the prison of his mind</p>", size:"l", data:"a-day-to-remember"},
  {title:"same itch, different witch", story:"<p>\"let the giver decide... its not our place... who are we?\" she shouted... \"in nature life is taken to sustain life, but what in us, is being sustained, to feel the need to enforce perspective with death?\" she pleaded to the mother beside her... \"let the giver decide!!!\" she shouted... but hers was a lone cry, everyone else wanted the old lady dead. as they finished roping her neck, she looked toward the girl, the only one begging for her release, smiled at her, and just before the floor below her gave in she said <em>\"I'll see you later love...\"</em><br/><br/>\"if that's what the giver decided, let not these actions condemn these men, but let these men be seen only as the hand of the giver\" she thought to herself... making her way back home, a couple passing by asks \"why do you defend the old witch, she is not like us and does not live in our ways, why would you welcome such things into your home?\" the wife asked and the girl said softly \"she is not an old witch, she is your other me, that you have forgotten how to see...\" and sped up her walk to avoid their questioning</p>", size:"l", data:"same-witch-different-bitch"},
  {title:"bated breath", story:"<p>it began in my being but not without a prompt, like the hardening of the nipple to signal the coming of puberty, it was similar in kind but different in degree, like the temperature, hot and cold, similar in kind but vastly different in degree, it begins not on a horizontal plane from hot to cold but on a vertical one, upward, onward, spiritward... its call, like a faint pulsating of the soul, visible as flashes of light inside visions of insight, lit by a truth felt deep in the seed of the tree that lay in the palm of the earth that wraps her entire being around the body of the palm that cradled its birth... and so, we too are cradled, for when the time is ripe, we will be called to flower not by a cue from the sun but from a light deep within our souls</p>", size:"l", data:"bated-breath"},
  {title:"dream lover", story:"<p>rolling the dice onto the open tar, he releases the pair with a flick of his wrist, for effect, but unfortunately in vain this time, a young lady is squat sitting on the edge of an imaginary ring, she knows her man can take this next hand, everyone is focused on the fall of the dice. without the dice, it would seem as if they were all standing in a circle, just staring at the blank tar, their body dance is the only clue to a passer by, that a game of double dice is in session, a swiftness in both opponents, a dance of sorts, a spurring on of luck with a push of the pelvis and purposeful and passionate point to the sky. his gaze now fixed on the eyes of his opposite and not the dice, because he would rather get the news of his loss straight from the eyes of his other me, than look down on the changing fortunes of love</p>", size:"l", data:"dream-lover"},
  {title:"right where you are", story:"<p><strong>I know a woman who has never left her country.</strong> inside these invisible borders she has learnt all the lessons life had chosen for her to bear witness to. if I showed you her heat signature on an interactive map, watched as a time-lapsed video over 70 years, played within the space of 5 minutes, you'll notice that she hardly left the city within a 50km radius of where she lived. none the less, she lives a good life by any standard and is content with herself and tolerant of others. love is her fuel and her reward</p><br/><p><em>distance traveled has little impact, on the broad variation in strokes love paints each unique living thing with... no matter how far you've come or still have to go, the love is <strong>always</strong> right where you are</em></p>", size:"l", data:"right-where-you-are"},
  {title:"dreams do come through", story:"<p><em>everything was a mould to her... </em>she herself will go on to become a mould that younger aspirations will kindle to. a picturesque something to fill in, the mould to a perfect life. the lifespan of the mould imagined, lived out and loved in a matter of heartbeats... and then... the years ahead schedule in something to do, as part of the process of filling this mould with smouldering ambition... of a decision made within a mould</p>", size:"l", data:"dreams-do-come-through"},
  {title:"cut out the middle man", story:"<p>religions are like stock brokers. their commodity is faith. they broker a deal between the feeling of separateness and oneness. disguised in tradition or custom and sometimes clothed in straight up fear. the faith that is yours by default is displaced into a holding company managed by the respective religion.</p><br/> <p><strong>go direct...</strong> you always get a better deal</p>", size:"l", data:"cut-out-the-middle-man"},
  {title:"your turn", story:"<p>every great quote, cunning adjective, analogy, pun, quip, rhetoric, acronym, abbreviation or otherwise has been lying in wait, first waiting to be overheard, read or seen and then comes the long-awaited opportunity for all who heeds its call to have their turn to use it to make a point, to tie it into a punchline or to provide some sort of fleeting insight... or even worse, to incite</p>", size:"l", data:"your-turn"},
  {title:"my other me", story:"<p>every day humans create and destroy suns, planets and galaxies. sue 22, meets hugh 23, hugh has become the sun which sue gravitates around, a sun that will only live for two weeks. mark 55 and kate 49, their kids have become little planets that orbit around the twin stars, mom and dad. asavela, born to nosi 17, another planet birthed into life, another you, another me... you are me reimagined, as I am you reimagined</p>", size:"l", data:"my-other-me"},
  {title:"one now", story:"<p>the best book I ever read, was the conversations happening in my mind through the course of my life. what a book! ... pageless, timeless, ceaseless. my mind struggles to put aside my personal and most petty perspective, so that I may scribe with sincerity, the essence of my soul... my proudest accolade is by far my high school certificate, attained on the lower grade, it sits framed, next to the picture of a mirror, with my words used as the reflection, showing who I am... I discovered a few years ago that I could weave the words and though this might seem trivial to most people, I also discovered only recently how few have the ability to express the truth felt inside of them. they can feel it, but they struggle to articulate it, their thoughts, they fear, if exposed, will end in them being burnt at the stake, but your darkest thoughts cannot rival mine, we will try for days to out evil each other and more than likely it will be a battle of the imagination, with the inevitable conclusion a tie, based on us knowing the same things at the same now&nbsp; ~ <small class=\"uc\">the only love is one. the only new is now</small></p>", size:"l", data:"one-now"},
  {title:"much love", story:"<p>my parents are not well known greats, but to me they are two of the greatest humans that have ever lived. If you don't feel this way about your parents you could always try to be the type of parents your children think of in this way, and if you don't have children, there are many humans in need of guidance, but more importantly, love... <strong>lend a hand</strong></p>", size:"l", data:"much-love"},
  {title:"one heart", story:"<p>people are surprised by love<br/>it has become a rarity...<br/>but change is unwavering<br/>and so too must be your courage<br/>because the time will come again and again<br/> where your courage will be challenged<br/>and change will want you for her own...<br/>don’t resist...<br/>watch her take you...and then...<br/>watch her conviction wane...<br/>courage needs to be encouraged<br/>and the only thing driving her<br/>is you</p>", size:"l", data:"one-heart"},
  {title:"between", story:"<p>that thing between young and old, black and white, east and west, jew and muslim, rich and poor, educated and under-rated, refugee and seemingly free, that thing between, that divides, that has the ability to chisel lines in our minds and instil beliefs more solid than rock, the same sort of lines we etched into the earth to divide countries, the same lines that are invisible inside of one love</p>", size:"l", data:"between"},
  {title:"miss understanding", story:"<p>she was surrounded by thousands of humans everyday, but still I could feel her loneliness... maybe it was born out of a feeling of not being understood? or maybe she didn't fully understand her self? either way, to her, she needed to give what she was feeling a name, she hadn't yet concluded the possibility that her thoughts were causing her loneliness... that her thoughts was 100% responsible for whatever she was feeling... on closer inspection and after many years, it became clear that she had been emulating a teenage girl on a movie she had seen as a child, enthralled by the character in the movie, her hair, her clothes, her life... it provided the perfect mould in which to displace her ambitions into, without realising she was living out someone else's life... she was reduced to just another life lived out to the tune of a pen in the hand of another me's imagination...</p>", size:"l", data:"miss-understanding"},
  {title:"the story never ends", story:"<p>many flying species survived the great cleansing, many early humans too, one such family was <small>shuuk</small> and <small>suddah's</small>, coastal foragers sleeping high in the mountains. there were very little flying flesh eaters in their lands for long periods of moons, and there was enough food every where, everyday, all the time</p><br/><p>the mountain's cliff is what created and sustained their little microclimate, shielding them from the noxious gases spread across the planet... the shape of the shoreline, the heights of the flanking mountains, the spume of the surf and all the energies of the mountain came together to provide a sort of safe zone for him and his extended family, neighbours and some visitors. the south of the planet holds many secrets, one of them an entrance to a core cave system, an eden discovered by accident one day while diving for giant shell grabbers, zappos as they were named</p><br/><p><small>wuuko</small>, <small>suddah's</small> second cousin went down into the water, past the last barrier of rocks, the shell grabber spots him and does a speedy dive, <small>wuuko</small> follows him down quickly, he kicks hard and points straight, but there was really no where for the zappo to swim, and as if it had pushed through the sand, it just kept going down and down... with very little breath left he courageously follows the zappo further down... he kicks, pushes harder, starts using his hands, almost within reach, and then, as if entering a rock shaped chimney that seems to be lit from above, he follows the zappo up... he glides all the way to the top, and there it was... <span class=\"b i\">incredible</span>... the entrance to an underground network of caves that stretches in different directions for what seems like forever, fresh water, green flora and a light as bright as day</p><br/><p><small>wuuko</small> swims cautiously toward the cave's shore and looks around, and up and down, it seemed impossible what he was seeing, a cave garden complete with fresh water and food ready to move in to. he couldn't understand how the light was coming in, how it was so lit, so luminous... he decides to return to <small>shuuk</small> and bring back some others to see and experience this amazing find... on their return, their faces reflected their thoughts... the fearless <small>aakhtee</small> starts a sprint down one of the cave's tunnel openings until he disappeared into the distance, eventually stopping he loudly shouts <span class=\"i\">\"kah poo lee lee... kah poo leeeeeeee\"</span> and they all start laughing, almost quietly, as if to themselves...</p><br/><br/><span class=\"grey\">&copy;interkart&nbsp;</span>", size:"xl", data:"story"}
 ];

 var storyController = {

  buildStories: function () {

   for (var i = 0; i < stories.length; i++) {

   	var story = stories[i]

   	var s = '<div class="slide" id="'
			+story.data+'" data-anchor="'
			+story.data+'"><div class="content"><h1>' 
			+story.title+ '</h1></div></div>'

	var m = '<div class="slide" id="'
			+story.data+'" data-anchor="'
			+story.data+'"><div class="content"><h1>'
			+story.title+'</h1>'
			+story.story+'</div></div>'

   	if (stories[i].size === "s") {
		$(".s").append(s)		
   	}

   	if (stories[i].size === "m") {
		$(".m").append(m)			
   	}

   	if (stories[i].size === "l") {
		$(".l").append(m)			
   	}

   	if (stories[i].size === "xl") {
		$(".xl").append(m)			
   	}

   }
   return
  }

 }

 storyController.buildStories();

 document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#moveUp').addEventListener('click', function() {
		$.fn.fullpage.moveSectionUp()
	});

	document.querySelector('#moveDown').addEventListener('click', function() {
		$.fn.fullpage.moveSectionDown()
	});

    function initialization(){
        $('#onepage').fullpage({
        	sectionsColor: ['transparent', 'transparent', 'transparent', 'transparent', 'transparent'],
            anchors: ['one-love', 'sayings', 'sharps', 'shorts', 'longs'],  
            animateAnchor:true,
            scrollOverflow: true,            
            autoScrolling:true, 
            fitSection: true,
            menu: '#menu',
            navigation: true,
            navigationPosition: 'bottom',
            css3: true,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',
            continuousVertical:true,     
            afterLoad: function(anchorLink, index){
                $('#menu li').css('border-top', "2px solid transparent");          
                $('#'+anchorLink).css('border-top', "2px solid #7FDBFF");   
            }
        });
    }

    initialization();  
 	
	var $container = $('.indi-dots ul, .shortview'),    
    scroll = $container.width();      

    $('.R').hover(function() {
        $container.animate({
            'scrollLeft': scroll
        },{duration: 2000, queue: false});
    }, function(){
        $container.stop();
    });
    
    $('.L').hover(function() {
        $container.animate({
            'scrollLeft': -100
        },{duration: 2000, queue: false});
      }, function(){
        $container.stop();
    }); 	
    
});
