using Airbnb.Models;
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

            for (int i = 1; i <= 61; i++)
            {
                usersList.Add(new Models.Host { Id = i, Name = $"bob{i}" });
            }

            return usersList;
        }

        private List<CatCard> GenerateCatCards()
        {
            List<CatCard> catCardsList = new List<CatCard>();

            int hostId = 1;
            for (int i = 1; i <= 610; i++)
            {
                if (i == 600)
                {
                    Console.WriteLine();
                }

                if (i % 10 == 0 && hostId < 61)
                {
                    hostId++;
                }

                catCardsList.Add(new CatCard { Id = i, HostId = hostId, BookingInfoId = i});
            }

            return catCardsList;
        }

        private List<BookingInfo> GenerateBookingInfo()
        {
            List<BookingInfo> bookingInfoList = new List<BookingInfo>();
            string[] countries = ["USA", "Poland", "Germany", "Spain", "Canada", "China", "Japan", "United Kingdom", "Turkey", "Italy"];
            string[] cities = ["Las Vegas", "Warsaw", "Berlin", "Valencia", "Vancouver", "Shanghai", "Tokyo", "London", "Istanbul", "Rome"];
            string[] descriptions = ["cat", "very cool cat", "cool cat", "10/10 cat", "best cat you will ever see", "this cat loves chandeliers",
                                     "this cat is scared of cucumbers", "1 shader braincell cat", "cute cat", "dog"];
            bool[] TrueOrFalse = [true, false];
            
            for (int i = 1; i <= 610; i++)
            {
                var cityCountryIndex = rng.Next(1, 10);

                bookingInfoList.Add(new BookingInfo
                {
                    Id = i,
                    Country = countries[cityCountryIndex],
                    City = cities[cityCountryIndex],
                    BasePrice = rng.Next(100, 10000),
                    Description = descriptions[rng.Next(1, 10)],
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
            for (int j = 1; j <= 122; j++)
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

        private void GenerateCatCardAmenities()
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            List<Amenities> amenitiesList = GenerateAmenities();
            modelBuilder.Entity<Amenities>().HasData(amenitiesList);

            List<Models.Host> userList = GenerateUsers();
            modelBuilder.Entity<Models.Host>().HasData(userList);

            List<CatCard> catCardsList = GenerateCatCards();
            modelBuilder.Entity<CatCard>().HasData(catCardsList);

            List<BookingInfo> bookingList = GenerateBookingInfo();
            modelBuilder.Entity<BookingInfo>().HasData(bookingList);

            List<CatCardImages> imagesList = GenerateCatCardImages();
            modelBuilder.Entity<CatCardImages>().HasData(imagesList);


            modelBuilder.Entity<Models.Host>()
                .HasMany(cc => cc.CatCards)
                .WithOne(u => u.Host);

            modelBuilder.Entity<CatCard>()
                .HasMany(a => a.Amenities)
                .WithMany(cc => cc.CatCards)
                .UsingEntity(cca => cca.HasData(new[]
                {
                    new { CatCardsId = 1, AmenitiesId = 1 },
                    new { CatCardsId = 1, AmenitiesId = 2 },
                    new { CatCardsId = 1, AmenitiesId = 3 },
                    new { CatCardsId = 1, AmenitiesId = 4 },
                    new { CatCardsId = 1, AmenitiesId = 5 },
                }));

            modelBuilder.Entity<CatCard>()
                .HasMany(i => i.Images)
                .WithOne(cc => cc.CatCard);

            modelBuilder.Entity<BookingInfo>()
                .HasOne(cc => cc.CatCard)
                .WithOne(bi => bi.BookingInfo);
        }

        public DbSet<CatCard> CatCards { get; set; }
        public DbSet<CatCardImages> CatCardImages { get; set; }
        public DbSet<Amenities> Amenities { get; set; }
        public DbSet<Models.Host> Users { get; set; }

        public DbSet<BookingInfo> BookingInfos { get; set; }
        public DbSet<Reviews> Reviews { get; set; }
    }
}
