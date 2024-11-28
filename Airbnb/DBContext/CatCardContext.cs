using Airbnb.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using System.Net;

namespace Airbnb.DBContext
{
    public class CatCardContext : DbContext
    {
        public CatCardContext(DbContextOptions<CatCardContext> options) : base(options)
        {

        }

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

        private List<User> GenerateUsers()
        {
            List<User> usersList = new List<User>();

            for (int i = 1; i <= 61; i++)
            {
                usersList.Add(new User { Id = i, Name = $"bob{i}" });
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

                catCardsList.Add(new CatCard { Id = i, HostId = hostId });
            }

            return catCardsList;
        }

        private List<BookingInfo> GenerateBookingInfo()
        {
            List<BookingInfo> bookingInfoList = new List<BookingInfo>();
            Random rng = new Random();
            string[] countries = ["USA", "Poland", "Germany", "Spain", "Canada", "China", "Japan", "United Kingdom", "Turkey", "Italy"];
            string[] cities = ["Las Vegas", "Warsaw", "Berlin", "Valencia", "Vancouver", "Shanghai", "Tokyo", "London", "Istanbul", "Rome"];
            string[] descriptions = ["cat", "very cool cat", "cool cat", "10/10 cat", "best cat you will ever see", "this cat loves chandeliers",
                                     "this cat is scared of cucumbers", "1 shader braincell cat", "cute cat", "dog"];
            bool[] TrueOrFalse = [true, false];

            for (int i = 1; i <= 610; i++)
            {
                Console.WriteLine(countries[rng.Next(1, 10)]);
                bookingInfoList.Add(new BookingInfo
                {
                    Id = i,
                    Country = countries[rng.Next(1, 10)],
                    City = cities[rng.Next(1, 10)],
                    BasePrice = rng.Next(100, 10000),
                    Description = descriptions[rng.Next(1, 10)],
                    NumberOfBedrooms = rng.Next(1, 16),
                    NumberOfBeds = rng.Next(1, 16),
                    NumberOfBathrooms = rng.Next(1, 16),
                    MaxNumberOfGuests = rng.Next(1, 16),
                    PetsAllowed = TrueOrFalse[rng.Next(1, 2)],
                    InfantsAllowed = TrueOrFalse[rng.Next(0, 1)],
                    CatCardId = i,
                });
            }

            return bookingInfoList;
        }

        private List<CatCardImages> GenerateCatCardImages()
        {
            List<CatCardImages> imagesList = new List<CatCardImages>();
            Random rng = new Random();

            string[] urlImages = ["https://cdn.discordapp.com/attachments/941441413567103077/1311662254747291648/image1.png?ex=6749ac2b&is=67485aab&hm=7f471107e5462ebb5a14418f9ff0dc306c17309954443b8f9588eafbad67efe5&",
                                  "https://cdn.discordapp.com/attachments/941441413567103077/1311662427833761802/image2.png?ex=6749ac54&is=67485ad4&hm=4204bdef83d9a25dd4deea0879dac21849ff28da5e1aacbccb0d92feece5b2fa&",
                                  "https://cdn.discordapp.com/attachments/941441413567103077/1311662603797401610/image3.png?ex=6749ac7e&is=67485afe&hm=c3ef12a5dc8c62fd33c6424f8cf507395a96d1a9b7c1b735732dc148fa497813&",
                                  "https://cdn.discordapp.com/attachments/941441413567103077/1311664784764178493/image4.png?ex=6749ae86&is=67485d06&hm=9003e456fa1746edbb7a610730f958b4678718c80e92c97a0892dd8edefea68d&",
                                  "https://cdn.discordapp.com/attachments/941441413567103077/1311664736982798377/image5.png?ex=6749ae7a&is=67485cfa&hm=f2c0a8d27681a3f8532165e0c5debecc2e8a214a65af194467581f9185a70438&"];

            for (int i = 1; i <= 610; i++)
            {
                imagesList.Add(new CatCardImages 
                {
                    Id = i, 
                    CatCardId = i, 
                    Url = urlImages[rng.Next(1, 5)] 
                });
            }

            return imagesList;
        }

        private void GenerateCatCardAmenities()
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // 61 categories 61 users 
            // 1 user will have 10 cards for each category
            // every card will have random 5 amenities
            // 610 cards
            List<Amenities> amenitiesList = GenerateAmenities();
            modelBuilder.Entity<Amenities>().HasData(amenitiesList);

            List<User> userList = GenerateUsers();
            modelBuilder.Entity<User>().HasData(userList);

            List<CatCard> catCardsList = GenerateCatCards();
            modelBuilder.Entity<CatCard>().HasData(catCardsList);

            List<BookingInfo> bookingList = GenerateBookingInfo();
            modelBuilder.Entity<BookingInfo>().HasData(bookingList);

            List<CatCardImages> imagesList = GenerateCatCardImages();
            modelBuilder.Entity<CatCardImages>().HasData(imagesList);




            //  connections
            modelBuilder.Entity<User>()
                .HasMany(cc => cc.CatCards)
                .WithOne(u => u.Host);

            //modelBuilder.Entity<CatCardModel>()
            //    .HasMany(i => i.Images)
            //    .WithOne(cc => cc.CatCard);

            //modelBuilder.Entity<CatCard>()
            //    .HasOne(a => a.Host)
            //    .WithMany(cc => cc.CatCards);

            //modelBuilder.Entity<CatCard>()
            //    .HasMany(a => a.Amenities)
            //    .WithMany(cc => cc.CatCards);

            //modelBuilder.Entity<CatCardModel>()
            //   .HasOne(bi => bi.BookingInfo)
            //   .WithOne(cc => cc.CatCard);

            //modelBuilder.Entity<CatCardAmenitiesModel>()
            //    .HasKey(k => new { k.CatCardId, k.AmenitiesId });
        }

        public DbSet<CatCard> CatCards { get; set; }
        public DbSet<CatCardImages> CatCardImages { get; set; }
        public DbSet<Amenities> Amenities { get; set; }
        public DbSet<User> Users { get; set; }

        public DbSet<BookingInfo> BookingInfos { get; set; }
        public DbSet<Reviews> Reviews { get; set; }
    }
}
