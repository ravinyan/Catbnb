using Airbnb.Models;
using Microsoft.EntityFrameworkCore;

namespace Airbnb.DBContext
{
    public class CatCardContext : DbContext
    {
        public CatCardContext(DbContextOptions<CatCardContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CatCardModel>()
                .HasMany(i => i.Images)
                .WithOne(cc => cc.CatCard);

            modelBuilder.Entity<CatCardModel>()
                .HasOne(a => a.Host)
                .WithMany(cc => cc.CatCards);

            modelBuilder.Entity<CatCardModel>()
                .HasMany(a => a.Amenities)
                .WithOne(cc => cc.CatCard);

            modelBuilder.Entity<CatCardModel>()
                .HasOne(bi => bi.BookingInfo)
                .WithOne(cc => cc.CatCard);

            modelBuilder.Entity<UserModel>()
                .HasMany(cc => cc.CatCards)
                .WithOne(u => u.Host);
        }

        public DbSet<CatCardModel> CatCards { get; set; }
        public DbSet<CatCardImagesModel> CatCardImages { get; set; }
        public DbSet<AmenitiesModel> Amenities { get; set; }
        public DbSet<UserModel> Users { get; set; }

        public DbSet<BookingInfoModel> BookingInfos { get; set; }
        public DbSet<ReviewsModel> Reviews { get; set; } 
    }
}
