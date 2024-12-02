using Airbnb.DBContext;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Airbnb.Controllers
{
    [Route("api/[controller]")]
    public class HostController : Controller
    {
        private readonly CatCardContext? _context;

        public HostController(CatCardContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Models.Host>>> GetUsers()
        {
            return await _context!.Users.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Models.Host>> GetUser(int id)
        {
            return await _context.Users.FindAsync(id);
        }
    }
}
