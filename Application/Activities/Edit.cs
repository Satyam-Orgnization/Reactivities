﻿using AutoMapper;
using Domain;
using MediatR;
using Presistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {

            private readonly DataContext _dataContext;
            private readonly IMapper _mapper;

            public Handler(DataContext dataContext, IMapper mapper)
            {
                this._dataContext = dataContext;
                this._mapper = mapper;
            }
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                Activity activity = _dataContext.Activities.Find(request.Activity.Id);

                _mapper.Map(request.Activity, activity);

                await _dataContext.SaveChangesAsync();
            }
        }
    }
}
