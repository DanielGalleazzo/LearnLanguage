using LearnEnglish.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace LearnEnglish
{
    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<BancoContext>
    {
        public BancoContext CreateDbContext(string[] args)
        {
            
            var optionsBuilder = new DbContextOptionsBuilder<BancoContext>();
            optionsBuilder.UseSqlServer("Server=//;Database=//;User Id=sa;Password=//;TrustServerCertificate=True");

            return new BancoContext(optionsBuilder.Options);
        }
    }
}
