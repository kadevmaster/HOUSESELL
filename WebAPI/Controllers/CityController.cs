using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly IUnitOfWork uow;
        public CityController(IUnitOfWork uow)
        {
            this.uow = uow;
        }

         // Get api/City   
        [HttpGet]
        public async Task<IActionResult>  GetCities()
        {
            var  cities = await uow.CityRepository.GetCitiesAsync();
            return Ok(cities);
        }

        // Post api/City/add?cityName = Da Nang
        // Post api/City/add/Da Nang
        [HttpPost("add")]
        [HttpPost("add/{cityname}")]
        public async Task<IActionResult>  AddCity(string cityName)
        {
            var city = new City();
            city.Name = cityName;
            uow.CityRepository.AddCity(city);
            await uow.SaveAsync();
            return StatusCode(201);
        }

        // Post api/City/Post/ ----post the data in JSON format
        [HttpPost("post")]
        public async Task<IActionResult>  AddCity(City city)
        {
             uow.CityRepository.AddCity(city);
            await uow.SaveAsync();
            return StatusCode(201);
        }

        // Delete api/City/delete/id ----delete the data by Id
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult>  DeleteCity(int id)
        {
             uow.CityRepository.DeleteCity(id);
            await uow.SaveAsync();
            return Ok(id);
        }
    }
}