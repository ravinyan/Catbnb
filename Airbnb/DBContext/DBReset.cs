using Microsoft.EntityFrameworkCore;

namespace Airbnb.DBContext
{
    public class DBReset
    {
        public static void InitializeSeedData(IServiceProvider serviceProvider)
        {
            using (CatCardContext context = new(serviceProvider.GetRequiredService<DbContextOptions<CatCardContext>>()))
            {
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();
            }
        }
    }
}
