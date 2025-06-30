using Microsoft.AspNetCore.Mvc;

namespace LearnEnglish.Controllers
{
    public class HtmlController : Controller
    {
        public IActionResult Ingles()
        {
            return View("~/Views/Html/Ingles.cshtml");
        }
    }
}
