using CenaWebApi.Models;
using MongoDB.Bson;

namespace CenaWebApi.Services.Interfaces
{
    public interface IProductService
    {
        IEnumerable<Product> GetAllProducts();
        Product? GetProductById(ObjectId id);

        void AddProduct(Product newRestaurant);

        void EditProduct(Product updatedRestaurant);

        void DeleteProduct(Product restaurantToDelete);
    }
}
