import { PrismaClient } from "../src/generated/client" 

const client = new PrismaClient()

const main = async () => {
    const packs = await client.packs.createMany({
        data:[
            {
                title: "Instagram Aesthetic",
                id: "dbda4193-7b18-48ca-912f-a64b910e4bea",
                description:"Trendsetter",
                content: "<p>Craft your perfect Instagram feed with our curated aesthetic pack. Designed for influencers, creators, and anyone looking to elevate their social media presence. <br /> <br /> This pack includes 16 meticulously designed prompts for generating stunning, on-trend images that capture the essence of modern digital culture—from cozy flat lays and vibrant smoothie bowls to dynamic street style and serene travel moments.</p>",
                noOfPrompts: 16,
                url: "https://images.pexels.com/photos/2887774/pexels-photo-2887774.jpeg"
            },
            {
                title: "Tinder Essentials",
                id: "80ff8474-08b8-4654-abd8-0bfc54ae5284",
                description:"Dating Profile",
                content: "<p>Swipe right on success with our Tinder profile pack. Designed to create authentic, attractive, and engaging dating profile pictures. <br /> <br /> This pack includes 16 versatile prompts that showcase different aspects of your personality—from adventurous action shots and cozy candid moments to stylish professional portraits and fun social scenes. Make a memorable first impression and stand out from the crowd.</p>",
                noOfPrompts: 16,
                url: "https://images.pexels.com/photos/7339175/pexels-photo-7339175.jpeg"
            }, 
            {
                title: "Valentine's Day",
                id: "9d9ea785-4ebb-4d2a-8ec2-0c4b21d9bda2",
                description:"Romantic Imagery",
                content: "<p>Create dreamy, romantic visuals perfect for Valentine's Day. This pack generates atmospheric and intimate scenes featuring a single person in various romantic contexts and settings. The 16 prompts are designed to produce evocative imagery with a romantic aesthetic—from candlelit moments and rose petal scenes to dreamy sunsets and intimate settings. All generated images will feature only the person from your provided model, crafted into beautiful Valentine-themed compositions.</p>",
                noOfPrompts: 16,
                url: "https://images.pexels.com/photos/196664/pexels-photo-196664.jpeg"
            },
            {
                title: "Sexy Valentine's Pack",
                id: "c11e92a5-3822-4831-9b42-c7d1b2b1d63f",
                description:"Sensual Ambiance",
                content: "<p>Create captivating and tastefully sensual visuals with a romantic atmosphere. This pack generates intimate, atmospheric scenes designed for a sophisticated Valentine's aesthetic. The 16 carefully crafted prompts produce evocative imagery featuring dramatic lighting, luxurious textures, and romantic settings—from moonlit silhouettes and satin sheets to artistic compositions and atmospheric environments. All generated images will feature the person from your provided model in various elegant and sensual poses and scenarios.</p>",
                noOfPrompts: 16,
                url: "https://images.pexels.com/photos/6788862/pexels-photo-6788862.jpeg"
            },
            {
                title: "Millionaire Dreams",
                id: "499d3951-7dda-4981-990f-861f001fb8fd",
                description:"Luxury Lifestyle",
                content: " <p>Step into the world of luxury and success with our Millionaire Lifestyle pack. Designed to showcase the pinnacle of achievement and refined taste. <br /> <br /> This pack includes 16 opulent prompts that capture the essence of wealth—from private jets and superyachts to exclusive clubs and breathtaking penthouses. Perfect for those who want to project an image of success, sophistication, and the finer things in life.</p>",
                noOfPrompts: 16,
                url: "https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg"
            },
            {
                title: "Startup Founder",
                id: "021e1226-8217-4879-8754-0f5d4790cd1e",
                description:"Entrepreneur Vision",
                content: "<p>Embody the spirit of innovation with our Startup Founder pack. Designed for visionaries, entrepreneurs, and tech leaders building the future. <br /> <br /> This pack includes 16 dynamic prompts that capture the journey of creation—from intense coding sessions and strategic whiteboarding to triumphant product launches and inspiring team leadership. Perfect for building a personal brand that screams innovation, determination, and success.</p>",
                noOfPrompts: 16,
                url: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg"
            }
        ]
    })

    const packPrompts = await client.packPrompts.createMany({
        data: [
            // Instagram pack
            {
            "packId": "dbda4193-7b18-48ca-912f-a64b910e4bea",
            "prompt": "full-body fashion portrait, walking confidently down a sleek, rain-slicked city street at night. Dressed in a sharp, tailored, oversized blazer and wide-leg trousers. The wet pavement perfectly reflects neon signs, creating dramatic streaks of electric cyan and magenta light. Holding a transparent umbrella, looking ahead with a cool, composed expression. Cinematic, moody, and stylish."
            },
            {
            "packId": "dbda4193-7b18-48ca-912f-a64b910e4bea",
            "prompt": "close-up shot of hands arranging a curated athletic outfit on a simple hemp mat from a top-down perspective. Outfit includes high-waisted leggings, a matching performance top, pristine white platform sneakers, a sleek smartwatch, a metallic water bottle, and a minimalist key fob. Fingers are gently placing the smartwatch next to the shoes. Clean, bright studio lighting with a soft, neutral background. Minimalist, motivational, and crisp."
            },
            {
            "packId": "dbda4193-7b18-48ca-912f-a64b910e4bea",
            "prompt": "extreme close-up, editorial beauty shot. The focus is on the face and collarbone, where an intricate, contemporary gold necklace rests. Gazing softly to the side, expression serene and luxurious. The background is completely dissolved into a beautiful bokeh of soft, golden light spheres. The focus is razor-sharp on the exquisite texture of the jewelry and skin. Intimate and glamorous."
            },
            {
            "packId": "dbda4193-7b18-48ca-912f-a64b910e4bea",
            "prompt": "dynamic environmental portrait viewed from behind, walking away from the camera through a city park in autumn. Wearing a stylish, belted trench coat and holding a to-go coffee cup. A whirlwind of crimson, amber, and golden autumn leaves swirls around them, caught in motion blur. Walking with a confident stride. Rich, warm color palette, creating a sense of movement and seasonal style."
            },
            {
            "packId": "dbda4193-7b18-48ca-912f-a64b910e4bea",
            "prompt": "high-speed action clip for a reel. Hands are shown from a top-down perspective. One hand steadies a perfectly ripe avocado while the other, wielding a sharp knife, smoothly slices it in half. The vibrant green flesh is revealed as a slice drops onto a piece of toasted sourdough bread. A pinch of everything bagel seasoning is scattered in slow motion. Ultra-realistic food styling, crisp details, marble table surface. Sleeves are rolled up, showing engagement."
            },
            {
            "packId": "dbda4193-7b18-48ca-912f-a64b910e4bea",
            "prompt": "cozy, intimate indoor scene. Curled up on a couch under a plush, grey knitted blanket. Face is lit by the glow of a large television screen showing the menu of a classic film. Holding a large ceramic bowl of popcorn in their lap and smiling contentedly. A flickering soy candle and a remote sit on a rustic wooden coffee table in the foreground. Warm, dim, and intimate lighting. The mood is hygge and relaxed."
            },
            {
            "packId": "dbda4193-7b18-48ca-912f-a64b910e4bea",
            "prompt": "macro shot focusing on hands demonstrating skill. The hands of a barista are skillfully pouring steamed milk to create perfect, intricate latte art in a minimalist, white ceramic mug. Delicate steam rises from the coffee's surface. A focused expression is slightly visible in the background. The setting is a stylish, rustic cafe interior with soft-focus exposed brick and hanging pothos plants. Warm, inviting, and shallow depth of field."
            },
            {
            "packId": "dbda4193-7b18-48ca-912f-a64b910e4bea",
            "prompt": "vibrant top-down flat lay of a person preparing a nutritious meal. Hands are placing symmetrical slices of banana and strawberry on a thick, purple acai base in a wide, hand-thrown ceramic bowl. The bowl is topped with blueberries, pumpkin seeds, granola clusters, shredded coconut, and a delicate drizzle of honey. The bowl sits on a rustic wooden table next to a large Monstera leaf. Stylish casual wear is visible. Bright, natural light, incredibly saturated and appetizing."
            },
            {
            "packId": "dbda4193-7b18-48ca-912f-a64b910e4bea",
            "prompt": "clean-girl aesthetic portrait in a bright, minimalist bathroom. Applying a serum to dewy, glowing skin, looking at their reflection in a well-lit mirror. Wearing a white towel wrapped around their hair. The background is pristine and organized, with clear skincare bottles and a single sprig of eucalyptus. Soft, airy natural light from a large window. Style of a high-end skincare advertisement. Fresh and authentic."
            },
            {
            "packId": "dbda4193-7b18-48ca-912f-a64b910e4bea",
            "prompt": "sunset silhouette portrait on a beach. Standing at the water's edge, facing the horizon as the sun sets in a blaze of orange and pink. Their silhouette is sharp and defined against the colorful sky. Hands are on their hips. The water gently washes over their feet. The mood is contemplative, peaceful, and awe-inspiring. Wide-angle lens, dramatic scale."
            },
            {
            "packId": "dbda4193-7b18-48ca-912f-a64b910e4bea",
            "prompt": "candid street-style shot. Leaning against a colorful wall covered in street art, looking off-camera with a relaxed, effortless expression. Dressed in trendy, layered casual wear. Natural sunlight illuminates them, creating a slight shadow on the wall behind. The background is a softly blurred urban street. Authentic, in-the-moment, and fashionable."
            },
            {
            "packId": "dbda4193-7b18-48ca-912f-a64b910e4bea",
            "prompt": "person working from a trendy cafe. Seated at a small table, laptop open, typing intently. A cup of coffee and a notebook are beside the laptop. Dressed in smart casual attire. The background features the cozy, blurred interior of the cafe with other patrons. Natural light from a window highlights their face and hands. The vibe is productive, modern, and aspirational."
            },
            {
            "packId": "dbda4193-7b18-48ca-912f-a64b910e4bea",
            "prompt": "person practicing mindfulness outdoors. Sitting cross-legged on a yoga mat in a peaceful park at sunrise, eyes closed, hands resting on their knees. Taking a deep breath, a look of complete peace on their face. The early morning light creates a soft glow around them. The background is a blur of green trees. Serene, healthy, and spiritual vibe."
            },
            {
            "packId": "dbda4193-7b18-48ca-912f-a64b910e4bea",
            "prompt": "person enjoying a summer treat. A close-up shot smiling joyfully, holding a large swirl of pink cotton candy, with a vibrant carnival background blurred behind them. The sun is bright, and they are wearing sunglasses. The image is full of fun, energy, and summer nostalgia."
            },
            {
            "packId": "dbda4193-7b18-48ca-912f-a64b910e4bea",
            "prompt": "person on a hiking trail, pausing to take in the view. Turned towards the camera, drinking from a water bottle, with a breathtaking mountain vista spread out behind them. Wearing functional yet stylish outdoor gear and has a look of happy exhaustion on their face. The lighting is bright and clear. Adventurous, authentic, and inspiring."
            },
            {
            "packId": "dbda4193-7b18-48ca-912f-a64b910e4bea",
            "prompt": "person dancing freely at an outdoor concert or festival. Eyes are closed, head back, lost in the music. Hands are in the air. The background is a colorful blur of lights and a crowd. The image captures pure, unadulterated joy and energy. Dynamic motion, vibrant colors, and a feeling of liberation."
            },

            // // Tinder pack
            {
            "packId": "80ff8474-08b8-4654-abd8-0bfc54ae5284",
            "prompt": "full-body portrait of a person standing on a cobblestone street in a historic European district during golden hour. They are caught mid-laugh with a genuine, authentic smile, one hand casually in their pocket. They are dressed in tailored, dark-wash jeans, a fitted grey merino wool sweater, and a brown leather jacket. The late afternoon sun creates a warm, rim-light effect on their hair and shoulder. In the background, a softly blurred (bokeh) backdrop of rustic buildings and string cafe lights is coming to life. Shot on an 85mm lens, ultra-detailed, sharp focus on the eyes and smile. 8K resolution."
            },
            {
            "packId": "80ff8474-08b8-4654-abd8-0bfc54ae5284",
            "prompt": "dynamic mid-shot action photo of a person's torso and arms while rock climbing indoors. Their body is tense with effort, muscles defined as they grip a colorful plastic hold. They wear a black chalk bag and a fitted athletic shirt. A safety rope is visible but blurred. Their face, in profile, shows intense focus and determination. The background is a deeply blurred out-of-focus field of other climbers and textured climbing walls, with bright gym lighting creating highlights on their skin. Sense of strength and athleticism. Shot with a fast shutter speed to freeze motion, photorealistic, high contrast."
            },
            {
            "packId": "80ff8474-08b8-4654-abd8-0bfc54ae5284",
            "prompt": "cozy, intimate indoor portrait. The subject is sitting on a large, charcoal grey linen sofa, curled up and smiling softly directly at the camera. They are wearing an oversized, cream-colored cable-knit sweater. One hand holds a steaming mug of tea. The background features a tastefully decorated living room: a sleek floor lamp casts a warm, golden glow, a bookshelf with a curated collection of books and a single monstera plant is slightly blurred. Shot on a 50mm lens, creating a very shallow depth of field. The mood is warm, approachable, and intelligent. Hyper-realistic skin texture and fabric details."
            },
            {
            "packId": "80ff8474-08b8-4654-abd8-0bfc54ae5284",
            "prompt": "epic, wide-angle landscape shot from behind a person. They are silhouetted against a dramatic sky at sunset, standing on a cliff edge overlooking a vast, misty valley or ocean. They are wearing technical outdoor attire—a breathable shell jacket and hiking pants. Their posture is contemplative and awe-inspired. The scale is immense. The sun is breaking through clouds, creating god rays that illuminate the scene. Cinematic color grading, 8K resolution, capturing a sense of adventure and solitude."
            },
            {
            "packId": "80ff8474-08b8-4654-abd8-0bfc54ae5284",
            "prompt": "social photo at a vibrant rooftop bar. The person is the clear focal point, captured mid-genuine laugh with a small group of friends slightly out of focus in the background. They are holding a craft cocktail, their head thrown back in joy. The setting sun provides a beautiful golden backlight that highlights their hair and form. The atmosphere is warm, convivial, and sophisticated. Shot on a 135mm lens to compress the background, which features a soft-focus city skyline. Authentic moment of connection and fun."
            },
            {
            "packId": "80ff8474-08b8-4654-abd8-0bfc54ae5284",
            "prompt": "stylish, moody nighttime portrait. The person is leaning against the brick wall of a sleek alleyway, dressed in a well-fitted black blazer over a white t-shirt and dark jeans. Ambient light from a neon sign off-camera (cyan or magenta) illuminates one side of their face, creating dramatic chiaroscuro lighting. They have a confident, slight smirk, looking directly at the camera with a captivating gaze. The wet pavement after rain reflects the colorful lights. Cinematic, high-fashion vibe. Shot on a mirrorless camera with a 35mm lens."
            },
            {
            "packId": "80ff8474-08b8-4654-abd8-0bfc54ae5284",
            "prompt": "active lifestyle shot in a lush green park at golden hour. The person is finishing a run, walking towards the camera with a breathless, happy smile. They have a healthy glow and slight sweat on their skin. Dressed in high-quality, minimalist athletic wear. The sun is low, creating a golden halo effect through their hair and causing lens flare. The background is a blurred field of green. Energetic, vibrant, and positive feeling. Sharp focus on their eyes and expression."
            },
            {
            "packId": "80ff8474-08b8-4654-abd8-0bfc54ae5284",
            "prompt": "close-up, detail-oriented shot of a person engaged in a skilled hobby. Focus is on their hands strumming an acoustic guitar, their fingers calloused and skilled. The guitar is a beautiful vintage instrument with visible wood grain. The person's face is partially visible, showing concentration and passion. The background is a dark, moody recording studio environment with soft, focused light only on the hands and guitar strings, creating an intimate and artistic atmosphere. Photorealistic, capturing every detail."
            },
            {
            "packId": "80ff8474-08b8-4654-abd8-0bfc54ae5284",
            "prompt": "playful and heartwarming photo with an animal. The person is sitting on the floor of a sun-dappled living room, laughing joyfully as a friendly Golden Retriever puppy licks their face. They are dressed in casual weekend attire—jeans and a simple sweater. The moment is candid and full of positive emotion. Shot with a fast shutter speed to freeze the action. The lighting is soft and natural from a large window. Creates immediate trust and approachability."
            },
            {
            "packId": "80ff8474-08b8-4654-abd8-0bfc54ae5284",
            "prompt": "studio-quality, high-fashion portrait. The person stands against a clean, light grey seamless paper background. They are wearing a simple, elegant black crewneck sweater. Looking directly into the camera with a confident, relaxed, and approachable expression, a subtle smile on their lips. Professional three-point lighting setup creates perfect, soft illumination with a catchlight in their eyes. Retouched but realistic skin texture, every eyelash and pore visible. Focus is entirely on their attractive features and engaging gaze."
            },
            {
            "packId": "80ff8474-08b8-4654-abd8-0bfc54ae5284",
            "prompt": "serene beach shot at sunrise. The person is walking along the water's edge, with the gentle waves washing over their bare feet. They are looking down at the water with a peaceful, contemplative smile. Dressed in linen trousers and a light, white button-up shirt rolled to the elbows. The early morning light is soft, pink, and blue, creating a long shadow. The sand is wet and reflective. Timeless, calm, and sophisticated mood. Shot with a neutral density filter for a smooth, ethereal effect on the water."
            },
            {
            "packId": "80ff8474-08b8-4654-abd8-0bfc54ae5284",
            "prompt": "humorous and clever travel photo. The person is at the Leaning Tower of Pisa, pretending to 'kick' it back upright with their foot, with an exaggerated, comical expression on their face. They are dressed in smart-casual travel clothes. The composition is perfect, the landmark is recognizable, and the pose is original. Shows a great sense of humor and creativity. Bright, sunny day, sharp focus on their playful expression."
            },
            {
            "packId": "80ff8474-08b8-4654-abd8-0bfc54ae5284",
            "prompt": "energetic concert photo. A mid-shot of the person at a summer music festival. They have a slight, happy smile, lost in the music, eyes closed. The background is a completely blurred crowd, with vibrant, colorful stage lights (pinks, blues, purples) creating bokeh shapes across the image. They are wearing fashionable festival attire and holding a plastic cup. The photo captures the feeling of energy, youth, and fun. Shot with a wide aperture to isolate the subject."
            },
            {
            "packId": "80ff8474-08b8-4654-abd8-0bfc54ae5284",
            "prompt": "aspirational autumn style shot. The person is walking through a city park paved with golden yellow leaves. They are wearing a stylish, tailored camel wool coat, a charcoal grey scarf, and dark jeans, holding a paper cup of coffee. They look ahead with a calm, confident expression. The light is flat and soft from an overcast sky, making the colors of the leaves pop. The background features other people walking, blurred. The image conveys a sense of style, comfort, and the cozy season. Shot on an 85mm lens."
            },
            {
            "packId": "80ff8474-08b8-4654-abd8-0bfc54ae5284",
            "prompt": "lifestyle shot showcasing culinary skill. Close-up from a low angle of a person's hands placing a final garnish of microgreens on a beautifully plated seared salmon fillet with quinoa and roasted vegetables. Their face is visible in the background, looking down at the plate with a satisfied smile. The hands are clean, with a simple leather bracelet on one wrist. The plate is white ceramic on a rustic wooden table. In the softly blurred background is a modern, clean kitchen. The lighting is warm and highlights the food. Sophisticated and appealing."
            },
            {
            "packId": "80ff8474-08b8-4654-abd8-0bfc54ae5284",
            "prompt": "perfect primary profile picture. A clean, chest-up headshot of the person against a neutral, dark background. They are making direct eye contact with the camera with a warm, genuine, and confident smile. Dressed in a simple black v-neck shirt. Professional ring-light style illumination creates perfect, even lighting on their face with no harsh shadows. No sunglasses or hats. Ultra-sharp focus on the eyes and smile, retouched skin but perfectly realistic. This photo is trustworthy, clear, and highly attractive."
            },

            // Valentine's Day
            {
            "packId": "9d9ea785-4ebb-4d2a-8ec2-0c4b21d9bda2",
            "prompt": "slow dancing in a grand, empty ballroom, locked in a close embrace with a partner, foreheads touching and eyes closed. Wearing elegant attire—a flowing silk slip dress and an untucked white linen shirt. Barefoot on the polished wooden floor. A single, dramatic spotlight illuminates the couple from above, casting long, soft shadows. The rest of the room is swallowed in darkness. Shot on 35mm film with a subtle grain, evoking a timeless, intimate, and profoundly peaceful moment."
            },
            {
            "packId": "9d9ea785-4ebb-4d2a-8ec2-0c4b21d9bda2",
            "prompt": "enjoying a luxurious breakfast-in-bed scene, propped up on a mountain of rumpled white linen pillows and a duvet cover on a large four-poster bed. A rustic wooden tray between them holds two flutes of mimosa, a plate of fresh croissants, and a single red rose in a small vase. One person is laughing softly, the other looks on with a fond, adoring smile. Morning light streams through a large window, illuminating dust particles in the air. The mood is cozy, joyful, and private."
            },
            {
            "packId": "9d9ea785-4ebb-4d2a-8ec2-0c4b21d9bda2",
            "prompt": "close-up, macro photograph of two pairs of hands intertwined on a rustic wooden picnic table. One hand is gently placing a simple, elegant gold band on the other's ring finger. The focus is razor-sharp on the ring and the point of contact. The background is a sun-dappled garden in full bloom, creating a beautiful bokeh of green and pastel colors. The image tells a story of commitment, tenderness, and a new beginning. Incredibly detailed."
            },
            {
            "packId": "9d9ea785-4ebb-4d2a-8ec2-0c4b21d9bda2",
            "prompt": "having a playful flour fight in a modern, sunlit kitchen. Wearing matching aprons over casual clothes, covered in patches of white flour. One is caught mid-laugh, throwing a handful of flour, while the other ducks with a giggle. The air is filled with a cloud of powder, caught by the bright light from the window. Baking ingredients and a mixing bowl are visible on the counter. The scene is chaotic, joyful, and perfectly captures a moment of shared, lighthearted fun."
            },
            {
            "packId": "9d9ea785-4ebb-4d2a-8ec2-0c4b21d9bda2",
            "prompt": "sharing a dramatic, passionate kiss in the pouring rain on a neon-lit city street at night. Embraced under a single black umbrella, faces illuminated by the glow of a nearby electric pink neon sign. The rain streaks down around them, creating slick, reflective patterns on the dark pavement. Clothes are slightly damp. The image is highly cinematic, moody, and intense, full of emotion and a sense of urgency. Shallow depth of field blurs the city into colorful light orbs."
            },
            {
            "packId": "9d9ea785-4ebb-4d2a-8ec2-0c4b21d9bda2",
            "prompt": "reading together in a lavish home library, curled up at opposite ends of a deep Chesterfield sofa, legs intertwined. Each is engrossed in their own book. A soft wool throw blanket is draped over them. The room is lit by the warm glow of a single floor lamp and a crackling fire in the marble fireplace. The atmosphere is one of deep comfort, silent understanding, and intellectual companionship. Photorealistic details of the book spines and wood grain."
            },
            {
            "packId": "9d9ea785-4ebb-4d2a-8ec2-0c4b21d9bda2",
            "prompt": "sitting at a dimly lit, exclusive jazz bar. The camera looks across a small marble table where two champagne coupes are half-full. Their hands are resting near the glasses, almost touching. In the background, the soft blur of a saxophonist plays on a small stage. The lighting is low and warm, from a small vintage table lamp, creating intimate pools of light and deep shadows. The mood is sexy, mysterious, and deeply romantic."
            },
            {
            "packId": "9d9ea785-4ebb-4d2a-8ec2-0c4b21d9bda2",
            "prompt": "sitting on a rugged cliff edge, silhouetted against a spectacular sky exploding with the colors of sunset. Seen from behind, leaning against each other, looking out at the vast landscape. Dressed in practical outdoor wear. The image conveys a sense of shared wonder, partnership, and having found your person to face the world with. Epic, wide-angle, cinematic scale."
            },
            {
            "packId": "9d9ea785-4ebb-4d2a-8ec2-0c4b21d9bda2",
            "prompt": "gentle close-up of one person kissing the other's shoulder or the nape of their neck. The recipient has their eyes closed, face serene, with a faint smile. The lighting is soft and diffused, like from a window, highlighting the delicate contours of the neck and shoulder. The texture of skin and the subtle touch of lips are the entire focus. The background is completely blurred. The image is intimate, sensual, and speaks of deep trust and affection."
            },
            {
            "packId": "9d9ea785-4ebb-4d2a-8ec2-0c4b21d9bda2",
            "prompt": "a fun, modern couple's selfie in a photo booth. The strip shows four panels: the first, both making silly, exaggerated faces; the second, one person kissing the other's cheek while they laugh; the third, a classic smiling pose; and the fourth, a genuine, shared laugh. The background is a classic red curtain. The images are slightly grainy, with a flash bounce, capturing a spontaneous and joyful sequence of events."
            },
            {
            "packId": "9d9ea785-4ebb-4d2a-8ec2-0c4b21d9bda2",
            "prompt": "a luxurious and sensual flat lay of Valentine's gifts. Arranged on a rich, black velvet background: a box of decadent, hand-crafted chocolates spilling out, a bottle of vintage Bordeaux, two crystal glasses, a velvet jewelry box open to reveal a delicate pearl necklace, a scattered handful of deep red rose petals, and a handwritten love note on cream-colored paper with elegant script. The lighting is dramatic, with highlights glinting off the glass and pearls, creating a sense of opulence and desire."
            },
            {
            "packId": "9d9ea785-4ebb-4d2a-8ec2-0c4b21d9bda2",
            "prompt": "learning a new skill together, like pottery. Focus on four hands covered in wet, gray clay, collaboratively shaping a vase on a spinning wheel. The image is messy, authentic, and focused on the shared activity. Their forearms and hands show concentration and coordination. The background is a bright, airy artisan's studio with shelves of other pottery. The shot symbolizes building something beautiful together."
            },
            {
            "packId": "9d9ea785-4ebb-4d2a-8ec2-0c4b21d9bda2",
            "prompt": "walking hand-in-hand down a path in a winter forest at twilight. The entire scene is illuminated by hundreds of tiny, warm-white fairy lights strung through the branches of tall, snow-dusted pine trees, creating a glowing pathway. Soft snow is gently falling, caught in the light. Dressed in elegant wool coats and scarves. The image is ethereal, romantic, and straight out of a storybook. 8k resolution, photorealistic."
            },
            {
            "packId": "9d9ea785-4ebb-4d2a-8ec2-0c4b21d9bda2",
            "prompt": "a quiet, domestic moment of partnership in a modern kitchen. One person is standing behind the other, their arms wrapped around them, while the front person stirs a pot on the stove. They are both looking down at the pot, comfortable and content in the simple act of cooking together. Steam rises from the pot. The evening light from a window casts a soft glow. It captures the romance found in everyday life and teamwork."
            },
            {
            "packId": "9d9ea785-4ebb-4d2a-8ec2-0c4b21d9bda2",
            "prompt": "sharing a huge cloud of pink cotton candy at a carnival at night. One is offering a piece to the other, who is leaning in to take it, their eyes locked. The background is a beautiful blur of colorful, out-of-focus carnival lights and rides. The lighting is vibrant and festive, capturing a sense of youthful excitement and sweetness. Playful and flirtatious."
            },
            {
            "packId": "9d9ea785-4ebb-4d2a-8ec2-0c4b21d9bda2",
            "prompt": "sitting in the open trunk of a vintage convertible car, parked at a lookout point overlooking a city's skyline at night. Wrapped in a thick blanket, leaning against each other. The interior of the trunk is lit by the soft glow of string lights. The city lights below create a sprawling, glittering tapestry. The image is nostalgic, dreamy, and impossibly romantic, symbolizing escape and togetherness."
            },

            // Sexy Valentine's Pack
            {
            "packId": "c11e92a5-3822-4831-9b42-c7d1b2b1d63f",
            "prompt": "ultra-close, macro photograph, lips gently grazing a partner's sensitive skin just below the ear. The recipient's head is tilted back in a sigh of pleasure, eyes closed. A single, soft beam of moonlight from a window illuminates the subtle texture of skin. The rest of the image is in deep, velvety shadow. Extreme shallow depth of field, focusing only on the point of contact. Sensual, intimate, and whisper-quiet."
            },
            {
            "packId": "c11e92a5-3822-4831-9b42-c7d1b2b1d63f",
            "prompt": "silhouetted against the floor-to-ceiling windows of a high-rise apartment at night, the city lights creating a glittering bokeh backdrop. Wearing only a sleek, black silk robe, loosely tied at the waist, revealing the silhouette of their form. One hand holds a glass of champagne, the other is extended in invitation towards the viewer. The lighting is dramatic, highlighting the curve of their hip and shoulder against the bright window. Mysterious, sophisticated, and alluring."
            },
            {
            "packId": "c11e92a5-3822-4831-9b42-c7d1b2b1d63f",
            "prompt": "tasteful, implied nude shot, lying on their stomach on rumpled black satin sheets. The image is a close-up of their bare back, from the mid-back down to the lower curve of the spine. A single red rose lies beside them, its petals scattered across the small of their back. The lighting is warm, low, and directional, creating dramatic shadows that emphasize the musculature and dip of the spine. Textural, artistic, and deeply sensual."
            },
            {
            "packId": "c11e92a5-3822-4831-9b42-c7d1b2b1d63f",
            "prompt": "leaning against a dark wall in a perfectly fitted black tuxedo jacket and nothing else. The jacket is unbuttoned. Holding a smoldering cigarette loosely in their fingers, a trail of smoke curling towards the ceiling. Their gaze is direct, confident, and smoldering. The lighting is film noir: a single, hard light source from the side, creating high contrast between light and shadow. Raw, edgy, and intensely sexy."
            },
            {
            "packId": "c11e92a5-3822-4831-9b42-c7d1b2b1d63f",
            "prompt": "dancing a tango in an empty, grand hall in a moment of intense connection. Bodies are pressed close, foreheads touching, eyes locked with fierce passion and desire. One hand is gripped tightly on the other's lower back. Wearing a slinky, blood-red dress with a high slit and a dark, open-collared shirt. A single spotlight illuminates them, casting long shadows. The image captures movement, tension, and raw magnetism."
            },
            {
            "packId": "c11e92a5-3822-4831-9b42-c7d1b2b1d63f",
            "prompt": "shot focused on the mouth and neck. Tilting their head back, slowly tracing their lower lip with their fingertip, their eyes half-lidded and looking at the viewer. A delicate gold chain rests on their collarbone. The lighting is warm and soft, highlighting the gloss on their lip and the subtle movement. The background is completely dark. The mood is contemplative, seductive, and intimate."
            },
            {
            "packId": "c11e92a5-3822-4831-9b42-c7d1b2b1d63f",
            "prompt": "in a steamy, opulent bathroom. One is seated in a deep, freestanding bathtub filled with milky, opaque water and rose petals. The other is kneeling outside the tub, leaning in for a deep, passionate kiss. Their hand is cupping the bather's wet face. Steam fogs the air and the mirrors. The lighting is diffused and golden from a single vintage lamp. The scene is luxurious, intimate, and charged with desire."
            },
            {
            "packId": "c11e92a5-3822-4831-9b42-c7d1b2b1d63f",
            "prompt": "close-up on a hand, adorned with several elegant rings, slowly and deliberately trailing a melting ice cube down a partner's chest, leaving a glistening wet trail over their sternum and abdomen. The skin is beaded with water droplets. The focus is on the sensation of touch and temperature. The lighting is cool and highlights the wetness on the skin. The image is about anticipation and tactile sensation."
            },
            {
            "packId": "c11e92a5-3822-4831-9b42-c7d1b2b1d63f",
            "prompt": "getting ready for a night out, seen from behind through a vanity mirror. Wearing a black lace bodysuit and stockings with a garter belt, fastening a delicate strap. Their eyes meet the viewer's gaze in the mirror with a confident, knowing smile. The room is dim, lit by the bulbs around the mirror, which creates a soft, glamorous glow. The atmosphere is one of confident self-possession and anticipation."
            },
            {
            "packId": "c11e92a5-3822-4831-9b42-c7d1b2b1d63f",
            "prompt": "entangled in pure white linen sheets on a large bed, illuminated only by the blue light of a thunderstorm flashing outside a large window. The flash freezes a moment of passion: a kiss on the shoulder, a hand gripping a waist, a look of intense longing. The sheets are tangled around their legs. The lighting is dramatic and fleeting, highlighting the contrast of light and shadow on skin and fabric. The mood is electric, passionate, and tempestuous."
            },
            {
            "packId": "c11e92a5-3822-4831-9b42-c7d1b2b1d63f",
            "prompt": "minimalist, artistic shot, lying on their side on a sleek, concrete floor. Their form is dusted with a fine, iridescent gold powder that shimmers under a strong, directional light. The powder highlights the curves of their hip, waist, and the line of their leg. The composition is stark, modern, and focuses entirely on the abstract beauty and sensuality of the human form. The background is a deep, neutral gray."
            },
            {
            "packId": "c11e92a5-3822-4831-9b42-c7d1b2b1d63f",
            "prompt": "in a powerful stance, having just stood up from a desk. Wearing a crisp, white button-down shirt, unbuttoned at the top, with the sleeves rolled up to the elbows. Leaning over the desk, their knuckles resting on the dark wood, staring directly at the viewer with a look of smoldering intensity and command. The lighting is a warm, focused desk lamp that creates pools of light and shadow. The mood is dominant, confident, and irresistibly attractive."
            },
            {
            "packId": "c11e92a5-3822-4831-9b42-c7d1b2b1d63f",
            "prompt": "shot from the perspective of one person lying on their back, looking up at their partner who is leaning over them, blocking out the light. The partner's face is in shadow, creating a halo effect around their hair. Their hands are gently framing the viewer's face, moments from a kiss. The focus is on the hands and the intimate, slightly vulnerable perspective. The background is a soft-focus bedroom. The image evokes feeling wanted and consumed."
            },
            {
            "packId": "c11e92a5-3822-4831-9b42-c7d1b2b1d63f",
            "prompt": "detail shot, gently holding the stem of a deep red rose between their teeth. Their lips are stained slightly from the petals. A single drop of water is about to fall from the rose. Their gaze is intense and challenging, looking directly at the viewer. The background is dark. The lighting is a soft, dramatic Rembrandt style, highlighting one side of the face. Symbolic, bold, and fiercely romantic."
            },
            {
            "packId": "c11e92a5-3822-4831-9b42-c7d1b2b1d63f",
            "prompt": "sharing a bath in a rustic, outdoor stone tub surrounded by a secluded forest. The water is filled with fragrant eucalyptus and steam rises into the cool night air. Their legs are intertwined under the water. One is leaning back against the other's chest, who is whispering into their ear. The scene is lit by dozens of candles placed around the tub, creating a magical, private, and deeply sensual oasis. The mood is primal and romantic."
            },
            {
            "packId": "c11e92a5-3822-4831-9b42-c7d1b2b1d63f",
            "prompt": "artistic, high-fashion inspired portrait. Wearing a stunning, intricate harness made of black leather and polished metal over bare skin. They are turned away from the camera, looking back over their shoulder with an expression that is both strong and vulnerable. The lighting is stark and sculptural, emphasizing the lines of the harness and the musculature of the back. The background is a dark, textured wall. The image is about empowerment, aesthetic beauty, and edgy sensuality."
            },

            // Millionaire Pack
            {
            "packId": "499d3951-7dda-4981-990f-861f001fb8fd",
            "prompt": "low-angle shot from the back seat of a Rolls-Royce Phantom, hand adorned with a sleek platinum watch resting casually on the open window frame. Outside, the blurry rain-slicked streets of a metropolitan city at night reflect neon lights. The iconic Spirit of Ecstasy hood ornament is sharp in the foreground. The interior is pristine black leather and polished walnut. Cinematic, moody, conveying silent powerful wealth."
            },
            {
            "packId": "499d3951-7dda-4981-990f-861f001fb8fd",
            "prompt": "standing silhouetted in an expansive minimalist master bedroom suite at sunrise, floor-to-ceiling windows revealing a private panorama of a city skyline. Wearing a luxurious white robe and holding a ceramic coffee cup, looking out with a serene expression. The king-sized bed is made with crisp white Italian linen. The room is sparsely furnished with a single piece of modern art. Atmosphere of quiet success and impeccable taste."
            },
            {
            "packId": "499d3951-7dda-4981-990f-861f001fb8fd",
            "prompt": "close-up macro shot of hands closing a vintage leather-bound portfolio on a massive polished ebony wood desk. One hand wears a signet ring. On the desk: a Montblanc pen, vintage brass globe bar, and a single sheet of watermarked paper with a signed deal. The background is a wall of floor-to-ceiling bookshelves in a private library. Warm dramatic lighting from a single green banker's lamp symbolizing closing a major transaction."
            },
            {
            "packId": "499d3951-7dda-4981-990f-861f001fb8fd",
            "prompt": "leaning against the railing on the deck of a sleek modern superyacht in the Mediterranean, laughing joyfully. Wearing tailored linen shorts and a polo shirt, holding a glass of champagne. The water is stunning azure blue with a picturesque village coastline visible. The sun creates brilliant highlights on the water and yacht's gleaming surfaces. The epitome of leisure and luxury travel."
            },
            {
            "packId": "499d3951-7dda-4981-990f-861f001fb8fd",
            "prompt": "being fitted for a fully bespoke suit by a master tailor in an exclusive Savile Row atelier. The shot focuses on the tailor's hands pinning the cuff of a pristine white shirt paired with exquisite super 150's wool fabric. Torso and hands visible, one resting on a nearby bolt of cloth. Classic workshop background with wooden counters and spools of thread. Conveys attention to detail and discreet luxury."
            },
            {
            "packId": "499d3951-7dda-4981-990f-861f001fb8fd",
            "prompt": "seen from behind walking confidently from a private helicopter on a skyscraper's helipad at dusk. Wearing a crisp suit jacket tailored to perfection, briefcase in hand. The rotor wash slightly disturbs their hair. City lights twinkle below. The image screams power, access, and a fast-paced high-stakes lifestyle."
            },
            {
            "packId": "499d3951-7dda-4981-990f-861f001fb8fd",
            "prompt": "curated flat lay of luxury everyday carry items arranged on the supple leather seat of a private jet. Includes: titanium credit card, keys to a high-performance sports car, passport with gold foil lettering, minimalist black wallet, aviation-grade sunglasses, and sleek smartphone. Soft even lighting highlighting precision engineering and quality materials. Minimalist and powerful."
            },
            {
            "packId": "499d3951-7dda-4981-990f-861f001fb8fd",
            "prompt": "standing in the center of a modern temperature-controlled wine cellar, gently holding a bottle of prestigious vintage while examining the label. The walls are lined with racks holding thousands of bottles. Low focused lighting creates pools of light on the dark stone floor glinting off glass. Atmosphere of connoisseurship and refined taste."
            },
            {
            "packId": "499d3951-7dda-4981-990f-861f001fb8fd",
            "prompt": "shot from the passenger seat of a classic meticulously restored vintage sports car on a scenic coastal road. Driving with one hand on the polished wooden steering wheel, the other resting on the gear shift. Wearing driving gloves and classic aviators. The background is a blur of green hills and blue ocean. Evokes timeless style and passion."
            },
            {
            "packId": "499d3951-7dda-4981-990f-861f001fb8fd",
            "prompt": "standing on the balcony of a lavish penthouse during an exclusive party, looking out over the glittering cityscape with a crystal tumbler of amber whiskey. The reflection of the party's lights and guests visible in the glass behind. Contemplative satisfied expression. Conveys being at the center of the action yet above it all."
            },
            {
            "packId": "499d3951-7dda-4981-990f-861f001fb8fd",
            "prompt": "macro shot of a wrist wearing an ultra-thin platinum luxury watch, gently gripping the steering wheel of a high-end car. Focus on exquisite craftsmanship of the watch face and stitching on the leather wheel. Background is soft blur of a city at night. Symbol of understated wealth and horological appreciation."
            },
            {
            "packId": "499d3951-7dda-4981-990f-861f001fb8fd",
            "prompt": "sitting in a deep armchair in a private members' club reading the Financial Times with a glass of cognac. The room features dark wood, leather, and brass. A faint haze of cigar smoke hangs in the air illuminated by a pool of light from a classic lamp. Mood is old-world established and powerfully discreet."
            },
            {
            "packId": "499d3951-7dda-4981-990f-861f001fb8fd",
            "prompt": "in follow-through of a perfect drive on the first tee box of an ultra-exclusive ocean-side golf course at sunrise. Dressed in premium technical golf attire. The stunning empty course with ocean beyond serves as background. Golden low light. Represents membership and success enjoyed in pristine environments."
            },
            {
            "packId": "499d3951-7dda-4981-990f-861f001fb8fd",
            "prompt": "standing in a modern minimalist walk-in closet larger than most bedrooms, selecting a pair from a curated collection of designer shoes lit from below. Clothes organized by color and type. The space is clean and organized, speaking to a vast curated collection of personal style."
            },
            {
            "packId": "499d3951-7dda-4981-990f-861f001fb8fd",
            "prompt": "leaning forward in a private opera box holding elegant opera glasses loosely. Dressed in formal attire with intent focused expression. The opulent gilded interior of the venue with other attendees blurred in background. Conveys cultural capital and high-stakes participation."
            },
            {
            "packId": "499d3951-7dda-4981-990f-861f001fb8fd",
            "prompt": "standing on the expansive terrace of a modern architectural home that cantilevers over a dramatic landscape, sipping coffee while looking out at the view. The infinity pool edge blends into the horizon. Architecture features clean lines, glass, and concrete. The definition of seamless integration of luxury design and nature."
            },
            // Startup-Founder pack
            {
            "packId": "021e1226-8217-4879-8754-0f5d4790cd1e",
            "prompt": "captured in a moment of intense inspiration, writing a complex algorithm on a floor-to-ceiling glass wall in a sleek, minimalist office. Wearing a tailored blazer over a casual t-shirt, one hand in a pocket, the other marking a pivotal point in the equation. The early morning sun streams through the window, illuminating the intricate diagrams and casting a long, thoughtful shadow. The expression is one of deep focus and groundbreaking insight."
            },
            {
            "packId": "021e1226-8217-4879-8754-0f5d4790cd1e",
            "prompt": "commanding the stage at a major tech summit, moments after revealing a revolutionary product. The stage is dark except for a single spotlight and the massive, glowing screen displaying the company's iconic logo. One arm is raised triumphantly, a confident, energizing smile directed at the cheering, blurred audience. The air is electric with excitement and the promise of innovation."
            },
            {
            "packId": "021e1226-8217-4879-8754-0f5d4790cd1e",
            "prompt": "in the heart of a late-night hackathon, surrounded by a dedicated team. Leaning over a colleague's shoulder, pointing at a line of code on a monitor, face illuminated by the screen's blue glow. The room is a controlled chaos of whiteboards covered in schematics, empty energy drink cans, and the quiet hum of powerful computers. The look is one of collaborative problem-solving and unwavering determination."
            },
            {
            "packId": "021e1226-8217-4879-8754-0f5d4790cd1e",
            "prompt": "a candid, powerful moment after closing a series A funding round. Not a champagne pop, but a quiet, satisfied smile while looking at a signed term sheet on a tablet. Sitting on the edge of a modern desk in a empty conference room, the city lights twinkling through the window behind. The mood is one of validated hard work, profound relief, and silent confidence."
            },
            {
            "packId": "021e1226-8217-4879-8754-0f5d4790cd1e",
            "prompt": "in a deep, strategic conversation with a seasoned investor on a terrace overlooking a city at dusk. Leaning in, hands clasped, explaining the vision with passionate conviction. The investor, silhouetted against the fading light, listens intently. A half-finished espresso sits between them. The scene is one of high-stakes persuasion and intellectual partnership."
            },
            {
            "packId": "021e1226-8217-4879-8754-0f5d4790cd1e",
            "prompt": "kneeling on the floor of a user experience lab, intently watching a person interact with a product prototype. Their expression is a mix of anticipation, curiosity, and empathy, completely focused on the user's every reaction and non-verbal cue. The background is a blur of one-way mirrors and observation equipment. Captures the core value of user-centric design."
            },
            {
            "packId": "021e1226-8217-4879-8754-0f5d4790cd1e",
            "prompt": "standing before a massive data visualization wall in a mission control-style office. Arms crossed, analyzing a real-time feed of market data and user metrics that scrolls across the screen. The colorful graphs and charts reflect in their focused eyes. The scene is high-tech, data-driven, and conveys strategic mastery of the business landscape."
            },
            {
            "packId": "021e1226-8217-4879-8754-0f5d4790cd1e",
            "prompt": "teaching a workshop to a room full of aspiring entrepreneurs. Writing a key business framework on a whiteboard, turning back to the audience with an engaging, approachable expression. The attendees are leaning forward, captivated. Sunlight floods the modern classroom. Embodies the role of a mentor paying it forward."
            },
            {
            "packId": "021e1226-8217-4879-8754-0f5d4790cd1e",
            "prompt": "a moment of quiet contemplation on a factory floor, examining the first production unit of their hardware product. Holding the device with reverence, running fingers over its casing, a look of pride and immense pressure on their face. The background is a soft-focus scene of assembly lines and manufacturing equipment. Represents the tangible outcome of years of work."
            },
            {
            "packId": "021e1226-8217-4879-8754-0f5d4790cd1e",
            "prompt": "walking through a vibrant, open-plan office, casually interacting with different team members. Laughing with a designer at one desk, then pointing at a developer's screen with a thoughtful comment. The energy is authentic and infectious, capturing a leadership style that is hands-on and deeply connected to the entire team."
            },
            {
            "packId": "021e1226-8217-4879-8754-0f5d4790cd1e",
            "prompt": "featured in a top-tier business magazine photoshoot. Sitting on a modern sofa in the company's headquarters, interviewed by a journalist. Leaning forward, hands animated, explaining a complex concept with clarity and charm. The environment is professionally styled to reflect the brand's aesthetic—sleek, innovative, and confident."
            },
            {
            "packId": "021e1226-8217-4879-8754-0f5d4790cd1e",
            "prompt": "on a video call with international team members, displayed across multiple large monitors. The screens show faces from different time zones, all engaged and smiling. They are leaning back in their chair, listening intently, embodying the global and inclusive nature of modern leadership. The home office is sleek and technologically seamless."
            },
            {
            "packId": "021e1226-8217-4879-8754-0f5d4790cd1e",
            "prompt": "a behind-the-scenes moment before a major product launch, standing alone in the empty auditorium. Looking up at the giant stage with their company logo, taking a deep, centering breath. The expression is a powerful mix of nerves, excitement, and absolute readiness. The scene is lit by the dim work lights, creating a dramatic and intimate portrait."
            },
            {
            "packId": "021e1226-8217-4879-8754-0f5d4790cd1e",
            "prompt": "participating in a fiery, passionate debate during a product strategy meeting. Standing at the head of the table, hands firmly planted on the surface, arguing a point with conviction. The team around the table is engaged, some agreeing, some challenging. The whiteboard is a battlefield of ideas. Captures the constructive conflict that drives innovation."
            },
            {
            "packId": "021e1226-8217-4879-8754-0f5d4790cd1e",
            "prompt": "a personal moment of work-life integration, coding on a laptop while sitting on a park bench during a child's soccer game. Wearing headphones, focused on the screen, but with a foot tapping along to the game nearby. Represents the modern reality of blending immense responsibility with personal life, striving for balance."
            },
            {
            "packId": "021e1226-8217-4879-8754-0f5d4790cd1e",
            "prompt": "looking out from the rooftop of their new office building, the sprawling cityscape below symbolizing the market they are set to conquer. Hands on the railing, posture confident and visionary. The wind tousles their hair. It's a moment of silent reflection on the journey ahead—ambitious, daunting, and filled with infinite possibility."
            }
        ]
    })




}
main();