using Airbnb.Models;
using Catbnb.Models;
using Microsoft.EntityFrameworkCore;

namespace Airbnb.DBContext
{
    public class CatCardContext : DbContext
    {
        public CatCardContext(DbContextOptions<CatCardContext> options) : base(options)
        {

        }

        Random rng = new Random();

        private List<Amenities> GenerateAmenities()
        {
            List<Amenities> amenitiesList = new List<Amenities>
            {
                new Amenities { Id = 1, Name = "Wifi"},
                new Amenities { Id = 2, Name = "Kitchen"},
                new Amenities { Id = 3, Name = "Washer"},
                new Amenities { Id = 4, Name = "Dryer"},
                new Amenities { Id = 5, Name = "Air conditioning"},
                new Amenities { Id = 6, Name = "Heating"},
                new Amenities { Id = 7, Name = "Dedicated workspace"},
                new Amenities { Id = 8, Name = "TV"},
                new Amenities { Id = 9, Name = "Hair dryer"},
                new Amenities { Id = 10, Name = "Iron"},
                new Amenities { Id = 11, Name = "Pool"},
                new Amenities { Id = 12, Name = "Hot tub"},
                new Amenities { Id = 13, Name = "Free parking"},
                new Amenities { Id = 14, Name = "EV charger"},
                new Amenities { Id = 15, Name = "Crib"},
                new Amenities { Id = 16, Name = "King bed"},
                new Amenities { Id = 17, Name = "Gym"},
                new Amenities { Id = 18, Name = "BBQ grill"},
                new Amenities { Id = 19, Name = "Breakfast"},
                new Amenities { Id = 20, Name = "Indoor fireplace"},
                new Amenities { Id = 21, Name = "Smoking allowed"},
                new Amenities { Id = 22, Name = "Beachfront"},
                new Amenities { Id = 23, Name = "Waterfront"},
                new Amenities { Id = 24, Name = "Ski-in/ski-out"},
                new Amenities { Id = 25, Name = "Smoke alarm"},
                new Amenities { Id = 26, Name = "Carbon monoxide alarm"}
            };

            return amenitiesList;
        }

        private List<Models.Host> GenerateUsers()
        {
            List<Models.Host> usersList = new List<Models.Host>();

            for (int i = 1; i <= 244; i++)
            {
                usersList.Add(new Models.Host { Id = i, Name = $"bob{i}" });
            }

            return usersList;
        }

        private List<CatCard> GenerateCatCards()
        {
            List<CatCard> catCardsList = new List<CatCard>();

            int hostId = 0;
            int categoryId = 0;
            //2440 244
            for (int i = 1; i <= 2440; i++)
            {
                if (i % 10 == 1 && hostId <= 10)
                {
                    hostId++;
                }
                else if (i % 10 == 1)
                {
                    hostId++;
                }

                if (i % 40 == 1 && categoryId <= 10)
                {
                    categoryId++;
                }
                else if (i % 40 == 1)
                {
                    categoryId++;
                }

                catCardsList.Add(new CatCard { Id = i, HostId = hostId, BookingInfoId = i, CategoryId = categoryId});
            }
            
            return catCardsList;
        }

