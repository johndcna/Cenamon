
using MongoDB.Bson;
using MongoDB.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
namespace CenaWebApi.Models
{
    [Collection("products")]
    public class Product
    {
        public ObjectId Id { get; set; }

        [Required(ErrorMessage = "You must provide a name")]
        [Display(Name = "Name")]
        public string? name { get; set; }


        [Required(ErrorMessage = "You must add the price of the product")]
        public double? price { get; set; }
    }
}
