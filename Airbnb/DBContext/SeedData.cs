using Airbnb.Models;
using Microsoft.EntityFrameworkCore;

namespace Airbnb.DBContext
{
    public class SeedData
    {
        public static void InitializeSeedData(IServiceProvider serviceProvider)
        {
            using (CatCardContext context = new(serviceProvider.GetRequiredService<DbContextOptions<CatCardContext>>()))
            {
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();

                SeedUsers(context);
                SeedCatCards(context);
                
            }
        }

        public static void SeedCatCards(CatCardContext context)
        {
            context.CatCards.AddRange(new CatCardModel
            {
               HostId = 1,
            },
            new CatCardModel
            {
                HostId = 2,
            },
            new CatCardModel
            {
                HostId = 3,
            });
            
            context.SaveChanges();
        }

        public static void SeedUsers(CatCardContext context)
        {
            context.Users.AddRange(new UserModel
            {
                Name = "bob",
                CatCardId = 1,
            },
            new UserModel
            {
                Name = "bob2",
                CatCardId = 2,
            },
            new UserModel
            {
                Name = "bob3",
                CatCardId = 3,
            });

            context.SaveChanges();
        }
    }
}
