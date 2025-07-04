export default function ExpCard(props:any) {
  return (
    <div className='flex flex-col gap-2'>
       <div className="flex justify-between items-start">
              <div className="flex gap-2 items-center">
                <div className="p-2 bg-blue-100 rounded-md">
                  <img
                    src={`/Company/${props.company}.png`}
                    alt=""/>
                   
                </div>
                <div>
                  <div className="font-semibold text-sm">{props.title}</div>
                  <div className="text-sm text-blue-800">
                    {props.company}; {props.location}
                  </div>
                </div>
              </div>
              <div>
                <div className='text-sm'>{props.startDate}~{props.enddate}</div>
              </div>
            </div>
            <div className='text-sm text-justify'>{props.description}</div>
    </div>
  )
}