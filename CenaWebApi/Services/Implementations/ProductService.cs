using CenaWebApi.Models;
using CenaWebApi.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using MongoDB.Bson;

namespace CenaWebApi.Services.Implementations
{
    public class ProductService : IProductService
    {
        private readonly ApplicationDbContext _applicationDbContext;
        public ProductService(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        public void AddProduct(Product newProduct)
        {
            _applicationDbContext.Products.Add(newProduct);

            _applicationDbContext.ChangeTracker.DetectChanges();
            Console.WriteLine(_applicationDbContext.ChangeTracker.DebugView.LongView);

            _applicationDbContext.SaveChanges();
        }


        public void DeleteProduct(Product product)
        {
            var productToDelete = _applicationDbContext.Products.Where(c => c.Id == product.Id).FirstOrDefault();

            if (productToDelete != null)
            {
                _applicationDbContext.Products.Remove(productToDelete);
                _applicationDbContext.ChangeTracker.DetectChanges();
                Console.WriteLine(_applicationDbContext.ChangeTracker.DebugView.LongView);
                _applicationDbContext.SaveChanges();
            }
            else
            {
                throw new ArgumentException("The product to delete cannot be found.");
            }
        }


        public void EditProduct(Product product)
        {
            var productToUpdate = _applicationDbContext.Products.FirstOrDefault(c => c.Id == product.Id);

            if (productToUpdate != null)
            {
                productToUpdate.name = product.name;
                productToUpdate.price = product.price;

                _applicationDbContext.Products.Update(productToUpdate);

                _applicationDbContext.ChangeTracker.DetectChanges();
                Console.WriteLine(_applicationDbContext.ChangeTracker.DebugView.LongView);

                _applicationDbContext.SaveChanges();

            }
            else
            {
                throw new ArgumentException("The restaurant to update cannot be found. ");
            }
        }

        public IEnumerable<Product> GetAllProducts()
        {
            return _applicationDbContext.Products.OrderByDescending(c => c.Id).Take(20).AsNoTracking().AsEnumerable<Product>();
        }


        public Product? GetProductById(ObjectId id)
        {
            return _applicationDbContext.Products.FirstOrDefault(c => c.Id == id);
        }

    }
}
