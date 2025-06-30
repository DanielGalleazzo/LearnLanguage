using LearnEnglish.Models;
using Microsoft.AspNetCore.Mvc;

[Route("UsuarioIdioma")]
public class UsuarioIdiomaController : Controller
{
    private readonly AppDbContext _context;

    public UsuarioIdiomaController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost("Create")]
    public IActionResult Create([FromBody] UsuarioIdioma model)
    {
        if (ModelState.IsValid)
        {
            _context.IdiomasUsuario.Add(model);
            _context.SaveChanges();
            return Ok();
        }
        return BadRequest(ModelState);
    }
}
