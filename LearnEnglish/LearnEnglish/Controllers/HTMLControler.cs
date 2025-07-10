using Microsoft.AspNetCore.Mvc;

namespace LearnEnglish.Controllers
{
    public class HtmlController : Controller
    {
        public IActionResult Ingles()
        {
            return View("~/Views/Html/Ingles.cshtml");
        }
        public IActionResult Frances()
        {
            return View("~/Views/Html/Frances.cshtml");
        }
        public IActionResult Espanhol()
        {
            return View("~/Views/Html/Espanhol.cshtml");
        }
    }
}
