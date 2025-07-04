export default function CertiCard(props:any) {
  return <div className="flex justify-between items-start">
              <div className="flex gap-2 items-center">
                <div className="p-2 bg-blue-100 rounded-md">
                  <img
                    src={`/Company/${props.issuer}.png`}
                    alt=""/>
                </div>
                <div>
                  <div className="font-semibold text-sm">{props.name}</div>
                  <div className="text-sm text-blue-800">
                   {props.issuer}
                  </div>
                  <div className="text-sm text-blue-800">
                  </div>
                </div>
              </div>
              <div>
                <div className='flex flex-col items-end'>
                    <div className="text-sm">{props.issueData}</div>
                    <div className="text-sm">ID: {props.certificateId}</div>
                </div>
              </div>
       </div>
};