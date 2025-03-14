using CenaWebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace CenaWebApi.Services
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Product> Products { get; init; }



        public ApplicationDbContext(DbContextOptions options)
        : base(options)
        {
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);


            modelBuilder.Entity<Product>();
        }
    }
}
