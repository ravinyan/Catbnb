using Microsoft.AspNetCore.Mvc;

namespace Airbnb.Controllers
{
    [Route("/[action]")]
    public class HomeController : Controller
	{
		private readonly ILogger<HomeController> _logger;

		public HomeController(ILogger<HomeController> logger)
		{
			_logger = logger;
		}

        [Route("~/")]
		[Route("/home")]
        public IActionResult Index()
		{
			return View();
		}

		public IActionResult Test()
		{
			return View();
		}
	}
}
