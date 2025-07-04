namespace LearnEnglish.Controllers;
using LearnEnglish.Models;
using Microsoft.AspNetCore.Mvc;
using LearnEnglish.Data;

[Route("UsuarioMotivo")]

    public class MotivoNaoComecarController : Controller
{
    private readonly BancoContext _context;
    public MotivoNaoComecarController(BancoContext context)
    {
        _context = context;
    }
    [HttpPost("Create")]
    public IActionResult Create([FromBody] UsuarioMotivo model)
    {
        if (ModelState.IsValid)
        {
            _context.MotivoNaoComecar.Add(model);
            _context.SaveChanges();
            return Ok();
        }
        return BadRequest(ModelState);
    }
}

/*
 * using LearnEnglish.Models;
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
        return BadRequest(ModelState); // NESSA ABA ESTA O PROBLEMA !! PRESTAR ATENCAO
    }
}
*/

    
    