        private List<BookingInfo> GenerateBookingInfo()
        {
            List<BookingInfo> bookingInfoList = new List<BookingInfo>();
            string[] countries = ["USA", "Poland", "Germany", "Spain", "Canada", "China", "Japan", "United Kingdom", "Turkey", "Italy"];
            string[] cities = ["Las Vegas", "Warsaw", "Berlin", "Valencia", "Vancouver", "Shanghai", "Tokyo", "London", "Istanbul", "Rome"];
            string[] descriptions = ["The missile knows where it is at all times. It knows this because it knows where it isn't. By subtracting where it is from where it isn't, or where it isn't from where it is - whichever is greater - it obtains a difference or deviation. The guidance subsystem uses deviations to generate corrective commands to drive the missile from a position where it is to a position where it isn't, and arriving at a position where it wasn't, it now is. Consequently, the position where it is is now the position that it wasn't, and it follows that the position that it was is now the position that it isn't. In the event that the position that it is in is not the position that it wasn't, the system has acquired a variation, the variation being the difference between where the missile is and where it wasn't. If variation is considered to be a significant factor, it too may be corrected by the GEA. However, the missile must also know where it was. The missile guidance computer scenario works as follows: Because a variation has modified some of the information that the missile has obtained, it is not sure just where it is. However, it is sure where it isn't, within reason, and it knows where it was. It now subtracts where it should be from where it wasn't, or vice versa. And by differentiating this from the algebraic sum of where it shouldn't be and where it was, it is able to obtain the deviation and its variation, which is called error.",
									 "NEVER SUBBED, NEVER DONATED, ADBLOCK ON, STOLEN LAPTOP, NEIGHBOURS WIFI, MOMMAS HOUSE, STOLEN SOLAR PANELS, STOLEN SUN, SOLAR ENERGY STOLEN, WATER WHEEL, NEIGHBOURS RIVER, STOLEN HYDROELECTRIC PLANT, CHARGING PHONE WITH WORK ELECTRICITY, SHOWER IN BATHROOM SINK, STOLEN FOOD FROM CAFETERIA, STOLEN HAMSTER, STOLEN HAMSTER WHEEL, KINETIC ENERGY, FREE ENTERTAINMENT",
									 "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.",
									 "DO IT, just DO IT! Don't let your dreams be dreams. Yesterday, you said tomorrow. So just. DO IT! Make. your dreams. COME TRUE! Just... do it! Some people dream of success, while you're gonna wake up and work HARD at it! NOTHING IS IMPOSSIBLE!You should get to the point where anyone else would quit, and you're not gonna stop there. NO! What are you waiting for? ... DO IT! Just... DO IT! Yes you can! Just do it! If you're tired of starting over, stop. giving. up.",
									 "If C# has a million fans, then I am one of them. If C# has ten fans, then I am one of them. If C# has only one fan then that is me. If C# has no fans, then that means I am no longer on earth. If the world is against C#, then I am against the world.",
									 "What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little \"clever\" comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.",
									 "don't care. CURSE OF RA 𓀀 𓀁 𓀂 𓀃 𓀄 𓀅 𓀆 𓀇 𓀈 𓀉 𓀊 𓀋 𓀌 𓀍 𓀎 𓀏 𓀐 𓀑 𓀒 𓀓 𓀔 𓀕 𓀖 𓀗 𓀘 𓀙 𓀚 𓀛 𓀜 𓀝 𓀞 𓀟 𓀠 𓀡 𓀢 𓀣 𓀤 𓀥 𓀦 𓀧 𓀨 𓀩 𓀪 𓀫 𓀬 𓀭 𓀮 𓀯 𓀰 𓀱 𓀲 𓀳 𓀴 𓀵 𓀶 𓀷 𓀸 𓀹 𓀺 𓀻 𓀼 𓀽 𓀾 𓀿 𓁀 𓁁 𓁂 𓁃 𓁄 𓁅 𓁆 𓁇 𓁈 𓁉 𓁊 𓁋 𓁌 𓁍 𓁎 𓁏 𓁐 𓁑 𓀄 𓀅 𓀆",
									 "HOLD CTRL AND TYPE \"WTF\" FOR ℱ𝓪𝓷𝓬𝔂 𝓦𝓣ℱ"];
            bool[] TrueOrFalse = [true, false];
            
            for (int i = 1; i <= 2440; i++)
            {
                var cityCountryIndex = rng.Next(0, 10);

                bookingInfoList.Add(new BookingInfo
                {
                    Id = i,
                    Country = countries[cityCountryIndex],
                    City = cities[cityCountryIndex],
                    BasePrice = rng.Next(100, 10000),
                    CleaningFee = rng.Next(0, 100),
                    Description = descriptions[rng.Next(0, 8)],
                    ShortDescription = "cat?",
                    DateAvaiable = $"{rng.Next(1, 14)} May - {rng.Next(15, 31)} May",
                    NumberOfBedrooms = rng.Next(1, 16),
                    NumberOfBeds = rng.Next(1, 16),
                    NumberOfBathrooms = rng.Next(1, 16),
                    MaxNumberOfGuests = rng.Next(1, 16),
                    PetsAllowed = TrueOrFalse[rng.Next(1, 2)],
                    InfantsAllowed = TrueOrFalse[rng.Next(0, 1)],
                });
            }

            return bookingInfoList;
        }

