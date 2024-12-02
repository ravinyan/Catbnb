using Airbnb.DBContext;
using Airbnb.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Airbnb.Controllers
{
    [Route("api/[controller]")]
    public class BookingInfoController : Controller
    {
        private readonly CatCardContext? _context;

        public BookingInfoController(CatCardContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<BookingInfo>>> GetBookingInfos()
        {
            return await _context!.BookingInfos.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<BookingInfo>> GetBookingInfo(int id)
        {
            return await _context.BookingInfos.FindAsync(id);
        }
    }
}
