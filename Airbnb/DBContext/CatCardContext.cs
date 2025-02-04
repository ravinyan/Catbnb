using Airbnb.Models;
using Catbnb.Models;
using Microsoft.EntityFrameworkCore;
using System.Globalization;

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

        private List<HostLanguages> GenerateHostLanguages()
        {
            List<HostLanguages> languagesList = new List<HostLanguages>()
            {
                new HostLanguages { Id = 1, Name = "Chinese" },
                new HostLanguages { Id = 2, Name = "English" },
                new HostLanguages { Id = 3, Name = "French" },
                new HostLanguages { Id = 4, Name = "German" },
                new HostLanguages { Id = 5, Name = "Italian" },
                new HostLanguages { Id = 6, Name = "Japanese" },
                new HostLanguages { Id = 7, Name = "Korean" },
                new HostLanguages { Id = 8, Name = "Portuguese" },
                new HostLanguages { Id = 9, Name = "Russian" },
                new HostLanguages { Id = 10, Name = "Spanish" },
                new HostLanguages { Id = 11, Name = "Arabic" },
                new HostLanguages { Id = 12, Name = "Croatian" },
                new HostLanguages { Id = 13, Name = "Chech" },
                new HostLanguages { Id = 14, Name = "Danish" },
                new HostLanguages { Id = 15, Name = "Dutch" },
                new HostLanguages { Id = 16, Name = "Greek" },
                new HostLanguages { Id = 17, Name = "Hindi" },
                new HostLanguages { Id = 18, Name = "Hungarian" },
                new HostLanguages { Id = 19, Name = "Indonesian" },
                new HostLanguages { Id = 20, Name = "Norwegian" },
                new HostLanguages { Id = 21, Name = "Polish" },
                new HostLanguages { Id = 22, Name = "Swedish" },
                new HostLanguages { Id = 23, Name = "Turkish" },
                new HostLanguages { Id = 24, Name = "Belarusian" },
                new HostLanguages { Id = 25, Name = "Bosnian" },
                new HostLanguages { Id = 26, Name = "Latvian" },
                new HostLanguages { Id = 27, Name = "Lithuanian" },
                new HostLanguages { Id = 28, Name = "Punjabi" },
                new HostLanguages { Id = 29, Name = "Romanian" },
                new HostLanguages { Id = 30, Name = "Serbian" },
                new HostLanguages { Id = 31, Name = "Slovakian" },
                new HostLanguages { Id = 32, Name = "Ukrainian" },
            };

            return languagesList;
        }

        private List<AccessibilityFeatures> GenerateAccessibilities()
        {
            List<AccessibilityFeatures> accessibilitiesList = new List<AccessibilityFeatures>()
            {
                new AccessibilityFeatures { Id = 1, Name = "Step-free guest entrance" },
                new AccessibilityFeatures { Id = 2, Name = "Guest entrance wider than 32 inches (81 centimeters)" },
                new AccessibilityFeatures { Id = 3, Name = "Accessible parking spot" },
                new AccessibilityFeatures { Id = 4, Name = "Step-free path to the guest entrance" },
                new AccessibilityFeatures { Id = 5, Name = "Step-free bedroom access" },
                new AccessibilityFeatures { Id = 6, Name = "Bedroom entrance wider than 32 inches (81 centimeters)" },
                new AccessibilityFeatures { Id = 7, Name = "Step-free bathroom access" },
                new AccessibilityFeatures { Id = 8, Name = "Bathroom entrance wider than 32 inches (81 centimeters)" },
                new AccessibilityFeatures { Id = 9, Name = "Toilet grab bar" },
                new AccessibilityFeatures { Id = 10, Name = "Shower grab bar" },
                new AccessibilityFeatures { Id = 11, Name = "Step-free shower" },
                new AccessibilityFeatures { Id = 12, Name = "Shower or bath chair" },
                new AccessibilityFeatures { Id = 13, Name = "Ceiling or mobile hoist" },
            };

            return accessibilitiesList;
        }

        private List<PropertyType> GeneratePropertyType()
        {
            List<PropertyType> propertyTypeList = new List<PropertyType>()
            {
                new PropertyType { Id = 1, Name = "House" },
                new PropertyType { Id = 2, Name = "Apartment" },
                new PropertyType { Id = 3, Name = "Guesthouse" },
                new PropertyType { Id = 4, Name = "Hotel" },
            };

            return propertyTypeList;
        }

        private List<BookingOptions> GenerateBookingOptions()
        {
            List<BookingOptions> bookingOptionsList = new List<BookingOptions>()
            {
                new BookingOptions { Id = 1, Name = "Instant Book" },
                new BookingOptions { Id = 2, Name = "Self check-in" },
                new BookingOptions { Id = 3, Name = "Allows pets" },
            };

            return bookingOptionsList;
        }

        private List<User> GenerateUsers()
        {
            List<User> usersList = new List<User>();
            string[] time = ["1 month", "6 months", "10 months", "1 year", "2 years", "3 years"];
			string[] names = ["Bob", "Steven", "Big Bob", "Micheal", "Bob The Great", "Catnip", "BOBER"];
            string[] title = ["Newbie Scratcher - jumps on chandeliers", "Scratcher - 1 couch destroyed", "Super Scratcher - 3 couches destroyed"];

			for (int i = 1; i <= 244; i++)
            {
				usersList.Add(new User
				{
					Id = i,
					TimeOnCatbnb = time[rng.Next(0, 6)],
					Name = names[rng.Next(0, 7)],
                    Title = title[rng.Next(0, 3)],
				});
            }

            return usersList;
        }

        private List<CatCard> GenerateCatCards()
        {
            List<CatCard> catCardsList = new List<CatCard>();

            int userId = 0;
            int categoryId = 0;
            //2440 244
            for (int i = 1; i <= 2440; i++)
            {
                if (i % 10 == 1 && userId <= 10)
                {
					userId++;
                }
                else if (i % 10 == 1)
                {
					userId++;
                }

                if (i % 40 == 1 && categoryId <= 10)
                {
                    categoryId++;
                }
                else if (i % 40 == 1)
                {
                    categoryId++;
                }

                catCardsList.Add(new CatCard { Id = i, HostId = userId, BookingInfoId = i, CategoryId = categoryId});
            }
            
            return catCardsList;
        }

        private List<BookingInfo> GenerateBookingInfo()
        {
            List<BookingInfo> bookingInfoList = new List<BookingInfo>();
            string[] countries = ["United States", "Poland", "Germany", "Spain", "Canada", "China", "Japan", "United Kingdom", "Turkey", "Italy"];
            string[] cities = ["Las Vegas", "Warsaw", "Berlin", "Valencia", "Vancouver", "Shanghai", "Tokyo", "London", "Istanbul", "Rome"];
            string[] descriptions = ["The missile knows where it is at all times. It knows this because it knows where it isn't. By subtracting where it is from where it isn't, or where it isn't from where it is - whichever is greater - it obtains a difference or deviation. The guidance subsystem uses deviations to generate corrective commands to drive the missile from a position where it is to a position where it isn't, and arriving at a position where it wasn't, it now is. Consequently, the position where it is is now the position that it wasn't, and it follows that the position that it was is now the position that it isn't. In the event that the position that it is in is not the position that it wasn't, the system has acquired a variation, the variation being the difference between where the missile is and where it wasn't. If variation is considered to be a significant factor, it too may be corrected by the GEA. However, the missile must also know where it was. The missile guidance computer scenario works as follows: Because a variation has modified some of the information that the missile has obtained, it is not sure just where it is. However, it is sure where it isn't, within reason, and it knows where it was. It now subtracts where it should be from where it wasn't, or vice versa. And by differentiating this from the algebraic sum of where it shouldn't be and where it was, it is able to obtain the deviation and its variation, which is called error.",
									 "NEVER SUBBED, NEVER DONATED, ADBLOCK ON, STOLEN LAPTOP, NEIGHBOURS WIFI, MOMMAS HOUSE, STOLEN SOLAR PANELS, STOLEN SUN, SOLAR ENERGY STOLEN, WATER WHEEL, NEIGHBOURS RIVER, STOLEN HYDROELECTRIC PLANT, CHARGING PHONE WITH WORK ELECTRICITY, SHOWER IN BATHROOM SINK, STOLEN FOOD FROM CAFETERIA, STOLEN HAMSTER, STOLEN HAMSTER WHEEL, KINETIC ENERGY, FREE ENTERTAINMENT",
									 "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.",
									 "DO IT, just DO IT! Don't let your dreams be dreams. Yesterday, you said tomorrow. So just. DO IT! Make. your dreams. COME TRUE! Just... do it! Some people dream of success, while you're gonna wake up and work HARD at it! NOTHING IS IMPOSSIBLE!You should get to the point where anyone else would quit, and you're not gonna stop there. NO! What are you waiting for? ... DO IT! Just... DO IT! Yes you can! Just do it! If you're tired of starting over, stop. giving. up.",
									 "If C# has a million fans, then I am one of them. If C# has ten fans, then I am one of them. If C# has only one fan then that is me. If C# has no fans, then that means I am no longer on earth. If the world is against C#, then I am against the world.",
                                     "What's this you've said to me, my good friend? I'll have you know I graduated top of my class in conflict resolution, and I've been involved in numerous friendly discussions, and I have over 300 confirmed friends. I am trained in polite discussions and I'm the top mediator in the entire neighborhood. You are worth more to me than just another target. I hope we will come to have a friendship never before seen on this Earth. Don't you think you might be hurting someone's feelings saying that over the internet? Think about it, my friend. As we speak I am contacting my good friends across the USA and your P.O. box is being traced right now so you better prepare for the greeting cards, friend. The greeting cards that help you with your hate. You should look forward to it, friend. I can be anywhere, anytime for you, and I can calm you in over seven hundred ways, and that's just with my chess set. Not only am I extensively trained in conflict resolution, but I have access to the entire group of my friends and I will use them to their full extent to start our new friendship. If only you could have known what kindness and love your little comment was about to bring you, maybe you would have reached out sooner. But you couldn't, you didn't, and now we get to start a new friendship, you unique person. I will give you gifts and you might have a hard time keeping up. You're finally living, friend.",
									 "don't care. CURSE OF RA 𓀀 𓀁 𓀂 𓀃 𓀄 𓀅 𓀆 𓀇 𓀈 𓀉 𓀊 𓀋 𓀌 𓀍 𓀎 𓀏 𓀐 𓀑 𓀒 𓀓 𓀔 𓀕 𓀖 𓀗 𓀘 𓀙 𓀚 𓀛 𓀜 𓀝 𓀞 𓀟 𓀠 𓀡 𓀢 𓀣 𓀤 𓀥 𓀦 𓀧 𓀨 𓀩 𓀪 𓀫 𓀬 𓀭 𓀮 𓀯 𓀰 𓀱 𓀲 𓀳 𓀴 𓀵 𓀶 𓀷 𓀸 𓀹 𓀺 𓀻 𓀼 𓀽 𓀾 𓀿 𓁀 𓁁 𓁂 𓁃 𓁄 𓁅 𓁆 𓁇 𓁈 𓁉 𓁊 𓁋 𓁌 𓁍 𓁎 𓁏 𓁐 𓁑 𓀄 𓀅 𓀆",
									 "HOLD CTRL AND TYPE \"WTF\" FOR ℱ𝓪𝓷𝓬𝔂 𝓦𝓣ℱ"];
            bool[] TrueOrFalse = [true, false];
            string currentMonth = DateTime.Now.ToString("MMM", CultureInfo.InvariantCulture);
            int currentYear = DateTime.Now.Year;
            int maxNumberOfDays = DateTime.DaysInMonth(currentYear, DateTime.ParseExact(currentMonth, "MMM", CultureInfo.InvariantCulture).Month);
            string[] typeOfPlace = ["Room", "Entire home"];

            for (int i = 1; i <= 2440; i++)
            {
                var cityCountryIndex = rng.Next(0, 10);
                var petCount = 0;
                var petsAllowed = TrueOrFalse[rng.Next(0, 2)];

                if (petsAllowed == true)
                {
                    petCount = rng.Next(1, 6);
                }
                else
                {
                    petCount = 0;
                }

                bookingInfoList.Add(new BookingInfo
                {
                    Id = i,
                    Country = countries[cityCountryIndex],
                    City = cities[cityCountryIndex],
                    BasePrice = rng.Next(100, 10000),
                    CleaningFee = rng.Next(0, 10),
                    Description = descriptions[rng.Next(0, 8)],
                    ShortDescription = "Pirate cat! Arrr",
                    DateAvaiable = $"{rng.Next(1, 15)} {currentMonth} - {rng.Next(15, maxNumberOfDays)} {currentMonth}",
                    NumberOfBedrooms = rng.Next(1, 17),
                    NumberOfBeds = rng.Next(1, 17),
                    NumberOfBathrooms = rng.Next(1, 17),
                    MaxNumberOfGuests = rng.Next(1, 17),
                    PetsAllowed = petsAllowed,
                    SelfCheckin = TrueOrFalse[rng.Next(0, 2)],
                    InstantBook = TrueOrFalse[rng.Next(0, 2)],
                    TypeOfPlace = typeOfPlace[rng.Next(0, 2)],
                    MaxNumberOfPets = petCount,
                    InfantsAllowed = TrueOrFalse[rng.Next(0, 2)],
                    PropertyTypeId = rng.Next(1, 5),
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
            string[] stayAmount = ["one night", "a few nights", "about a week", "a few weeks"];
            
            var id = 1;
            var biid = 1;
            var userId = 0;
            for (int i = 1; i <= 2440; i++)
            {
				if (i % 10 == 1 && userId <= 10)
				{
					userId++;
				}
				else if (i % 10 == 1)
				{
					userId++;
				}

				for (int j = 1; j <= 7; j++)
                {
					var reviewIndex = rng.Next(0, 6);
                    reviewList.Add(new Reviews
                    {
                        Id = id,
                        BookingInfoId = biid,
                        Review = reviews[reviewIndex],
                        StarRating = stars[reviewIndex],
                        StayTime = stayAmount[rng.Next(0, 4)],
                        DateSent = new DateOnly(2024, rng.Next(1, 12), rng.Next(1, 25)),
                        UserId = userId,
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

        private List<BookingInfoHostLanguages> GenerateBookingInfoHostLanguages()
        {
            List<BookingInfoHostLanguages> bookingInfoHostLanguagesList = new List<BookingInfoHostLanguages>();

            for (int i = 1; i <= 2440; i++)
            {
                var languages = Enumerable.Range(1, 32).OrderBy(x => rng.Next()).Take(3).ToList();

                for (int j = 0; j < 3; j++)
                {
                    bookingInfoHostLanguagesList.Add(new BookingInfoHostLanguages
                    {
                        BookingInfoId = i,
                        HostLanguageId = languages[j],
                    });
                }
            }

            return bookingInfoHostLanguagesList;
        }

        private List<BookingInfoAccessibilityFeatures> GenerateBookingInfoAccessibilityFeatures()
        {
            List<BookingInfoAccessibilityFeatures> bookingInfoAccessibilityFeatures = new List<BookingInfoAccessibilityFeatures>();

            for (int i = 1; i <= 2440; i++)
            {
                var accessibilities = Enumerable.Range(1, 13).OrderBy(x => rng.Next()).Take(7).ToList();

                for (int j = 0; j < 7; j++)
                {
                    bookingInfoAccessibilityFeatures.Add(new BookingInfoAccessibilityFeatures
                    {
                        BookingInfoId = i,
                        AccessibilityFeatureId = accessibilities[j],
                    });
                }
            }

            return bookingInfoAccessibilityFeatures;
        }

        private List<BookingInfoBookingOptions> GenerateBookingInfoBookingOptions()
        {
            List<BookingInfoBookingOptions> bookingInfoBookingOptions = new List<BookingInfoBookingOptions>();

            for (int i = 1; i <= 2440; i++)
            {
                var options = Enumerable.Range(1, 3).OrderBy(x => rng.Next()).Take(2).ToList();

                for (int j = 0; j < 2; j++)
                {
                    bookingInfoBookingOptions.Add(new BookingInfoBookingOptions
                    {
                        BookingInfoId = i,
                        BookingOptionsId = options[j],
                    });
                }
            }

            return bookingInfoBookingOptions;
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            List<Amenities> amenitiesList = GenerateAmenities();
            modelBuilder.Entity<Amenities>().HasData(amenitiesList);

            List<Models.User> userList = GenerateUsers();
            modelBuilder.Entity<Models.User>().HasData(userList);

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

            List<PropertyType> propertyTypeList = GeneratePropertyType();
            modelBuilder.Entity<PropertyType>().HasData(propertyTypeList);

            List<HostLanguages> hostLanguagesList = GenerateHostLanguages();
            modelBuilder.Entity<HostLanguages>().HasData(hostLanguagesList);

            List<AccessibilityFeatures> accessibilityFeaturesList = GenerateAccessibilities();
            modelBuilder.Entity<AccessibilityFeatures>().HasData(accessibilityFeaturesList);

            List<BookingOptions> bookingOptionsList = GenerateBookingOptions();
            modelBuilder.Entity<BookingOptions>().HasData(bookingOptionsList);

            modelBuilder.Entity<CatCardAmenities>()
                .ToTable("CatCardAmenities")
                .HasKey(k => new { k.AmenitiesId, k.CatCardId });

			List<CatCardAmenities> catCardAmenities = GenerateCatCardAmenities();
            modelBuilder.Entity<CatCardAmenities>().HasData(catCardAmenities);

            modelBuilder.Entity<BookingInfoHostLanguages>()
                .ToTable("BookingInfoHostLanguages")
                .HasKey(k => new { k.HostLanguageId, k.BookingInfoId });

            List<BookingInfoHostLanguages> bookingInfoHostLanguages = GenerateBookingInfoHostLanguages();
            modelBuilder.Entity<BookingInfoHostLanguages>().HasData(bookingInfoHostLanguages);

            modelBuilder.Entity<BookingInfoAccessibilityFeatures>()
                .ToTable("BookingInfoAccessibilityFeatures")
                .HasKey(k => new { k.AccessibilityFeatureId, k.BookingInfoId });

            List<BookingInfoAccessibilityFeatures> bookingInfoAccessibilityFeatures = GenerateBookingInfoAccessibilityFeatures();
            modelBuilder.Entity<BookingInfoAccessibilityFeatures>().HasData(bookingInfoAccessibilityFeatures);

            modelBuilder.Entity<BookingInfoBookingOptions>()
                .ToTable("BookingInfoBookingOptions")
                .HasKey(k => new { k.BookingOptionsId, k.BookingInfoId });

            List<BookingInfoBookingOptions> bookingInfoBookingOptions = GenerateBookingInfoBookingOptions();
            modelBuilder.Entity<BookingInfoBookingOptions>().HasData(bookingInfoBookingOptions);

            modelBuilder.Entity<Models.User>()
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

            modelBuilder.Entity<BookingInfo>()
                .HasOne(pt => pt.PropertyType);

            modelBuilder.Entity<Categories>()
                .HasMany(cc => cc.CatCards)
                .WithOne(c => c.Category);

            modelBuilder.Entity<User>()
                .HasMany(r => r.Reviews)
                .WithOne(u => u.User);
		}

        public DbSet<CatCard> CatCards { get; set; }
        public DbSet<Categories> Categories { get; set; }
        public DbSet<CatCardImages> CatCardImages { get; set; }
        public DbSet<Amenities> Amenities { get; set; }
        public DbSet<Models.User> Users { get; set; }

        public DbSet<BookingInfo> BookingInfos { get; set; }
        public DbSet<Reviews> Reviews { get; set; }

        public DbSet<HostLanguages> HostLanguages { get; set; }
        public DbSet<AccessibilityFeatures> AccessibilityFeatures { get; set; }
        public DbSet<PropertyType> PropertyTypes { get; set; }
        public DbSet<BookingOptions> BookingOptions { get; set; }
    }
}
