using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Airbnb.DBContext;
using Airbnb.Models;

namespace Airbnb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CatCardImagesController : ControllerBase
    {
        private CatCardContext _context;

        public CatCardImagesController(CatCardContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CatCardImages>>> GetCatCardImages()
        {
            return await _context.CatCardImages.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CatCardImages>> GetCatCardImage(int id)
        {
            var catCardImages = await _context.CatCardImages.FindAsync(id);

            if (catCardImages == null)
            {
                return NotFound();
            }

            return catCardImages;
        }
    }
}
