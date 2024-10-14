using Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Presistence;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly DataContext _context;

        public ActivitiesController(DataContext context)
        {
            _context = context;

        }

        [HttpGet]
        // GET: ActivitiesController
        public async Task<ActionResult<List<Activity>>> Activities()
        {
            return await _context.Activities.ToListAsync();
        }

        [HttpGet("{Id}")]
        // GET: ActivitiesController/Details/5
        public async Task<ActionResult<Activity>> Activity(int id)
        {
            return  await _context.Activities.FindAsync(id);
        }
 
    }
}
