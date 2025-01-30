using Airbnb.DBContext;
using Airbnb.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Airbnb.Controllers
{
    [Route("Rooms/api/[controller]")]
    public class CatCardController : Controller
    {
        private readonly CatCardContext? _context;

        public CatCardController(CatCardContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CatCard>>> GetCatCards()
        {
            return await _context!.CatCards.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CatCard>> GetCatCard(int id)
        {
            var catCard = await _context!.CatCards
                .Include(i => i.Images)
                .Include(bi => bi.BookingInfo).ThenInclude(r => r!.Reviews).AsSplitQuery()
                .Include(h => h.Host)
                .Include(a => a.Amenities)!.ThenInclude(a => a.Amenity).AsSplitQuery().FirstOrDefaultAsync(i => i.Id == id);
                
            if (catCard == null)
            {
                return NotFound();
            }

            return catCard;
        }
    }
}
