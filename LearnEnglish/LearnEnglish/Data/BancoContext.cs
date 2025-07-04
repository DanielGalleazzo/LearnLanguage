using LearnEnglish.Models;
using Microsoft.EntityFrameworkCore;

namespace LearnEnglish.Data
{
    public class BancoContext : DbContext
    {
        public BancoContext(DbContextOptions<BancoContext> options) : base(options)
        {
        }

        public DbSet<UsuarioMotivo> MotivoNaoComecar { get; set; }
    }
}
