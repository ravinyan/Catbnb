using Airbnb.DBContext;
using Airbnb.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace Airbnb.Controllers
{
    [Route("api/[controller]")]
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
            var catCard = await _context!.CatCards.Include(i => i.Images).FirstOrDefaultAsync(i => i.Id == id);

            if (catCard == null)
            {
                return NotFound();
            }

            
            return catCard;
        }
    }
}
