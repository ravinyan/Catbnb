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
                .Include(cc => cc.CatCards)!.ThenInclude(bi => bi.BookingInfo)
                .Include(cc => cc.CatCards)!.ThenInclude(i => i.Images)
                .FirstOrDefaultAsync(i => i.Id == id);

            if (category == null)
            {
                return NotFound();
            }

            return category;
        }
    }
}
