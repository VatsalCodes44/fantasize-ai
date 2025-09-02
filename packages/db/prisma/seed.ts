import { PrismaClient } from "../src/generated/client" 

const client = new PrismaClient()

const main = async () => {
    const packs = await client.packs.createMany({
        data:[
            {
            name: "Valentine's Day",
            id: "dbda4193-7b18-48ca-912f-a64b910e4bea"
            },
            {
                name: "Iconic Locations",
                id: "80ff8474-08b8-4654-abd8-0bfc54ae5284"
            }, 
            {
                name: "Lifestyle & Aesthetic",
                id: "9d9ea785-4ebb-4d2a-8ec2-0c4b21d9bda2"
            },
            {
                name: "Nature & Outdoors",
                id: "c11e92a5-3822-4831-9b42-c7d1b2b1d63f"
            },
            {
                name: "Travel & Lifestyle",
                id: "499d3951-7dda-4981-990f-861f001fb8fd"
            },
            {
                name: "Tech & Futuristic",
                id: "776ea084-2c99-4110-9780-f8cba82e2d61"
            }, 
            {
                name: "Gaming & Pop Culture",
                id: "f7b93926-9fe8-4294-943c-49b68eee4199"
            },
            {
                name: "Modern Lifestyle",
                id: "b68ee39c-41bd-41c2-8032-e4c3c6dcc31d"
            },
            {
                name: "Trending Global Spots",
                id: "05d218ba-e603-4fd1-8709-cd095ef10440"
            },
            {
                name: "Creative & Artistic",
                id: "2aef6826-c9d4-43fc-9e99-4cad3d6c01be"
            },
        ]
    })

    const packPrompts = await client.packPrompts.createMany({
        data: [
            // Valentine's Day
            {
            packId: "dbda4193-7b18-48ca-912f-a64b910e4bea",
            prompt: "user sitting at a candlelit dinner table with red roses, glowing candles, heart-shaped decorations, warm golden lights, cinematic lighting, romantic atmosphere"
            },
            {
            packId: "dbda4193-7b18-48ca-912f-a64b910e4bea",
            prompt: "user standing at a beach during sunset, holding hands with a silhouette effect, pink and purple sky, heart-shaped clouds, dreamy romantic vibe"
            },
            {
            packId: "dbda4193-7b18-48ca-912f-a64b910e4bea",
            prompt: "user holding a Valentine’s Day gift box wrapped in red with a golden ribbon, surrounded by rose petals and chocolates, glowing neon hearts in the background"
            },
            {
            packId: "dbda4193-7b18-48ca-912f-a64b910e4bea",
            prompt: "user standing in front of the Eiffel Tower at night, romantic mood, twinkling lights, holding red roses, heart-shaped lanterns floating in the sky, cinematic photography"
            },
            {
            packId: "dbda4193-7b18-48ca-912f-a64b910e4bea",
            prompt: "user anime-style illustration, holding a box of chocolates, surrounded by pastel pink hearts, kawaii aesthetic, soft colors, dreamy atmosphere"
            },
            // 🌍 Travel & Lifestyle
            {
                packId: "499d3951-7dda-4981-990f-861f001fb8fd",
                prompt: "user relaxing on a tropical beach, palm trees, waves, cocktails, golden sunset, cinematic vacation vibes"
            },
            {
                packId: "499d3951-7dda-4981-990f-861f001fb8fd",
                prompt: "user hiking through snowy mountain peaks, wearing outdoor gear, cinematic adventure photography, campfire in the background"
            },
            {
                packId: "499d3951-7dda-4981-990f-861f001fb8fd",
                prompt: "user swimming in a rooftop infinity pool at a luxury hotel, panoramic city skyline view, sunset lighting, cinematic lifestyle"
            },
            {
                packId: "499d3951-7dda-4981-990f-861f001fb8fd",
                prompt: "user exploring a neon-lit city street at night, cinematic urban street photography, vibrant nightlife atmosphere"
            },
            {
                packId: "499d3951-7dda-4981-990f-861f001fb8fd",
                prompt: "user driving a convertible car on a desert highway, cinematic golden hour lighting, open road travel aesthetic"
            },

            // 🌅 Nature & Outdoors
            {
                packId: "c11e92a5-3822-4831-9b42-c7d1b2b1d63f",
                prompt: "user camping under the stars, glowing bonfire, tent in the background, galaxy sky above, cinematic outdoor photography"
            },
            {
                packId: "c11e92a5-3822-4831-9b42-c7d1b2b1d63f",
                prompt: "user on a safari adventure in an open jeep, wildlife in the background, golden savannah sunset, cinematic nature vibe"
            },
            {
                packId: "c11e92a5-3822-4831-9b42-c7d1b2b1d63f",
                prompt: "user exploring a tropical jungle, waterfalls, misty atmosphere, cinematic nature adventure aesthetic"
            },
            {
                packId: "c11e92a5-3822-4831-9b42-c7d1b2b1d63f",
                prompt: "user skiing in snowy mountains, cozy wooden cabin in the background, cinematic winter lifestyle"
            },
            {
                packId: "c11e92a5-3822-4831-9b42-c7d1b2b1d63f",
                prompt: "user riding a camel through desert sand dunes, cinematic golden hour desert exploration"
            },

            // 🎉 Lifestyle & Aesthetic
            {
                packId: "9d9ea785-4ebb-4d2a-8ec2-0c4b21d9bda2",
                prompt: "user posing for a luxury fashion shoot on a rooftop, spotlight effect, cinematic editorial photography"
            },
            {
                packId: "9d9ea785-4ebb-4d2a-8ec2-0c4b21d9bda2",
                prompt: "user dining at a fine gourmet restaurant, candlelit table, cinematic elegant lifestyle atmosphere"
            },
            {
                packId: "9d9ea785-4ebb-4d2a-8ec2-0c4b21d9bda2",
                prompt: "user sitting in a cozy coffee shop, laptop and books on the table, cinematic warm photography aesthetic"
            },
            {
                packId: "9d9ea785-4ebb-4d2a-8ec2-0c4b21d9bda2",
                prompt: "user enjoying a live concert, colorful stage lights, cinematic festival crowd atmosphere"
            },
            {
                packId: "9d9ea785-4ebb-4d2a-8ec2-0c4b21d9bda2",
                prompt: "user working out in a modern gym, stylish sportswear, cinematic fitness lifestyle vibe"
            },

            // 🏛️ Iconic Locations
            {
                packId: "80ff8474-08b8-4654-abd8-0bfc54ae5284",
                prompt: "user standing near the Eiffel Tower in Paris, cinematic romantic city lights atmosphere"
            },
            {
                packId: "80ff8474-08b8-4654-abd8-0bfc54ae5284",
                prompt: "user walking through Times Square in New York, glowing billboards, cinematic urban lifestyle photography"
            },
            {
                packId: "80ff8474-08b8-4654-abd8-0bfc54ae5284",
                prompt: "user enjoying a rooftop view in Santorini, white houses and blue sea in the background, cinematic vacation vibe"
            },
            {
                packId: "80ff8474-08b8-4654-abd8-0bfc54ae5284",
                prompt: "user standing in front of Burj Khalifa in Dubai, desert and skyscrapers in the background, cinematic luxury city aesthetic"
            },
            {
                packId: "80ff8474-08b8-4654-abd8-0bfc54ae5284",
                prompt: "user walking through neon-lit streets of Tokyo at night, cinematic cyberpunk city photography"
            },
            // 🌐 Tech & Futuristic
            {
                packId: "776ea084-2c99-4110-9780-f8cba82e2d61",
                prompt: "user standing in a futuristic smart city, neon skyscrapers, holographic billboards, cinematic cyberpunk vibe"
            },
            {
                packId: "776ea084-2c99-4110-9780-f8cba82e2d61",
                prompt: "user wearing AR glasses, surrounded by holograms, futuristic workspace aesthetic, cinematic sci-fi atmosphere"
            },
            {
                packId: "776ea084-2c99-4110-9780-f8cba82e2d61",
                prompt: "user walking inside a high-tech data center, glowing server racks, cinematic modern tech photography"
            },
            {
                packId: "776ea084-2c99-4110-9780-f8cba82e2d61",
                prompt: "user posing with a humanoid robot in a futuristic lab, cinematic lighting, sci-fi innovation vibe"
            },
            {
                packId: "776ea084-2c99-4110-9780-f8cba82e2d61",
                prompt: "user in a flying car above a futuristic city skyline, cinematic neon nightscape, sci-fi lifestyle aesthetic"
            },

            // 🎮 Gaming & Pop Culture
            {
                packId: "f7b93926-9fe8-4294-943c-49b68eee4199",
                prompt: "user streaming in a neon-lit gaming setup, RGB lights, cinematic esports vibe"
            },
            {
                packId: "f7b93926-9fe8-4294-943c-49b68eee4199",
                prompt: "user cosplaying as a cyberpunk character, futuristic city background, cinematic dramatic lighting"
            },
            {
                packId: "f7b93926-9fe8-4294-943c-49b68eee4199",
                prompt: "user playing VR games, neon cyber environment, cinematic futuristic gaming aesthetic"
            },
            {
                packId: "f7b93926-9fe8-4294-943c-49b68eee4199",
                prompt: "user in an arcade with retro neon lights, surrounded by vintage gaming machines, cinematic nostalgic vibe"
            },
            {
                packId: "f7b93926-9fe8-4294-943c-49b68eee4199",
                prompt: "user in a fantasy RPG setting, cinematic medieval armor, glowing enchanted forest atmosphere"
            },

            // 🏙️ Modern Lifestyle
            {
                packId: "b68ee39c-41bd-41c2-8032-e4c3c6dcc31d",
                prompt: "user working remotely in a modern coworking café, laptop open, cinematic aesthetic workspace vibe"
            },
            {
                packId: "b68ee39c-41bd-41c2-8032-e4c3c6dcc31d",
                prompt: "user relaxing at a luxury rooftop bar, city lights in the background, cinematic nightlife atmosphere"
            },
            {
                packId: "b68ee39c-41bd-41c2-8032-e4c3c6dcc31d",
                prompt: "user shopping in a luxury fashion street, stylish outfit, cinematic urban editorial vibe"
            },
            {
                packId: "b68ee39c-41bd-41c2-8032-e4c3c6dcc31d",
                prompt: "user enjoying a rooftop yoga session at sunrise, cinematic wellness lifestyle aesthetic"
            },
            {
                packId: "b68ee39c-41bd-41c2-8032-e4c3c6dcc31d",
                prompt: "user driving an electric sports car in a futuristic city, cinematic eco-luxury travel vibe"
            },

            // 🌏 Trending Global Spots
            {
                packId: "05d218ba-e603-4fd1-8709-cd095ef10440",
                prompt: "user in Bali jungle villa, infinity pool with tropical views, cinematic exotic vacation aesthetic"
            },
            {
                packId: "05d218ba-e603-4fd1-8709-cd095ef10440",
                prompt: "user standing on a glass bridge in the mountains, cinematic dramatic landscape photography"
            },
            {
                packId: "05d218ba-e603-4fd1-8709-cd095ef10440",
                prompt: "user exploring Morocco market streets, colorful lights and lanterns, cinematic cultural travel vibe"
            },
            {
                packId: "05d218ba-e603-4fd1-8709-cd095ef10440",
                prompt: "user standing in Iceland by a waterfall, cinematic misty landscape photography"
            },
            {
                packId: "05d218ba-e603-4fd1-8709-cd095ef10440",
                prompt: "user in a luxury desert camp in Qatar, glowing lanterns, cinematic golden night aesthetic"
            },

            // 🎥 Creative & Artistic
            {
                packId: "2aef6826-c9d4-43fc-9e99-4cad3d6c01be",
                prompt: "user in a black-and-white cinematic portrait, dramatic shadows, classic film aesthetic"
            },
            {
                packId: "2aef6826-c9d4-43fc-9e99-4cad3d6c01be",
                prompt: "user surrounded by colorful graffiti walls, cinematic urban street art photography"
            },
            {
                packId: "2aef6826-c9d4-43fc-9e99-4cad3d6c01be",
                prompt: "user on a fashion runway, cinematic spotlight, high-end editorial photography"
            },
            {
                packId: "2aef6826-c9d4-43fc-9e99-4cad3d6c01be",
                prompt: "user holding a vintage film camera, cinematic retro photography vibe"
            },
            {
                packId: "2aef6826-c9d4-43fc-9e99-4cad3d6c01be",
                prompt: "user surrounded by floating books in a magical library, cinematic surreal fantasy vibe"
            }
            
        ]
    })




}
main();