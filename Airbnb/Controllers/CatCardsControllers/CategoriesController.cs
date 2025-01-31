using Airbnb.DBContext;
using Airbnb.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Airbnb.Controllers.CatCardsControllers
{
    [Route("api/[controller]")]
    public class CategoriesController : Controller
    {
        private readonly CatCardContext _context;

        public CategoriesController(CatCardContext context) 
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<ICollection<Categories>>> GetCategories()
        {
            return await _context.Categories.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Categories>> GetCategory(int id)
        {
            var category = await _context.Categories
                .Include(cc => cc.CatCards)!.ThenInclude(bi => bi.BookingInfo).ThenInclude(r => r!.Reviews)
                .Include(cc => cc.CatCards)!.ThenInclude(i => i.Images).AsSplitQuery()
                .Include(bi => bi.CatCards)!.ThenInclude(bi => bi.BookingInfo).ThenInclude(af => af!.AccessibilityFeatures)!.ThenInclude(n => n.AccessibilityFeature).AsSplitQuery()
                .Include(bi => bi.CatCards)!.ThenInclude(bi => bi.BookingInfo).ThenInclude(hl => hl!.HostLanguages)!.ThenInclude(n => n.HostLanguage).AsSplitQuery()
                .Include(bi => bi.CatCards)!.ThenInclude(bi => bi.BookingInfo).ThenInclude(hl => hl!.PropertyType).AsSplitQuery()
                .Include(bi => bi.CatCards)!.ThenInclude(bi => bi.Amenities)!.ThenInclude(hl => hl!.Amenity).AsSplitQuery()
                .Include(bi => bi.CatCards)!.ThenInclude(bi => bi.BookingInfo).ThenInclude(hl => hl!.BookingOptions)!.ThenInclude(n => n.BookingOptions).AsSplitQuery()
                .FirstOrDefaultAsync(i => i.Id == id);

            return category!;
        }
    }
}