        private List<CatCardImages> GenerateCatCardImages()
        {
            List<CatCardImages> imagesList = new List<CatCardImages>();

            // i would use links but i can just do that instead... that way at least links will never die
            string[] urlImages = ["/img/img1.png",
                                  "/img/img2.png",
                                  "/img/img3.png",
                                  "/img/img4.png",
                                  "/img/img5.png"];

            var id = 1;
            var ccid = 1;
            for (int j = 1; j <= 2440; j++)
            {
                for (int i = 1; i <= 5; i++)
                {
                    imagesList.Add(new CatCardImages
                    {
                        Id = id,
                        CatCardId = ccid,
                        Url = urlImages[rng.Next(1, 5)]
                    });
                    
                    id++;
                }
                ccid++;
            }
            
            return imagesList;
        }

        private List<Categories> GenerateCategories()
        {
            List<Categories> categoryList = new List<Categories>
            {
                new Categories { Id = 1, Name = "Icons" },
                new Categories { Id = 2, Name = "Lakefront" },
                new Categories { Id = 3, Name = "Cabins" },
                new Categories { Id = 4, Name = "Amazing views" },
                new Categories { Id = 5, Name = "Top of the world" },
                new Categories { Id = 6, Name = "Design" },
                new Categories { Id = 7, Name = "Amazing pools" },
                new Categories { Id = 8, Name = "Beachfront" },
                new Categories { Id = 9, Name = "Tiny homes" },
                new Categories { Id = 10, Name = "Countryside" },
                new Categories { Id = 11, Name = "OMG!" },
                new Categories { Id = 12, Name = "Farms" },
                new Categories { Id = 13, Name = "Treehouses" },
                new Categories { Id = 14, Name = "Tropical" },
                new Categories { Id = 15, Name = "Houseboats" },
                new Categories { Id = 16, Name = "Mansions" },
                new Categories { Id = 17, Name = "Boats" },
                new Categories { Id = 18, Name = "Domes" },
                new Categories { Id = 19, Name = "Off-the-grid" },
                new Categories { Id = 20, Name = "Camping" },
                new Categories { Id = 21, Name = "Rooms" },
                new Categories { Id = 22, Name = "National parks" },
                new Categories { Id = 23, Name = "Castles" },
                new Categories { Id = 24, Name = "Luxe" },
                new Categories { Id = 25, Name = "Vineyards" },
                new Categories { Id = 26, Name = "Islands" },
                new Categories { Id = 27, Name = "Top cities" },
                new Categories { Id = 28, Name = "Caves" },
                new Categories { Id = 29, Name = "Historical homes" },
                new Categories { Id = 30, Name = "Barns" },
                new Categories { Id = 31, Name = "Earth homes" },
                new Categories { Id = 32, Name = "Play" },
                new Categories { Id = 33, Name = "Containers" },
                new Categories { Id = 34, Name = "A-frames" },
                new Categories { Id = 35, Name = "Bed & breakfasts" },
                new Categories { Id = 36, Name = "New" },
                new Categories { Id = 37, Name = "Chef's kitchens" },
                new Categories { Id = 38, Name = "Towers" },
                new Categories { Id = 39, Name = "ski-in/out" },
                new Categories { Id = 40, Name = "Creative spaces" },
                new Categories { Id = 41, Name = "Yurts" },
                new Categories { Id = 42, Name = "Arctic" },
                new Categories { Id = 43, Name = "Desert" },
                new Categories { Id = 44, Name = "Windmills" },
                new Categories { Id = 45, Name = "Trulli" },
                new Categories { Id = 46, Name = "Cycladic homes" },
                new Categories { Id = 47, Name = "Adapted" },
                new Categories { Id = 48, Name = "Casas particulares" },
                new Categories { Id = 49, Name = "Grand pianos" },
                new Categories { Id = 50, Name = "Dammusi" },
                new Categories { Id = 51, Name = "Riads" },
                new Categories { Id = 52, Name = "Skiing" },
                new Categories { Id = 53, Name = "Campers" },
                new Categories { Id = 54, Name = "Surfing" },
                new Categories { Id = 55, Name = "Golfing" },
                new Categories { Id = 56, Name = "Hanoks" },
                new Categories { Id = 57, Name = "Minsus" },
                new Categories { Id = 58, Name = "Ryokans" },
                new Categories { Id = 59, Name = "Shepherd's huts" },
                new Categories { Id = 60, Name = "Beach" },
                new Categories { Id = 61, Name = "Lake" },
            };

            return categoryList;
        }

