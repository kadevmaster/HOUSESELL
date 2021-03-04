using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Dtos;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly IUnitOfWork uow;
        private readonly IMapper mapper;

        public CityController(IUnitOfWork uow, IMapper mapper)
        {
            this.uow = uow;
            this.mapper = mapper;
        }

         // Get api/City   
        [HttpGet]
        public async Task<IActionResult>  GetCities()
        {
            var  cities = await uow.CityRepository.GetCitiesAsync();
            var citiesDto = mapper.Map<IEnumerable<CityDto>>(cities);
             return Ok(citiesDto);
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
        public async Task<IActionResult>  AddCity(CityDto cityDto)
        {
            var city = mapper.Map<City>(cityDto);
            city.LastUpdatedOn = DateTime.Now;
            city.LastUpdatedBy = 1;
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