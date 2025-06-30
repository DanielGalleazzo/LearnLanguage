using LearnEnglish.Models;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options): base(options)
    {
    }

    public DbSet<UsuarioIdioma> IdiomasUsuario { get; set; }
}