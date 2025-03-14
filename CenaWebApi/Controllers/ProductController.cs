using CenaWebApi.Models;
using CenaWebApi.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CenaWebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpPost]
        public async Task<ActionResult> AddProduct(CreateProductDto createProductDto)
        {

            var product = new Product()
            {
                name = createProductDto.Product.name,
                price = createProductDto.Product.price
            };


            _productService.AddProduct(product);
            return Ok(1);
        }



        //[HttpGet]
        //public async Task<ActionResult<ServiceResponse<List<OwnerDTO>>>> GetAll(CancellationToken cancellationToken)
        //{
        //    var owners = await _ownerRepository.GetOwnersAsync(cancellationToken);
        //    return Ok(owners.Data);
        //}


        //[HttpGet]
        //[Route("{id}")]
        //public async Task<ActionResult> GetById(Guid id)
        //{
        //    var result = await _ownerRepository.GetOwnerAsync(id);

        //    if (!result.IsSuccessStatusCode)
        //    {
        //        return StatusCode((int)result.StatusCode, result.ServiceResponseMessage);
        //    }

        //    return Ok(result.Data);
        //}

        //[HttpPost]
        //public async Task<ActionResult> AddOwner([FromForm] CreateOwnerDTO data)
        //{
        //    var result = await _ownerRepository.AddOwnerAsync(data);

        //    if (!result.IsSuccessStatusCode)
        //    {
        //        return StatusCode((int)result.StatusCode, result.ServiceResponseMessage);
        //    }

        //    return Ok(result.Data);
        //}

        //[HttpPut]
        //public async Task<ActionResult> UpdateOwner([FromForm] UpdateOwnerDTO data, Guid id)
        //{
        //    var result = await _ownerRepository.UpdateOwnerAsync(data, id);

        //    if (!result.IsSuccessStatusCode)
        //    {
        //        return StatusCode((int)result.StatusCode, result.ServiceResponseMessage);
        //    }

        //    return Ok();
        //}

        //[HttpDelete]
        //public async Task<ActionResult> DeleteOwner(Guid ownerId)
        //{
        //    var result = await _ownerRepository.RemoveOwnerAsync(ownerId);

        //    if (!result.IsSuccessStatusCode)
        //    {
        //        return StatusCode((int)result.StatusCode, result.ServiceResponseMessage);
        //    }

        //    return Ok();
        //}
    }
}