        private List<Reviews> GenerateReviews()
        {
            var reviewList = new List<Reviews>();

            string[] reviews = ["This cat is the best!", "This cat is amazing!", "This cat is good but scratches couches",
                                "This cat is boring", "This cat is stupid", "meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow "];
            int[] stars = [5, 4, 3, 2, 1, 5];

            var id = 1;
            var biid = 1;
            for (int i = 1; i <= 2440; i++)
            {
                
                for (int j = 1; j <= 7; j++)
                {
					var reviewIndex = rng.Next(0, 6);
					reviewList.Add(new Reviews
                    {
                        Id = id,
                        BookingInfoId = biid,
                        Review = reviews[reviewIndex],
                        StarRating = stars[reviewIndex],
                    });

                    id++;
                }
                biid++;
            }

            return reviewList;
        }

        private List<CatCardAmenities> GenerateCatCardAmenities()
        {
            List<CatCardAmenities> catCardAmenitiesList = new List<CatCardAmenities>();

			for (int i = 1; i <= 2440; i++)
            {
				var www = Enumerable.Range(1, 26).OrderBy(x => rng.Next()).Take(15).ToList();
				
                for (int j = 0; j < 15; j++)
                {
                    catCardAmenitiesList.Add(new CatCardAmenities
                    {
                        CatCardId = i,
                        AmenitiesId = www[j],
                    });
                }
            }

            return catCardAmenitiesList;
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            List<Amenities> amenitiesList = GenerateAmenities();
            modelBuilder.Entity<Amenities>().HasData(amenitiesList);

            List<Models.Host> userList = GenerateUsers();
            modelBuilder.Entity<Models.Host>().HasData(userList);

            List<Categories> categoryList = GenerateCategories();
            modelBuilder.Entity<Categories>().HasData(categoryList);

            List<CatCard> catCardsList = GenerateCatCards();
            modelBuilder.Entity<CatCard>().HasData(catCardsList);

            List<BookingInfo> bookingList = GenerateBookingInfo();
            modelBuilder.Entity<BookingInfo>().HasData(bookingList);

            List<CatCardImages> imagesList = GenerateCatCardImages();
            modelBuilder.Entity<CatCardImages>().HasData(imagesList);

            List<Reviews> reviewList = GenerateReviews();
            modelBuilder.Entity<Reviews>().HasData(reviewList);

            modelBuilder.Entity<CatCardAmenities>()
                .ToTable("CatCardAmenities")
                .HasKey(k => new { k.AmenitiesId, k.CatCardId });

			List<CatCardAmenities> catCardAmenities = GenerateCatCardAmenities();
            modelBuilder.Entity<CatCardAmenities>().HasData(catCardAmenities);

            modelBuilder.Entity<Models.Host>()
                .HasMany(cc => cc.CatCards)
                .WithOne(u => u.Host);

			modelBuilder.Entity<CatCard>()
                .HasMany(i => i.Images)
                .WithOne(cc => cc.CatCard);

            modelBuilder.Entity<BookingInfo>()
                .HasOne(cc => cc.CatCard)
                .WithOne(bi => bi.BookingInfo);

            modelBuilder.Entity<BookingInfo>()
                .HasMany(r => r.Reviews)
                .WithOne(bi => bi.BookingInfo);

            modelBuilder.Entity<Categories>()
                .HasMany(cc => cc.CatCards)
                .WithOne(c => c.Category);
		}

        public DbSet<CatCard> CatCards { get; set; }
        public DbSet<Categories> Categories { get; set; }
        public DbSet<CatCardImages> CatCardImages { get; set; }
        public DbSet<Amenities> Amenities { get; set; }
        public DbSet<Models.Host> Users { get; set; }

        public DbSet<BookingInfo> BookingInfos { get; set; }
        public DbSet<Reviews> Reviews { get; set; }
    }
}
