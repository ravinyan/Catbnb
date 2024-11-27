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

            return bookingInfoList;
        }

        private List<CatCardImages> GenerateCatCardImages()
        {
            List<CatCardImages> imagesList = new List<CatCardImages>();

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
