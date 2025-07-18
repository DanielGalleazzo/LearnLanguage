using LearnEnglish.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("BotaoSim"),
        sqlServerOptions => sqlServerOptions.EnableRetryOnFailure()
    ));
builder.Services.AddDbContext<BancoContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("BotaoNao"),
        sqlServerOptions => sqlServerOptions.EnableRetryOnFailure()
    ));
var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();