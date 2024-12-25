using Microsoft.AspNetCore.Mvc;

namespace Airbnb.Controllers
{
    [Route("/[action]/${id}")]
    public class RoomsController : Controller
    {
		[Route("/Rooms/{id?}")]
        public IActionResult Rooms(int id)
        {
            return View(id);
        }
    }
}
